import React from 'react';
import { Link } from "react-router-dom";


const Footer = ({ footerClass, children }) => {

  return (
    <footer className={footerClass}>
        <article className="dflx_ac_jbet w-100 h-100">{children}</article>
    </footer>
  );
};

export default Footer;