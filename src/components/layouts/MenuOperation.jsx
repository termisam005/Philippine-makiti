import React from "react";
import SideMenuComponent from "../atom/SideMenuComponent";


const MenuOperation = ({ className }) => {

    return (
        <ul className={className}>
            <SideMenuComponent title={'Device Revision Instructions'} />
            <SideMenuComponent title={'Revision Information'} path={'/terminalrevision'} />
            <SideMenuComponent title={'Basic Information'} />
            <SideMenuComponent title={'Fare Information'} path={'/fareinfo'} />
            <SideMenuComponent title={'Transfer Information'} path={'/transferinfo'} />
            <SideMenuComponent title={'Transfer Information Group'} path={'/transfergroupinfo'} />
        </ul>
    );
};

export default MenuOperation;
