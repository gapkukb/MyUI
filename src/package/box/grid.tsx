import { Children, cloneElement, FC, ReactElement, ReactNode } from "react";
import Cell from "./cell";
import { filterByComponentName } from "../../util/dom";
import { fixUnit } from "../../util/unit";
import "./index.styl";
import { classnames } from "../../util/bem";
import { type } from "../../util/type";

type Spacings = Spacing | Template<Spacing, Spacing>;
type SpacingIntersect = Spacings | { [key in Spacing]?: Spacings };

export type GridProps = Partial<{
	/* 添加类名 */
	className: string;
	/* 容器宽度 */
	width: Numeric;
	/* 容器高度 */
	height: Numeric;
	/* 布局列数 */
	cols: Numeric;
	/* 沟槽宽度 */
	gap: SpacingIntersect;
	/* 内边距 */
	padding: SpacingIntersect;
	/* 外边距 */
	margin: SpacingIntersect;
	/* 将所有子项视为一个整体在容器中的水平&垂直排列,是justify align的集合 */
	place: string;
	/* 子项在各自区域中水平&垂直的对齐方式, */
	placeItems: string;
	/* 设置网格的行列数, */
	template: string;
	/* 为单元格命名, */
	area: string;
}>;
function prefix(prefix: string, input?: SpacingIntersect): string {
	var type = typeof input;
	if (type === "string") return prefix + "--" + input;
	if (type === "object") {
		var output = "";
		for (const key in input as any) {
			output += `${prefix}-${key}--${(input as any)[key]} `;
		}
		return output;
	}
	return "";
}
export const Grid: FC<GridProps> = ({ width, height, cols, gap, className, children }) => {
	// 过滤子元素，确保子元素只有 cell
	// children = filterByComponentName(children, Cell.name, { staticClass: "grid__item" });
	const gapClass = prefix("gap", gap);
	// const padClass = prefix("pad--", padding);
	// const marClass = prefix("mar--", margin);
	// const colsClass = "grid--" + cols;
	const classes = classnames("grid", gapClass, className);
	return <div className={classes}>{children}</div>;
};

export default Grid;
