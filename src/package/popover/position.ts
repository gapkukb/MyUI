import { CSSProperties } from "react";

export interface PopoverPosition {
	style: CSSProperties;
	className: string;
}
export type Rect = ClientRect | DOMRect;
export interface PopoverPositionFunctionProps {
	/** 相对于非普通定位的父元素计算位置*/
	relativeRect: ClientRect;
	/* 锚点位置 */
	anchorRect: Rect;
	/* 绑定父元素 */
	contanerRect: Rect;
	/* 内容元素 */
	contentRect: Rect;
	cushion: number;
	/* anchor */
	anchor: Element;
	container: Element;
	content: Element;
}
export interface PopoverPositionFunction {
	(option: PopoverPositionFunctionProps): PopoverPosition;
}
