import React from "react";
import { Button, ButtonProps } from "./index";

var defaults = {
	title: "Button",
	component: Button,
};
export default defaults;

export const IconColor = () => {
	const arr: ButtonProps["type"][] = ["default", "danger", "primary", "success", "warning", "info", "light", "dark"];
	const sizes: ButtonProps["size"][] = ["large", "normal", "small", "mini"];
	const start = sizes.length + 1;
	const factory = (options?: Record<string, any>) => {
		return (
			<div>
				{arr.map((item, index) => (
					<Button key={item} type={item} size={sizes[index - start]} label="按钮" {...options}></Button>
				))}
				{arr.map((item, index) => (
					<Button
						key={item}
						type={item}
						size={sizes[index - start]}
						hollow
						label="按钮"
						{...options}
					></Button>
				))}
			</div>
		);
	};
	return (
		<>
			{factory()}
			{factory({ disabled: true })}
			{factory({ icon: "bars", href: "", round: true })}
			{factory({ icon: "bars", iconRight: "archive" })}
			{factory({ icon: "bars", label: "", circle: true })}
			{factory({ icon: "bars", label: "", loading: true, loadingIcon: "clock" })}
			{factory({ ghost: true })}
		</>
	);
};
