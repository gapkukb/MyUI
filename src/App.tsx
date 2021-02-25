import React, { useRef, useState } from "react";
import AsyncView, { AsyncStatus } from "./package/async-view";
import { Img } from "./package/image";

function App() {
	const [state, setState] = useState<boolean>(true);
	setTimeout(() => {
		setState(false);
	}, 3000);

	return (
		<>
			{/* <div style={{ height: 1400 }}></div> */}
			<AsyncView state={AsyncStatus.Loading}>abc</AsyncView>
		</>
	);
}

export default App;
