import React from "react";
import { Button, ButtonProps } from "./index";
const arr: ButtonProps["type"][] = ["default", "danger", "primary", "success", "warning", "info", "light", "dark"];
const sizes: ButtonProps["size"][] = ["large", "normal", "small", "mini"];
const types: ButtonProps["type"][] = ["default", "danger", "dark", "info", "light", "primary", "success", "warning"];
const colors: ButtonProps["color"][] = ["gold", "#5a1513", "rgba(146,94,93,0.5)"];
const bgcolors: ButtonProps["bgcolor"][] = ["gold", "#5a1513", "rgba(146,94,93,0.5)", "to right, #ff6034, #ee0a24"];

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
			<div>
				<div>
					<span>实心：</span>
					{types.map((type) => (
						<Button type={type}>{type}</Button>
					))}
				</div>
				<div>
					<span>空心：</span>
					{types.map((type) => (
						<Button type={type} hollow>
							{type}
						</Button>
					))}
				</div>
				<div>
					<span>尺寸</span>
					{sizes.map((size) => (
						<Button size={size}>{size}</Button>
					))}
					<Button width="300" height="60">
						通过width和height控制具体尺寸
					</Button>
				</div>
				<div>
					<span>禁用</span>
					{types.map((type) => (
						<Button type={type} disabled>
							{type}
						</Button>
					))}
					<Button width="300" height="60">
						通过width和height控制具体尺寸
					</Button>
				</div>
				<div>
					<span>导航守卫</span>
					<Button>URL导航</Button>
					<Button>路由导航</Button>
				</div>
				<Button block>块级按钮 block</Button>
				<div>
					<span>自定义颜色：</span>
					{colors.map((color) => (
						<>
							<Button color={color}>{color}</Button>
							<Button color={color} hollow>
								{color}
							</Button>
						</>
					))}
				</div>
				<div>
					<span>自定义背景色,支持渐变：</span>
					{bgcolors.map((color) => (
						<Button bgcolor={color} hollow>
							{color}
						</Button>
					))}
				</div>
				<div>
					<span>图标</span>
					<Button icon="wifi" iconRight="wifi">
						图标按钮
					</Button>
					<Button icon="wifi"></Button>
				</div>
				<div>
					<span>圆角</span>
					<Button>圆角按钮</Button>
					<Button round="no">圆角按钮</Button>
					<Button round="xl">圆角按钮</Button>
					<Button round="lg">圆角按钮</Button>
					<Button round="md">圆角按钮</Button>
					<Button round="sm">圆角按钮</Button>
					<Button round="xs">圆角按钮</Button>
					<Button round="pill">圆角按钮</Button>
					<Button round="circle">圆角按钮</Button>
				</div>
				<div>
					<span>细边框</span>
					<Button hollow round="no">
						圆角按钮
					</Button>
					<Button hollow round="xl">
						圆角按钮
					</Button>
					<Button hollow round="lg">
						圆角按钮
					</Button>
					<Button hollow round="md">
						圆角按钮
					</Button>
					<Button hollow round="sm">
						圆角按钮
					</Button>
					<Button hollow round="xs">
						圆角按钮
					</Button>
					<Button hollow round="pill">
						圆角按钮
					</Button>
					<Button hollow round="circle">
						圆角按钮
					</Button>
				</div>
			</div>
		</>
	);
};
