import classnames from "classnames";
import "./index.styl";
export type PopupProps = Partial<{

}>;

export const Popup: CFC<PopupProps> = ({ className, style, children, ...rest }) => {
    function clickHandler(){}
    const props = {
        className: classnames("popup",{

        }),
        style:{
        ...style
        },
        onClick:clickHandler,
        ...rest,
    };
    return <div {...props}>{children}</div>;
};
export default Popup;