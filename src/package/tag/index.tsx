import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type TagProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Tag: FC<TagProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("tag",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Tag;