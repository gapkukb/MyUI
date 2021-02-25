import React, { useRef, useState } from "react";
import { Img } from "./package/image";

function App() {
	const [state, setState] = useState<string | undefined>(undefined);
	setTimeout(() => {
		setState("http://10.11.16.103:8001/group1/M00/02/0E/CgsQZ158PSCAE0xMAAKtO6uN3h4833.jpg");
	}, 3000);

	return (
		<>
			<div style={{ height: 1400 }}></div>
			<Img width="10em" height="10em" src="https://gist.github.com/brettlangdon/85942af486eb79118467/raw/2a7409cd3c26a90b2e82bdc40dc7db18b92b3517/01151_inthedeep_2560x1600.jpg"></Img>
		</>
	);
}

export default App;
