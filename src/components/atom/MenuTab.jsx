import React, { Fragment } from "react";
import { useState } from "react";
import ImgComponent from "../common/ImgComponent";


const MenuTab = ({ onClick, tabClass, title }) => {

    // Tab 없애기
    const [tabState, setTabState] = useState(true);
    const deleteTab = () => {
        setTabState(false);
    }

    return (
        <div onClick={onClick} className={tabState? tabClass + "" : tabClass + " hide"}>
            <span className={"tab_title"}>
                {title}
            </span>
            <button onFocus={deleteTab} type="button" className="btn_tab_close">
                <ImgComponent className={'w16'} src={'close_line_wh_16.svg'} />
            </button>
        </div>
    );
};

export default MenuTab;
