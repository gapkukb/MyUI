import React, { Component, useRef, useState } from "react";
import { Popup } from "./package/popup";
import { Portal } from "./package/portal";
import { PurePortal } from "./package/portal/pure-portal";

// function App() {
// 	const [bodyPortalVisible, setBodyPortalVisible] = useState<boolean>(false);
// 	const [purePortalVisible, setPurePortalVisible] = useState<boolean>(false);
// 	const toggle = () => {
// 		setBodyPortalVisible(true);
// 		setPurePortalVisible(true);
// 	};
// 	console.log(`app`);

// 	return (
// 		<>
// 			<div className="test">
// 				<div id="abc">这里是原来就有的内容</div>
// 				<Portal mount="#abc">
// 					<div>这里是Portal动态插入的内容</div>
// 				</Portal>
// 				<div id="efg">content to be overwritten</div>
// 				{purePortalVisible && (
// 					<PurePortal mount="#efg">
// 						<div>这里是 PurePortal 动态插入的内容, 覆盖容器内原有内容</div>
// 					</PurePortal>
// 				)}
// 				<button onClick={toggle}>toggle</button>
// 			</div>
// 			{/* {new Array(100).fill(0).map((_, i) => (
// 				<div key={i}>11</div>
// 			))}
// 			<Popup open={true}>
// 				{new Array(10).fill(0).map((_, i) => (
// 					<div key={i}>22</div>
// 				))}
// 			</Popup>
// 			{open && (
// 				<Popup open={true}>
// 					{new Array(100).fill(0).map((_, i) => (
// 						<div key={i}>33</div>
// 					))}
// 				</Popup>
// 			)}
// 			<button onClick={() => setOpen((prev) => !prev)}>open</button> */}
// 		</>
// 	);
// }
class App extends Component {
	state = {
		bodyPortalVisible: false,
		purePortalVisible: false,
	};
	togglePurePortal = () => {
		console.log(1);

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

				<div className="zent-doc-pure-portal-mount-node">
					<div>content to be overwritten</div>
					<div>content to be overwritten2</div>
					<div>content to be overwritten3</div>
				</div>
				{this.state.purePortalVisible ? (
					<PurePortal mount=".zent-doc-pure-portal-mount-node" replace={false}>
						<div className="zent-doc-portal-content">
							这里是 PurePortal 动态插入的内容, 覆盖容器内原有内容
						</div>
					</PurePortal>
				) : null}
				<button onClick={this.togglePurePortal}>Toggle PurePortal</button>
				<button onClick={this.showBodyPortal}>添加带遮罩的Portal到body</button>
				{/* <Portal
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
				</Portal> */}
			</div>
		);
	}
}
export default App;
