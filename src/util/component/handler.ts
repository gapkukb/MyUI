import memoize from "memoize-one";
import { CSR, on } from "../dom";
import { eventOptionKey } from "./event.option.key";

function detect() {
	if (!CSR) return false;
	const win = window;
	if (!win.addEventListener || win.removeEventListener || !Object.defineProperty) return false;
	let isSupport = false;
	try {
		const opt = Object.defineProperty({}, "passive", {
			get() {
				isSupport = true;
			},
		});
		on(win, "misname", null, opt)();
	} catch (e) {}
	return isSupport;
}
export const passiveListeners = memoize(detect);

export function normalizeListenerOption(option?: AddEventListenerOptions): boolean | AddEventListenerOptions {
	// 兼容事件监听选项,false or {passive:false,capture:false}
	if (!option) return false;
	if (!passiveListeners()) return !!option.capture;
	return option;
}

// This export only for unit testing
// export const targetMap = new WeakMap<EventTarget>

interface EventHanders {
	handlers: EventListener[];
	handleEvent: EventListener;
	nextHandlers?: EventListener[];
}

type EventsMap<E extends string = string> = Record<E, EventHanders>;

export class TargetEventHandlers<E extends string = string> {
	target: EventTarget;
	events: EventsMap<E>;
	constructor(target: EventTarget) {
		this.target = target;
		this.events = {} as EventsMap<E>;
	}
	add(eventName: E, listener: EventListener, option?: boolean | AddEventListenerOptions) {}
	private getEventHandlers(eventName: E, option: boolean | AddEventListenerOptions): EventHanders {
		const key = `${eventName} ${eventOptionKey(option)}` as E;
		if (!this.events[key]) {
			this.events[key] = {
				handlers: [],
				handleEvent: (undefined as unknown) as EventListener,
				nextHandlers: [],
			};
		}
		return this.events[key];
	}
}
