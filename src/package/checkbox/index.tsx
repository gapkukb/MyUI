import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type CheckboxProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Checkbox: FC<CheckboxProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("checkbox",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Checkbox;