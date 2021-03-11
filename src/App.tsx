import React, { Component } from "react";
import Loading from "./package/loading";

class App extends Component {
	state = {
		model: "外部传进来的值",
	};
	render() {
		return (
			<>
				<Loading type="loading1"></Loading>
				<Loading type="loading2"></Loading>
				<Loading type="loading3"></Loading>
				<Loading type="loading4"></Loading>
				<Loading type="loading5"></Loading>
				<Loading type="loading6"></Loading>
				<Loading type="loading7"></Loading>
				<Loading type="loading8"></Loading>
			</>
		);
	}
}
export default App;
