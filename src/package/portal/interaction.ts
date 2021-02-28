import { createNode } from "../../util/dom";

const clickOverlay = "clickOverlay";
const clickOverlayEvent = new Event(clickOverlay);
const clickOutside = "clickOutside";
const clickOutsideEvent = new Event(clickOutside);
export const overlay = {
	zindex: 100,
	el: createNode(document.body, undefined, { className: "overlay" }),
	show() {
		this.el.style.display = "";
	},
	hide() {
		this.el.style.display = "none";
	},
	setIndex(n?: number) {
		this.el.style.zIndex = (n || this.zindex) as any;
	},
	init() {
		this.setIndex();
		// this.hide();
		this.el.onclick = () => window.dispatchEvent(clickOverlayEvent);
	},
};
overlay.init();

document.onclick = () => window.dispatchEvent(clickOutsideEvent);

export default overlay;
