import "./index.styl";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, CSSProperties, FC, ReactNode } from "react";
import { BEM, classnames } from "../../util/bem";
import "./index.styl";
import { fixUnit } from "../../util/unit";
import Icon from "../icon";
import Progress, { LodingProps } from "../loading";

export type ButtonProps = AnchorHTMLAttributes<HTMLElement> &
	Omit<ButtonHTMLAttributes<HTMLElement>, "type"> &
	Partial<{
		bgcolor: string;
		block: boolean;
		circle: boolean;
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
		loadingIcon: LodingProps["type"];
		nativeType: "button" | "submit" | "reset" | "image";
		hollow: boolean;
		replace: boolean;
		radius: Spacing | "round" | "circle";
		size: "normal" | "large" | "small" | "mini";
		style: CSSProperties;
		to: string;
		type: "primary" | "danger" | "default" | "success" | "info" | "warning" | "dark" | "light";
		link: boolean;
		width: Numeric;
	}>;

export const Button: FC<ButtonProps> = ({
	bgcolor,
	block,
	children,
	circle,
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
	loadingIcon,
	nativeType = "button",
	hollow,
	radius = "xs",
	size = "normal",
	style,
	to,
	type,
	link,
	width,
	...rest
}: ButtonProps) => {
	const Tag = to !== undefined ? "link" : href !== undefined ? "a" : "button";
	const isButtonNode = Tag === "button";
	const props: Record<any, any> = {
		className: classnames("button", type, size, !hollow && `solid`, className, {
			disabled: !isButtonNode && disabled,
			harline,
			["rounded--" + radius]: radius,
			block,
			hollow,
			circle,
			loading,
		}),
		style: Object.assign(
			{
				width: fixUnit(width),
				height: fixUnit(height),
				color,
				backgroundColor: bgcolor,
			},
			style
		),
		disabled: isButtonNode && (disabled || loading),
	};
	if (Tag == "link") props.to = to;
	else if (Tag == "a") props.href = href;
	else if (Tag == "button") props.type = nativeType;

	const text = children || label;
	const innerClassname = classnames("button__text", { button__loading: loading });
	return (
		<Tag {...props} {...rest}>
			{loading && <Progress type={loadingIcon} />}
			{iconSlot || (icon && <Icon name={icon} className="button__text" />)}
			{text && <span className={innerClassname}>{text}</span>}
			{iconRightSlot || (iconRight && <Icon name={iconRight} className={innerClassname} />)}
		</Tag>
	);
};

Button.defaultProps = {
	type: "default",
	nativeType: "button",
	size: "normal",
};

export default Button;
