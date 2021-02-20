import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type CalendarProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const Calendar: FC<CalendarProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("calendar",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default Calendar;