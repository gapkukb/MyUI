import "intersection-observer";
import { config } from "../package/image";
type LazyImageProps = {
	element: Element;
	lazy?: boolean;
	placeholder?: string;
	src?: string;
	error?: string;
};
export const option: IntersectionObserverInit = {
	threshold: 0,
	rootMargin: "20px",
};
type HTMLImageElementLike = HTMLImageElement & { clear?: Function };
export function load(el: HTMLImageElementLike) {
	let image = new Image();
	let placeholder = el.dataset.placeholder;
	placeholder = placeholder === "false" ? undefined : placeholder || config.placeholder;
	const error = el.dataset.error || config.error;
	const src = el.dataset.src;
	if (placeholder) el.src = placeholder;

	image.onload = () => {
		el.src = image.src;
		el.onclick = image.onerror = image.onload = null;
		image = el = el = null as any;
	};
	// 如果配置了错误图片地址,那么会开启点击重试功能
	if (error) {
		image.onerror = () => {
			el.src = error;
			el.onclick = () => {
				el.onclick = null;
				if (placeholder) el.src = placeholder;
				image.src = "";
				image.src = src!;
			};
		};
	}
	image.src = src!;
	el.removeAttribute("data-placeholder");
}

export class Lazy {
	static map: WeakMap<HTMLImageElement, HTMLImageElement> = new WeakMap();
	static add(el: HTMLImageElement) {
		this.map.set(el, el);
		if (el.dataset.lazy === "true") lazyImageObserver.observe(el);
		else load(el);
	}
	static remove(el: HTMLImageElementLike) {
		this.map.delete(el);
		lazyImageObserver.unobserve(el);
	}
}
const lazyImageObserver = new IntersectionObserver(function (images) {
	images.forEach(function (image) {
		if (image.isIntersecting) {
			let target = image.target as HTMLImageElement;
			load(Lazy.map.get(target)!);
			Lazy.remove(target);
		}
	});
}, option);

export default Lazy;
