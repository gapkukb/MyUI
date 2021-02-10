import { type } from "./type";

export function fixUnit(input?: Numeric, unit: string = "px"): string | undefined {
  if (type.numeric(input)) return input + unit;
  if (type.string(input)) return input;
  return undefined;
}
