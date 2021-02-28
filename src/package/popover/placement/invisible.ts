import { PopoverPosition } from "../position";

export const INVISIBLE_POSITION: PopoverPosition = {
	style: {
		position: "fixed",
		left: -100000,
		top: -100000,
		zIndex: -10,
		opacity: 0,
	},
	className: "invisible",
};
