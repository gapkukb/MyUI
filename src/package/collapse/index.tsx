import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type CollapseProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Collapse: FC<CollapseProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("collapse",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Collapse;