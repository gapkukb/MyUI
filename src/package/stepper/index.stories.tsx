import React from "react";
import { Stepper, StepperProps } from "./index";
function changed(num: number) {
	console.log(num);
}
const asyncFunc: StepperProps["asyncFunc"] = (done, value) => {
	done(false);
};
export default {
	title: "stepper",
	component: Stepper,
};
export const Demo = () => {
	return (
		<>
			<div>
				<Stepper
					onChange={changed}
					placeholder="小数"
					min="-1"
					max="1000"
					step="0.1"
					asyncFunc={asyncFunc}
				></Stepper>
				<Stepper onChange={changed} placeholder="整数" min="5" max="1000" decimal="2"></Stepper>
			</div>
		</>
	);
};
