import { FC, CSSProperties } from "react";
import classnames from "classnames";
import { PanePrivateProps, PaneProps } from "./types";

export const Pane: FC<PaneProps & PanePrivateProps> = ({ className, style,label,name,active = true, disabled, children, ...rest }) => {
	function clickHandler() {}
	const props = {
		className: classnames("tab__pane", {
            inactive:!active,
            disabled,
		}),
		style,
		...rest, 
	};
	return <div {...props}>{children}</div>;
};
export default Pane;
