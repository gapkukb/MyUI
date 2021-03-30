import { createContext, CSSProperties, RefObject, useContext } from "react";
// import { PortalHandlers } from "../portal";
import { PopoverPositionFunction } from "./position";
import { Popover } from "./popover";
import { PortalImperativeHandlers } from "../portal";

export interface PopoverContentImperativeHandle {
	adjustPosition(): void;
}

export interface PopoverContext {
	popover: Popover;
	visible: boolean;
	mount: string;
	placement: PopoverPositionFunction;
	cushion: number;
	protalRef: RefObject<PortalImperativeHandlers>;
	className?: string;
	contentRef: RefObject<PopoverContentImperativeHandle>;
	mounted(cb: () => () => void): void;
	style?: CSSProperties;
}

const context = createContext<PopoverContext | null>(null);

export function usePopoverContext(): PopoverContext {
	const ctx = useContext(context);
	if (!ctx) throw new Error("Popover context not found");
	return ctx;
}

export default context;
