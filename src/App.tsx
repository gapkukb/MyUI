import React, { Component } from "react";
import Button from "./package/button";

class App extends Component {
	state = {
		model: "外部传进来的值",
		loading: false,
	};
	toggle = () => this.setState({ loading: true });
	render() {
		return (
			<>
				<Button
					type="primary"
					loading={this.state.loading}
					onClick={this.toggle}
					loadingConfig={{ text: "加载中..." }}
				>
					测试文字
				</Button>
				<Button type="primary" hollow loading={this.state.loading} onClick={this.toggle}>
					测试文字
				</Button>
				<Button type="primary" iconRight="wifi">
					测试文字
				</Button>
				<Button type="primary" icon="wifi">
					测试文字
				</Button>
				<Button type="danger" loading icon="wifi" iconRight="wifi">
					测试文字
				</Button>
				<Button disabled type="primary">
					测试文字
				</Button>
				<Button type="primary" href="" disabled>
					测试文字
				</Button>
			</>
		);
	}
}
export default App;
