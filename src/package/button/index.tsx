import { AnchorHTMLAttributes, ButtonHTMLAttributes, CSSProperties, FC, ReactNode } from "react";
import { BEM } from "../../util/bem";
const bem = new BEM("button");
export type BaseProps = {
  size: "normal" | "large" | "small" | "mini";
  nativeType: React.ButtonHTMLAttributes<HTMLButtonElement>;
  type: "primari" | "danger" | "default" | "success" | "error" | "warning" | "link";
  className: string;
  disabled: boolean;
  readonly: boolean;
  href: string;
  loading: string;
  children: ReactNode;
  style: CSSProperties;
  ghost: boolean;
};

type ButtonProps = BaseProps & Omit<ButtonHTMLAttributes<HTMLElement>, "type">;
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLElement>;
type Props = Partial<ButtonProps & AnchorProps>;

export const Button: FC<Props> = (props) => {
  const {
    size,
    nativeType,
    type,
    className,
    disabled,
    readonly,
    href,
    loading,
    children,
    style,
    ghost,
    ...rest
  } = props;
  const classes = bem.mod(type, size, disabled && "disabled");
};
export default Button;
