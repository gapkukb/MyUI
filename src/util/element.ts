import { ReactNode, Children, cloneElement } from "react";
import { global } from "./global";

export function filterByComponentName(children: ReactNode, name: string, props?: Record<string, any>) {
  return Children.map(children, (child: any, index) => {
    if (child.type && child.type.name === name) return props ? cloneElement(child, props) : child;
    return null;
  });
}

const prefix = ["", "-webkit-", "-moz-", "-ms-", "-o-"];
export function compatiple(prop: string) {
  const style = document.body.style;
  for (const item of prefix) {
    const cur = item + prop;
    if (cur in style) return cur;
  }
  return null;
}

function getBodyPseudoContent() {
  return getComputedStyle(document.body, ":after").content + "";
}

export interface breapointEventData {
  current: string;
  previous: string;
}
let currentBreakPoint = getBodyPseudoContent(),
  previou = Date.now();
function resizeHandler() {
  const now = Date.now();
  if (now - previou < 300) return;
  previou = now;
  let current = getBodyPseudoContent();
  if (current !== currentBreakPoint) {
    window.dispatchEvent(
      new CustomEvent<breapointEventData>("breakpointchange", {
        detail: { current: current.slice(1, -1), previous: currentBreakPoint.slice(1, -1) },
      })
    );
    currentBreakPoint = current;
  }
}
if (global.responsive) {
  window.addEventListener("resize", resizeHandler);
}
