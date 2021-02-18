import { Children, cloneElement, FC, ReactElement, ReactNode } from "react";
import { filterByComponentName } from "../../util/element";
import { classnames } from "../../util/bem";
import { type } from "../../util/type";

type Spacings = Spacing | Template<Spacing, Spacing>;
type SpacingIntersect = Spacings | { [key in Spacing]?: Spacings };

export type CarouselItemProps = Partial<{
  /* 添加类名 */
  className: string;
  active: number;
  selfIndex: number;
  total: number;
  duplicate: boolean;
}>;

export const CarouselItem: FC<CarouselItemProps> = ({ active = 0, selfIndex, total,duplicate, className, children }) => {
  const classes = classnames("carousel__item", "carousel__item--" + selfIndex, {
    "carousel__item--prev": selfIndex === active - 1,
    "carousel__item--active": selfIndex === active,
    "carousel__item--next": selfIndex === active + 1,
    "carousel__item--duplicate": duplicate,
  });
  return <div className={classes} role="group" aria-label={`${selfIndex}/${total}`}>{children}</div>;
};

export default CarouselItem;
