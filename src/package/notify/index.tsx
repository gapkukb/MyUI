import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type NotifyProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Notify: FC<NotifyProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("notify",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Notify;