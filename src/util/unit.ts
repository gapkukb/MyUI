import { type } from "./type";

export const units = ["em", "ex", "gd", "rem", "vw", "vh", "vm", "ch", "px", "in", "cm", "mm", "pt", "pc", "%"];

export function fixUnit(input?: Numeric, unit: string = "px"): string {
  if (!isNaN(input as any)) return input + unit;
  if (type.string(input)) return input;
  return "";
}
