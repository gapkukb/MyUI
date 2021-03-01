import React, { Component } from "react";
import Button, { ButtonProps } from "./package/button";
import Fab from "./package/float-action-button";
import Popover from "./package/popover";
const arr: ButtonProps["type"][] = [
	"default",
	"danger",
	"primary",
	"success",
	"warning",
	"info",
	"link",
	"light",
    "dark",
    
];
const sizes: ButtonProps["size"][] = ["large", "normal", "small", "mini"];
const start = sizes.length + 1;
const factory = (options?: Record<string, any>) => {
	return (
		<div>
			{arr.map((item, index) => (
				<Button key={item} type={item} size={sizes[index - start]} label="按钮" {...options}></Button>
			))}
			{arr.map((item, index) => (
				<Button key={item} type={item} size={sizes[index - start]} outline label="按钮" {...options}></Button>
			))}
		</div>
	);
};
class App extends Component {
	render() {
		return (
			<div>
                <Button block harline loading>发链接连接按时付款就类似的看法距离首都里的精神分裂的凯撒附件胜多负少</Button>
				{factory()}
				{factory({ disabled: true })}
				{factory({ icon: "bars", href: "", round: true })}
				{factory({ icon: "bars", iconRight: "archive" })}
				{factory({ icon: "bars", label: "", circle: true })}
				{factory({ icon: "bars", label: "", loading: true, loadingIcon: "clock" })}
				{factory({ ghost: true })}
				<Fab></Fab>
			</div>
		);
	}
}
export default App;
