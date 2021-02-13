import { FC, HTMLAttributes } from "react";
import { classnames } from "../../util/bem";
import { fixUnit } from "../../util/unit";
import "./index.styl";

export type CellProps = Partial<{
  width: Numeric;
  height: Numeric;
  className: string;
}> &
  HTMLAttributes<HTMLElement>;
export const Cell: FC<CellProps> = ({ width, height, className, children, ...props }) => {
  const classes = classnames("cell", (props as any).staticClass, className);
  return <div className={classes}>{children}</div>;
};

export default Cell;
