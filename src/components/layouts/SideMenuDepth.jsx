import React from "react";
import { useState } from "react";
import ImgComponent from "../common/ImgComponent";


const SideMenuDepth = ({ menuTitle, children }) => {

    // side menu 펼치기
    const [sideDepth, setSideDepth] = useState(false);
    const toggleMenuDepth = () => {
        setSideDepth(!sideDepth);
    }

    return (
        <li>
            <div onClick={toggleMenuDepth} className={sideDepth? "side_menu on" : "side_menu"}>
                <span className="menu_title">{menuTitle}</span>
                <ImgComponent className={'img_arrow'} src={'arrow_down_bk_16.svg'} />
            </div>
            <ul className={sideDepth? "side_depth2 on" : "side_depth2"}>
                {children}
            </ul>
        </li>
    );
};

export default SideMenuDepth;
