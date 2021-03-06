import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type PreviewProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Preview: FC<PreviewProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("preview",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Preview;