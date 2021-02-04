//@ts-nocheck
/* eslint-disable */
const _prefixEvent = (function (el) {
  var prefix = ["webkit", "Moz", "o", "ms"];
  var prop = "";
  for (var i = 0; i < prefix.length; i++) {
    prop = prefix[i];
    if (el.style[prop + "Transition"] !== undefined) {
      return prop;
    }
  }
  return "";
})(document.body);

export default function () {
  window.requestAnimationFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };

  window.cancelAnimationFrame =
    window.cancelAnimationFrame ||
    Window.webkitCancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.msCancelAnimationFrame ||
    window.oCancelAnimationFrame ||
    function (id) {
      window.clearTimeout(id);
    };
}
