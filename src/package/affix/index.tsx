import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type AffixProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Affix: FC<AffixProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("affix",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Affix;