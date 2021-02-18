import {
  Children,
  cloneElement,
  FC,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { filterByComponentName } from "../../util/element";
import { fixUnit } from "../../util/unit";
import { CarouselItem } from "./carousel-item";
import { classnames } from "../../util/bem";
import { type } from "../../util/type";
import { noop } from "../../util";

type Spacings = Spacing | Template<Spacing, Spacing>;
type SpacingIntersect = Spacings | { [key in Spacing]?: Spacings };

export type CarouselProps = Partial<{
  /* 添加类名 */
  className: string;
  /* 容器宽度 */
  width: Numeric;
  /* 容器高度 */
  height: Numeric;
  /* 动画时间 */
  duration: Numeric;
  /* 轮播间隔时间 */
  intervall: Numeric;
  /* 是否自动播放 */
  autoplay: boolean;
  /* 是否无缝切换 */
  loopable: boolean;
  /* 指示器类名，会替换掉组件内置的类名，样式将完全由传入的类名控制 */
  indicatorClassName: string;
  /* 开启/关闭步进器 */
  ctrlable: boolean;
  /* 开始位置 */
  selectedIndex: Numeric;
  /* drag节流时间 */
  throttle: Numeric;
}> &
  HTMLAttributes<HTMLDivElement>;

export const Carousel: FC<CarouselProps> = ({
  width,
  height,
  duration = 500,
  ctrlable: ctrl = true,
  selectedIndex = 0,
  autoplay = true,
  loopable = true,
  intervall = 4000,
  draggable = true,
  throttle = 100,
  className,
  style,
  children,
}) => {
  // 过滤子元素
  let [active, setActive] = useState(Number(selectedIndex));
  let ctrlHandle = noop;
  let dotHandle = noop;
  let pressed = false;
  let lastTimestamp = Date.now();
  const _throttle = Number(throttle);
  let dragHandle = function (e: PointerEvent) {
    switch (e.type) {
      case "pointerdown":
        pressed = true;
        break;
      case "pointermove":
        let now = Date.now();
        if (!pressed || now - lastTimestamp < _throttle) return;
        lastTimestamp = now;
        console.log(e);

        break;
      default:
        pressed = false;
    }
  };

  children = Children.map(children, (child: any, index) => {
    if (child.type && child.type.name === CarouselItem.name) return cloneElement(child, { active, selfIndex: index });
    return null;
  });

  const enctype = Children.toArray(children);
  const track = useRef<HTMLDivElement>(null);
  const outer = useRef<HTMLDivElement>(null);
  const avalidWidth = outer.current?.offsetWidth as number;

  const translate = () => {
    track.current!.style.cssText = `transition-duration:${fixUnit(duration, "ms")};transform:translate3d(-${
      avalidWidth * active
    }px, 0, 0)`;
  };

  useEffect(translate, [active]);

  if (Children.count(children) > 1) {
    let last = enctype[enctype.length - 1] as any;
    enctype.push(cloneElement(enctype[0] as any, { key: -1, duplicate: true }));
    enctype.unshift(cloneElement(last, { key: -2, duplicate: true }));
    ctrlHandle = () => setActive(active + 1);
    dotHandle = (e: any) => setActive(Number((e.target as HTMLLIElement).dataset.index));
  }
  const classes = classnames("carousel");
  const _style = {
    width: fixUnit(width),
    height: fixUnit(height),
  };
  const outerProps = {
    className: classes,
    style: _style,
    ref: outer,
  };
  if (draggable)
    Object.assign(outerProps, {
      onPointerDown: dragHandle,
      onPointerMove: dragHandle,
      onPointerUp: dragHandle,
      onPointerCancel: dragHandle,
    });
  return (
    <div {...outerProps}>
      <div className="carousel__track" ref={track}>
        {enctype}
      </div>
      <ul className="carousel__indicator">
        {Children.map(children, (_, index) => (
          <li className={active === index ? "active" : ""} data-index={index} key={index} onClick={dotHandle}></li>
        ))}
      </ul>
      {ctrl && <div onClick={ctrlHandle} className="carousel__ctrl prev"></div>}
      {ctrl && <div onClick={ctrlHandle} className="carousel__ctrl next"></div>}
    </div>
  );
};

export default Carousel;
