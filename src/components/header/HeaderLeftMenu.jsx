import React from 'react';


const HeaderLeftMenu = ({ clickParams, children }) => {

  return (
    <div className="menu_hamburger" onClick={clickParams}>
        <span></span>
        <span></span>
        <span></span>
    </div>
  );
};

export default HeaderLeftMenu;