import React from "react";
import SideMenuComponent from "../atom/SideMenuComponent";


const MenuTransaction = ({ className }) => {

    return (
        <ul className={className}>
            <SideMenuComponent title={'Work History'} path={'/workhistory'} />
            <SideMenuComponent title={'Payment Transaction History'} />
            <SideMenuComponent title={'Abnormal Transaction History'} />
        </ul>
    );
};

export default MenuTransaction;
