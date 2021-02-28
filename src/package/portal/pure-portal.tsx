import { FC, CSSProperties, createContext, PureComponent, Component } from "react";
import { createPortal } from "react-dom";
import memoizeOne from "memoize-one";
import { getNode, removeAllChildren } from "../../util/dom";
import "./index.styl";

export { getNode };

interface PortalContext {
	children: PurePortal[];
}
const Context = createContext<PortalContext>({
	children: [],
});

export type PurePortalProps = {
	mount: HTMLElement | string;
	replace?: boolean;
};

export class PurePortal extends Component<PurePortalProps> {
	static defaultProps = {
		replace: true,
	};
	context!: PortalContext;
	static contextType = Context;
	private readonly childContext: PortalContext = {
		children: [],
	};

	getNode = memoizeOne((selector: string | HTMLElement): Element | null => {
		const node = getNode(selector);
		if (!node) return node;
		if (this.props.replace) removeAllChildren(node);
		return node;
	});

	contains(el: Node): boolean {
		const node = this.getNode(this.props.mount);
		if (!node) return false;
		if (node.contains(el)) return true;
		// 由于createPortal的特性,子组件和父组件在dom上可能并不是父子关系,需要遍历缓存
		for (const child of this.childContext.children) {
			if (child.contains(el)) return true;
		}
		return false;
	}
	componentDidMount() {
		this.context.children.push(this);
	}
	componentWillUnmount() {
		const index = this.context.children.indexOf(this);
		if (index !== -1) this.context.children.splice(index, 1);
	}
	render() {
		const { mount, children } = this.props;
		const dom = this.getNode(mount);
		// 如果没有提供挂载对象,那么什么也不做
		if (!dom) return null;
		// 将上下文传递
		return createPortal(<Context.Provider value={this.childContext}>{children}</Context.Provider>, dom);
	}
}
export default PurePortal;
