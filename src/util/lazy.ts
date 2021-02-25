type LazyImageProps = {
	element: Element;
	lazy?: boolean;
	placeholder?: string;
	src?: string;
	error?: string;
};

function process(props: LazyImageProps) {
	let image = new Image();
	let target = props.element as HTMLImageElement;
	image.crossOrigin = "anonymous";
	image.onload = () => {
		target.src = image.src;
		target.onclick = image.onerror = image.onload = null;
		image = target = props = null as any;
	};
	if (props.error) {
		image.onerror = (e) => {
			target.src = props.error!;
			target.onclick = () => {
                target.src = props.placeholder!;
				image.src = props.src!;
			};
		};
	}
	image.src = props.src!;
}

export class Lazy {
	static map: WeakMap<Element, LazyImageProps> = new WeakMap();

	static add(props: LazyImageProps) {
		this.map.set(props.element, props);
		if (props.lazy) lazyImageObserver.observe(props.element);
		else process(props);
	}
	static remove(el: Element) {
		this.map.delete(el);
	}
}
const lazyImageObserver = new IntersectionObserver(
	function (entries, observer) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				let target = entry.target as HTMLImageElement;
				process(Lazy.map.get(target)!);
				observer.unobserve(target);
				Lazy.remove(target);
			}
		});
	},
	{ threshold: 0, rootMargin: "20px" }
);

export default Lazy;
