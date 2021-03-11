import { FC, CSSProperties, useState } from "react";
import classnames from "classnames";
import "./index.styl";
import { ButtonProps } from "../button";
import { call, number } from "../../util";
import { fixUnit } from "../../util/unit";
export type SwitchProps = Partial<{
	loading: boolean;
	disabled: boolean;
	color: string;
	inactiveColor: string;
	active: boolean;
	size: ButtonProps["size"] | number;
	width: Numeric;
	onBeforeChange: AsyncCallBack<boolean | void, boolean>;
}>;

export const Switch: CFC<SwitchProps> = ({
	loading,
	disabled,
	active: on,
	size = "normal",
	color,
	inactiveColor,
	className,
	style,
	width,
	children,
	onBeforeChange,
	...rest
}) => {
	const [active, setActive] = useState(on || false);
	function clickHandler() {
		if (loading || disabled) return;
		if (onBeforeChange) {
			call(onBeforeChange, (state) => state !== undefined && setActive(state), active);
		} else {
			setActive(!active);
		}
	}
	const props = {
		className: classnames("switch", typeof size === "string" ? size : null, { loading, disabled, active }),
		style: {
			width: fixUnit(width),
			color: active ? color : inactiveColor,
			fontSize: number(size),
			...style,
		},
		onClick: clickHandler,
		...rest,
	};
	return (
		<div role="switch" aria-checked={String(active) as "false" | "true"} {...props}>
			<svg viewBox="25 25 50 50" width="1em" height="1em" className="switch__circular">
				<circle cx="50" cy="50" r="25" fill="#fff"></circle>
				{loading && <circle cx="50" cy="50" r="14" fill="none" className="switch__loading"></circle>}
			</svg>
		</div>
	);
};
export default Switch;
