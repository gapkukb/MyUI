import { Children, isValidElement, ReactNode } from "react";

export function getChildren(children: ReactNode, filter?: (node: ReactNode) => boolean) {
	return Children.toArray(children).reduce<{ nodes: ReactNode[]; slots: Record<string, ReactNode> }>(
		(acc, child: any) => {
			if (filter && !filter(child)) return acc;
			if (isValidElement<HTMLElement>(child) && child.props.slot) {
				acc.slots[child.props.slot] = child;
			} else {
				acc.nodes.push(child);
			}
			return acc;
		},
		{ nodes: [], slots: {} }
	);
}
