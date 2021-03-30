import { CSSProperties, KeyboardEvent, PureComponent, ReactNode } from "react";
import { call } from "../../util";
import { Portal, PortalProps } from "../portal";
import { DialogDOM, DialogOuter, MousePosition } from "./dom";
import { CSSTransition } from "react-transition-group";
import "./index.styl";

const TIME_OUT = 30000;
let mousePosition: MousePosition | null = null;

export type DialogProps = Partial<{
	title: ReactNode;
	children: ReactNode;
	footer: ReactNode;
	closable: boolean;
	onClose: (e: KeyboardEvent | MouseEvent | TouchEvent) => void;
	overlay: boolean;
	closeByOverlay: boolean;
	className: string;
	style: CSSProperties;
	onOpen: () => void;
	onClosed: () => void;
}> & {
	visible: boolean;
};
export interface DialogState {
	prevOpen: boolean;
	existing: boolean;
}

export class Dialog extends PureComponent<DialogProps, DialogState> {
	static defaultProps = {
		visible: false,
		className: "",
		closable: true,
		overlay: true,
		closeByOverlay: true,
	};
	static openDialog = null;
	static closeDialog = null;

	lastMousePosition: MousePosition | null = null;
	constructor(props: DialogProps) {
		super(props);
		this.state = {
			prevOpen: props.visible,
			existing: false,
		};
	}
	onClose = (e: KeyboardEvent | MouseEvent | TouchEvent) => {
		call(this.props.onClose, e);
	};
	onExisted = () => {
		this.setState({
			existing: false,
		});
		call(this.props.onClosed);
	};
	// 生命周期函数,将props映射到state
	// 即使props没有变化而是state变了,依然会调用这个函数
	// 主要用于替换 componentWillReceiveProps 钩子函数
	// 如果希望props不影响state, 那么返回null
	static getDeriverdStateFromProps({ visible }: DialogProps, { prevOpen }: DialogState) {
		// 如果visible属性没有变化,那么不更新state
		if (visible === prevOpen) return null;
		// 否则将prevopen更新为最新的visible属性
		return {
			prevOpen: visible,
			existing: visible,
		};
	}
	render() {
		const {
			visible,
			closable,
			style,
			className,
			onOpen,
			onClose,
			onClosed,
			overlay,
			closeByOverlay,
			children,
			...rest
		} = this.props;
		const { existing } = this.state;

		if (visible) {
			this.lastMousePosition = this.lastMousePosition || mousePosition;
		}

		return (
			<Portal
				visible={visible || existing}
				onClose={this.onClose as any}
				className="dialog__anchor"
				closeByESC
				lockScroller
			>
				{/* <DialogOuter overlay={overlay} closeByOverlay={closeByOverlay} visible={visible} onClose={onClose}>
					<CSSTransition
						appear
						mountOnEnter
						in={visible}
						timeout={TIME_OUT}
						classNames="dialog__zoom"
						onEntered={onOpen}
						onExited={this.onExisted}
					>
						<DialogDOM {...rest} style={style} closable>
							{children}
						</DialogDOM>
					</CSSTransition>
				</DialogOuter> */}
			</Portal>
		);
	}
}
