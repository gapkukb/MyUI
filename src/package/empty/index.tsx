import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type EmptyProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Empty: FC<EmptyProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("empty",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Empty;