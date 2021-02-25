import React from "react";
import { Img } from "./index";

export default {
	title: "image",
	component: Img,
};
export const Demo = () => {
	return (
		<>
			<Img
				height="50vh"
				placeholder={false}
				lazy={false}
				src="https://cdn.pixabay.com/photo/2020/12/15/13/44/children-5833685__340.jpg"
			></Img>
			<Img
				height="50vh"
				lazy={false}
				src="https://cdn.pixabay.com/photo/2021/02/09/18/45/grass-5999566__340.jpg"
			></Img>
			<Img
				height="50vh"
				placeholder={false}
				src="https://cdn.pixabay.com/photo/2021/02/12/02/01/rosebud-6006985__340.jpg"
			></Img>
			<Img
				height="50vh"
				placeholder="https://cdn.pixabay.com/photo/2020/11/27/12/59/woman-5781862__340.jpg"
				src="https://cdn.pixabay.com/photo/2021/02/13/21/43/field-6012856__340.jpg"
			></Img>
			<Img
				height="50vh"
				src="https://cdn.pixabay.com/photo/2021/02/06/11/19/hot-air-balloon-5987843__340.jpg"
			></Img>
		</>
	);
};
