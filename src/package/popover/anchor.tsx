import { Component } from "react";
import { findDOMNode } from "react-dom";
import Context, { PopoverContext } from "./context";

export type PopoverAnchorGetElement = (node: Element | Text | null) => Element | Text | null;
export interface PopoverAnchorProps {
	onClick?: () => void;
	selector?: PopoverAnchorGetElement;
}

export class PopoverAnchor extends Component<PopoverAnchorProps> {
	static contextType = Context;
	context!: PopoverContext;
	selector() {
		const { selector } = this.props;
		const node = findDOMNode(this);
		return selector ? selector(node) : node;
	}
	componentDidMount() {
		this.context.popover;
	}
	componentWillUnmount() {
		this.context.popover;
	}
	render() {
		if (process.env.NODE_ENV !== "production") {
			if (!this.props.children) throw new Error("Popover anchor require a child");
		}
		return this.props.children;
	}
}

export default PopoverAnchor;
