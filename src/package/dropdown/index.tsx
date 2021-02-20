import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type DropdownProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Dropdown: FC<DropdownProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("dropdown",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Dropdown;