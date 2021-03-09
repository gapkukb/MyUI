import React, { Component } from "react";
import Stepper from "./package/stepper";

class App extends Component {
	state = {
		model: "外部传进来的值",
	};
	render() {
		return (
			<div>
				<Stepper></Stepper>
			</div>
		);
	}
}
export default App;
