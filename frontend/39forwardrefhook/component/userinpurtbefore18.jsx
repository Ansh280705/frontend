import { forwardRef } from "react";
const Userinput18 = (props, ref) => {
    return (<>
        <input type="text" ref={ref} placeholder="Entername" />
    </>);
};
export default forwardRef(Userinput18);