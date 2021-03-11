import { ReactNode } from "react";
import classnames from "classnames";
import "./index.styl";
export type LoadingProps = Partial<{
	type: ReactNode;
	text: ReactNode;
	size: number;
}>;
export const Loading: CFC<LoadingProps> = ({ type, text, size = "1x" }) => {
	const props = {
		className: classnames("loading", {}),
	};
	const chilren = new Array(3).fill(0);
	const isNode = typeof type !== "string";
	return (
		<div {...props}>
			<div className={classnames("loading__icon", !isNode && type)}>
				{isNode ? type : chilren.map((_) => <i></i>)}
			</div>
			<div className="loading__text"></div>
		</div>
	);
};

export default Loading;
