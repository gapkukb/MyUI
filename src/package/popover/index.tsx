import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type PopoverProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Popover: FC<PopoverProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("popover",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Popover;