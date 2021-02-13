import { Children, cloneElement, FC, ReactElement, ReactNode } from "react";
import Cell from "./cell";
import { filterByComponentName } from "../../util/element";
import { fixUnit } from "../../util/unit";
import "./index.styl";
import { classnames } from "../../util/bem";

window.addEventListener("breakpointchange", function (e) {
  console.log(e.detail.current);
});

type Spaces = Spacing | [Spacing, Spacing];
export type GridProps = Partial<{
  /* 容器宽度 */
  width: Numeric;
  /* 容器高度 */
  height: Numeric;
  /* 沟槽宽度 */
  gap: Spaces;
  /* 内边距 */
  padding: Spaces;
  /* 外边距 */
  margin: Spaces;
  /* 添加类名 */
  className: string;
  /* 布局行数 */
  rows: Numeric;
  /* 布局列数 */
  cols: Numeric;
}>;
function prefix(prefix: string, name?: Spaces): string | null {
  return name ? prefix + (typeof name === "string" ? name : name.join("-")) : null;
}
export const Grid: FC<GridProps> = ({ width, height, gap, padding, margin, className, children }) => {
  // 过滤子元素，确保子元素只有 cell
  children = filterByComponentName(children, Cell.name, { staticClass: "grid__item" });
  const gapClass = prefix("gap--", gap);
  const padClass = prefix("pad--", padding);
  const marClass = prefix("mar--", margin);
  const classes = classnames("grid", gapClass, padClass, marClass, className);
  return <div className={classes}>{children}</div>;
};

export default Grid;
