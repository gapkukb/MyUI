import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type KeyboardProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Keyboard: FC<KeyboardProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("keyboard",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Keyboard;