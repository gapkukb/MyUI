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
	formatter: Function;
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
	onChange: (e: FormEvent<HTMLInputElement>) => void;
	onClear: (el: HTMLInputElement) => void;
	onFocus: (e: FormEvent<HTMLInputElement>) => void;
	onEnter: (e: FormEvent<HTMLInputElement>) => void;
	onClick: (e: MouseEvent) => void;
	onIconClick: (e: MouseEvent) => void;
	onInputClick: (e: MouseEvent) => void;
	onRightIconClick: (e: MouseEvent) => void;
	placeholder: string;
	prefix: ReactNode;
	readOnly: boolean;
	required: boolean;
	rightIcon: ReactNode;
	rows: Numeric;
	showLimit: boolean;
	size: "small" | "normal" | "large";
	style: CSSProperties;
	success: ReactNode;
	suffix: ReactNode;
	type: "text" | "number" | "integer" | "tel" | "email" | "password" | "url" | "search" | "textarea";
	width: Numeric;
	height: Numeric;
}>;

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
	formatter = () => true,
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
	onBlur = nope,
	onChange,
	onClear,
	onClick,
	onFocus,
	onIconClick,
	onInputClick,
	onRightIconClick,
	onEnter = nope,
	placeholder,
	prefix,
	readOnly,
	required,
	rightIcon,
	rows = 1,
	showLimit,
	size = "normal",
	style,
	success,
	suffix,
	type = "text",
	width,
	height,
}: FieldProps) => {
	const [focus, setFocus] = useState(false);
	const [model, setModel] = useState("");
	const fieldRef = useRef<HTMLInputElement>(null);
	let composition = false;
	console.log(`rerender`, composition);

	useEffect(function () {
		fieldRef.current!.value = value;
	}, []);

	function changeHandler(e: FormEvent<HTMLInputElement>) {
		setModel(e.currentTarget.value);
	}
	function blurHandler(e: FormEvent<HTMLInputElement>) {
		const inputValue = e.currentTarget.value;
		if (formatter(inputValue)) {
			if (!maxLength) return onChange?.(e);
			else if ((inputValue && inputValue.length < maxLength) || value.length < maxLength) {
			}
		}
	}
	function focusHandler(e: FormEvent<HTMLInputElement>) {
		setFocus(true);
		const inputValue = e.currentTarget.value;
		if (formatter(inputValue)) {
			if (!maxLength) return onChange?.(e);
			else if ((inputValue && inputValue.length < maxLength) || value.length < maxLength) {
			}
		}
	}
	function inputClickHandler(e: FormEvent<HTMLInputElement>) {
		const inputValue = e.currentTarget.value;
		if (formatter(inputValue)) {
			if (!maxLength) return onChange?.(e);
			else if ((inputValue && inputValue.length < maxLength) || value.length < maxLength) {
			}
		}
	}
	function inputHandler(e: FormEvent<HTMLInputElement>) {
		if (composition) return;
		const value = e.currentTarget.value;
		console.log(value);
		setModel(value);
	}
	function compositionHandler(e: FormEvent<HTMLInputElement>) {
		if (e.type === "compositionend") {
			composition = false;
			// inputHandler(e);
		} else {
			composition = true;
		}
	}
	function clearHandler(e: FormEvent<HTMLInputElement>) {
		fieldRef.current!.value = "";
		fieldRef.current!.focus();
		setModel("");
		onClear && onClear(fieldRef.current!);
	}
	function keyUpHandler(e: KeyboardEvent) {
		if (type !== "textarea") {
			if (e.keyCode === 13 || e.key.toLowerCase() === "enter") {
				preventDefault(e);
				onEnter(e.currentTarget as any);
			}
		}
	}

	const labelProps = {};
	const inputProps = {
		type,
		className: classnames("field__value", inputAlign),
		placeholder,
		disabled,
		readOnly,
		defaultValue,
		maxLength: maxLength as number,
		name,
		id,
		autoFocus: autoFocus,
		ref: fieldRef,
		onChange: changeHandler,
		onBlur: blurHandler,
		onFocus: focusHandler,
		onInput: inputHandler,
		onClick: inputClickHandler,
		onCompositionStart: compositionHandler,
		onCompositionEnd: compositionHandler,
		onKeyUp: keyUpHandler,
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
					{prefix && <div className="field__prfix">{prefix}</div>}
					{type === "textarea" ? (
						<textarea {...(inputProps as any)} rows={autosize ? 1 : rows}></textarea>
					) : (
						<input {...(inputProps as any)} defaultValue="safd" />
					)}
					{/* <div className="field__border"></div> */}
					{suffix && <div className="field__suffix">{suffix}</div>}
					{clearable && model && genIcon("times-circle", "clear", clearHandler)}
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
