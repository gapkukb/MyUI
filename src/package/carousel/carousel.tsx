import {
  Children,
  cloneElement,
  FC,
  ReactNode,
  TransitionEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { fixUnit } from "../../util/unit";
import { CarouselItem } from "./carousel-item";
import { classnames } from "../../util/bem";
import { CarouselProps } from ".";

type Spacings = Spacing | Template<Spacing, Spacing>;
type SpacingIntersect = Spacings | { [key in Spacing]?: Spacings };

export const Carousel: FC<CarouselProps> = ({
  width,
  height,
  duration = 500,
  navigable = true,
  active: _active = 0,
  autoplay = true,
  loopable = true,
  interval = 4000,
  draggable = true,
  indicatory,
  indicatorByHover,
  frame = 24,
  gap,
  cols = 1,
  stopByHover = true,
  className,
  style,
  children,
}: CarouselProps) => {
  /* variables */
  const track = useRef<HTMLDivElement>(null);
  const outer = useRef<HTMLDivElement>(null);
  const count = Children.count(children);

  const throttle = 1000 / Number(frame);
  const avalidWidth = outer.current?.offsetWidth as number;

  let [active, setActive] = useState(Number(_active));
  let [silent, setSilent] = useState(false);
  let pressed = false;
  let lastTimestamp = Date.now();
  let lastPageX = 0;
  console.log(avalidWidth);

  const enctype: ReactNode[] = Children.toArray(children).map((child: any, index) => {
    if (child.type && child.type.name === CarouselItem.name) {
      console.log(avalidWidth);

      return cloneElement(child, { active, index, total: count, gap, cols, avalidWidth });
    }
    return null;
  });

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
  useEffect(translate, [active]);
  useLayoutEffect(function () {
    console.log(outer.current!.offsetWidth);
  });
  /* props */
  const outerProps = {
    className: classnames("carousel"),
    style: {
      width: fixUnit(width),
      height: fixUnit(height),
    },
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
    <div aria-live="polite" {...outerProps}>
      <div {...trackProps}>{enctype}</div>
      <ul className="carousel__indicator">
        {new Array(count).fill(0).map((_, index) => (
          <li {...indicatorProps(index)}></li>
        ))}
      </ul>
      {navigable && <button {...prevProps}></button>}
      {navigable && <button {...nextProps}></button>}
    </div>
  );
};

export default Carousel;
