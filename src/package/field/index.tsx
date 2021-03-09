import {
	FC,
	CSSProperties,
	ReactNode,
	HTMLAttributes,
	useState,
	FormEvent,
	InputHTMLAttributes,
	useRef,
	useEffect,
	KeyboardEvent,
} from "react";
import classnames from "classnames";
import "./index.styl";
import Icon from "../icon";
import { fixUnit } from "../../util/unit";
import { nope } from "../../util";
import { preventDefault } from "../../util/dom";

type Align = "left" | "right" | "center";

export type FieldProps = Partial<{
	value: string;
	autosize: boolean;
	autoFocus: boolean;
	bordered: boolean;
	button: ReactNode;
	center: boolean;
	className: string;
	clearable: boolean;
	colon: boolean;
	defaultValue: string;
	disabled: boolean;
	error: ReactNode;
	formatter: (input: string) => string;
	icon: ReactNode;
	id: string;
	inputAlign: Align;
	label: ReactNode;
	labelAlign: Align;
	labelClassName: string;
	labelWidth: Numeric;
	maxLength: Numeric;
	messageAlign: Align;
	name: string;
	onBlur: (e: FormEvent<HTMLInputElement>) => void;
	onInput: (e: FormEvent<HTMLInputElement>) => void;
	onChange: (e: FormEvent<HTMLInputElement>) => void;
	onClear: (el: HTMLInputElement) => void;
	onFocus: (e: FormEvent<HTMLInputElement>) => void;
	onClick: (e: MouseEvent) => void;
	onIconClick: (e: MouseEvent) => void;
	onInputClick: (e: MouseEvent) => void;
	onRightIconClick: (e: MouseEvent) => void;
	onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
	onEnter: (e: KeyboardEvent<HTMLInputElement>) => void;
	placeholder: string;
	prefix: ReactNode;
	readOnly: boolean;
	required: boolean;
	resizable: boolean;
	rightIcon: ReactNode;
	rows: Numeric;
	showLimit: boolean;
	size: "small" | "normal" | "large";
	style: CSSProperties;
	success: ReactNode;
	suffix: ReactNode;
	type: "text" | "number" | "integer" | "tel" | "email" | "password" | "url" | "search" | "textarea";
	trim: boolean;
	negative: boolean;
	trigger: "onchange" | "oninput";
	width: Numeric;
	height: Numeric;
	number: boolean;
}>;
const inputEvent = new Event("input", { bubbles: true });
export const Field = ({
	value = "",
	autoFocus,
	autosize = true,
	bordered = true,
	button,
	center,
	className,
	clearable = true,
	colon,
	defaultValue = "",
	disabled,
	error,
	formatter,
	icon,
	id,
	inputAlign = "left",
	label,
	labelAlign = "left",
	labelClassName,
	labelWidth,
	maxLength,
	messageAlign = "left",
	name,
	onInput,
	onBlur,
	onChange,
	onClear,
	onClick,
	onFocus,
	onIconClick,
	onInputClick,
	onRightIconClick,
	onKeyPress,
	onEnter,
	placeholder,
	prefix,
	readOnly,
	resizable,
	required,
	rightIcon,
	rows = 1,
	showLimit,
	size = "normal",
	style,
	success,
	suffix,
	type = "text",
	trim = true,
	trigger = "onchange",
	width,
	negative,
	height,
	number = true,
}: FieldProps) => {
	const [focus, setFocus] = useState(false);
	const [model, setModel] = useState("");
	const fieldRef = useRef<HTMLInputElement>(null);
	let composition = false;
	function updateValue(value: string, _trigger: typeof trigger = "onchange") {
		if (type === "integer" || type === "number") {
			value = formatNumber(value, type === "number", negative);
		}
		if (formatter && trigger === _trigger) {
			value = formatter(value);
		}
		const el = fieldRef.current!;
		if (el.value !== value) el.value = value;
	}
	function handlerChange(e: FormEvent<HTMLInputElement>) {}
	function handleBlur(e: FormEvent<HTMLInputElement>) {}
	function handleFocus(e: FormEvent<HTMLInputElement>) {}
	function handleInputClick(e: FormEvent<HTMLInputElement>) {}
	function handlerInput(e: FormEvent<HTMLInputElement>) {
		if (composition) return;
		let value = e.currentTarget.value;
		if (trim) value = value.trim();
		updateValue(e.currentTarget.value);
	}
	function handleComposition(e: FormEvent<HTMLInputElement>) {
		composition = e.type !== "compositionend";
		!composition && handlerInput(e);
	}
	function handleClear(e: FormEvent<HTMLInputElement>) {
		const el = fieldRef.current!;
		el.value = "";
		el.focus();
		el.dispatchEvent(inputEvent);
		call(onClear, el);
	}
	function handleKeyPress(e: KeyboardEvent<HTMLInputElement>) {
		if (e.charCode === 13 || e.key.toLowerCase() === "enter") {
			if (type !== "textarea") {
				e.preventDefault();
				call(onEnter, e);
			}
			if (type === "search") e.currentTarget.blur();
		}
		call(onKeyPress, e);
	}

	const labelProps = {};
	const inputProps = {
		type,
		className: classnames("field__value", inputAlign, resizable),
		placeholder,
		disabled,
		readOnly,
		defaultValue,
		maxLength: maxLength as number,
		name,
		id,
		autoFocus: autoFocus,
		ref: fieldRef,
		onChange: handlerChange,
		onBlur: handleBlur,
		onFocus: handleFocus,
		onInput: handlerInput,
		onClick: handleInputClick,
		onCompositionStart: handleComposition,
		onCompositionEnd: handleComposition,
		onKeyPress: handleKeyPress,
	};
	if (type === "integer") {
		Object.assign(inputProps, {
			type: "tel",
			inputMode: "numeric",
		});
	} else if (type === "number") {
		Object.assign(inputProps, {
			type: "text",
			inputMode: "decimal",
		});
	}

	function genIcon(input: typeof icon, classname: string, handler?: Function) {
		if (!icon) return undefined;

		const props = {
			className: classnames("field__icon", "field__icon--" + classname, { field__click: handler }),
			onClick: handler,
		} as any;
		return (
			<div {...props}>{typeof input === "string" ? <Icon name={input} className={classname}></Icon> : icon}</div>
		);
	}
	function genLabel() {
		if (typeof label === "string")
			return (
				<div
					className={classnames("field__label", labelAlign, labelClassName)}
					style={{ width: fixUnit(labelWidth) }}
				>
					{label}
				</div>
			);
		return icon;
	}

	return (
		<div className={classnames("field")} style={{ width: fixUnit(width) }}>
			<div className={classnames("field__body", size, { disabled, focus, bordered })}>
				{genIcon(icon, "left", onIconClick)}
				{genLabel()}
				{colon && <div className="field__colon">：</div>}
				<div className="field__main">
					{prefix && <div className="field__prefix">{prefix}</div>}
					{type === "textarea" ? (
						<textarea {...(inputProps as any)} rows={autosize ? 1 : rows}></textarea>
					) : (
						<input {...(inputProps as any)} defaultValue={value} />
					)}
					{/* <div className="field__border"></div> */}
					{suffix && <div className="field__suffix">{suffix}</div>}
					{clearable && genIcon("times-circle", "clear", handleClear)}
					{genIcon(rightIcon, "right", onRightIconClick)}
					{button && <div className="field__button">{button}</div>}
				</div>
			</div>
			<div className="field__helper">
				{error && <div className={classnames("field__message error", messageAlign)}>{error}</div>}
				{success && <div className={classnames("field__message success", messageAlign)}>{success}</div>}
				{maxLength && showLimit && (
					<div className={classnames("field__limit")}>
						<span className="field__curlength">1</span>
						<span className="field__maxlength">/{maxLength}</span>
					</div>
				)}
			</div>
		</div>
	);
};
export default Field;

const REG_FLOAT = /[^0-9.]/g;
const REG_FLOAT_NEGATIVE = /[^-0-9.]/g;
const REG_INT = /[^0-9]/g;
const REG_INT_NEGATIVE = /[^-0-9]/g;

function call<T extends (...args: any) => any>(f: T | undefined, ...args: Parameters<T>) {
	f?.apply(f, args);
}

function formatNumber(value: string, float: boolean = true, negative: boolean = true) {
	value = float ? trim(value, ".", /\./g) : value.split(".")[0];
	value = negative ? trim(value, "-", /-/g) : value.replace(/-/, "");
	const reg = float ? (negative ? REG_FLOAT_NEGATIVE : REG_FLOAT) : negative ? REG_INT_NEGATIVE : REG_INT;
	return value.replace(reg, "");
}
function trim(value: string, char: string, regexp: RegExp): string {
	const index = value.indexOf(char);
	if (index === -1) return value;
	if (char === "-" && index !== 0) return value.slice(0, index);
	return value.slice(0, index + 1) + value.slice(index).replace(regexp, "");
}
