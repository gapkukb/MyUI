import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type SliderProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Slider: FC<SliderProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("slider",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Slider;