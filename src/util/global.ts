import { spacing as _spacing, colors } from "../json/vars.json";
import { breapointEventData } from "./dom";

declare global {
	type LengthUnit =
		| "em"
		| "ex"
		| "gd"
		| "rem"
		| "vw"
		| "vh"
		| "vm"
		| "ch"
		| "px"
		| "in"
		| "cm"
		| "mm"
		| "pt"
		| "pc"
		| "%";

	type CssLengthValue = any;
	type Numeric = string | number;
	type Spacing = keyof typeof _spacing;
	type Template<M extends string, N extends string> = `${M}-${N}`;
	type Valueof<T extends object> = T[keyof T];
	type Color = keyof typeof colors;

	interface WindowEventMap {
		breakpointchange: CustomEvent<breapointEventData>;
	}
}

export const spacing = Object.keys(_spacing);
export const global = {
	responsive: true,
};

export declare var aaa: 111;
