import React, { Component } from "react";
import { Dialog } from "./package/dialog";
import Popup from "./package/popup";

class App extends Component {
	state = { visible: false };

	setVisible = (visible: boolean) => {
		this.setState({ visible });
	};

	render() {
		return (
			<div>
				<button onClick={() => this.setVisible(true)}>显示</button>
				{/* <Dialog
					visible={this.state.visible}
					onClose={() => this.setVisible(false)}
					footer={<button onClick={() => this.setVisible(false)}>关闭</button>}
					title="对话框"
				>
					<p>对话框内容</p>
					<p>对话框其他内容</p>
				</Dialog>
				<Dialog
					visible={this.state.visible}
					onClose={() => this.setVisible(false)}
					footer={<button onClick={() => this.setVisible(false)}>关闭</button>}
					title="对话框"
				>
					<p>对话框内容</p>
					<p>对话框其他内容</p>
				</Dialog> */}
				<Popup visible={this.state.visible}></Popup>
			</div>
		);
	}
}
export default App;
