import {
	CSSProperties,
	forwardRef,
	ReactNode,
	RefObject,
	useEffect,
	useImperativeHandle,
	useLayoutEffect,
	useMemo,
	useRef,
} from "react";
import { call, nope } from "../../util";
import classnames from "classnames";
import { PurePortal, PurePortalProps as _ } from "./pure";
import { CSR, on, querySelector, scrollbarWidth, setStyle } from "../../util/dom";
import memoize from "memoize-one";
import { patchElement, diffStyle, restoreElement, MountElement, assinStyle } from "./util";
import "./index.styl";

export { PurePortal };
export type PurePortalProps = _;
/* 
弹层出现后,不希望body滚动,最佳实践是在移动端不要使用body作为容器,而使用一个根div容器,
设置根div heigt:100vh;width:100vw;overflow:hidden auto
*/

export enum ActionType {
	/** 点击确认按钮 */
	Confirm,
	/** 点击取消按钮 */
	Cancel,
	/** 点击关闭按钮 */
	Close,
	/** 点击背景 */
	Overlay,
	/** 键盘esc抬起 */
	Esc,
	/** 点击外部 */
	Outside,
	/** 路由变化 */
	Router,
}
export type PortalProps = Partial<{
	id: string;
	title: string;
	content: string;
	className: string;
	overClasName: string;
	type: string;
	style: CSSProperties;
	overlayStyle: CSSProperties;
	icon: "loading" | "success" | "fail" | "warn" | "danger";
	overlay: boolean;
	lockScroller: boolean;
	opacity: Numeric;
	closable: boolean;
	closeIcon: string;
	closeIconSide: "left" | "right";
	closeByOutside: boolean;
	closeByOverlay: boolean;
	closeByESC: boolean;
	children: ReactNode;
	animate: string;
	position: "left" | "right" | "top" | "bottom" | "center" | [Numeric, Numeric];
	time: number;
	area: [Numeric?, Numeric?, Numeric?, Numeric?];
	maxWidth: Numeric;
	maxHeight: Numeric;
	fullscreen: boolean;
	dragable: boolean;
	dragAxis: "x" | "y" | "all";
	resize: boolean;
	buttons: { text: string; id: Numeric; disabled: boolean; style: CSSProperties }[];
	visible: boolean;
	onOpen(): void;
	onBeforeClose: AsyncCallBack<boolean | void, ActionType>;
	onClose(action: ActionType): void;
	tag: keyof HTMLElementTagNameMap;
}> &
	Partial<PurePortalProps>;

export interface PortalImperativeHandlers {
	contains(node: Node): boolean;
	purePortalRef: RefObject<PurePortal | undefined>;
	container: HTMLElement;
}

export const Portal = forwardRef<PortalImperativeHandlers, PortalProps>((props, ref) => {
	const {
		visible = true,
		tag = "div",
		selector = document.body,
		closeByESC,
		closeByOutside,
		closeByOverlay,
		lockScroller,
		replace,
		children,
		className,
		style,
		onBeforeClose,
		onClose,
		onOpen,
	} = props;

	// 背景层
	const node = useMemo(() => (CSR ? document.createElement(tag) : null), [tag]) as HTMLElement;
	// 缓存对父级的引用
	const getParent = useMemo(() => memoize(querySelector), []);
	// 缓存属性
	const propsRef = useRef<PortalProps>(props);
	propsRef.current = props;
	const styleRef = useRef<CSSProperties | undefined>(style);
	const purePortalRef = useRef<PurePortal>(null);

	const closeAction = (action: ActionType) => {
		const f = () => call(onClose, action);
		onBeforeClose ? onBeforeClose((state) => state && f(), action) : f();
	};
	// 函数组件不能对外暴露属性,
	// 使用useImperativeHandle 结合 forwardRef高阶组件,用来使ref对象对外暴露属性
	useImperativeHandle<PortalImperativeHandlers, PortalImperativeHandlers>(
		ref,
		() => ({
			contains(node: Node) {
				return purePortalRef.current?.contains(node) || false;
			},
			purePortalRef: purePortalRef,
			container: node,
		}),
		[node]
	);
	// 给背景层添加类名
	useLayoutEffect(() => {
		className && (node.className = className);
	}, [node, className]);
	// 增量更新行内样式
	useLayoutEffect(() => {
		const result = diffStyle(styleRef.current || {}, style || {});
		setStyle(node, result);
		styleRef.current = style;
	}, [node, className]);

	// 当处于打开状态时,给蒙层添加定位
	useLayoutEffect(() => {
		if (!visible || !closeByOverlay) return nope;
		// Promise.resolve().then(() => node.classList.add("fade"));
		const { position, left, right, top, bottom } = node.style;
		const parent = getParent(selector);

		assinStyle(node, 0, 0, 0, 0, parent === document.body ? "fixed" : "absolute");
		return () => assinStyle(node, left, right, top, bottom, position);
	}, [visible, selector, closeByOverlay, node, getParent]);

	// 锁定挂载对象,不允许滚动
	useLayoutEffect(() => {
		const parent = getParent(selector) as HTMLElement;
		const size = scrollbarWidth(parent);
		// 判断是否打开状态,是否需要锁定,对象是否有滚动条
		if (!visible || !lockScroller || !size) return nope;
		patchElement(parent, size);
		parent.classList.add("locked");
		return () => {
			restoreElement(parent);
			parent.classList.remove("locked");
		};
	}, [selector, visible, lockScroller, getParent]);

	// 点击外部元素时关闭组件
	useLayoutEffect(() => {
		let cancel = nope;
		//如果开启了点击外部元素关闭
		if (closeByOutside) {
			// 如果有蒙层那么监听蒙层,否则监听整个window对象
			cancel = on(closeByOverlay ? node : window, "click", (e: MouseEvent) => {
				const { visible } = propsRef.current;
				const purePortal = purePortalRef.current;
				if (e.defaultPrevented || !visible || !purePortal) return;
				const el = e.target;
				// 如果点击的不是node节点,或者不是组件元素本身,或者也不是组件的子元素,那么执行关闭逻辑
				if (el === node || !purePortal.contains(node)) {
					closeAction(closeByOverlay ? ActionType.Overlay : ActionType.Outside);
				}
			});
		}
		call(onOpen);
		return cancel;
	}, [closeByOverlay, closeByOutside, node]);

	// ESC按键关闭
	useEffect(() => {
		if (!closeByESC || !visible) return nope;
		return on(document.body, "keyup", function (e) {
			const esc = e.key === "Escape" || e.key === "Esc" || e.keyCode === 27;
			esc && closeAction(ActionType.Esc);
		});
	}, [closeByESC, visible]);

	// 挂载元素
	useLayoutEffect(() => {
		const parent = getParent(selector);
		if (!parent) return console.error("Maybe error: cannot mount the portal cause by invalid elment as null");
		parent.appendChild(node);
		return () => {
			parent.removeChild(node);
		};
	}, [node, selector, getParent]);

	return visible && node ? (
		<PurePortal ref={purePortalRef} replace={replace} selector={node}>
			{/* <div className="popup">{children}</div> */}
			{children}
		</PurePortal>
	) : null;
});
