import { FC, CSSProperties, useState, useRef, FormEvent, useEffect, KeyboardEvent } from "react";
import classnames from "classnames";
import "./index.styl";
import { FieldProps } from "../field";
import Button, { ButtonProps } from "../button";
import { call, number } from "../../util";
import { fixUnit } from "../../util/unit";
export type StepperProps = Partial<{
	/** 最小值，失去焦点时触发 */
	min: Numeric;
	/** 最大值，失去焦点时触发 */
	max: Numeric;
	/** 步长 */
	step: Numeric;
	/** 小数位 */
	decimal: Numeric;
	/** 异步模式 */
	async: boolean;
	/** 可输入数字 */
	editable: boolean;
	/** 显示减少按钮 */
	showDecrease: boolean;
	/** 显示增加按钮 */
	showIncrease: boolean;
	/** 禁用减少按钮 */
	disableDecrease: boolean;
	/** 禁用增加按钮 */
	disableIncrease: boolean;
	/** 按钮大小 */
	buttonSize: ButtonProps["size"];
	/** 文字对齐 */
	align: FieldProps["inputAlign"];
	/** 回调函数 */
	onChange: (output: number) => any;
}> &
	Pick<FieldProps, "width" | "defaultValue" | "disabled" | "readOnly" | "placeholder" | "formatter" | "trigger">;

export const Stepper: CFC<StepperProps> = ({
	min,
	max,
	decimal: _decimal = 0,
	width,
	defaultValue,
	readOnly,
	placeholder,
	step = 1,
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
	onChange,
	...rest
}) => {
	const decimal = number(_decimal)!;
	const [value, setValue] = useState(number(defaultValue));
	const inputRef = useRef<HTMLInputElement>(null);

	const _disableDecrease = disabled || disableDecrease || ((value && min && value <= min) as boolean);
	const _disableIncrease = disabled || disableIncrease || ((value && max && value >= max) as boolean);

	function update(input: number | FormEvent<HTMLInputElement>) {
		let output: number;
		if (typeof input === "number") {
			output = input;
		} else {
			const el = input.currentTarget;
			output = el.valueAsNumber;
			if (input.type === "blur") {
				if (max && output > max) {
					output = Number(max);
				} else if (min && output < min) {
					output = Number(min);
				}
				el.value = "";
				el.value = ((output as unknown) as string) || "";
			} else {
				if ((max && output > max) || (min && output < min)) {
					return;
				}
			}
		}
		if (output === value) return;
		setValue(output);
		call(onChange, output);
	}
	function press(e: KeyboardEvent<HTMLInputElement>) {
		const el = e.currentTarget;
		const key = e.key;
		const value = el.value;
		const index = value.indexOf(".");
		//  处理+ - . 三种符号和小数位
		if (
			key === "+" ||
			(key === "0" && value === "") ||
			(key === "." && (decimal === 0 || value === "")) ||
			(key === "-" && ((min && min >= 0) || !el.validity.valid)) ||
			(index !== -1 && value.substring(index).length > decimal)
		) {
			e.preventDefault();
			return false;
		}
	}

	function set(action: "stepDown" | "stepUp") {
		const el = inputRef.current!;
		el[action]();
		update(el.valueAsNumber);
	}
	const decrease = set.bind(null, "stepDown");
	const increase = set.bind(null, "stepUp");
	return (
		<div className="stepper" style={{ width: fixUnit(width) }}>
			<Button
				borderless
				round="no"
				icon="wifi"
				size={buttonSize}
				disabled={_disableDecrease}
				onClick={decrease}
			/>
			<input
				className={classnames("stepper__value", align)}
				type="number"
				defaultValue={value}
				step={step}
				onChange={update}
				onBlur={update}
				onKeyPress={press}
				role="stepper"
				ref={inputRef}
				min={min}
				max={max}
				aria-valuemin={min as number}
				aria-valuemax={max as number}
				aria-valuenow={(value as unknown) as number}
			/>
			<Button
				borderless
				round="no"
				icon="wifi"
				size={buttonSize}
				disabled={_disableIncrease}
				onClick={increase}
			/>
		</div>
	);
};
Stepper.displayName = Stepper.name;
export default Stepper;
