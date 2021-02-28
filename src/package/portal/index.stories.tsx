import React, { Component } from "react";
import { PurePortal, Portal } from "./index";

export default {
	title: "portal",
	component: PurePortal,
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
		return (
			<div className="zent-doc-portal-container">
				<div className="zent-doc-portal-mount-node">这里是原来就有的内容</div>
				<Portal mount=".zent-doc-portal-mount-node">
					<div className="zent-doc-portal-content">这里是 Portal 动态插入的内容</div>
				</Portal>

				<div className="zent-doc-pure-portal-mount-node">content to be overwritten</div>
				{this.state.purePortalVisible ? (
					<PurePortal mount=".zent-doc-pure-portal-mount-node">
						<div className="zent-doc-portal-content">
							这里是 PurePortal 动态插入的内容, 覆盖容器内原有内容
						</div>
					</PurePortal>
				) : null}
				<button onClick={this.togglePurePortal}>Toggle PurePortal</button>
				<button onClick={this.showBodyPortal}>添加带遮罩的Portal到body</button>
				<Portal
					visible={this.state.bodyPortalVisible}
					onClose={this.hideBodyPortal}
					className="layer"
					style={{ background: "rgba(0, 0, 0, 0.2)" }}
					closeByLayer
					closeByOutside
					esc
					scrollable
				>
					<div
						className="zent-doc-portal-content"
						style={{
							position: "absolute",
							left: "50%",
							top: "50%",
							transform: "translate3d(-50%, -50%, 0)",
							border: "1px solid #d3d3d3",
							borderRadius: "3px",
							padding: "50px",
							background: "white",
						}}
					>
						默认插入到body最后，并设置为拥有遮罩用于关闭
					</div>
				</Portal>
			</div>
		);
	}
}
