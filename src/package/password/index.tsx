import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type PasswordProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Password: FC<PasswordProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("password",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Password;