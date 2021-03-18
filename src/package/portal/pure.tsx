import { createContext, PureComponent } from "react";
import { createPortal } from "react-dom";
import memoize from "memoize-one";
import { querySelector } from "../../util/dom";

export type Context = PurePortal[];
export const Context = createContext<Context>([]);

export type PurePortalProps = {
	/** 选择挂载元素 */
	selector: HTMLElement | string;
	/** 是否清空挂载元素的内容 */
	replace?: boolean;
};

export class PurePortal extends PureComponent<PurePortalProps> {
	context!: Context;
	static contextType = Context;
	static defaultProps = {
		replace: true,
	};
	private readonly children: Context = [];

	/** 获取挂载点元素 并插入或替换子元素 */
	querySelector = memoize((selector: string | HTMLElement): Element | null => {
		const node = querySelector(selector);
		if (!node) return node;
		if (this.props.replace) node.innerHTML = "";
		return node;
	});
	/** 判断当前组件挂载的元素下是否包含了目标元素 */
	contains(node: Node) {
		const el = this.querySelector(this.props.selector);
		if (!el) return false;
		if (el.contains(node)) return true;
		//TODO: 子组件不一定在父组件的作用域内,比如portal元素,所以还要判断子组件
		const c = this.children;
		var i = c.length;
		while (i--) if (c[i].contains(node)) return true;
		return false;
	}
	componentDidMount() {
		this.children.push(this);
	}
	componentWillUnmount() {
		const c = this.children;
		const index = c.indexOf(this);
		index !== -1 && c.splice(index, 1);
	}
	render() {
		const { children, selector } = this.props;
		const node = this.querySelector(selector);
		if (!node) return null;
		return createPortal(<Context.Provider value={this.context}>{children}</Context.Provider>, node);
	}
}
export default PurePortal;
