import classnames from "classnames";
import React, { createRef, PureComponent, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { Portal } from "../portal";
import "./index.styl";
export type PopupProps = Partial<{}> & { visible: boolean };
export type PopupState = Partial<{ fade: boolean }> & { show: boolean; animateClassname: string };

export class Popup extends PureComponent<PopupProps, PopupState> {
	constructor(props: PopupProps) {
		super(props);
		this.state = {
			show: props.visible,
			fade: false,
			animateClassname: "",
		};
	}
	static defaultProps = {
		visible: false,
	};
	static getDeriverdStateFromProps({ visible }: PopupProps, { show }: PopupState) {
		if (visible === show) return null;
		return {
			prevOpen: visible,
			existing: visible,
		};
	}
	private nodeRef = createRef<HTMLDivElement>();
	render() {
		const classname = "fade";
		const { visible } = this.props;
		return (
			<div ref={this.nodeRef} style={{ display: visible ? undefined : `none` }} className={classname}>
				3213
			</div>
		);
	}
}

export default Popup;
