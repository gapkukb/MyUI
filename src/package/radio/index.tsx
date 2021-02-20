import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type RadioProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Radio: FC<RadioProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("radio",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Radio;