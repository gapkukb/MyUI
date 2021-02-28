import cx from "classnames";
import { createContext, RefObject } from "react";
import { Subject } from "rxjs";
import { PortalHandlers } from "../portal";
import { PopoverContext } from "./context";
import { INVISIBLE_POSITION } from "./placement/invisible";
import { PopoverPosition, Rect } from "./position";
interface PopoverContentContext {
	positionChanged: Subject<void>;
}
const contentContext = createContext<PopoverContentContext>({
	positionChanged: new Subject(),
});

function translateToContainerCoordinates({ left, top }: Rect, rect: Rect): ClientRect {
	return {
		width: rect.width,
		height: rect.height,
		top: rect.top - top,
		bottom: rect.bottom,
		left: rect.left - left,
		right: rect.right,
	};
}

function getPosition(
	{ visibile, placement, popover, cushion }: PopoverContext,
	getContainer: () => Element | null,
	getPositionParent: () => Element | null,
	portalRef: RefObject<PortalHandlers>
): PopoverPosition {
	// 跳过昂贵的dom操作
	if (!visibile) return INVISIBLE_POSITION;
	const container = getContainer();
	const parent = getPositionParent();
	const portal = portalRef.current;
	const anchor = popover;
}
