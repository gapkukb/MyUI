import React, { Component } from "react";
import { Portal } from "./index";

export default {
	title: "portal",
	component: Portal,
};
class App extends Component {
	state = {
		bodyPortalVisible: false,
		purePortalVisible: false,
	};
	togglePurePortal = () => {
		this.setState({ purePortalVisible: !this.state.purePortalVisible });
	};
	showBodyPortal = () => this.setState({ bodyPortalVisible: true });
	hideBodyPortal = () => this.setState({ bodyPortalVisible: false });

	render() {
		return <div></div>;
	}
}
