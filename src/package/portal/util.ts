import { CSSProperties, useLayoutEffect } from "react";

interface PatchMeta {
	count: number;
	paddingRight: CSSStyleDeclaration["paddingRight"];
	overflow: CSSStyleDeclaration["overflow"];
}
// 使用 new Map 存储元素的css属性的原本的值,用于更改之后的还原css
const patched = new Map<HTMLElement, PatchMeta>();
export function patchElement(parent: HTMLElement, size: number) {
	const meta = patched.get(parent);
	if (meta) {
		meta.count += 1;
	} else {
		const { overflow, paddingRight } = parent.style;
		// 在原来的padding-right基础上增加滚动条宽度
		const PDR = getComputedStyle(parent).paddingRight;
		const newPDR = parseFloat(PDR) || 0 + size;
		Object.assign(parent.style, {
			overflow: "hidden",
			paddingRight: newPDR + "px",
		});
		patched.set(parent, {
			count: 1,
			overflow,
			paddingRight,
		});
	}
}
export function restoreElement(parent: HTMLElement) {
	const meta = patched.get(parent);
	if (!meta) {
		throw new Error("This looks like a bug of component,contact us");
	}
	if (meta.count === 1) {
		patched.delete(parent);
		Object.assign(parent.style, {
			overflow: meta.overflow,
			paddingRight: meta.paddingRight,
		});
	} else {
		meta.count -= 1;
	}
}

export function diffStyle<T = CSSProperties>(prev: T = {} as any, next: T = {} as any) {
	const ret = {} as T;
	const prevKeys = Object.keys(prev);
	const nextKeys = Object.keys(next);
	let i = prevKeys.length;
	let key = "";
	while (i--) {
		key = prevKeys[i];
		// @ts-ignore
		if (!next[key]) ret[key] = "";
	}
	i = prevKeys.length;
	while (i--) {
		key = nextKeys[i];
		// @ts-ignore
		ret[key] = next[key];
	}
	return ret;
}

let zindex = 100;
const outclickEvent = new CustomEvent("outclick");
const overlay = {
	el: document.createElement("div"),
	toggle(value: "none" | "") {
		Object.assign(this.el.style, {
			display: value,
			zIndex: zindex,
		});
	},
	show() {
		zindex++;
		this.toggle("");
	},
	hide() {
		zindex--;
		this.toggle("none");
	},
	init() {
		this.el.className = "overlay";
		document.body.appendChild(this.el);
		this.el.onclick = function () {
			document.dispatchEvent(outclickEvent);
		};
		// this.hide();
		return this;
	},
}.init();

export function assinStyle(node: HTMLElement, left: Numeric, right: Numeric, top: Numeric, bottom: Numeric, p: string) {
	Object.assign(node.style, {
		left,
		right,
		top,
		bottom,
		position: p,
	});
}

export interface IMountElementProps {
	node: HTMLElement;
	getParent(selector: Element | string): Element | null;
	selector: Element | string;
}

export const MountElement = ({ node, getParent, selector }: IMountElementProps) => {
	useLayoutEffect(() => {
		const parent = getParent(selector);
		if (!parent) return console.error("Maybe error: cannot mount the portal cause by invalid elment as null");
		parent.appendChild(node);
		return () => {
			parent.removeChild(node);
		};
	}, [node, selector, getParent]);
	return null;
};
