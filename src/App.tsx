import React, { Component } from "react";
import Stepper, { StepperProps } from "./package/stepper";
import Switch, { SwitchProps } from "./package/switch";
const before: SwitchProps["onBeforeChange"] = (done, state) => {
	if (window.confirm(`是否切换`)) {
		done(!state);
	} else {
		done();
	}
};
class App extends Component {
	state = {
		model: "外部传进来的值",
	};
	render() {
		return (
			<>
				<Switch></Switch>
				<Switch active></Switch>
				<Switch disabled></Switch>
				<Switch loading></Switch>
				<Switch size="large"></Switch>
				<Switch size="normal"></Switch>
				<Switch size="small"></Switch>
				<Switch size="mini"></Switch>
				<Switch inactiveColor="green" color="red"></Switch>
			</>
		);
	}
}
export default App;
