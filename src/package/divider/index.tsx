import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type DividerProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Divider: FC<DividerProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("divider",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Divider;