import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type StepperProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Stepper: FC<StepperProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("stepper",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Stepper;