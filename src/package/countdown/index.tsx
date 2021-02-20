import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type CountdownProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Countdown: FC<CountdownProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("countdown",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Countdown;