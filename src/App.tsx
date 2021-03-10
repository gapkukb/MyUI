import React, { Component } from "react";
import Stepper from "./package/stepper";

class App extends Component {
	state = {
		model: "外部传进来的值",
	};
	render() {
		return (
			<div>
				<Stepper placeholder="小数" min="5" max="1000"></Stepper>
				<Stepper placeholder="整数" min="5" max="1000" integer></Stepper>
			</div>
		);
	}
}
export default App;
