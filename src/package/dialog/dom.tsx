import React, { createRef, isValidElement, PureComponent, ReactNode } from "react";
import { DialogProps } from ".";
import { call } from "../../util";
import classnames from "classnames";

export interface MousePosition {
	x: number;
	y: number;
}

export type DialogDOMProps = Partial<{
	footer: ReactNode;
	mousePosition: MousePosition | null;
}> &
	Pick<DialogProps, "className" | "style" | "title" | "onClose" | "closable">;

export class DialogDOM extends PureComponent<DialogDOMProps> {
	el: HTMLDivElement | null = null;
	componentDidMount() {
		this.resetTransformOrigin();
	}
	componentWillUnmount() {
		this.resetTransformOrigin();
	}

	resetTransformOrigin({ mousePosition } = this.props) {
		if (mousePosition && mousePosition.x >= 0 && mousePosition.y >= 0 && this.el) {
			const { left, top } = this.el.getBoundingClientRect();
			const origin = `${mousePosition.x - left}px ${mousePosition.y - top}px 0`;
			const style = this.el.style;
			["Webkit", "Moz", "Ms", "ms"].forEach((prefix) => {
				style[`${prefix}TransformOrigin` as any] = origin;
			});
			style.transformOrigin = origin;
		}
	}
	closeByClick = (e: React.MouseEvent<HTMLButtonElement>) => call(this.props.onClose, e as any);
	renderCloseButton() {
		return;
	}
	renderHeader() {
		let { title } = this.props;
		if (!title) return null;
		title = isValidElement(title) || <span className="dialog__title__text">{title}</span>;
		return (
			<div className="dialog__header">
				<div className="dialog__title">{title}</div>
			</div>
		);
	}
	render() {
		const { className, closable, footer, style, children } = this.props;
		const props = {
			className: classnames("dialog", {}),
			style,
			ref: (el: HTMLDivElement) => (this.el = el),
		};
		const Header = this.renderHeader();
		const Footer = footer && <div className="dialog__footer">{footer}</div>;
		return (
			<div {...props}>
				{Header}
				<div className="dialog__body">
					<div className="dialog__main">{children}</div>
				</div>
				{Footer}
			</div>
		);
	}
}

type DialogOuterProps = Pick<DialogProps, "overlay" | "closeByOverlay" | "visible" | "onClose">;

export class DialogOuter extends PureComponent<DialogOuterProps> {
	rootRef = createRef<HTMLDivElement>();
	componentDidMount() {
		const activeEl = document.activeElement;
		const dialogNode = this.rootRef.current;
		if (!dialogNode || dialogNode === activeEl || dialogNode.contains(activeEl)) return;
	}
	clickOverlay = (e: React.MouseEvent) => {
		const { onClose, overlay, closeByOverlay } = this.props;
		if (!overlay || !closeByOverlay || e.target !== e.currentTarget) return;
		call(onClose, e as any);
	};

	render() {
		const { overlay, visible, children } = this.props;

		return (
			<div ref={this.rootRef} tabIndex={-1} className="dialog__root">
				{visible && overlay && <div className="dialog__backdrop"></div>}
				<div className="dialog__wrap" onClick={this.clickOverlay}>
					{children}
				</div>
			</div>
		);
	}
}
