import React from 'react';
import { useState } from "react";


const SideMenuToggle = ({ className, children, boolean }) => {

    const [onToggle, setToggleMenu] = useState(boolean);
    const ToggleMenu = () => {
        setToggleMenu(!onToggle);
    }

  return (
    <span onClick={ToggleMenu} className={onToggle ? "nav_title on" : "nav_title"}>
        {children}
    </span>
  );
};

export default SideMenuToggle;