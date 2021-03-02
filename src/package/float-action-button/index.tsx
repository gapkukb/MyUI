import { FC, CSSProperties, ReactNode, cloneElement, useState, useEffect, useRef } from "react";
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
			{cloneElement(control as any, contrlProps)}
			<div {...bodyProps}>{children}</div>
		</div>
	);
};
export default Fab;
