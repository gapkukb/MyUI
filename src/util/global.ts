import { spacing as _spacing } from "../json/vars.json";
import { breapointEventData } from "./element";

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

	interface WindowEventMap {
		breakpointchange: CustomEvent<breapointEventData>;
	}
}

export const spacing = Object.keys(_spacing);
export const global = {
	responsive: true,
};

export declare var aaa: 111;
