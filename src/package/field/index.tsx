import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type FieldProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Field: FC<FieldProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("field",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Field;