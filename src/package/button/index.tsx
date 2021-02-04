import "./index.styl";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, CSSProperties, FC, ReactNode } from "react";
import { BEM } from "../../util/bem";
const bem = new BEM("button");
export type BaseProps = {
  label: string;
  size: "normal" | "large" | "small" | "mini";
  nativeType: "button" | "submit" | "reset" | "image";
  type: "primary" | "danger" | "default" | "success" | "error" | "warning" | "link";
  className: string;
  disabled: boolean;
  readonly: boolean;
  href: string;
  to: string;
  loading: string;
  children: ReactNode;
  style: CSSProperties;
  ghost: boolean;
  icon: string;
  iconRight: string;
  image: string;
};

type ButtonProps = BaseProps & Omit<ButtonHTMLAttributes<HTMLElement>, "type">;
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLElement>;
type Props = Partial<ButtonProps & AnchorProps>;

export const Button: FC<Props> = (props) => {
  const {
    label,
    size,
    nativeType,
    type,
    className,
    disabled,
    href,
    to,
    loading,
    children,
    style,
    ghost,
    icon,
    iconRight,
    ...rest
  } = props;
  const classes = bem.classes(type, size, disabled && "disabled");
  const Tag = to ? "link" : href ? "a" : "button";

  return (
    <Tag className={classes} role="button">
      <span>123213</span>
    </Tag>
  );
};

Button.defaultProps = {
  type: "default",
  nativeType: "button",
  size: "normal",
};

export default Button;
