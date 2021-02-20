import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type ToastProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Toast: FC<ToastProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("toast",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Toast;