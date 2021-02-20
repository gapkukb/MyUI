import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type StepsProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Steps: FC<StepsProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("steps",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Steps;