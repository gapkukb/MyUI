import { FC, ImgHTMLAttributes, useEffect, useLayoutEffect, useRef, useState } from "react";
import classnames from "classnames";
import "./index.styl";
import Lazy from "../../util/lazy";
import { noncestr, noop } from "../../util";
const _placeholder =
	"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M224%20387.814V512L32 320l192-192v126.912C447.375 260.152 437.794 103.016 380.93 0 521.287 151.707 491.48 394.785 224 387.814z'/%3E%3C/svg%3E";
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
	const holder = placeholder === false ? undefined : placeholder || _placeholder;
	useLayoutEffect(() => {
		Lazy.add({
			lazy,
			element: ref.current!,
			src,
			placeholder: holder,
			error,
		});
		return () => {
			Lazy.remove(ref.current!);
		};
	}, [src]);
	const w = hasUnit(width);
	const h = hasUnit(height);

	const props = {
		className: classnames("image", fit, {}),
		style: {
			width: w ? width : undefined,
			height: h ? height : undefined,
			...style,
		},
		width: w ? undefined : width,
		height: h ? undefined : height,
		ref,
		src: holder,
        onClick,
		...rest,
	};

	return <img {...props}/>;
};
export default Img;
