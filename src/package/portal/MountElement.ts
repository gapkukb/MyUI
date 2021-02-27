import { useLayoutEffect } from "react";

export interface MountElementProps {
	node: HTMLElement;
	getParent(selector: string | HTMLElement): HTMLElement;
	selector: HTMLElement | string;
}

export function MountElement({ node, getParent, selector }: MountElementProps) {
	useLayoutEffect(() => getParent(selector).appendChild(node).remove, [node, getParent, selector]);
	return null;
}
