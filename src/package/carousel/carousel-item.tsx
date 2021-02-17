import { Children, cloneElement, FC, ReactElement, ReactNode } from "react";
import { filterByComponentName } from "../../util/element";
import { classnames } from "../../util/bem";
import { type } from "../../util/type";

type Spacings = Spacing | Template<Spacing, Spacing>;
type SpacingIntersect = Spacings | { [key in Spacing]?: Spacings };

export type CarouselItemProps = Partial<{
  /* 添加类名 */
  className: string;
}>;

export const CarouselItem: FC<CarouselItemProps> = ({ className, children }) => {
  const classes = classnames("carousel__item");
  return <div className={classes}>{children}</div>;
};

export default CarouselItem;
