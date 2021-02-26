import React, { useRef, useState } from "react";
import AsyncView, { status } from "./package/async-view";
import { Img } from "./package/image";

function App() {
	const [state, setState] = useState<boolean>(true);
	setTimeout(() => {
		setState(false);
	}, 3000);

	return (
		<>
			{/* <div style={{ height: 1400 }}></div> */}
			<AsyncView state={status.loading}>abc</AsyncView>
			<AsyncView state={status.empty}>
				abc
				<div slot="empty-action">
					<button>返回</button>
				</div>
			</AsyncView>
			<AsyncView state={status.emptyByDeny}>abc</AsyncView>
			<AsyncView state={status.emptyByFilter}>abc</AsyncView>
			<AsyncView state={status.emptyBySearch}>abc</AsyncView>
			<AsyncView state={status.failed}>abc</AsyncView>
			<AsyncView state={status.failedByNetwork}>abc</AsyncView>
			<AsyncView state={status.failedBySever}>abc</AsyncView>
			<AsyncView state={status.failedByTimeout}>abc</AsyncView>
			<AsyncView state={status.ok}>abc</AsyncView>
		</>
	);
}

export default App;
