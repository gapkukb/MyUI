import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type VirtualScrollerProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const VirtualScroller: FC<VirtualScrollerProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("virtual-scroller",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default VirtualScroller;