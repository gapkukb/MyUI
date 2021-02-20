import {
  Children,
  cloneElement,
  createContext,
  FC,
  ReactNode,
  TransitionEvent,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { fixUnit } from "../../util/unit";
import { CarouselItem } from "./carousel-item";
import { CarouselProps } from ".";
import { classnames } from "../../util/bem";
import Context from "./context";

export const Carousel: FC<CarouselProps> = ({
  width,
  height,
  duration = 500,
  navigable = true,
  active: _active = 0,
  autoplay = true,
  loopable = true,
  interval: _interval = 4000,
  panable = true,
  indicatory,
  indicatorByHover,
  frame = 24,
  gap,
  views = 1,
  stopWhenHover = true,
  vertical,
  className,
  style,
  children,
}) => {
  /* variables */
  const track = useRef<HTMLDivElement>(null);
  const outer = useRef<HTMLDivElement>(null);
  const count = Children.count(children);
  const interval = +_interval;
  const throttle = 1000 / +frame;

  let timer: any = 0;
  let avalidWidth = 0;
  let [active, setActive] = useState(+_active);
  let [silent, setSilent] = useState(false);
  let [px, setPX] = useState({ width: 0, height: 0 });

  let enctype = Children.toArray(children).map((child: any, index) => {
    if (child.type && child.type.name === CarouselItem.name) {
      return cloneElement(child, { active, index, total: count, gap, views, avalidWidth });
    }
    return null;
  });
  let pressed = false;
  let lastTimestamp = Date.now();
  let lastPageX = 0;

  if (loopable && count > 1) {
    // let last: any = enctype[count - 1];
    // enctype.push(cloneElement(enctype[0] as any, { key: -1, duplicate: true }));
    // enctype.unshift(cloneElement(last, { key: -2, duplicate: true }));
  }
  /* handlers */
  function dragHandle(e: PointerEvent) {
    switch (e.type) {
      case "pointerdown":
        pressed = true;
        lastPageX = e.pageX;
        track.current!.style.transitionDuration = "0ms";
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
        track.current!.style.transitionDuration = fixUnit(duration, "ms");
    }
  }
  function complete(e: TransitionEvent) {
    if (active === -1) {
      setSilent(true);
      active = count - 1;
    } else if (active === count) {
      setSilent(true);
      active = 0;
    } else {
      setSilent(false);
    }
    console.log(`animated done`);
  }
  function translate() {
    track.current!.style.cssText = `transition-duration:${fixUnit(
      silent ? 0 : duration,
      "ms"
    )};transform:translate3d(-${avalidWidth * active}px, 0, 0)`;
  }
  function dotHandle(e: any) {
    setActive(Number((e.target as HTMLLIElement).dataset.index));
  }
  function prevHandle() {
    setActive(active - 1);
  }
  function nextHandle() {
    setActive(active + 1);
  }
  function pause() {
    clearTimeout(timer);
  }
  function play() {
    timer = setTimeout(() => {
      setActive(active + 1);
      play();
    }, interval);
  }
  useEffect(translate, [active]);
  useEffect(function () {
    setPX({ width: outer.current!.offsetWidth, height: outer.current!.offsetHeight });
    play();
  }, []);

  /* props */
  const outerProps = {
    className: classnames("carousel"),
    style: {
      width: fixUnit(px.width || width),
      height: fixUnit(px.height || height),
    },
    onMouseEnter: pause,
    onMouseLeave: play,
    ref: outer,
  };
  const trackProps = {
    className: "carousel__track",
    ref: track,
  };
  const prevProps = {
    className: "carousel__ctrl prev",
    disabled: !loopable && active === 0,
    onClick: prevHandle,
  };
  const nextProps = {
    className: "carousel__ctrl next",
    disabled: !loopable && active === count - 1,
    onClick: nextHandle,
  };
  const indicatorProps = (index: number) => ({
    "className": active === index ? "active" : undefined,
    "data-index": index,
    "key": index,
    [indicatorByHover ? "onMouseEnter" : "onClick"]: dotHandle,
  });

  // 如果无缝循环播放，那么需要处理收尾的边界情况
  if (loopable) Object.assign(trackProps, { onTransitionEnd: complete });
  // if (draggable)
  //   Object.assign(outerProps, {
  //     onPointerDown: dragHandle,
  //     onPointerMove: dragHandle,
  //     onPointerUp: dragHandle,
  //     onPointerCancel: dragHandle,
  //   });

  return (
    <Context.Provider value={{ viewWidth: px.width }}>
      <div aria-live="polite" {...outerProps}>
        <div {...trackProps}>{enctype}</div>
        <ol className="carousel__indicator">
          {new Array(count).fill(0).map((_, index) => (
            <li {...indicatorProps(index)}></li>
          ))}
        </ol>
        {navigable && <button {...prevProps}></button>}
        {navigable && <button {...nextProps}></button>}
      </div>
    </Context.Provider>
  );
};
Carousel.displayName = Carousel.name;
export default Carousel;
