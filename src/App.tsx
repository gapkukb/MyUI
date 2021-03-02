import React, { Component } from "react";
import Button, { ButtonProps } from "./package/button";
import Fab from "./package/float-action-button";
import Popover from "./package/popover";
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
				<Button key={item} type={item} size={sizes[index - start]} hollow label="按钮" {...options}></Button>
			))}
		</div>
	);
};
class App extends Component {
	render() {
		return (
			<div>
				<div>
					<Button>实心按钮</Button>
				</div>

				<Fab></Fab>
			</div>
		);
	}
}
export default App;
