import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type TreeProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Tree: FC<TreeProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("tree",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Tree;