import React, { useRef } from "react";
import { Tab, Pane } from "./package/tab";

function App() {
	return (
		<>
			<Tab active="1">
				<Pane name="title1" id="1">
					content1
				</Pane>
				<Pane name="title2" id="2">
					content2
				</Pane>
				<Pane name="title3" id="3">
					content3
				</Pane>
				<Pane name="title4" id="4">
					content4
				</Pane>
				<Pane name="title5" id="5" disabled>
					content5
				</Pane>
			</Tab>
		</>
	);
}

export default App;
