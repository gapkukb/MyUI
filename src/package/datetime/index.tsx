import { FC, CSSProperties } from "react";
import classnames from "classnames";
import "./index.styl";
export type DatetimeProps = {
	className: string;
	style: CSSProperties;
};

export const Datetime: FC<DatetimeProps> = ({ className, style, children, ...rest }) => {
	function clickHandler() {}
	const props = {
		className: classnames("datetime", {}),
		style: {
			...style,
		},
		onClick: clickHandler,
		...rest,
	};
	return <div {...props}>{children}</div>;
};
export default Datetime;
