import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type TabbarProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Tabbar: FC<TabbarProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("tabbar",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Tabbar;