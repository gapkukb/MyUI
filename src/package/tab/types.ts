import { CSSProperties, ReactNode } from "react";

export type TabProps = Partial<{
	className: string;
    /* tab body额外类名 */
    bodyClassName: string;
    /* tab 头部额外类名 */
	headerClassName: string;
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
	/* 切换模式，navigator导航模式，只显示标签信息无内容，single单内容槽模式，内容区不跟随tab切换变化，multiple多内容槽模式，随着tab切换变化 */
	mode: "navigator" | "single" | "multiple";
	/* 风格 */
	type: "normal" | "card" | "button";
	/* 启用动画 */
	animation: boolean;
	/* 自定义动画名称 */
	animationName: string;
	/* 禁用整个tab */
    disabled: boolean;
    /* 底部插槽 */
    footer:ReactNode
    /* 滑动切换 */
    touchable:boolean
    /* 切换的速率阈值 默认0.5 */
    velocity:Numeric
}>;

export type PaneProps = Partial<{
	className: string;
	style: CSSProperties;
	/* tab标题 */
	label: string;
	/* 禁用tab选项 */
	disabled: boolean;
	href: string;
	to: string;
	name: string | number;
}>;

export interface PanePrivateProps {
	active?: boolean;
	onmountOnHide?: boolean;
}
