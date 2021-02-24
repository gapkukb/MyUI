import React, { useRef } from "react";
import { Tab, Pane } from "./package/tab";

function App() {
	return (
		<>
			<Tab active="1" type="normal" data-pp="213" touchable>
				<Pane label="title1" name="1">
					content1
				</Pane>
				<Pane label="title2" name="2">
					content2
				</Pane>
				<Pane label="title3title3title3" name="3">
					content3
				</Pane>
				<Pane label="title4" name="4">
					content4
				</Pane>
				<Pane label="title5" name="5" disabled>
					content5
				</Pane>
			</Tab>

            <Tab active="1" lazy type="card">
				<Pane label="title1" name="1">
					content1
				</Pane>
				<Pane label="title2" name="2">
					content2
				</Pane>
				<Pane label="title3" name="3">
					content3
				</Pane>
				<Pane label="title4" name="4">
					content4
				</Pane>
				<Pane label="title5" name="5" disabled>
					content5
				</Pane>
			</Tab>

            <Tab active="1" type="button">
				<Pane label="title1" name="1">
					content1
				</Pane>
				<Pane label="title2" name="2">
					content2
				</Pane>
				<Pane label="title3" name="3">
					content3
				</Pane>
				<Pane label="title4" name="4">
					content4
				</Pane>
				<Pane label="title5" name="5" disabled>
					content5
				</Pane>
			</Tab>
		</>
	);
}

export default App;
