import { CSSProperties } from "react";
import { classnames } from "../../util/bem";

export type PopupProps = Partial<{
  id: string;
  title: string;
  content: string;
  type: string;
  style: CSSProperties;
  icon: "loading" | "success" | "fail" | "warn" | "danger";
  overlay: boolean;
  lockBody: boolean;
  opacity: Numeric;
  closable: boolean;
  closeIcon: string;
  closeIconSide: "left" | "right";
  animate: string;
  position: "left" | "right" | "top" | "bottom" | "center" | [Numeric, Numeric];
  time: number;
  area: [Numeric, Numeric];
  maxWidth: Numeric;
  maxHeight: Numeric;
  fullscreen: boolean;
  dragable: boolean;
  dragAxis: "x" | "y" | "all";
  resize: boolean;
  buttons: { text: string; id: Numeric; disabled: boolean; style: CSSProperties }[];

  opened(): void;
  beforeClose(action: "confirm" | "close" | "overlay" | "esc", done: (done: boolean) => void): void;
  closed(action: "confirm" | "close" | "overlay" | "esc"): void;
}>;

export function Popup({
  id,
  title,
  content,
  type,
  style,
  icon,
  overlay,
  lockBody,
  opacity = 0.5,
  closable = true,
  closeIcon = "&#10761;",
  closeIconSide = "right",
  animate = "fade",
  position = "center",
  time = 0,
  area,
  maxWidth = 375,
  fullscreen,
  dragable,
  dragAxis = "all",
  resize,
  buttons,
  opened,
  beforeClose,
  closed,
}: PopupProps) {
  return (
    <>
      <div className={classnames("popup")}></div>
    </>
  );
}
