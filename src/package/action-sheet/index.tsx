import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type ActionSheetProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const ActionSheet: FC<ActionSheetProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("action-sheet",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default ActionSheet;