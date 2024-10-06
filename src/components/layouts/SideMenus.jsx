import React from "react";


const SideMenus = ({ className, id, children }) => {

    return (
        <nav className={className} id={id}>
            {children}
        </nav>
    );
};

export default SideMenus;
