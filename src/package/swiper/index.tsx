import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type SwiperProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Swiper: FC<SwiperProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("swiper",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Swiper;