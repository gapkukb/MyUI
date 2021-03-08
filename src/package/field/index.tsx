import { FC, CSSProperties, ReactNode, HTMLAttributes, useState, FormEvent, InputHTMLAttributes } from "react";
import classnames from "classnames";
import "./index.styl";
type Align = "left" | "right" | "center";
export type FieldProps = Partial<{
	value: string;
	autoFocus: boolean;
	border: boolean;
	button: ReactNode;
	className: string;
	clearable: boolean;
	colon: boolean;
	disabled: boolean;
	error: ReactNode;
	formatter: Function;
	icon: string;
	id: string;
	inputAligh: Align;
	label: ReactNode;
	labelAligh: Align;
	labelClassName: string;
	labelWidth: Numeric;
	leftIcon: string;
	maxLength: Numeric;
	name: string;
	onBlur: (e: FormEvent<HTMLInputElement>) => void;
	onChange: (e: FormEvent<HTMLInputElement>) => void;
	onClear: (e: FormEvent<HTMLInputElement>) => void;
	onFocus: (e: FormEvent<HTMLInputElement>) => void;
	onClick: (e: MouseEvent) => void;
	onIconClick: (e: MouseEvent) => void;
	onInputClick: (e: MouseEvent) => void;
	onLeftIconClick: (e: MouseEvent) => void;
	onRightIconClick: (e: MouseEvent) => void;
	placeholder: string;
	prefix: ReactNode;
	readonly: boolean;
	required: boolean;
	rightIcon: string;
	showLimit: boolean;
	size: "small" | "normal" | "large";
	style: CSSProperties;
	success: ReactNode;
	suffix: ReactNode;
	type: "text" | "number" | "integer" | "tel" | "email" | "password" | "url" | "search";
}>;

export const Field = ({
	value = "",
	autoFocus,
	border,
	button,
	className,
	clearable,
	colon,
	disabled,
	error,
	formatter = () => true,
	icon,
	id,
	inputAligh,
	label,
	labelAligh,
	labelClassName,
	labelWidth,
	leftIcon,
	maxLength,
	name,
	onBlur,
	onChange,
	onClear,
	onClick,
	onFocus,
	onIconClick,
	onInputClick,
	onLeftIconClick,
	onRightIconClick,
	placeholder,
	prefix,
	readonly,
	required,
	rightIcon,
	showLimit,
	size,
	style,
	success,
	suffix,
	type = "text",
}: FieldProps) => {
	const [focus, setFocus] = useState(false);
	function changeHandler(e: FormEvent<HTMLInputElement>) {
		const inputValue = e.currentTarget.value;
		if (formatter(inputValue)) {
			if (!maxLength) return onChange?.(e);
			else if ((inputValue && inputValue.length < maxLength) || value.length < maxLength) {
			}
		}
	}

	const props = {
		className: classnames("field", {}),
		style: {
			...style,
		},
	};
	return <div {...props}></div>;
};
export default Field;
