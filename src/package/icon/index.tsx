import React from "react";
import classnames from "classnames";
import { fixUnit } from "../../util/unit";
import "../../fontawesome/css/all.css";
import "./index.styl";

export type IconProps = Partial<{
	family: string;
	prefix: string;
	badge: string | number | boolean;
	color: string;
	size: Numeric;
	tag: "i" | "span";
	brand: boolean;
	className: string;
	onClick: Function;
}> & { name: string };

export function Icon({
	tag = "i",
	family = "fa",
	prefix = "fa-",
	brand,
	name,
	badge,
	size,
	color,
	onClick,
	className,
	...rest
}: IconProps): JSX.Element {
	console.log(onClick);

	const isImg = name.includes(".");
	const Tag = tag as any;
	const props = {
		...rest,
		className: classnames("icon", brand ? "fab" : family, prefix + name, className, {
			clickable: onClick,
		}),
		style: {
			fontSize: fixUnit(size),
			color,
		},
	};

	return (
		<Tag {...props} aria-hidden="true">
			{isImg && <img className="icon__img" src={name} alt="" />}
			{badge && <b className="icon__badge">{badge}</b>}
		</Tag>
	);
}

export default Icon;
