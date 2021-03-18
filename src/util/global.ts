import { AriaAttributes, CSSProperties, FC } from "react";
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
	type AsyncCallBack<Params, State> = (done: (state: Params) => any, state: State) => void;

	interface WindowEventMap {
		breakpointchange: CustomEvent<breapointEventData>;
	}

	type CFC<P = {}> = FC<
		P &
			Partial<{
				className: string;
				style: CSSProperties;
				role: string;
			}> &
			AriaAttributes
	>;
}

export const spacing = Object.keys(_spacing);
export const global = {
	responsive: true,
};

export declare var aaa: 111;
