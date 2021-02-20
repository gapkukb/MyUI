import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type AutoCompleteProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const AutoComplete: FC<AutoCompleteProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("auto-complete",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default AutoComplete;