import React, { Component } from "react";
import { PurePortal, Portal, PortalProps } from "./package/portal";
const onBeforeClose: PortalProps["onBeforeClose"] = (done, action) => {
	if (action) {
		done(true);
	} else {
		done(false);
		done();
	}
};
const onClose: PortalProps["onClose"] = (action) => {};
class App extends Component {
	state = {
		body: false,
		pure: false,
	};
	toggle = () => this.setState({ pure: !this.state.pure });
	show = () => this.setState({ body: true });
	hide = () => this.setState({ body: false });

	render() {
		return (
			<>
				<div className="el">
					<div className="el1">这里是原来就有的内容</div>
					<Portal selector=".el1">
						<div className="el2">这里是Portal动态添加的内容</div>
					</Portal>
					<div className="el3">这里的内容将被替换</div>
					{this.state.pure ? (
						<PurePortal selector=".el3">
							<div className="el4">这里是异步替换的内容</div>
						</PurePortal>
					) : null}
					<div className="el9">这里的内容将被增加</div>
					{this.state.pure ? (
						<PurePortal selector=".el9" replace={false}>
							<div className="el4">这里是异步增加的内容</div>
						</PurePortal>
					) : null}

					<button onClick={this.toggle}>toggle pure</button>
					<button onClick={this.show}>添加portal并挂载到body</button>
					<Portal
						visible={this.state.body}
						onClose={this.hide}
						className="overlay"
						style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
						closeByOutside
						closeByOverlay
						closeByESC
						lockScroller
					>
						<div
							className="el5"
							style={{
								position: "absolute",
								left: "50%",
								top: "50%",
								transform: "translate3d(-50%,-50%,0)",
								border: "1px solid #d3d3d3",
								borderRadius: "4px",
								padding: "40px",
								backgroundColor: "white",
							}}
						>
							这里是弹窗内容
						</div>
					</Portal>
					<div>
						填充文字,填充文字,填充文字,填充文字,填充文字,填充文字,填充文字,填充文字,填充文字,填充文字,填充文字,填充文字,填充文字,填充文字,填充文字,填充文字,填充文字,填充文字,填充文字,填充文字,填充文字,填充文字,填充文字,填充文字,填充文字,填充文字,填充文字,填充文字,填充文字,填充文字,填充文字,填充文字,填充文字,填充文字,
					</div>
				</div>
			</>
		);
	}
}
export default App;
