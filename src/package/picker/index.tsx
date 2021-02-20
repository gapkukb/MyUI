import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type PickerProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Picker: FC<PickerProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("picker",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Picker;