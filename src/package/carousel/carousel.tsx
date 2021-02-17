import { Children, cloneElement, FC, HTMLAttributes, ReactElement, ReactNode, useEffect, useRef, useState } from "react";
import { filterByComponentName } from "../../util/element";
import { fixUnit } from "../../util/unit";
import { CarouselItem } from "./carousel-item";
import { classnames } from "../../util/bem";
import { type } from "../../util/type";

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
  duration:Numeric
  /* 轮播间隔时间 */
  intervall:Numeric
  /* 是否自动播放 */
  autoplay:boolean
  /* 指示器类名，会替换掉组件内置的类名，样式将完全由传入的类名控制 */
  indicatorClassName:string
  /* 开启/关闭步进器 */
  ctrl:boolean
  /* 开始位置 */
  selectedIndex:Numeric
}> &HTMLAttributes<HTMLDivElement>;

export const Carousel: FC<CarouselProps> = ({ width, height,duration,ctrl=true, selectedIndex = 0, className,style,children }) => {
  // 过滤子元素
  children = filterByComponentName(children, CarouselItem.name);
  let [active,setActive] = useState(Number(selectedIndex))
  const track = useRef<HTMLDivElement>(null)
  const outer = useRef<HTMLDivElement>(null)
  const avalidWidth = outer.current?.offsetWidth as number

  
  
  const translate = ()=>{track.current!.style.cssText=`transition-duration:${duration}ms;transform:translate3d(-${avalidWidth*active}px, 0, 0)`}
  useEffect(translate,[active])
  if(Children.count(children) > 1){
    
  }
  let current = 0
  const classes = classnames("carousel");
  const _style = {
    width:fixUnit(width),
    height:fixUnit(height),
  }
  
  function indicatorClick() {
    
  }

  const ctrlHandle = ()=>setActive(active+1)
  
  return <div className={classes} style={_style} ref={outer}>
    <div className="carousel__track" ref={track}>{children}</div>
    <ul className="carousel__indicator">
      {Children.map(children, (_,index)=><li className={current===index?"active":""} onClick={indicatorClick}></li>)}
    </ul>
    {ctrl && <div onClick={ctrlHandle} className="carousel__ctrl prev"></div>}
    {ctrl && <div onClick={ctrlHandle} className="carousel__ctrl next"></div>}
  </div>;
};

export default Carousel;
