import { FC, HTMLAttributes } from "react";
import { classnames } from "../../util/bem";
import { type } from "../../util/type";
import { fixUnit } from "../../util/unit";
import "./index.styl";
import { breakpoint } from "../../json/vars.json";

export type CellProps = Partial<{
  width: Numeric;
  height: Numeric;
  span: Numeric | { [index in keyof typeof breakpoint]?: number };
  className: string;
  /* 当前项在区域中的水平&垂直对齐方式 */
  place: string;
  row: string;
  col: string;
}> &
  HTMLAttributes<HTMLElement>;

export const Cell: FC<CellProps> = ({ width, height, className, span, children, ...props }) => {
  var spanClass = "";
  if (type.numeric(span)) {
    spanClass = "col--" + span;
  } else if (type.object(span)) {
    for (let key in span) {
      //@ts-ignore
      spanClass += `col-${key}--${span[key]} `;
    }
  }
  const classes = classnames("col", (props as any).staticClass, spanClass, className);
  return <div className={classes}>{children}</div>;
};

export default Cell;
