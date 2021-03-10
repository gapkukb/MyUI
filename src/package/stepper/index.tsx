import { FC, CSSProperties, useState, useRef, FormEvent, useEffect, KeyboardEvent } from "react";
import classnames from "classnames";
import "./index.styl";
import { FieldProps } from "../field";
import Button, { ButtonProps } from "../button";
import { call, number } from "../../util";
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
	onChange,
	...rest
}) => {
    const step = number(_step)!;
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
		const value = e.currentTarget.value;
		//禁用小数点符号
		if (e.key === ".") {
            const index = value.indexOf(".");
            console.log(index !== -1 , value.substring(index).length , decimal);
            
			if (decimal === 0) e.preventDefault();
			else if (index !== -1 && value.substring(index).length > decimal) {
				e.preventDefault();
			}
		} else if (e.key === "-") {
		} else if (e.key === "." && e.currentTarget.valueAsNumber) {
		}
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
				onKeyPress={press}
				onInput={() => console.log(12)}
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
