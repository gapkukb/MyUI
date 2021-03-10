import { FC, CSSProperties, useState, useRef, FormEvent, useEffect, KeyboardEvent } from "react";
import classnames from "classnames";
import "./index.styl";
import { FieldProps } from "../field";
import Button, { ButtonProps } from "../button";
import { call, number } from "../../util";
export type StepperProps = Partial<{
	min: Numeric;
	max: Numeric;
	step: Numeric;
	async: boolean;
	editable: boolean;
	showDecrease: boolean;
	showIncrease: boolean;
	disableDecrease: boolean;
	disableIncrease: boolean;
	integer: boolean;
	buttonSize: ButtonProps["size"];
	align: FieldProps["inputAlign"];
	onChange: (output: number) => any;
}> &
	Pick<FieldProps, "width" | "defaultValue" | "disabled" | "readOnly" | "placeholder">;

export const Stepper: CFC<StepperProps> = ({
	min,
	max,
	width,
	defaultValue,
	readOnly,
	placeholder,
	step: _step = 1,
	async,
	editable,
	showDecrease,
	showIncrease,
	disableDecrease,
	disableIncrease,
	disabled,
	className,
	style,
	children,
	buttonSize = "mini",
	align = "center",
	integer,
	onChange,
	...rest
}) => {
	const step = number(_step)!;
	const [value, setValue] = useState(number(defaultValue));
	const inputRef = useRef<HTMLInputElement>(null);

	const _disableDecrease = disabled || disableDecrease || ((value && min && value <= min) as boolean);
	const _disableIncrease = disabled || disableIncrease || ((value && max && value >= max) as boolean);
	function update(input: number | FormEvent<HTMLInputElement>) {
		let output: number;
		if (typeof input === "number") {
			output = input;
		} else {
			output = input.currentTarget.valueAsNumber;
			if (input.type === "blur") {
				if (max && output > max) output = Number(max);
				else if (min && output < min) output = Number(min);
				if (output) input.currentTarget.value = (output as unknown) as string;
			}
		}
		setValue(output);
		call(onChange, output);
	}
	function set(action: "stepDown" | "stepUp") {
		const el = inputRef.current!;
		el[action]();
		update(el.valueAsNumber);
	}
	const decrease = set.bind(null, "stepDown");
	const increase = set.bind(null, "stepUp");
	function press(e: KeyboardEvent<HTMLInputElement>) {
		e.currentTarget.validity.valid || (e.currentTarget.value = e.currentTarget.value.replace(/\D+/g, ""));

		// if (!e.currentTarget.validity.valid) e.preventDefault();
		// if (e.key === "+") e.preventDefault();
		// else if (e.key === ".") {
		// 	if (integer || e.currentTarget.value.length === 0) e.preventDefault();
		// } else if (e.key === "-") {
		// }
		// if (integer && e.key === ".") e.preventDefault();
		// else if (e.key === "." && e.currentTarget.valueAsNumber) {
		// }
	}
	return (
		<div className="stepper">
			<Button icon="wifi" size={buttonSize} disabled={_disableDecrease} onClick={decrease} />
			<input
				className={classnames("stepper__value", align)}
				type="number"
				defaultValue={value}
				// step={step}
				// onChange={update}
				// onBlur={update}
				onInput={press}
				role="stepper"
				ref={inputRef}
				// min={min}
				// max={max}
				aria-valuemin={min as number}
				aria-valuemax={max as number}
				aria-valuenow={(value as unknown) as number}
			/>
			<Button icon="wifi" size={buttonSize} disabled={_disableIncrease} onClick={increase} />
		</div>
	);
};
Stepper.displayName = Stepper.name;
export default Stepper;
