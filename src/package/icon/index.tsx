import React from "react";
import { BEM, classnames } from "../../util/bem";
import { fixUnit } from "../../util/unit";
import "../../fontawesome/all.min.css";
import "./index.styl";

export type IconProps = Partial<{
  family: string;
  prefix: string;
  badge: string | number | boolean;
  color: string;
  size: Numeric;
  tag: "i" | "span";
  brand: boolean;
  className: string;
  onClick: Function;
}> & { name: string };

export function Icon({
  tag = "i",
  family = "fa",
  prefix = "fa-",
  brand,
  name,
  badge,
  size,
  color,
  onClick,
  className,
  ...props
}: IconProps): JSX.Element {
  const isImg = name.includes(".");
  const Tag = tag as any;
  const attrs = {
    ...props,
    className: classnames("icon", family, prefix + name, className, {
      fab: brand,
    }),
    style: {
      fontSize: fixUnit(size),
      color,
    },
  };

  return (
    <Tag {...attrs} aria-hidden="true">
      {isImg && <img className="icon__img" src={name} alt="" />}
      {badge && <b className="icon__badge">{badge}</b>}
    </Tag>
  );
}

export default Icon;
