import React from "react";
import { Switch, SwitchProps } from "./index";
const before: SwitchProps["onBeforeChange"] = (done, state) => {
	if (window.confirm(`是否切换`)) {
		done(!state);
	} else {
		done();
	}
};
export default {
	title: "switch",
	component: Switch,
};
export const Demo = () => {
	return (
		<>
			<Switch onBeforeChange={before}></Switch>
			<Switch active></Switch>
			<Switch disabled></Switch>
			<Switch loading></Switch>
			<Switch size="large"></Switch>
			<Switch size="normal"></Switch>
			<Switch size="small"></Switch>
			<Switch size="mini"></Switch>
			<Switch inactiveColor="green" color="red"></Switch>
		</>
	);
};
