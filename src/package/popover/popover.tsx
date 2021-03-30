import { FC, CSSProperties, Component, createRef } from "react";
import classnames from "classnames";
import "./index.styl";
import Anchor from "./anchor";
import PopoverContext, { PopoverContentImperativeHandle } from "./context";
import { PopoverPositionFunction } from "./position";
// import { PortalHandlers } from "../portal";

export type PopoverProps = {
	position: PopoverPositionFunction;
	cushion: number;
	containerSelector: string;
} & Partial<{
	visible: boolean;
	className: string;
	style: CSSProperties;
	onShow(): void;
	onClose(): void;
	onBeforeShow: PopoverBeforeHook;
	onBeforeClose: PopoverBeforeHook;
	onVisibleChange(visible: boolean): void;
	onPositionUpdated(): void;
	onPositionReady(): void;
}>;

export interface PopoverBeforeHook {
	(continuation?: () => void, escape?: () => void): Promise<void> | void;
}

export interface PopoverState {
	visible: boolean;
}

export class Popover extends Component<PopoverProps, PopoverState> {
	static contextType = PopoverContext;
	static Anchor = Anchor;
	static Content = PopoverContext;
	// static Trigger = Trigger;
	private isUnmounted = false;
	private pendingOnBeforeHook = false;
	private didMountHooks: Array<() => () => void> = [];
	private didMountCleanup: Array<() => void> = [];
	// readonly portalRef = createRef<PortalHandlers>();
	readonly contentRef = createRef<PopoverContentImperativeHandle>();
	isPositionReady = false;
	getAnchor: (() => Element | Text | null) | null = null;

	state = {
		visible: false,
	};
	private escape() {
		this.pendingOnBeforeHook = false;
	}
	private didMount(cb: () => () => () => void) {
		this.didMountHooks.push(cb);
	}
	static getDerivedStateFromProps(props: PopoverProps): Partial<PopoverState> | null {
		if (typeof props.visible === "boolean") return { visible: props.visible };
		return null;
	}
	setVisible(visible: boolean) {
		const { onBeforeShow, onBeforeClose, onVisibleChange } = this.props;
		const hook = visible ? onBeforeShow : onBeforeClose;
		if (this.pendingOnBeforeHook || visible === this.state.visible) return;
		if (onVisibleChange) return onVisibleChange(visible);
		if (!hook) return this.safeSetState({ visible });
		this.pendingOnBeforeHook = true;
		const continuation = () => {
			this.safeSetState({ visible });
			this.pendingOnBeforeHook = false;
		};
		if (hook.length) return hook(continuation, this.escape);
		// 异步设置
		Promise.resolve(hook()).then(continuation, this.escape);
	}
	safeSetState(nextState: PopoverState, callback?: () => void) {
		if (!this.isUnmounted) return this.setState(nextState, callback);
	}
	adjustPostion() {
		this.contentRef.current?.adjustPosition();
	}
	open() {
		this.setVisible(true);
	}
	close() {
		this.setVisible(false);
	}
	positionUpdated() {
		const { onPositionReady, onPositionUpdated } = this.props;
		onPositionUpdated?.();
		this.isPositionReady = this.isPositionReady || true;
		if (!this.isPositionReady) {
			this.isPositionReady = true;
			onPositionReady?.();
		}
	}
	componentDidMount() {
		const { onShow, onClose } = this.props;
		this.state.visible ? onShow?.() : onClose?.();
		this.adjustPostion();
	}
	componentWillUnmount() {
		this.isUnmounted = true;
		this.didMountCleanup.forEach((it) => it());
	}
	render() {
		const { containerSelector, position, cushion, className, children, style } = this.props;
		const { visible } = this.state;

		return (
			<PopoverContext.Provider
				value={{
					visible,
					contentRef: this.contentRef,
					placement: position,
					cushion,
					className,
					// protalRef: this.portalRef,
					popover: this,
					mounted: this.didMount,
					mount: containerSelector,
					style,
				}}
			>
				{children}
			</PopoverContext.Provider>
		);
	}
}

export default Popover;
