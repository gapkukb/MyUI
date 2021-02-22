import { FC, CSSProperties, Children, ReactNode, useState, useEffect } from "react";
import classnames from "classnames";
import { PaneProps } from "./pane";
import { noop } from "../../util";

export type TabProps = Partial<{
	className: string;
	style: CSSProperties;
	/* 是否异步渲染 */
	lazy: boolean;
	/* 当前选中项,优先匹配pane的id属性,如果index */
	active: number | string;
	/* pane切换回调 */
	onChange: (index: number | string) => void;
	/* pane删除回调 */
	onDelete: (index: number | string) => void;
	/* pane是否可删除 */
	deletable: boolean;
	/* 导航模式或者tab模式 */
	navigators: string[];
	/* 风格 */
	mode: "normal" | "card" | "button";
	/* 启用动画 */
	animation: boolean;
	/* 自定义动画名称 */
	animationName: string;
}>;

type Tab = Pick<PaneProps, "disabled" | "id" | "name"> & { className: string };

export const Tab: FC<TabProps> = ({
	className,
	style,
	children,
	lazy,
	active: _active = 0,
	onChange = noop,
	...rest
}) => {
	const [active, setActive] = useState(_active);
	const tabs =
		Children.map<Tab, ReactNode>(children, (child: any, index) => ({
			name: child.props.name,
			id: (child.props.id || index).toString(),
			disabled: child.props.disabled,
			className: classnames("tab__name", { disabled: child.props.disabled }),
		})) || [];

	function clickHandler() {}
	function tabHandler(e: any) {
		console.log(e.target.dataset.id);
	}
	const props = {
		className: classnames("tab", {}),
		style: {
			...style,
		},
		onClick: clickHandler,
		...rest,
	};
	return (
		<div {...props}>
			<div className="tab__header">
				{tabs.map((tab) => (
					<div key={tab.id} onClick={tabHandler} data-id={tab.id} className={tab.className}>
						{tab.name}
					</div>
				))}
			</div>
			<div className="tab__body">{children}</div>
		</div>
	);
};
export default Tab;
