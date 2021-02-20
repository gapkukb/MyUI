import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type TabProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Tab: FC<TabProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("tab",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Tab;