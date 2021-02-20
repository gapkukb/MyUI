import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type SwitchProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Switch: FC<SwitchProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("switch",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Switch;