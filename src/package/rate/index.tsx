import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type RateProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Rate: FC<RateProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("rate",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Rate;