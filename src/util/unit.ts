import { type } from "./type";

export const units = ["em", "ex", "gd", "rem", "vw", "vh", "vm", "ch", "px", "in", "cm", "mm", "pt", "pc", "%"];
const regexpHasUnit = new RegExp(`${units.join("|")}$`);

export function fixUnit(input?: Numeric): Numeric;
export function fixUnit(input?: Numeric, unit?: string): string;
export function fixUnit(input?: any, unit?: string): any {
	const n = Number(input) || input;
	if (unit) return n + unit;
	return n;
}

export function withUnit(input?: Numeric) {
	if (type.string(input)) return regexpHasUnit.test(input);
	return false;
}
