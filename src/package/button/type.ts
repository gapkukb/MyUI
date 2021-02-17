import { CSSProperties, ReactNode } from "react";
export type Props = Partial<{
  bgcolor: string;
  block: boolean;
  className: string;
  color: string;
  disabled: boolean;
  hairline: boolean;
  href: string;
  icon: string;
  iconRight: string;
  iconSize: Numeric;
  label: string;
  loading: string;
  loadingText: string;
  loadingType: string;
  nativeType: "button" | "submit" | "reset";
  outline: boolean;
  plain: boolean;
  replace: boolean;
  round: boolean;
  size: "large" | "normal" | "small" | "mini";
  square: boolean;
  style: CSSProperties;
  tag: keyof HTMLElementTagNameMap;
  to: string;
  type: "primary" | "danger" | "default" | "success" | "warning" | "link" | "dark" | "info" | "light";
}>;