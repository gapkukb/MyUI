import "./index.styl";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, CSSProperties, FC, ReactNode } from "react";
import classnames from "classnames";
import "./index.styl";
import { fixUnit } from "../../util/unit";
import Icon from "../icon";
import Loading, { LoadingProps } from "../loading";

export const buttonConfig = {};
export type ButtonProps = AnchorHTMLAttributes<HTMLElement> &
	Omit<ButtonHTMLAttributes<HTMLElement>, "type"> &
	Partial<{
		bgcolor: string;
		block: boolean;
		square: boolean;
		className: string;
		color: string;
		disabled: boolean;
		ghost: boolean;
		harline: boolean;
		height: Numeric;
		icon: string;
		iconRight: string;
		iconRightSlot: ReactNode;
		iconSlot: ReactNode;
		label: string;
		loading: boolean;
		loadingConfig: LoadingProps;
		loadingIcon: LoadingProps["type"];
		loadingKeepText: boolean;
		nativeType: "button" | "submit" | "reset";
		hollow: boolean;
		replace: boolean;
		round: Spacing | "pill" | "circle";
		size: "normal" | "large" | "small" | "mini";
		style: CSSProperties;
		to: string;
		type: "primary" | "danger" | "default" | "success" | "info" | "warning" | "dark" | "light" | "link";
		link: boolean;
		borderless: boolean;
		width: Numeric;
		auth: boolean;
	}>;

export const Button: FC<ButtonProps> = ({
	bgcolor,
	block,
	square,
	children,
	className,
	color,
	disabled,
	harline,
	height,
	href,
	icon,
	iconRight,
	iconRightSlot,
	iconSlot,
	label,
	loading,
	loadingConfig,
	loadingKeepText,
	nativeType = "button",
	hollow,
	round = "xs",
	size = "normal",
	style,
	to,
	type = "default",
	link,
	width,
	auth,
	borderless,
	...rest
}: ButtonProps) => {
	const Tag = to !== undefined ? "link" : href !== undefined ? "a" : "button";
	// const isButtonNode = Tag === "button";

	const props: Record<any, any> = {
		className: classnames("button", type, size, className, {
			// disabled: !isButtonNode && disabled,
			harline,
			square,
			["rounded--" + round]: round,
			["hairline"]: round,
			block,
			hollow,
			loading,
			borderless,
		}),
		style: Object.assign(
			{
				width: fixUnit(width),
				height: fixUnit(height),
				color,
				backgroundColor: bgcolor,
				backgroundImage: `linear-gradient(${bgcolor})`,
			},
			style
		),
		disabled: disabled || loading,
		...rest,
	};
	if (Tag == "link") props.to = to;
	else if (Tag == "a") props.href = href;
	else if (Tag == "button") props.type = nativeType;

	const text = children || label;

	return (
		<Tag {...props}>
			{loading && <Loading {...loadingConfig} />}
			<div className={classnames("button__inner", { white: !hollow, hidden: loading })}>
				{iconSlot || (icon && <Icon name={icon} />)}
				{text && <span className="button__text">{text}</span>}
				{iconRightSlot || (iconRight && <Icon name={iconRight} />)}
			</div>
		</Tag>
	);
};

export default Button;
