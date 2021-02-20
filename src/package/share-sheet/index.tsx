import { FC, CSSProperties } from "react";
  import classnames from "classnames";
  import "./index.styl";
  export type ShareSheetProps = {
    className: string,
    style: CSSProperties,
  };
  
  export const ShareSheet: FC<ShareSheetProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
      className: classnames("share-sheet",{
  
      }),
      style:{
        ...style
      },
      onClick:clickHandler,
      ...rest,
    };
    return <div {...props}>{children}</div>;
  };
  export default ShareSheet;