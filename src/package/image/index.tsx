import { FC, ImgHTMLAttributes, useEffect, useLayoutEffect, useRef, useState } from "react";
import classnames from "classnames";
import "./index.styl";
import Lazy from "../../util/lazy";
import { noop } from "../../util";
export const config = {
	placeholder: "", // data uri 图片
	error: "",
};
export type ImageProps = Partial<{
	lazy: boolean;
	fit: "contain" | "cover" | "fill" | "none" | "scale";
	placeholder: string | false;
	delay: Numeric;
	error: string;
}> &
	Omit<ImgHTMLAttributes<HTMLImageElement>, "placeholder">;
function hasUnit(input: Numeric): boolean {
	if (isNaN(Number(input))) return !(input as string).endsWith("%");
	return false;
}
export const Img: FC<ImageProps> = ({
	className,
	style,
	children,
	fit = "cover",
	width = "100%",
	height = "100%",
	lazy = true,
	placeholder,
	error,
	src,
	onClick = noop,
	...rest
}) => {
	const ref = useRef<HTMLImageElement>(null);
	useLayoutEffect(() => {
		Lazy.add(ref.current!);
		return () => Lazy.remove(ref.current!);
	}, [src]);
	const w = hasUnit(width);
	const h = hasUnit(height);

	const props = {
		"className": classnames("image", fit, {}),
		"style": {
			width: w ? width : undefined,
			height: h ? height : undefined,
			...style,
		},
		"width": w ? undefined : width,
		"height": h ? undefined : height,
		"data-lazy": lazy,
		"data-src": src,
		"data-error": error,
		"data-placeholder": placeholder,
		ref,
		onClick,
		...rest,
	};

	return <img {...props} />;
};
export default Img;
