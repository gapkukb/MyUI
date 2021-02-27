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
import { PurePortal, PurePortalProps, $ } from ".";
import { diffStyle, on, restoreElement, scrollbarWidth } from "../../util/dom";
import { nope } from "../../util";
import { MountElement } from "./MountElement";

export interface PortalHandlers {
	contains(node: Node): boolean;
	purePortal: RefObject<PurePortal | undefined>;
	mount: HTMLElement;
}

export type PortalProps = PurePortalProps &
	Partial<{
		show: boolean;
		nodeName: string;
		lockBody: boolean;
		closeByESC: boolean;
		closeByOutside: boolean;
		closeByLayer: boolean;
		children: ReactNode;
		className: string;
		style: CSSProperties;
		onLayer(node: HTMLElement): void;
		onClose(e: KeyboardEvent | TouchEvent | MouseEvent): void;
	}>;

export const Portal = forwardRef<PortalHandlers, PortalProps>((props, ref) => {
	const {
		show = true,
		nodeName = "div",
		mount = document.body,
		closeByLayer,
		className,
		style,
		children,
		lockBody,
		closeByESC,
		closeByOutside,
	} = props as PortalProps;
	// skip render in SSR
	// 缓存创建的div  避免每次绘制都重复创建
	const node = useMemo<HTMLElement>(() => document.createElement(nodeName), [nodeName]);
	const getParent = useMemo(() => memoizeOne($), []);
	const propsRef = useRef<PortalProps>(props);
	propsRef.current = props;
	const previouStyleRef = useRef<CSSProperties | undefined>(style);
	const purePortalRef = useRef<PurePortal>(null);

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

	useLayoutEffect(() => {
		// 组件挂在后,监听node和classname的变化
		className && (node.className = className);
	}, [node, className]);
	// useLayoutEffect(() => {
	//     const _style = diffStyle(previouStyleRef.current,style)
	// }, [node, style]);
	useLayoutEffect(() => {
		// 组件挂在后,监听node和classname的变化
		className && (node.className = className);
	}, [node, className]);

	useLayoutEffect(() => {
		if (!show || closeByLayer) return nope;
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
	}, [node, closeByLayer, show, mount, getParent]);

	useLayoutEffect(() => {
		const parent = getParent(mount);
		if (!show || !lockBody || !(parent instanceof HTMLElement) || !scrollbarWidth(parent)) return nope;
		return () => restoreElement(parent);
	}, [mount, show, lockBody, getParent]);

	useLayoutEffect(() => {
		function handler(e: TouchEvent | MouseEvent) {
			const { closeByOutside, onClose = nope, show } = propsRef.current;
			const purePortal = purePortalRef.current;
			if (e.defaultPrevented || !closeByOutside || !show || !purePortal) return;
			const { target } = e;
			if (!(target instanceof Node) || target === node || !purePortal.contains(target)) onClose();
		}
		let dispose = nope;
		if (closeByOutside) {
		}

		const { onLayer = nope } = propsRef.current;
		onLayer();
		return dispose;
	}, [closeByLayer, closeByOutside, node]);

	useEffect(() => {
		if (!show || !closeByESC) return nope;
		function onKeyUp(e: KeyboardEvent) {
			const key = e.key.toLowerCase();
			if (key !== "escape" && key !== "esc") return;
			const { onClose = nope } = propsRef.current;
		}
		return on(document.body, "keyup", onKeyUp);
	}, [closeByESC, show]);

	return show && node ? (
		<PurePortal ref={purePortalRef} mount={mount}>
			<MountElement node={node} getParent={getParent as any} selector={mount} />
			{children}
		</PurePortal>
	) : null;
});

export default Portal;
