import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type TextProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Text: FC<TextProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("text",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Text;