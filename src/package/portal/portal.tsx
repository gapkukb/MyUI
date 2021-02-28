import memoizeOne from "memoize-one";
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
import { PurePortal, PurePortalProps, getNode } from ".";
import {
	diffStyle,
	on,
	restoreElement,
	scrollbarWidth,
	CSR,
	setStyle,
	patchElement,
	createElement,
} from "../../util/dom";
import { nope } from "../../util";
import { MountElement } from "./MountElement";
import { ActionType } from "../popup";

export interface PortalHandlers {
	contains(node: Node): boolean;
	purePortal: RefObject<PurePortal | undefined>;
	mount: HTMLElement;
}

export type PortalProps = Partial<
	PurePortalProps & {
		visible: boolean;
		nodeName: string;
		scrollable: boolean;
		esc: boolean;
		escAtFocus: boolean;
		closeByOutside: boolean;
		closeByLayer: boolean;
		children: ReactNode;
		className: string;
		style: CSSProperties;
		onLayer(node: HTMLElement): void;
		onClose(e: KeyboardEvent | TouchEvent | MouseEvent): void;
	}
>;

export const Portal = forwardRef<PortalHandlers, PortalProps>((props, ref) => {
	const {
		visible = true,
		nodeName = "div",
		mount = document.body,
		closeByLayer,
		className,
		style,
		children,
		scrollable,
		esc,
		escAtFocus = true,
		closeByOutside,
		replace,
		onClose = nope,
	} = props as PortalProps;
	// skip render in SSR
	// 缓存创建的div  避免每次绘制都重复创建
	const node = useMemo<HTMLElement>(() => (CSR ? createElement(nodeName) : (null as any)), [nodeName]);
	const getParent = useMemo(() => memoizeOne(getNode), []);
	const propsRef = useRef<PortalProps>(props);
	const previouStyleRef = useRef<CSSProperties | undefined>(style);
	const purePortalRef = useRef<PurePortal>(null);
	function close(actionType: ActionType) {
		console.log(actionType);
	}
	/* 定义对外暴露的属性和方法 */
	useImperativeHandle<PortalHandlers, PortalHandlers>(
		ref,
		() => ({
			contains(node: Node) {
				const purePortal = purePortalRef.current;
				if (!purePortal) return false;
				return purePortal.contains(node);
			},
			purePortal: purePortalRef,
			mount: node as any,
		}),
		[node]
	);
	//useLayoutEffect用在处理DOM的时候，当你的useEffect里面的操作需要处理DOM，并且会改变页面的样式，就需要用到它
	useLayoutEffect(() => {
		// 监听类名变化
		className && (node.className = className);
	}, [node, className]);

	useLayoutEffect(() => {
		// 监听样式变化
		const newStyle = diffStyle(previouStyleRef.current, style);
		setStyle(node, newStyle);
		previouStyleRef.current = style;
	}, [node, style]);

	useLayoutEffect(() => {
		// 背景层处理
		if (!visible || !closeByLayer) return nope;
		const { position, top, bottom, left, right } = node.style;
		const parent = getParent(mount);
		Object.assign(node.style, {
			position: parent === document.body ? "fixed" : "absolute",
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		} as CSSProperties);

		return () => {
			Object.assign(node.style, { position, top, bottom, left, right } as CSSProperties);
		};
	}, [node, closeByLayer, visible, mount, getParent]);

	useLayoutEffect(() => {
		// 禁止父元素可滚动
		const parent = getParent(mount);
		if (!visible || !scrollable || !(parent instanceof HTMLElement) || !scrollbarWidth(parent)) return nope;
		patchElement(parent);
		return () => restoreElement(parent);
	}, [mount, visible, scrollable, getParent]);

	useLayoutEffect(() => {
		// 绑定背景点击关闭和外部点击关闭
		function handler(e: MouseEvent) {
			const { closeByOutside, onClose, visible: show } = propsRef.current;
			const purePortal = purePortalRef.current;
			if (e.defaultPrevented || !closeByOutside || !show || !purePortal) return;
			const { target } = e;
			if (!(target instanceof Node) || target === node || !purePortal.contains(target)) onClose && onClose(e);
		}
		if (closeByOutside) {
			return on(closeByLayer ? node : window, "click", handler);
		}
	}, [closeByLayer, closeByOutside, node]);

	useEffect(() => {
		// 绑定esc按键关闭
		if (!visible || !esc) return nope;
		function onKeyUp(e: KeyboardEvent) {
			const key = e.key.toLowerCase();
			const tagName = (e.target as HTMLElement).tagName.toLowerCase();
			// if(!escAtFocus && (e.target as HTMLElement).tagName.toLowerCase()==="input")
			if (key === "escape" || key !== "esc" || e.keyCode === 27) close(ActionType.esc);
		}
		return on(document.body, "keyup", onKeyUp);
	}, [esc, visible]);

	return visible && node ? (
		<PurePortal mount={node} replace={replace} ref={purePortalRef}>
			<MountElement node={node} getParent={getParent as any} mount={mount} />
			{children}
		</PurePortal>
	) : null;
});

export default Portal;
