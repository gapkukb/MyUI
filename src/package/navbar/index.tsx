import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type NavbarProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Navbar: FC<NavbarProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("navbar",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Navbar;