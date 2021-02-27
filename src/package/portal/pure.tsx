import { FC, CSSProperties, createContext, PureComponent } from "react";
import classnames from "classnames";
import { $ } from "../../util/dom";
import "./index.styl";
import { createPortal } from "react-dom";
export { $ };
interface PortalContext {
	children: PurePortal[];
}
export type PurePortalProps = {
	className?: string;
	style?: CSSProperties;
	mount?: HTMLElement | string;
};
const Context = createContext<PortalContext>({
	children: [],
});

export class PurePortal extends PureComponent<PurePortalProps> {
	context!: PortalContext;
	static contextType = Context;
	private readonly child: PortalContext = {
		children: [],
	};

	get = (selector?: string | HTMLElement) => {
		const node = $(selector!);
		if (!node) return node;
		return node;
	};
	contains(el: Node): boolean {
		const found = this.get(this.props.mount);
		if (!found) return false;
		if (found.contains(el)) return true;
		for (const child of this.child.children) {
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
		console.log(document.querySelector(mount as string));

		const dom = this.get(mount);
		console.log(mount);
		console.log(dom);

		// 如果没有提供挂载对象,那么什么也不做
		if (!dom) return null;
		// 将上下文传递
		return createPortal(<Context.Provider value={this.child}>{children}</Context.Provider>, dom);
	}
}
