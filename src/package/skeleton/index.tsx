import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type SkeletonProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Skeleton: FC<SkeletonProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("skeleton",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Skeleton;