import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import HeaderNav from "../header/HeaderNav";
import Header from "../header/Header";
import HeaderLeft from "../header/HeaderLeft";
import HeaderLogo from "../header/HeaderLogo";
import HeaderLeftMenu from "../header/HeaderLeftMenu";
import HeaderMember from "../header/HeaderMember";
import HeaderRight from "../header/HeaderRight";
import SideMenus from "../layouts/SideMenus";
import Content from "../atom/Content";
import Button from "../atom/Button";
import ImgComponent from "../common/ImgComponent";
import Footer from "../footer/Footer";
import FooterLeft from "../footer/FooterLeft";
import FooterRight from "../footer/FooterRight";

import MenuOperation from "./MenuOperation";
import MenuTransaction from "./MenuTransaction";
import MenuReception from "./MenuReception";
import MenuSettlement from "./MenuSettlement";
import MenuSystem from "./MenuSystem";


const MainLayout = ({ children }) => {

    // 사이드메뉴 않보이기
    const [sideMenu, sideMenuToggle] = useState(false);
    const ToggleSideMenu = () => {
        sideMenuToggle(!sideMenu);
    }

    // my menu 토글
    const [myMenu, setMyMenu] = useState(false);
    const toggleMyMenu = () => {
        setMyMenu(!myMenu);
    }

    // nav 메뉴탭
    const [linkTab, setLinkTab] = useState(0);
    const tabNavLink = (index) => {
        setLinkTab(index);
    }

    useEffect(()=>{
        // side_menu 탭
        const asideMenu = document.querySelectorAll('.side_menu');
        asideMenu.forEach((sideTab) => {
            sideTab.addEventListener('click', function(){
                asideMenu.forEach(function(menu) {
                    menu.classList.remove('on');
                });
                this.classList.add('on');
            })
        })
    });

    return (
        <div className="wrap">

            <Header headerClass="posrel">                                        
                <HeaderLeft>
                    <HeaderLeftMenu clickParams={ToggleSideMenu}></HeaderLeftMenu>
                    <HeaderLogo src='logo_makati.png' />
                </HeaderLeft>
                <HeaderNav>
                    <li>
                        <Link onClick={()=>tabNavLink(1)} className={linkTab === 1? 'on':''}>Transaction Performance</Link>
                    </li>
                    <li>
                        <Link onClick={()=>tabNavLink(2)} className={linkTab === 2? 'on':''}>Operation Information</Link>
                    </li>
                    <li>
                        <Link onClick={()=>tabNavLink(3)} className={linkTab === 3? 'on':''}>Transmission/Reception</Link>
                    </li>
                    <li>
                        <Link onClick={()=>tabNavLink(4)} className={linkTab === 4? 'on':''}>Settlement</Link>
                    </li>
                    <li>
                        <Link onClick={()=>tabNavLink(5)} className={linkTab === 5? 'on':''}>System</Link>
                    </li>
                </HeaderNav>
                <HeaderRight>
                    <HeaderMember></HeaderMember>
                </HeaderRight>                            
            </Header>

            <SideMenus className={sideMenu ? "sidebar_menu hide" : "sidebar_menu"}>
                <div className="my_menu">
                    <span className="menu_title">Menu</span>
                    <Button type={'button'} onClick={toggleMyMenu} className={myMenu? 'btn_my_menu on' : 'btn_my_menu'}>
                        <ImgComponent className={'img_bookmark'} src={'my_bookmark_16.svg'} />
                        <span className="fs_12_medium word">My menu</span>
                    </Button>
                </div>
                <div className="side_menu_bar">
                    <MenuTransaction className={linkTab === 1? '' : 'hide'} />
                    <MenuOperation className={linkTab === 2? '' : 'hide'} />
                    <MenuReception className={linkTab === 3? '' : 'hide'} />
                    <MenuSettlement className={linkTab === 4? '' : 'hide'} />
                    <MenuSystem className={linkTab === 5? '' : 'hide'} />
                </div>
            </SideMenus>

            <Content className={sideMenu ? 'content_left_none bottom100' : 'content_left'}>
                {children}
            </Content>

            <Footer footerClass={"footer_box w-100 bg_white"}>
                <FooterLeft className={'dflx_ac gap_20'}>
                    <ImgComponent src={"logo_gray_80.svg"} />
                    <span className={"fc_black60 fs_11"}>
                        Copyright @ 2024 UI Networks
                    </span>
                </FooterLeft>
                <FooterRight className={"dflx_ac gap_20"}>
                    {/* <div className="footer_member">
                        <span className="profile20"></span>
                        <span className="fs_11 fc_black40">Robert(rbt1234)</span>
                    </div>
                    <div className="footer_member">
                        <span className="admin18"></span>
                        <span className="fs_11 fc_black40">Administrator</span>
                    </div> */}
                </FooterRight>
            </Footer>

        </div>
    );
};

export default MainLayout;
