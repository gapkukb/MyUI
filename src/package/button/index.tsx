import "./index.styl";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, CSSProperties, FC, ReactNode } from "react";
import { BEM, classnames } from "../../util/bem";
import "./index.styl";
import { fixUnit } from "../../util/unit";
import Icon from "../icon";
import Progress, { LodingProps } from "../loading";
import { colors } from "../../json/vars.json";

export type ButtonProps = AnchorHTMLAttributes<HTMLElement> &
  Omit<ButtonHTMLAttributes<HTMLElement>, "type"> &
  Partial<{
    bgcolor: string;
    block: boolean;
    circle: boolean;
    className: string;
    color: string;
    disabled: boolean;
    ghost: boolean;
    harline: boolean;
    height: Numeric;
    icon: string;
    iconRight: string;
    iconRightSlot: ReactNode;
    iconSlot: ReactNode;
    label: string;
    loading: boolean;
    loadingIcon: LodingProps["type"];
    nativeType: "button" | "submit" | "reset" | "image";
    outline: boolean;
    replace: boolean;
    round: boolean;
    size: "normal" | "large" | "small" | "mini";
    style: CSSProperties;
    to: string;
    type: "primary" | "danger" | "default" | "success" | "info" | "warning" | "link" | "dark" | "light"
    width: Numeric;
  }>;

export const Button: FC<ButtonProps> = ({
  bgcolor,
  block,
  children,
  circle,
  className,
  color,
  disabled,
  ghost,
  harline,
  height,
  href,
  icon,
  iconRight,
  iconRightSlot,
  iconSlot,
  label,
  loading,
  loadingIcon,
  nativeType = "button",
  outline,
  round,
  size = "normal",
  style,
  to,
  type,
  width,
  ...rest
}: ButtonProps) => {
  const Tag = to !== undefined ? "link" : href !== undefined ? "a" : "button";
  const isButtonNode = Tag === "button";
  const props: Record<any, any> = {
    className: classnames("button", type, size, className, {
      disabled: !isButtonNode && disabled,
      outline,
      harline,
      round,
      block,
      circle,
      ghost,
    }),
    style: Object.assign(
      {
        width: fixUnit(width),
        height: fixUnit(height),
        color,
        backgroundColor: bgcolor,
      },
      style
    ),
    disabled: disabled && isButtonNode,
    to,
    href,
    type: nativeType,
  };
  const text = children || label;

  return (
    <Tag {...props} {...rest}>
      {loading && <Progress type={loadingIcon} />}
      {iconSlot || (icon && <Icon name={icon} className="button__text" />)}
      {text && <span className="button__text">{text}</span>}
      {iconRightSlot || (iconRight && <Icon name={iconRight} className="button__text" />)}
    </Tag>
  );
};

Button.defaultProps = {
  type: "default",
  nativeType: "button",
  size: "normal",
};

export default Button;
