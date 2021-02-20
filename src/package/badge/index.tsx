import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type BadgeProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Badge: FC<BadgeProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("badge",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Badge;