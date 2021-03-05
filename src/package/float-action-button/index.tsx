import { FC, CSSProperties, ReactNode, cloneElement, useState, useEffect, useRef, Children } from "react";
import classnames from "classnames";
import "./index.styl";
import { on } from "../../util/dom";
export type FabProps = Partial<{
	className: string;
	style: CSSProperties;
	type: "horizontal" | "vertical" | "arc";
	control: ReactNode;
}>;

export const Fab: FC<FabProps> = ({ control, type = "vertical", className, style, children, ...rest }) => {
	const [active, setActive] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	function clickHandler() {
		setActive((prev) => !prev);
	}
	useEffect(function () {
		return on(document, "click", function (e: MouseEvent) {
			if (ref.current!.contains(e.target as Element)) return;
			setActive(false);
		});
	}, []);

	const props = {
		className: classnames("fab", { active }),
		style: {
			...style,
		},
		ref,
		...rest,
	};

	const contrlProps = {
		className: classnames("fab__trigger", type),
		onClick: clickHandler,
	};

	const bodyProps = {
		className: classnames("fab__body", type),
	};

	return (
		<div {...props}>
			<svg className="fab__filter" xmlns="http://www.w3.org/2000/svg" version="1.1" >
				<defs>
					<filter id="goo">
						<feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
						<feColorMatrix
							in="blur"
							mode="matrix"
							values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
							result="goo"
						/>
						<feComposite in="SourceGraphic" in2="goo" operator="atop" />
					</filter>
				</defs>
			</svg>
			{cloneElement(control as any, contrlProps)}
			<div {...bodyProps}>{Children.map(children, child=>cloneElement(child as any,{className:"fab__item"}))}</div>
		</div>
	);
};
export default Fab;
export type FabItemProps = {
    id:string|number
    className:string
}
export const FabItem : FC<FabItemProps> = ({  className, children, ...rest }) => {

    return <div className="fab__item">{children}</div>
}
