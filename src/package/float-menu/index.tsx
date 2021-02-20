import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type FloatMenuProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const FloatMenu: FC<FloatMenuProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("float-menu",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default FloatMenu;