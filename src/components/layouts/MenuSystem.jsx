import React from "react";
import SideMenuComponent from "../atom/SideMenuComponent";


const MenuSystem = ({ className }) => {

    return (
        <ul className={className}>
            <SideMenuComponent title={'User Information'} path={'/userinfo'} />
            <SideMenuComponent title={'Menu Information'} path={'/menuinfo'} />
            <SideMenuComponent title={'Code Information'} path={'/codeinfo'} />
            <SideMenuComponent title={'ser Access History'} />
            <SideMenuComponent title={'Menu Access History'} />
        </ul>
    );
};

export default MenuSystem;