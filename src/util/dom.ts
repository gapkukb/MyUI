import { ReactNode, Children, cloneElement, CSSProperties, HTMLAttributes } from "react";
import { global } from "./global";

export function filterByComponentName(children: ReactNode, name: string, props?: Record<string, any>) {
	return Children.map(children, (child: any, index) => {
		if (child.type && child.type.name === name) return props ? cloneElement(child, props) : child;
		return null;
	});
}

const prefix = ["", "-webkit-", "-moz-", "-ms-", "-o-"];
export function compatiple(prop: string) {
	const style = document.body.style;
	for (const item of prefix) {
		const cur = item + prop;
		if (cur in style) return cur;
	}
	return null;
}

function getBodyPseudoContent() {
	return getComputedStyle(document.body, ":after").content + "";
}

export interface breapointEventData {
	current: string;
	previous: string;
}
let currentBreakPoint = getBodyPseudoContent();
let previou = Date.now();
function resizeHandler() {
	const now = Date.now();
	if (now - previou < 300) return;
	previou = now;
	let current = getBodyPseudoContent();
	if (current !== currentBreakPoint) {
		window.dispatchEvent(
			new CustomEvent<breapointEventData>("breakpointchange", {
				detail: { current: current.slice(1, -1), previous: currentBreakPoint.slice(1, -1) },
			})
		);
		currentBreakPoint = current;
	}
}

if (global.responsive) {
	window.addEventListener("resize", resizeHandler);
}
/** 客户端渲染 */
export const CSR = !!(typeof window !== "undefined" && window);

export function querySelector(selector: string | Element, parent: HTMLElement = (document as unknown) as HTMLElement) {
	if (selector instanceof Element) return selector;
	if (typeof selector === "string") return parent.querySelector(selector);
	throw new Error("invalid selector");
}

export function createElement<K extends keyof HTMLElementTagNameMap>(
	tagName: K,
	options?: ElementCreationOptions
): HTMLElementTagNameMap[K];
export function createElement<K extends keyof HTMLElementDeprecatedTagNameMap>(
	tagName: K,
	options?: ElementCreationOptions
): HTMLElementDeprecatedTagNameMap[K];
export function createElement(tagName: string, options?: ElementCreationOptions): HTMLElement;
export function createElement(tagName: string, options?: ElementCreationOptions) {
	const node = document.createElement(tagName, options);
	return node;
}

export function createElementWidthStyle(tagName: string, styles: CSSProperties) {
	const el = document.createElement(tagName);
	Object.assign(el.style, styles);
	return el;
}

export function createNode(parent: Node | HTMLElement, tag = "div", options?: HTMLAttributes<Element>): HTMLElement {
	return parent.appendChild(Object.assign(createElement(tag), options));
}

export function removeAllChildren(node: Node) {
	while (node && node.firstChild) {
		node.firstChild.remove();
	}
}

export function scrollbarWidth(el: HTMLElement) {
	if (!CSR || !el) return 0;
	if (el === document.body) return window.innerWidth - document.documentElement.offsetWidth;
	return el.offsetWidth - el.scrollWidth;
}

type E = HTMLElement | Window | Document;
export function on<K extends keyof HTMLElementEventMap>(
	el: E,
	eventName: K,
	listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
	options?: boolean | AddEventListenerOptions
): () => void;
export function on(
	el: E,
	eventName: string,
	listener: EventListenerOrEventListenerObject | null,
	options?: boolean | AddEventListenerOptions
): () => void;
export function on(el: E, eventName: any, listener: any, options?: any) {
	el.addEventListener(eventName, listener, options);
	return () => el.removeEventListener(eventName, listener);
}

export function setStyle(node: HTMLElement, style: CSSProperties) {
	const css = node.style;
	const keys = Object.keys(style) as Array<keyof CSSProperties>;
	let i = keys.length;
	let key = "";
	while (i--) {
		key = keys[i];
		const isCssVars = key.startsWith("--");
		if (process.env.NODE_ENV !== "production" && !isCssVars) {
		}
		if (isCssVars) css.setProperty(key, (style as any)[key]);
		else css[key as any] = (style as any)[key];
	}
}
export function stopPropagation(e: Event) {
	e.stopPropagation();
}
export function preventDefault(e: Event, isStopPropagation?: boolean) {
	if (typeof e.cancelable !== "boolean" || e.cancelable) {
		e.preventDefault();
	}
	if (isStopPropagation) stopPropagation(e);
}
