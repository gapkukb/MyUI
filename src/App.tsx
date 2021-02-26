//@ts-nocheck
import React, { useRef, useState } from "react";
import { VirtualScroller } from "./package/virtual-scroller";

const data = new Array(100000).fill(0).map((_, i) => ({ index: i, content: `content${i}` }));
function App() {
	const [state, setState] = useState<boolean>(true);
	setTimeout(() => {
		setState(false);
	}, 3000);

	return (
		<>
			<VirtualScroller
				data={data}
				render={(scope: typeof data[0]) => (
					<div key={scope.index} style={{ lineHeight: "40px", borderBottom: "1px solid red" }}>{scope.content}</div>
				)}
			></VirtualScroller>
		</>
	);
}

export default App;
