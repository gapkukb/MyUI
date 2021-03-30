import { ReactElement, ReactNode, useCallback, useRef } from "react";
import { PortalImperativeHandlers } from "../../portal";
import { AnchorSelector, Anchor } from "../anchor";
import { usePopoverContext } from "../context";

export interface ChildrenProps {
	onClick?: Function;
}
export type ClickProps<ChildProps extends ChildrenProps> = Partial<{
	/** 点击元素外部关闭 */
	closeOnClickOutside: boolean;
	/** 点击元素外部关闭 */
	toggle: boolean;
	/** 点击元素外部关闭 */
	selector: AnchorSelector;
	/** 点击元素外部关闭 */
	children: (Numeric | ReactElement<ChildProps, any>) | ((childProps: ChildrenProps) => ReactNode);
}>;

function isOutside(el: Element, portal: PortalImperativeHandlers, anchor?: Node) {
	// 是否点击的元素外部
	const bool = !anchor || !(anchor instanceof Element) || anchor.contains(el) || portal.contains(el);
	return !bool;
}

export function PopoverClickTrigger<ChildProps extends ChildrenProps = ChildrenProps>({
	children,
	toggle,
	selector,
	closeOnClickOutside = true,
}: ClickProps<ChildProps>) {
	const ctx = usePopoverContext();
	const anchorRef = useRef<Anchor>(null);
	const globalClick = useCallback(function (e: MouseEvent) {}, [closeOnClickOutside, ctx.popover, ctx.protalRef]);
}
