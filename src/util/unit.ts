import { type } from "./type";

export const units = ["em", "ex", "gd", "rem", "vw", "vh", "vm", "ch", "px", "in", "cm", "mm", "pt", "pc", "%"];
const regexpHasUnit = new RegExp(`${units.join("|")}$`)
export function fixUnit(input?: CssLengthValue, unit: string = "px"): string {
  if (!isNaN(input as any)) return input + unit;
  if (type.string(input)) return input;
  return "";
}

export function withUnit(input?:Numeric) {
    if(type.string(input)) return regexpHasUnit.test(input)
    return false
}
