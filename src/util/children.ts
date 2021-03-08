import { Children, isValidElement, ReactNode } from "react";

export function getChildren(children: ReactNode, filter?: (node: ReactNode) => boolean) {
	return Children.toArray(children).reduce<{ childNodes: ReactNode[]; slots: Record<string, ReactNode> }>(
		(acc, child: any) => {
			if (filter && !filter(child)) return acc;
			if (isValidElement<HTMLElement>(child) && child.props.slot) {
				acc.slots[child.props.slot] = child;
			} else {
				acc.childNodes.push(child);
			}
			return acc;
		},
		{ childNodes: [], slots: {} }
	);
}

export function slot(input: ReactNode | undefined, standby: ReactNode): ReactNode {
	if (typeof input === "string") return standby;
	return input;
}
