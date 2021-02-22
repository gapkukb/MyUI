import { FC, CSSProperties } from "react";
import classnames from "classnames";
export type PaneProps = Partial<{
	className: string;
	style: CSSProperties;
	id: string | number;
	name: string;
	disabled: boolean;
}>;

export const Pane: FC<PaneProps> = ({ className, style, name, id, disabled, children, ...rest }) => {
	console.log(disabled);

	function clickHandler() {}
	const props = {
		className: classnames("pane", {
			disabled,
		}),
		style: {
			...style,
		},
		onClick: clickHandler,
		...rest,
	};
	return <div {...props}>{children}</div>;
};
export default Pane;
