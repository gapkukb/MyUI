import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type UploaderProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Uploader: FC<UploaderProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("uploader",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Uploader;