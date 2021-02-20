import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type PullRefreshProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const PullRefresh: FC<PullRefreshProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("pull-refresh",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default PullRefresh;