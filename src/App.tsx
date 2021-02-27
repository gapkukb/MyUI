import React, { useRef, useState } from "react";
import { Popup } from "./package/popup";
import { PurePortal } from "./package/portal";

function App() {
	const [open, setOpen] = useState<boolean>(false);
	setTimeout(() => {
		setOpen(true);
	}, 2000);
	return (
		<>
			<div className="test">
				<div id="abc">这里是原来就有的内容</div>
				<PurePortal mount="#abc">
					<div>这里是Portal动态插入的内容</div>
				</PurePortal>
				<div id="efg">content to be overwritten</div>
			</div>
			{/* {new Array(100).fill(0).map((_, i) => (
				<div key={i}>11</div>
			))}
			<Popup open={true}>
				{new Array(10).fill(0).map((_, i) => (
					<div key={i}>22</div>
				))}
			</Popup>
			{open && (
				<Popup open={true}>
					{new Array(100).fill(0).map((_, i) => (
						<div key={i}>33</div>
					))}
				</Popup>
			)}
			<button onClick={() => setOpen((prev) => !prev)}>open</button> */}
		</>
	);
}

export default App;
