import { ReactNode } from "react";
import classnames from "classnames";
import "./index.styl";
export const config: LoadingProps = {
	type: "spiner1",
};
export type LoadingProps = Partial<{
	type:
		| "facebook"
		| "ios"
		| "spiner1"
		| "spiner2"
		| "spiner3"
		| "chrome"
		| "ripple"
		| "clock"
		| "huawei"
		| "bar"
		| "hourglass"
		| "wave"
		| "flow";
	text: ReactNode;
	size: number;
	show: boolean;
	vertical: boolean;
	textClassName: string;
	color: string;
	textColor: string;
}>;
function genChildren(type: LoadingProps["type"]) {
	let count = 0;
	switch (type) {
		case "facebook":
			count = 3;
			break;
		case "ios":
			return (
				<svg viewBox="0 0 1024 1024" width="1em" height="1em">
					<defs>
						<circle id="s1" cx="100" cy="100" r="50" fill="yellow" stroke="black" stroke-width="3" />
						<ellipse
							id="s2"
							cx="100"
							cy="100"
							rx="50"
							ry="30"
							fill="salmon"
							stroke="black"
							stroke-width="3"
						/>
					</defs>
				</svg>
			);
		case "huawei":
			count = 8;
			break;
		case "chrome":
			count = 4;
			break;
		case "ripple":
			count = 2;
			break;
	}

	return new Array(count).fill(0).map(() => <i></i>);
}
export const Loading: CFC<LoadingProps> = ({
	type = config.type,
	show = true,
	text,
	size = "1x",
	className,
	textClassName,
	style,
	color,
	textColor,
	vertical,
	children,
	...rest
}) => {
	console.log(vertical);

	const props = {
		className: classnames("loading", className, { vertical }),
		style: {
			...style,
			color,
			display: show ? "" : "none",
		},
		...rest,
	};
	const iconProps = {
		className: classnames("loading__icon", type),
	};
	const textProps = {
		className: classnames("loading__text", textClassName),
		style: {
			color: textColor,
		},
	};
	return (
		<div {...props}>
			{children || <div {...iconProps}>{genChildren(type)}</div>}
			{text && <div {...textProps}>{text}</div>}
		</div>
	);
};

export default Loading;
