import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type TableProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Table: FC<TableProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("table",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Table;