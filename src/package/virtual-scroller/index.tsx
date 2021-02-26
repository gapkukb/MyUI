import {
	FC,
	CSSProperties,
	useEffect,
	useRef,
	Children,
	useState,
	useLayoutEffect,
	cloneElement,
	isValidElement,
	ReactNode,
	ComponentElement,
	Component,
} from "react";
import classnames from "classnames";
import "./index.styl";
export type VirtualScrollerProps = Partial<{
	className: string;
	style: CSSProperties;
	data: any[];
	count: number;
}> & { render: (scope: any, index?: number) => ReactNode };

export const VirtualScroller: FC<VirtualScrollerProps> = ({
	data: _data = [],
	count = 40,
	render,
	className,
	style,
	children,
	...rest
}) => {
	const [current, setCurrent] = useState(-1);
	const [data, setData] = useState<typeof _data>([]);
	const root = useRef<HTMLDivElement>(null);
	const maker = useRef<HTMLDivElement>(null);
	const body = useRef<HTMLDivElement>(null);
	const padding = useRef<HTMLDivElement>(null);

	function slice(current: number) {
		const start = current * count;
		return _data.slice(start, start + count);
	}
	useEffect(() => {
		let observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].intersectionRatio <= 0) return;
				setCurrent((prev) => prev + 1);
			},
			{ threshold: 0, rootMargin: "10px 0px" }
		);
		observer.observe(maker.current!);
		return () => {
			observer.disconnect();
			observer = null as any;
		};
	}, []);

	useEffect(() => {
        setData(slice(current));
		padding.current!.style.height = body.current!.offsetHeight + "px";
	}, [current]);

	const props = {
		className: classnames("virtual", {}),
		style: {
			...style,
		},
		ref: root,
		...rest,
	};

	return (
		<div {...props}>
			<div ref={padding} className="virtual__padding"></div>
			<div ref={body} className="virtual__body">
				{data.map((item, index) => render(item, index))}
			</div>
			<div ref={maker} className="virtual__marker"></div>
		</div>
	);
};
export default VirtualScroller;
