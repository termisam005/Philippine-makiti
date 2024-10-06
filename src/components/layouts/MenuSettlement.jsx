import React from "react";
import SideMenuDepth from "./SideMenuDepth";
import SideMenuComponent from "../atom/SideMenuComponent";


const MenuSettlement = ({ className }) => {

    return (
        <ul className={className}>
            <SideMenuDepth menuTitle={'Revenue History Statistics'}>
                <SideMenuComponent sideIn={true} title={'Average Revenue by Transport Company'} />
                <SideMenuComponent sideIn={true} title={'Cumulative Fare by Route'} />
                <SideMenuComponent sideIn={true} title={'Fare Increase Rate by Route'} />
            </SideMenuDepth>
            <SideMenuDepth menuTitle={'Collection Summary'}>
                <SideMenuComponent sideIn={true} title={'Collection Summary by Transprot Company'} />
                <SideMenuComponent sideIn={true} title={'Collection Summary by Route'} />
                <SideMenuComponent sideIn={true} title={'Collection Summary by Vehicle'} />
            </SideMenuDepth>
            <SideMenuDepth menuTitle={'Settlement Results'}>
                <SideMenuComponent sideIn={true} title={'Settlement Results by Transport Company'} path={'/settlementresults'} />
            </SideMenuDepth>
        </ul>
    );
};

export default MenuSettlement;
