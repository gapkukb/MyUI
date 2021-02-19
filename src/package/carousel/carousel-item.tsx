import { Children, cloneElement, CSSProperties, FC, ReactElement, ReactNode } from "react";
import { filterByComponentName } from "../../util/element";
import { classnames } from "../../util/bem";
import { type } from "../../util/type";

type Spacings = Spacing | Template<Spacing, Spacing>;
type SpacingIntersect = Spacings | { [key in Spacing]?: Spacings };

export type CarouselItemProps = Partial<{
  /* 添加类名 */
  tag:keyof JSX.IntrinsicElements
  className: string;
  style:CSSProperties
  to:string
  href:string
}>;

type privateProps = {
  active: number;
  selfIndex: number;
  total: number;
  duplicate: boolean;
}
export const CarouselItem: FC<CarouselItemProps> = ({
  to,
  href,
  tag:Tag = to === undefined ? href === undefined ? "div" : "a" : "link",
  className,
  style,
  children,
  ...props
}) => {
  const {  
    active = 0,
    selfIndex,
    total,
    duplicate,
  } = props as privateProps

  const classes = classnames("carousel__item", "carousel__item--" + selfIndex, {
    "carousel__item--prev": selfIndex === active - 1,
    "carousel__item--active": selfIndex === active,
    "carousel__item--next": selfIndex === active + 1,
    "carousel__item--duplicate": duplicate,
  });

  return (
    <Tag className={classes} role="group" aria-label={`${selfIndex}/${total}`} style={style}>
      {children}
    </Tag>
  );
};
CarouselItem.displayName = CarouselItem.name;
export default CarouselItem;
