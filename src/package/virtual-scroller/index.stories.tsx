import React from "react";
import { VirtualScroller } from "./index";
const data = new Array(100000).fill(0).map((_, i) => ({ index: i, content: `content${i}` }));
export default {
	title: "virtual-scroller",
	component: VirtualScroller,
};
export const Demo = () => {
	return (
		<VirtualScroller
			data={data}
			render={(scope: typeof data[0]) => (
				<div key={scope.index} style={{ lineHeight: "40px", borderBottom: "1px solid red" }}>
					{scope.content}
				</div>
			)}
		></VirtualScroller>
	);
};
