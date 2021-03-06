/* 
异步视图组件
处理边界情况
1 空数据  1.1 用户无权限   1.2搜索无结果  1.3 筛选无结果  1.4 没有数据 
关于1.4没有数据处理方式:
a.告诉用户这里将会存放什么数据
b.给用户一个主动创造数据的理由，比如通过话术引起用户心理共鸣
c.若页面无数据会给用户造成困惑，则可以说明原因打消用户的困惑

2 请求异常 2.1 网络异常 2.2 服务器异常 2.3 客户端异常-通常是请求超时
a.『网络异常』指出当前状态为网络异常，并给出解决方案，注意这里不需要详细告知因为什么具体原因导致网络异常的，原因的告知对用户无太大意义，甚至可能给用户造成困惑。
b.『服务器异常』指出当前状态为服务器异常，并给出解决方案，同理，无需描述详细的原因。
c.『加载失败』加载失败主要会由网络异常或服务器异常造成，所以文案设计可依以下而定：

i.由网络异常引起加载失败，同『网络异常』文案设计策略
ii.由服务器异常引起加载失败，同『服务器异常』文案设计策略
iii.也可以独立在网络异常和服务器异常情况之外单独处理

边界情况下的交互:
1 创建操作:点击重试 我要反馈 联系客服 回到首页 其他搜索 登录账号...
2 功能说明:说明产生此问题的原因 或者引导客户操作的说明
3 推荐内容 推荐与用户操作相关的内容进行导流
4 预置内容 不常用,通常是在工具类页面,预置一些教程,示例,清单,之类的内容

不管哪种边界情况,都推荐使用 图案(可选)+文案(必选)+操作 的处理方式
*/

import { FC, CSSProperties, Children, isValidElement, ReactNode } from "react";
import classnames from "classnames";
import "./index.styl";
import Icon from "../icon";
import { fixUnit } from "../../util/unit";
import { getChildren } from "../../util/children";

export type AsyncViewProps = {
	/* 如果state ===  status.custom 那么必须要实现名为custom的插槽*/
	state: Status;
} & Partial<{
	className: string;
	style: CSSProperties;
	width: Numeric;
	height: Numeric;
}>;

type Status = keyof typeof status;
type ConfigKeys = Exclude<Status, "ok" | "custom">;

export const status = {
	loading: "loading",
	empty: "empty",
	emptyBySearch: "emptyBySearch",
	emptyByFilter: "emptyByFilter",
	emptyByDeny: "emptyByDeny",
	failed: "failed",
	failedByNetwork: "failedByNetwork",
	failedBySever: "failedBySever",
	failedByTimeout: "failedByTimeout",
	ok: "ok",
	custom: "custom",
} as const;

export const config: Record<ConfigKeys, { icon: string; text: string; action?: ReactNode }> = {
	loading: {
		icon: "spinner",
		text: "加载中...",
	},
	empty: {
		icon: "inbox",
		text: "没有数据",
		action: <div></div>,
	},
	emptyBySearch: {
		icon: "search",
		text: "搜索结果为空",
		action: <div></div>,
	},
	emptyByFilter: {
		icon: "filter",
		text: "筛选结果为空",
		action: <div></div>,
	},
	emptyByDeny: {
		icon: "expeditedssl",
		text: "用户无权限,请联系管理员",
		action: <div></div>,
	},
	failed: {
		icon: "exclamation-triangle",
		text: "访问出错了,请稍后再试",
		action: <div></div>,
	},
	failedByNetwork: {
		icon: "spinner",
		text: "网络连接错误,请检查您的网络",
		action: <div></div>,
	},
	failedBySever: {
		icon: "spinner",
		text: "服务器错误,请稍后再试或联系客服",
		action: <div></div>,
	},
	failedByTimeout: {
		icon: "spinner",
		text: "请求超时,请点击重试",
		action: <div></div>,
	},
};

export const AsyncView: FC<AsyncViewProps> = ({ state, width, height, className, style, children, ...rest }) => {
	function clickHandler() {}

	const props = {
		className: classnames("async", className, {}),
		style: {
			minWidth: fixUnit(width),
			minHeight: fixUnit(height),
			...style,
		},
		onClick: clickHandler,
		...rest,
	};
	const { childNodes, slots } = getChildren(children);
	const cur = config[state as ConfigKeys];

	return (
		<div {...props}>
			{state === status.ok ? (
				<div className="async__normal">{childNodes}</div>
			) : (
				slots[state] || (
					<div className="async__abnormal">
						<div className="async__explain">
							<Icon name={cur.icon} size="100"></Icon>
							<div className="async__reason">{cur.text}</div>
						</div>
						{slots[state + "-action"] || cur.action}
					</div>
				)
			)}
		</div>
	);
};
export default AsyncView;
