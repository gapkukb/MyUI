import { spacing as _spacing } from "../json/vars.json";
import { breapointEventData } from "./element";

declare global {
  type stringAndNumber = string | number;
  type Numeric = string | number;
  type Spacing = keyof typeof _spacing;
  type Template<M extends string, N extends string> = `${M}-${N}`;

  interface WindowEventMap {
    breakpointchange: CustomEvent<breapointEventData>;
  }
}

export const spacing = Object.keys(_spacing);
export const global = {
  responsive: true,
};