import { FC, CSSProperties, ReactNode, cloneElement } from "react";
import classnames from "classnames";
import "./index.styl";
import Icon from "../icon";
import Button from "../button";
export type FabProps = Partial<{
	className: string;
	style: CSSProperties;
    type: "horizontal" | "vertical" | "arc";
    control:ReactNode
}>;

export const Fab: FC<FabProps> = ({ className, style, children, ...rest }) => {
	function clickHandler() {}
	const props = {
		className: classnames("menu", {}),
		style: {
			...style,
		},
		onClick: clickHandler,
		...rest,
	};
	return <div {...props}>
        <Button icon="wifi"></Button>
        {children}
    </div>;
};
export default Fab;
