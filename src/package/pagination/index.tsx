import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type PaginationProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Pagination: FC<PaginationProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("pagination",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Pagination;