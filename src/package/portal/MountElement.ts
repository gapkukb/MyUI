import { useLayoutEffect } from "react";

export interface MountElementProps {
	node: HTMLElement;
	getParent(selector: string | HTMLElement): HTMLElement;
	mount: HTMLElement | string;
}

export function MountElement({ node, getParent, mount }: MountElementProps) {
	useLayoutEffect(() => getParent(mount).appendChild(node).remove, [node, getParent, mount]);
	return null;
}
