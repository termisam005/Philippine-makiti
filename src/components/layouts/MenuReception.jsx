import React from "react";
import SideMenuComponent from "../atom/SideMenuComponent";


const MenuReception = ({ className }) => {

    return (
        <ul className={className}>
            <SideMenuComponent title={'External Transmission/Reception'} />
            <SideMenuComponent title={'Lower Transmission/Reception History'} />
            <SideMenuComponent title={'Upper Transmission/Reception Historyn'} />
        </ul>
    );
};

export default MenuReception;
