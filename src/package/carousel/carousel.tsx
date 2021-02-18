import {
  Children,
  cloneElement,
  DOMAttributes,
  FC,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  TransitionEvent,
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
  /* 指示器类名，会替换掉组件内置的类名，样式将完全由传入的类名控制 */
  indicatorTrigger: "hover";
  /* 开启/关闭步进器 */
  ctrlable: boolean;
  /* 开始位置 */
  selectedIndex: Numeric;
  /* drag节流时间 */
  frame: Numeric;
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
  indicatorClassName,
  indicatorTrigger,
  frame = 24,
  className,
  style,
  children,
}) => {
  const track = useRef<HTMLDivElement>(null);
  const outer = useRef<HTMLDivElement>(null);
  const count = Children.count(children)
  let [active, setActive] = useState(Number(selectedIndex));
  let [silent, setSilent] = useState(false);
  let pressed = false;
  let lastTimestamp = Date.now();
  let lastPageX = 0
  const throttle = 1000 / Number(frame);

  let dragHandle = function (e: PointerEvent) {
    switch (e.type) {
      case "pointerdown":
        pressed = true;
        lastPageX = e.pageX
        track.current!.style.transitionDuration="0ms"
        break;
      case "pointermove":
        let now = Date.now();
        if (!pressed || now - lastTimestamp < throttle) return;
        lastTimestamp = now;
        console.log(e);
        track.current!.style.transform = `translate3d(${e.pageX - lastPageX}px, 0, 0)`;
        break;
      default:
        pressed = false;
        track.current!.style.transitionDuration=fixUnit(duration, "ms")
    }
  };
  function complete(e:TransitionEvent) {
    if(active === -1) {
      setSilent(true)
      active = count - 1
    }else if(active === count - 1){
      setSilent(true)
      active = 0
    }else{
      setSilent(false)
    }
    console.log(`animated done`);
  }
  children = Children.map(children, (child: any, index) => {
    if (child.type && child.type.name === CarouselItem.name) return cloneElement(child, { active, selfIndex: index,total:count });
    return null;
  });

  const enctype = Children.toArray(children);
  const avalidWidth = outer.current?.offsetWidth as number;

  const translate = () => {
    track.current!.style.cssText = `transition-duration:${fixUnit(silent?0:duration, "ms")};transform:translate3d(-${
      avalidWidth * active
    }px, 0, 0)`;
  };

  useEffect(translate, [active]);

  if (loopable) {
    let last = enctype[enctype.length - 1] as any;
    enctype.push(cloneElement(enctype[0] as any, { key: -1, duplicate: true }));
    enctype.unshift(cloneElement(last, { key: -2, duplicate: true }));
  }
    
  function dotHandle(e: any) {
    setActive(Number((e.target as HTMLLIElement).dataset.index))
  };
  function prevHandle(){
    active++
    setActive(loopable?active % count:Math.max(Math.min(active,count - 1),0))
  };
  function nextHandle(){
    active++
    setActive(loopable?active % count:Math.max(Math.min(active,count - 1),0))
  };
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

  const trackProps = {
    className:"carousel__track",
    ref:track,
  }
  // 如果无缝循环播放，那么需要处理收尾的边界情况
  if(loopable) Object.assign(trackProps, {onTransitionEnd:complete})
  // if (draggable)
  //   Object.assign(outerProps, {
  //     onPointerDown: dragHandle,
  //     onPointerMove: dragHandle,
  //     onPointerUp: dragHandle,
  //     onPointerCancel: dragHandle,
  //   });
  const indicatorEvent = {
    [indicatorTrigger === "hover"?"onMouseEnter":"onClick"]:dotHandle
  }
  return (
    <div aria-live="polite" {...outerProps}>
      <div {...trackProps}>{enctype}</div>
      <ul className="carousel__indicator">
        {new Array(count).fill(0).map((_, index) => (
          <li className={active === index ? "active" : ""} data-index={index} key={index} {...indicatorEvent}></li>
        ))}
      </ul> 
      {ctrl && <button onClick={prevHandle} className="carousel__ctrl prev" disabled={!loopable&&active===0}></button>}
      {ctrl && <button onClick={nextHandle} className="carousel__ctrl next" disabled={!loopable&&active===count-1}></button>}
    </div>
  );
};

export default Carousel;
