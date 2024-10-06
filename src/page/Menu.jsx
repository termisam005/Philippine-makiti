import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import ImgComponent from "../components/common/ImgComponent";
import ButtonComponent from '../components/common/ButtonComponent';
import ButtonWithComponent from '../components/common/ButtonWithComponent';

import DatepickerLine from '../components/atom/DatepickerLine';

import Header from "../components/header/Header";
import HeaderLeft from "../components/header/HeaderLeft";
import HeaderLogo from "../components/header/HeaderLogo";
import HeaderLeftMenu from "../components/header/HeaderLeftMenu";
import HeaderMember from "../components/header/HeaderMember";
import HeaderNav from "../components/header/HeaderNav";
import HeaderRight from "../components/header/HeaderRight";
import Gnb from "../components/header/Gnb";

import SideMenu from "../components/menu/SideMenu";

import Footer from "../components/footer/Footer";
import FooterLeft from "../components/footer/FooterLeft";
import FooterRight from "../components/footer/FooterRight";

const Menu = () => {
    
  return (
    <div className="guide_back">
        <Gnb></Gnb>
        <div className="guide_wrap">
            <div className="guide_center">
                <div className="guide_top">
                    <h1>Menu</h1>
                </div>

                <div className="Gr_contents">
                    <div className="comp_top">
                        <h2>Gnb</h2>
                    </div>
                    <section>             
                        <Header headerClass="posrel z_index999">                                        
                            <HeaderLeft>
                                <HeaderLeftMenu></HeaderLeftMenu>
                                <HeaderLogo src='logo_bk.svg'></HeaderLogo>
                            </HeaderLeft>
                            <HeaderNav></HeaderNav>
                            <HeaderRight>
                                <HeaderMember></HeaderMember>
                            </HeaderRight>                            
                        </Header> 
                    </section>

                    <section className="m-t-80 dark">      
                        <Header headerClass="posrel">                                                               
                            <HeaderLeft>
                                <HeaderLeftMenu></HeaderLeftMenu>
                                <HeaderLogo src='logo_wh.svg'></HeaderLogo>
                            </HeaderLeft>
                            <HeaderNav></HeaderNav>
                            <HeaderRight>
                                <HeaderMember></HeaderMember>
                            </HeaderRight>   
                        </Header>                                       
                    </section>

                    <div className="comp_top m-t-100">
                        <h2>Page title</h2>
                    </div>
                    <section className="">  
                        <Header headerClass="posrel">                                                               
                            <HeaderLeft>
                                <div className="fs_24_bold">
                                    Page Title
                                </div>
                            </HeaderLeft>
                            <HeaderRight>
                                <ButtonComponent className="btn_primary btn_32 w140" type="button" txt="Default"></ButtonComponent>
                            </HeaderRight>   
                        </Header>         

                        <Header headerClass="posrel m-t-50 z_index999">
                            <HeaderLeft>
                                <div className="fs_24_bold">
                                    Page Title
                                </div>
                            </HeaderLeft>
                            <HeaderRight>            
                                <DatepickerLine wrapClass="put_zone w140 date_icon" inputClass="wrput medium fillgray datepicker" />  
                            </HeaderRight>   
                        </Header>         

                        <Header headerClass="posrel m-t-50">
                            <HeaderLeft>
                                <div className="fs_24_bold">
                                    Page Title
                                </div>
                            </HeaderLeft>
                            <HeaderRight>        
                                <ButtonWithComponent type="button">
                                    <ImgComponent src="close_line_bk_24.svg" alt="" />
                                </ButtonWithComponent>
                            </HeaderRight>   
                        </Header>    
                    </section>

                    <div className="comp_top m-t-100">
                        <h2>Footer (map)</h2>
                    </div>
                    <Footer footerClass="footer_box m-t-30">
                        <FooterLeft>
                            <div className="button_shadow border_radius4">
                                <ButtonWithComponent type="button" className="btn_secondary btn_32 icon_type">
                                    <ImgComponent src="legend_bk_24.svg" alt="" />
                                </ButtonWithComponent>
                            </div>  
                        </FooterLeft>
                        <FooterRight>
                            <div className="tab_line button_shadow border_radius4">
                                <ButtonWithComponent type="button" className="btn_secondary btn_32 icon_type">
                                    <ImgComponent src="minus_bk_16.svg" alt="" />
                                </ButtonWithComponent>
                                <ButtonWithComponent type="button" className="btn_secondary btn_32 icon_type">
                                    <ImgComponent src="plus_line_bk_16.svg" alt="" />
                                </ButtonWithComponent>
                            </div>
                        </FooterRight>
                    </Footer>

                    <div className="comp_top m-t-100">
                        <h2>Side menu</h2>
                    </div>
                    <p className="m-t-15-negative">Gnb type 1=LNB,  type 2=GNB로 사용</p>
                    <section>
                        <div className="dflx m-t-150">
                            <div className="auto_row52 p-t-20">
                                <div className="dflx_ac gap_30 fs_12 fc_black60">
                                    <p>Lv.1</p>
                                    <p className="w45">Default</p>
                                    <p>Open</p>
                                </div>
                                <div className="dflx_ac gap_30 fs_12 fc_black60">
                                    <p>Lv.2</p>
                                    <p className="w45">Select</p>
                                    <p>bookmark on</p>
                                </div>
                                <div className="dflx_ac gap_30 fs_12 fc_black60">
                                    <p>Lv.2</p>
                                    <p className="w45">Default</p>
                                    <p>bookmark on</p>
                                </div>
                                <div className="dflx_ac gap_30 fs_12 fc_black60">
                                    <p>Lv.2</p>
                                    <p className="w45">Default</p>
                                    <p>bookmark off</p>
                                </div>
                                <div></div>
                                <div className="dflx_ac gap_30 fs_12 fc_black60">
                                    <p>Lv.1</p>
                                    <p className="w45">Default</p>
                                    <p>Close</p>
                                </div>
                                <div></div>
                                <div className="dflx_ac gap_30 fs_12 fc_black60">
                                    <p>Lv.1</p>
                                    <p className="w45">Default</p>
                                    <p>Open(divider)</p>
                                </div>
                                <div className="dflx_ac gap_30 fs_12 fc_black60">
                                    <p>Lv.2</p>
                                    <p className="w45">Select</p>
                                    <p>hover</p>
                                </div>
                                <div className="dflx_ac gap_30 fs_12 fc_black60">
                                    <p>Lv.2</p>
                                    <p className="w45">Default</p>
                                </div>
                            </div>
                            <div className="relative m-l-80 w260">
                                <div className="absolute" style={{top: '-80px'}}>
                                    <p className="fs_bold">Light</p>
                                    <div className="m-t-30">
                                        <HeaderLeftMenu></HeaderLeftMenu>
                                    </div>
                                </div>
                                <SideMenu className="sidebar_menu lightmode static" id="leftMenu"></SideMenu>
                            </div>
                            <div className="relative m-l-40 dark">
                                <div className="absolute" style={{top: '-80px'}}>
                                    <p className="fs_bold">Dark</p>
                                    <div className="m-t-30">
                                        <HeaderLeftMenu></HeaderLeftMenu>
                                    </div>
                                </div>
                                <SideMenu className="sidebar_menu darkmode static" id="leftMenuDark"></SideMenu>
                            </div>
                        </div>
                    </section>
                </div>                
            </div>
        </div>
    </div>
  );
};

export default Menu;
