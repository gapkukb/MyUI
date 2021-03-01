import React, { Component } from "react";
import Popover from "./package/popover";
import { isPassive } from "./util/component/handler";
console.log(isPassive());

class App extends Component {
	render() {
		return <div>{/* <Popover></Popover> */}</div>;
	}
}
export default App;
