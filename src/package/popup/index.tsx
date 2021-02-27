import { CSSProperties, FC, ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { noncestr, nope } from "../../util";
import { classnames } from "../../util/bem";
import "./index.styl";

/* 
弹层出现后,不希望body滚动,最佳实践是在移动端不要使用body作为容器,而使用一个根div容器,
设置根div heigt:100vh;width:100vw;overflow:hidden auto
*/

export enum ActionType {
	/* 点击确认按钮 */
	confirm,
	/* 点击取消按钮 */
	cancel,
	/* 点击关闭按钮 */
	close,
	/* 点击背景 */
	overlay,
	/* 键盘esc抬起 */
	esc,
	/* 路由变化 */
	router,
}
export type PopupProps = Partial<{
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
	lockBody: boolean;
	opacity: Numeric;
	closable: boolean;
	closeIcon: string;
	closeIconSide: "left" | "right";
	closeByOverlay: boolean;
	closeByESC: boolean;
	animate: string;
	position: "left" | "right" | "top" | "bottom" | "center" | [Numeric, Numeric];
	time: number;
	area: [Numeric, Numeric];
	maxWidth: Numeric;
	maxHeight: Numeric;
	fullscreen: boolean;
	dragable: boolean;
	dragAxis: "x" | "y" | "all";
	resize: boolean;
	buttons: { text: string; id: Numeric; disabled: boolean; style: CSSProperties }[];
	open: boolean;
	mount: HTMLElement | null | false;
	opened(): void;
	beforeClose(action: ActionType, done: (done: boolean) => void): void;
	closed(action: ActionType): void;
}>;
const overlayId = "overlay";
const cache = false;
let zindex = 100;
export const manager = new Map<string, any>();
export const Popup: FC<PopupProps> = ({
	id = noncestr(),
	title,
	content,
	type,
	style,
	icon,
	overlay,
	lockBody,
	opacity = 0.5,
	closable = true,
	closeIcon = "&#10761;",
	closeIconSide = "right",
	closeByESC = true,
	closeByOverlay = true,
	children,
	animate = "fade",
	position = "center",
	time = 0,
	area,
	maxWidth = 375,
	fullscreen,
	dragable,
	dragAxis = "all",
	resize,
	buttons,
	open = false,
	mount = document.body,
	opened,
	beforeClose,
	closed,
}) => {
	useEffect(function () {
		zindex++;
		const ESCHandle = (e: KeyboardEvent) => {
			e.code.toLowerCase() === "escape" && close(ActionType.esc);
		};
		document.addEventListener("keyup", ESCHandle);
		return () => document.removeEventListener("keyup", ESCHandle);
	}, []);
	const cache = useRef<HTMLDivElement>(null);
	const [index] = useState(zindex);

	// if (!open) return null;
	function close(action: ActionType) {
		console.log(action);
	}
	function overlayHandle() {
		close(ActionType.overlay);
	}
	const overlayProps = {
		className: overlayId,
		// onClick: closeByOverlay ? nope : overlayHandle,
		ref: cache,
		style: {
			zIndex: index,
		},
	};
	const popupProps = {
		className: "popup",
		style: {
			zIndex: index,
		},
	};
	// const div = document.createElement("div");
	// Object.assign(div, overlayProps);
	// document.body.appendChild(div);
	const fragment = (
		<>
			<div {...overlayProps} onClick={overlayHandle}></div>
			<div {...popupProps}>
				<div className="popup__inner">{children}</div>
			</div>
		</>
	);
	return mount ? createPortal(fragment, mount) : fragment;
};
