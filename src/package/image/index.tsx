import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type ImageProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Image: FC<ImageProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("image",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Image;