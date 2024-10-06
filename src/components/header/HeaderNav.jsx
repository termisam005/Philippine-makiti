import React from "react";


const HeaderNav = ({ children }) => {
  return (
    <nav className="gnb">
      <ul className="gap_32">{children}</ul>
    </nav>
  );
};

export default HeaderNav;