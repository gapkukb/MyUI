import {
	FC,
	CSSProperties,
	Children,
	ReactNode,
	useState,
	useEffect,
	cloneElement,
	ReactChildren,
	useRef,
} from "react";
import classnames from "classnames";
import { throttle } from "helpful-decorators";
import { nope } from "../../util";
import { PaneProps, TabProps } from "./types";
const touchMixin = {
	x: 0,
	deltaX: 0,
	y: 0,
	deltaY: 0,
	time: 0,
	lastTime: 0,
	deltaTime: 0,
	velocity: 0,
	touched: false,
	pointerStart(e: React.PointerEvent) {
		this.touched = true;
		this.x = e.pageX;
		this.y = e.pageY;
		this.time = Date.now();
	},

	pointerMove(e: React.PointerEvent) {
		if (!this.touched) return;
		const now = Date.now();
		if (now - this.lastTime < 1000 / 24) return;
		this.lastTime = now;
		console.log(123);
	},
	pointerEnd(e: React.PointerEvent) {
		if (!this.touched) return;
		this.touched = false;
		this.deltaX = e.pageX - this.x;
		this.deltaY = e.pageY - this.y;
		this.deltaTime = Date.now() - this.time;
		console.log(this.deltaX / this.deltaTime);

		if (this.deltaX > 400 || Math.abs(this.deltaX / this.deltaTime) > 0.5) {
			console.log(123);
		}
	},
};

export const Tab: FC<TabProps> = ({
	className,
	style,
	children,
	lazy,
	active: _active = 0,
	mode = "multiple",
	type = "normal",
	onChange = nope,
	footer,
	headerClassName,
	bodyClassName,
	...rest
}) => {
	const [active, setActive] = useState(_active);
	const header: any = Children.map<PaneProps, ReactNode>(children, (child: any, index): any => {
		const { label, name, disabled } = child.props;
		const id = name || index;
		const className = classnames("tab__name", { disabled, active: id === active });
		return (
			<div
				role="tab"
				aria-selected={id === active || undefined}
				key={name}
				onClick={tabHandler}
				data-id={name}
				className={className}
			>
				{label}
			</div>
		);
	});
	const indicator = useRef<HTMLDivElement>(null);
	useEffect(
		function () {
			const el = indicator.current;
			if (!el) return;
			const rect = el.parentNode!.querySelector(".active") as HTMLDivElement;
			el.style.transform = `translateX(${rect.offsetLeft + rect.offsetWidth / 2}px) translateX(-50%)`;
		},
		[active]
	);
	if (type === "normal" && header) {
		header.push(<div ref={indicator} key="_-1" className="tab__indicator"></div>);
	}
	const body = Children.map<PaneProps, ReactNode>(children, (child: any, index): any => {
		const { label, name, disabled } = child.props;
		const id = name || index;
		if (lazy) return active === id ? child : null;
		return cloneElement(child, {
			active: active === id,
			key: id,
		});
	});
	function clickHandler() {}
	function tabHandler(e: any) {
		const id = e.target.dataset.id;
		setActive(id);
		onChange(id);
	}
	const props = {
		className: classnames("tab", className),
		style: {
			...style,
		},
		onClick: clickHandler,
		onPointerDown: touchMixin.pointerStart.bind(touchMixin),
		onPointerMove(e: React.PointerEvent) {
			touchMixin.pointerMove(e);
		},
		onPointerUp: touchMixin.pointerEnd.bind(touchMixin),
		onPointerCancel: touchMixin.pointerEnd.bind(touchMixin),
		...rest,
	};
	return (
		<div {...props}>
			<div className={classnames("tab__header", `tab__header--${type}`, headerClassName)}>{header}</div>
			<div className={classnames("tab__body", bodyClassName)}>{body}</div>
			{footer}
		</div>
	);
};

export default Tab;
