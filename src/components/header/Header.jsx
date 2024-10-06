import React from 'react';
import { Link } from "react-router-dom";


const Header = ({ headerClass, children }) => {

  return (
    <header className={headerClass}>
        <article className='header_in'>
            {children}
        </article>
    </header>
  );
};

export default Header;