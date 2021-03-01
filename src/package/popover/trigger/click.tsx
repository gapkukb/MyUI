import { ReactElement, ReactNode, useCallback, useRef } from "react";
import { PortalHandlers } from "../../portal";
import PopoverAnchor, { PopoverAnchorGetElement } from "../anchor";
import { usePopoverContext } from "../context";

export interface PopoverTriggerClickChildProps {
	onClick?: (...args: any[]) => void;
}

export type PopoverTriggerClickProps<ChildProps extends PopoverTriggerClickChildProps> = Partial<{
	closeOnClickOutside: boolean;
	toggle: boolean;
	selector: PopoverAnchorGetElement;
	children:
		| (string | number | ReactElement<ChildProps, any>)
		| ((childProps: PopoverTriggerClickChildProps) => ReactNode);
}>;
/**
 *
 * @param el 目标元素
 * @param portal 传送门
 * @param anchor 点击锚点
 */
function isOutside(el: Element, portal: PortalHandlers, anchor: Node | null) {
	return !(!anchor || !(anchor instanceof Element) || anchor.contains(el) || portal.contains(el));
}

export function PopoverClickTrigger<ChildProps extends PopoverTriggerClickChildProps = PopoverTriggerClickChildProps>({
	children,
	toggle,
	selector,
	closeOnClickOutside,
}: PopoverTriggerClickProps<ChildProps>) {
	const ctx = usePopoverContext();
	const anchorRef = useRef<PopoverAnchor>(null as any);
	const globalClick = useCallback(
		(e: MouseEvent) => {
			const anchor = anchorRef.current;
			if (!anchor) return;
			const el = anchor.selector();
			if (closeOnClickOutside && el && isOutside(e.target as Element, ctx.protalRef.current!, el)) {
				ctx.popover.setVisible(false);
			}
		},
		[closeOnClickOutside, ctx.popover, ctx.protalRef]
	);
}
