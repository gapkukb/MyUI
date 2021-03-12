import React from "react";
import { Loading, LoadingProps } from "./index";

var defaults = {
	title: "Loading",
	component: Loading,
};
export default defaults;

export const IconColor = () => (
	<>
		{[100, 16].map((px) => {
			return (
				<div style={{ fontSize: px }}>
					<Loading show text="加载中..." vertical color="red" textColor="blue"></Loading>
					<Loading type="facebook"></Loading>
					<Loading type="ios"></Loading>
					<Loading type="huawei"></Loading>
					<Loading type="spiner1"></Loading>
					<Loading type="spiner2"></Loading>
					<Loading type="spiner3"></Loading>
					<Loading type="chrome"></Loading>
					<Loading type="ripple"></Loading>
					<Loading type="hourglass"></Loading>
					<Loading type="wave"></Loading>
					<Loading type="clock"></Loading>
					<Loading type="flow"></Loading>
				</div>
			);
		})}
	</>
);
