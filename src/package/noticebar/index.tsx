import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type NoticebarProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Noticebar: FC<NoticebarProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("noticebar",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Noticebar;