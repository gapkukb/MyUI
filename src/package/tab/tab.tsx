import { Children, cloneElement, Component, createRef, ReactNode } from "react";
import { PaneProps, TabProps } from "./types";
import classnames from "classnames";
import Pane from "./pane";
import { fixUnit } from "../../util/unit";
type TouchHandle = (e: React.TouchEvent<HTMLDivElement>) => void;
export class Tab extends Component<TabProps, { active: string | number }> {
	initX = 0;
	initY = 0;
	initT = 0;
	lastT = 0;
	curX = 0;
	velocity: number;
	duration: number;
	indicator = createRef<HTMLDivElement>();
	header = createRef<HTMLDivElement>();
	constructor(props: TabProps) {
		super(props);
		this.state = {
			active: props.active || 0,
		};
		this.velocity = Number(props.velocity) || 0.5;
		this.duration = Number(props.duration) || 300;
	}
	setIndicator() {
		const el = this.indicator.current;
		if (!el) return;
		const rect = el.parentNode!.querySelector(".active") as HTMLDivElement;
		this.curX = rect.offsetLeft + rect.offsetWidth / 2;
		el.style.transform = `translateX(${this.curX}px) translateX(-50%)`;
	}
	setX(x: number) {
		const el = this.indicator.current;
		if (!el) return;
		el.style.transform = `translateX(${x}px) translateX(-50%)`;
	}
	componentDidMount() {
		this.setIndicator();
		console.log(this.header.current);
	}
	componentDidUpdate() {
		this.setIndicator();
	}
	tabHandler = (e: React.MouseEvent) => {
		const id = (e.target as HTMLDivElement).dataset.id!;
		this.setState({
			active: id,
		});
		this.props.onChange && this.props.onChange(id);
	};
	touchStart: TouchHandle = (e) => {
		if (e.touches.length > 1) return;
		this.initX = e.touches[0].pageX;
		this.initY = e.touches[0].pageY;
		this.initT = Date.now();
		this.indicator.current!.style.transitionDuration = "0ms";
	};
	touchMove: TouchHandle = (e) => {
		const t = Date.now();
		if (e.touches.length > 1 || t - this.lastT < 1000 / 24) return;
		this.lastT = t;
		const deltaX = e.touches[0].pageX - this.initX;
		const deltaY = e.touches[0].pageY - this.initY;
		// this.setX(this.curX + deltaX);
	};
	touchEnd: TouchHandle = (e) => {
		if (e.changedTouches.length > 1) return;
		const deltaX = e.changedTouches[0].pageX - this.initX;
		const deltaY = e.changedTouches[0].pageY - this.initY;
		const deltaT = Date.now() - this.initT;
		const velocity = deltaX / deltaT;
		this.indicator.current!.style.transitionDuration = this.duration + "ms";

		if (Math.abs(deltaX) > 200 || Math.abs(velocity) > this.velocity!) {
			const cur = this.indicator.current!.parentNode!.querySelector(".active")!;
			let target: HTMLDivElement | null;
			if (deltaX > 0 || velocity > 0) {
				target = cur.previousElementSibling as HTMLDivElement | null;
			} else {
				target = cur.nextElementSibling as HTMLDivElement | null;
			}
			if (!target) return;
			this.setState({
				active: target.dataset.id!,
			});
			this.setIndicator();
		}
	};
	renderHeader = () => {
		const { type, headerClassName } = this.props;
		return (
			<div ref={this.header} className={classnames("tab__header", `tab__header--${type}`, headerClassName)}>
				{this.renderTabName()}
				{type === "normal" && <div ref={this.indicator} key="_-1" className="tab__indicator"></div>}
			</div>
		);
	};
	renderTabName = () => {
		const { children } = this.props;
		const { active } = this.state;
		return Children.map<PaneProps, ReactNode>(children, (child: any, index): any => {
			const { label, name, disabled } = child.props;
			const id = name || index;
			const className = classnames("tab__name", { disabled, active: id === active });
			return (
				<div
					role="tab"
					aria-selected={id === active || undefined}
					key={name}
					onClick={this.tabHandler}
					data-id={name}
					className={className}
				>
					{label}
				</div>
			);
		});
	};
	renderTabContent = () => {
		const { children, lazy } = this.props;
		const { active } = this.state;
		return Children.map<PaneProps, ReactNode>(children, (child: any, index): any => {
			const { label, name, disabled } = child.props;
			const id = name || index;
			if (!child.type || child.type === Pane.name) return null;
			if (lazy) return active === id ? child : null;
			return cloneElement(child, {
				active: active === id,
				key: id,
			});
		});
	};
	renderBody = () => {
		const { bodyClassName, touchable } = this.props;
		const props = {
			className: classnames("tab__body", bodyClassName),
			style: {},
		};
		if (touchable) {
			Object.assign(props, {
				onTouchStart: this.touchStart,
				onTouchMove: this.touchMove,
				onTouchEnd: this.touchEnd,
				onTouchCancel: this.touchEnd,
			});
		}
		return <div {...props}>{this.renderTabContent()}</div>;
	};

	render() {
		const { className, style, footer } = this.props;
		const props = {
			className: classnames("tab", className),
			style: {
				...style,
			},
		};

		return (
			<div {...props}>
				{this.renderHeader()}
				{this.renderBody()}
				{footer}
			</div>
		);
	}
}

export default Tab;
