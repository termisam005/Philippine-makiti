import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";

import ButtonWithComponent from '../../components/common/ButtonWithComponent';
import ImgComponent from "../../components/common/ImgComponent";

import Bookmark from '../../components/menu/Bookmark';
import SideMenuToggle from '../../components/menu/SideMenuToggle';

const SideMenu = ({ className, id }) => {

  return (
    <nav className={className} id={id}>
        <ul className="nav_first_depth" role="menu" aria-labelledby="left sidebar menu" >
            <li role="presentation">
                <SideMenuToggle boolean="true">Default</SideMenuToggle>
                <ul className="nav_second_depth show">
                    <li className="selected">
                        <Link to="#" role="menuitem">Selected</Link>
                        <Bookmark boolean="true"></Bookmark>
                    </li>
                    <li>
                        <Link to="#" role="menuitem">Default</Link>
                        <Bookmark boolean="true"></Bookmark>
                    </li>
                    <li>
                        <Link to="#" role="menuitem">Default</Link>
                        <Bookmark></Bookmark>
                    </li>
                    <li>
                        <Link to="#" role="menuitem">Default</Link>
                        <Bookmark></Bookmark>
                    </li>
                </ul>
            </li>
            <li role="presentation">
                <SideMenuToggle>Default</SideMenuToggle>
                <ul className="nav_second_depth">
                    <li>
                        <Link to="#" role="menuitem">Default</Link>
                        <Bookmark boolean="true"></Bookmark>
                    </li>
                    <li>
                        <Link to="#" role="menuitem">Default</Link>
                        <Bookmark></Bookmark>
                    </li>
                    <li>
                        <Link to="#" role="menuitem">Default</Link>
                        <Bookmark></Bookmark>
                    </li>
                </ul>
            </li>
            <li role="presentation">
                <SideMenuToggle>Default</SideMenuToggle>
                <ul className="nav_second_depth">
                    <li>
                        <Link to="#" role="menuitem">Default</Link>
                        <Bookmark></Bookmark>
                    </li>
                    <li>
                        <Link to="#" role="menuitem">Default</Link>
                        <Bookmark></Bookmark>
                    </li>
                    <li>
                        <Link to="#" role="menuitem">Default</Link>
                        <Bookmark></Bookmark>
                    </li>
                </ul>
            </li>
            <li role="presentation" className="nav_divider">
                <SideMenuToggle boolean="true">Default</SideMenuToggle>
                <ul className="nav_second_depth show">
                    <li className="selected">
                        <Link to="#" role="menuitem">Hover</Link>
                        <ButtonWithComponent type="button" className="m-l-a">
                            <ImgComponent src="close_line_bk_16.svg" alt="" />
                        </ButtonWithComponent>
                    </li>
                    <li>
                        <Link to="#" role="menuitem">Default</Link>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
  );
};

export default SideMenu;