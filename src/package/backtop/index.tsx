import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type BacktopProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Backtop: FC<BacktopProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("backtop",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Backtop;