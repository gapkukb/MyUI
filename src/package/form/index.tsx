import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type FormProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Form: FC<FormProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("form",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Form;