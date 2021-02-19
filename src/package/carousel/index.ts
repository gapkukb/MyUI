import { HTMLAttributes } from "react";
import "./index.styl";
// TODO: 分页插槽
// TODO: 指示器插槽
// TODO: 滚动条插槽
export type CarouselProps = Partial<{
  /* 添加类名 */
  className: string;
  /* 容器宽度 */
  width: CssValue<LengthUnit>;
  /* 容器高度 */
  height: CssValue<LengthUnit>;
  /* 动画时间 */
  duration: Numeric;
  /* 轮播间隔时间 */
  interval: Numeric;
  /* 是否启用自动播放 */
  autoplay: boolean;
  /* 是否启用无缝切换 */
  loopable: boolean;
  /* 是否启用分页 */
  pageable: boolean;
  /* 是否启用滚动条 */
  scrollable: boolean;
  /* 是否启用指示器 */
  indicatory: boolean;
  /* 指示器交互方式,点击或触碰 */
  indicatorByHover: boolean;
  /* 是否启用前进后退按钮 */
  navigable: boolean;
  /* 是否启用按需加载图片,默认开启 */
  lazyable: boolean;
  /* 是否启用拖动,可触摸设备默认开启 */
  panable: boolean;
  /* 是否启用键盘控制 */
  keyboard: boolean;
  /* 是否启用鼠标滚轮控制 */
  mousewheel: boolean;
  /* 视差滚动背景图片 */
  parallax: string;
  /* 启用自由模式,启用后轮播图不会自动贴合边缘,而是惯性滑动到不确定位置 */
  freeMode: boolean;
  /* 惯性滑动时间,单位ms,默认1000ms */
  freeModeDuration: number;
  /* 惯性滑动系数,越大则惯性速度越快 */
  freeModeInertia: number;
  /* 强制freeMode下贴合边缘 */
  freeModeSticky: boolean;
  /* 触发惯性运动的条件 -> 拖动速度 = 拖动距离/拖动时间 - px/ms) 默认0.02 */
  panVelocity: boolean;
  /* 垂直方向滑动 */
  vertical: boolean;
  /* 开始位置 */
  active: Numeric;
  /* 拖动时的帧数,默认30帧,帧数越高动画越流畅,但是性能越低 */
  frame: Numeric;
  /* 元素间隔 */
  gap: Numeric;
  /* 可视个数 */
  cols: Numeric;
  /* 鼠标移入暂停自动播放 */
  stopByHover: boolean;
  /* 跳转到指定页码 */
  goto: (index: number) => void;
  /* 动画执行前回调,返回false将取消切换 */
  before: (to: number, from: number) => boolean;
  /* 动画完成后回调 */
  after: (to: number, from: number) => void;
}> &
  HTMLAttributes<HTMLDivElement>;

export * from "./carousel";
export * from "./carousel-item";
