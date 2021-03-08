import { FC, CSSProperties, ReactNode, HTMLAttributes, useState, FormEvent, InputHTMLAttributes, useRef } from "react";
import classnames from "classnames";
import "./index.styl";
import Icon from "../icon";
import { fixUnit } from "../../util/unit";
import { nope } from "../../util";
type Align = "left" | "right" | "center";
export type FieldProps = Partial<{
	value: string;
	autoFocus: boolean;
	border: boolean;
	button: ReactNode;
	center: boolean;
	className: string;
	clearable: boolean;
	colon: boolean;
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
	onClick: (e: MouseEvent) => void;
	onIconClick: (e: MouseEvent) => void;
	onInputClick: (e: MouseEvent) => void;
	onLeftIconClick: (e: MouseEvent) => void;
	onRightIconClick: (e: MouseEvent) => void;
	placeholder: string;
	prefix: ReactNode;
	readOnly: boolean;
	required: boolean;
	rightIcon: ReactNode;
	showLimit: boolean;
	size: "small" | "normal" | "large";
	style: CSSProperties;
	success: ReactNode;
	suffix: ReactNode;
	type: "text" | "number" | "integer" | "tel" | "email" | "password" | "url" | "search" | "textarea";
}>;

export const Field = ({
	value = "",
	autoFocus,
	border = true,
	button,
	center,
	className,
	clearable = true,
	colon,
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
	onChange = nope,
	onClear = nope,
	onClick = nope,
	onFocus = nope,
	onIconClick = nope,
	onInputClick = nope,
	onLeftIconClick = nope,
	onRightIconClick = nope,
	placeholder,
	prefix,
	readOnly,
	required,
	rightIcon,
	showLimit,
	size = "normal",
	style,
	success,
	suffix,
	type = "text",
}: FieldProps) => {
	const [focus, setFocus] = useState(false);
	const [model, setModel] = useState(value);
	const fieldRef = useRef<HTMLInputElement>(null);

	function changeHandler(e: FormEvent<HTMLInputElement>) {
		const inputValue = e.currentTarget.value;
		if (formatter(inputValue)) {
			if (!maxLength) return onChange?.(e);
			else if ((inputValue && inputValue.length < maxLength) || value.length < maxLength) {
			}
		}
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
        const value = e.currentTarget.value;
        
		setModel(value);
	}
	function clearHandler(e: FormEvent<HTMLInputElement>) {
		fieldRef.current!.value = "";
		fieldRef.current!.focus();
		setModel("");
		onClear(fieldRef.current!);
	}

	const props = {
		className: classnames("field", size, { center: center || button }),
		style: {
			...style,
		},
	};
	const labelProps = {};
	const inputProps = {
		type,
		className: classnames("field__value", inputAlign),
		value: value || undefined,
		placeholder,
		disabled,
		readOnly,
		maxLength: maxLength as number,
		name,
		autoFocus: autoFocus,
		ref: fieldRef,
		onChange: changeHandler,
		onBlur: blurHandler,
		onFocus: focusHandler,
		onInput: inputHandler,
		onClick: inputClickHandler,
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
	const Tag = type === "textarea" ? "textarea" : ("input" as any);

	function genIcon(input: typeof icon, classname: string, handler: Function) {
		if (!icon) return undefined;
		const props = {
			className: classnames("field__icon", "field__icon--" + classname),
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
		<div {...props}>
			{genIcon(icon, "left", onLeftIconClick)}
			{genLabel()}
			{colon && <div className="field__colon">：</div>}
			<div className="field__body">
				<div className="field__main">
					<Tag {...inputProps} />
					{clearable && model && genIcon("times-circle", "clear", clearHandler)}
					{button && <div className="field__button">{button}</div>}
					{genIcon(rightIcon, "right", onRightIconClick)}
				</div>
				{error && <div className={classnames("field__message error", messageAlign)}>{error}</div>}
				{success && <div className={classnames("field__message success", messageAlign)}>{success}</div>}
			</div>
		</div>
	);
};
export default Field;
