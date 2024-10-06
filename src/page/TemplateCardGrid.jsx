import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

import TemplateNav from "../components/header/TemplateNav";
import Header from "../components/header/Header";
import HeaderLeft from "../components/header/HeaderLeft";
import HeaderLogo from "../components/header/HeaderLogo";
import HeaderLeftMenu from "../components/header/HeaderLeftMenu";
import HeaderMember from "../components/header/HeaderMember";
import HeaderRight from "../components/header/HeaderRight";

import ButtonComponent from "../components/common/ButtonComponent";
import ButtonWithComponent from "../components/common/ButtonWithComponent";
import InputMdLineComponent from "../components/inputfield/InputMdLineComponent";
import ImgComponent from "../components/common/ImgComponent";
import Paging10Component from "../components/common/Paging10Component";

import ImageThumnail from "../components/common/ImageThumnail";
import ImageThumnailLabel from "../components/common/ImageThumnailLabel";
import ImageThumnailDescription from "../components/common/ImageThumnailDescription";

import SideMenu from "../components/menu/SideMenu";

// import 'overlayscrollbars/overlayscrollbars.css';
// import  {  OverlayScrollbarsComponent  }  from  "overlayscrollbars-react" ;

const TemplateCardGrid = () => {
    
    const [sideMenu, sideMenuToggle] = useState(false);
    const ToggleSideMenu = () => {
        sideMenuToggle(!sideMenu);
    }
    
  return (
    <div className="wrap">
        <Header headerClass="posrel">                                        
            <HeaderLeft>
                <HeaderLeftMenu clickParams={ToggleSideMenu}></HeaderLeftMenu>
                <HeaderLogo src='logo_bk.svg'></HeaderLogo>
            </HeaderLeft>
            <TemplateNav></TemplateNav>
            <HeaderRight>
                <HeaderMember></HeaderMember>
            </HeaderRight>                            
        </Header> 
        <SideMenu className={sideMenu ? "sidebar_menu lightmode hide" : "sidebar_menu lightmode "} id="leftMenu"></SideMenu>
        {/* <OverlayScrollbarsComponent defer> */}
            <main className={sideMenu ? "main_dashboard" : "main_dashboard on"}>
                <div className="dashboard_title">
                    <h1>이미지 관리</h1>
                    <Link to="#" className="btn_primary btn_32 w140" type="button">등록하기</Link>
                </div>
                <div className="dashboard_box">
                    <div className="bg_white p-20">
                        <div className="dflx_ac m-b-20">
                            <p className="fs_bold">목록(999)</p>
                            <div className="m-l-a dflx gap_4">
                                <InputMdLineComponent zoneClass={'put_zone w260'} type={'text'} placeholder={'placeholder'} />
                                <ButtonComponent className="btn_primary btn_32 disabled" type="button" txt="검색"></ButtonComponent>
                            </div>
                        </div>   
                        <div class="image_list_grid gap_20">
                            <ImageThumnail>
                                <ImageThumnailLabel imgUrl='lmage_bk_24.svg' label='Button' />
                                <ImageThumnailDescription>
                                    <div className="dflx">
                                        <p className="fs_14_medium w96">Label</p>
                                        <p className="fs_14">Contents</p>
                                    </div>
                                    <div className="dflx">
                                        <p className="fs_14_medium w96">Label</p>
                                        <p className="fs_14">Contents</p>
                                    </div>
                                </ImageThumnailDescription>
                            </ImageThumnail>
                            <ImageThumnail>
                                <ImageThumnailLabel imgUrl='lmage_bk_24.svg' label='Button' />
                                <ImageThumnailDescription>
                                    <div className="dflx">
                                        <p className="fs_14_medium w96">Label</p>
                                        <p className="fs_14">Contents</p>
                                    </div>
                                    <div className="dflx">
                                        <p className="fs_14_medium w96">Label</p>
                                        <p className="fs_14">Contents</p>
                                    </div>
                                </ImageThumnailDescription>
                            </ImageThumnail>
                            <ImageThumnail>
                                <ImageThumnailLabel imgUrl='lmage_bk_24.svg' label='Button' />
                                <ImageThumnailDescription>
                                    <div className="dflx">
                                        <p className="fs_14_medium w96">Label</p>
                                        <p className="fs_14">Contents</p>
                                    </div>
                                    <div className="dflx">
                                        <p className="fs_14_medium w96">Label</p>
                                        <p className="fs_14">Contents</p>
                                    </div>
                                </ImageThumnailDescription>
                            </ImageThumnail>
                            <ImageThumnail>
                                <ImageThumnailLabel imgUrl='lmage_bk_24.svg' label='Button' />
                                <ImageThumnailDescription>
                                    <div className="dflx">
                                        <p className="fs_14_medium w96">Label</p>
                                        <p className="fs_14">Contents</p>
                                    </div>
                                    <div className="dflx">
                                        <p className="fs_14_medium w96">Label</p>
                                        <p className="fs_14">Contents</p>
                                    </div>
                                </ImageThumnailDescription>
                            </ImageThumnail>
                            <ImageThumnail>
                                <ImageThumnailLabel imgUrl='lmage_bk_24.svg' label='Button' />
                                <ImageThumnailDescription>
                                    <div className="dflx">
                                        <p className="fs_14_medium w96">Label</p>
                                        <p className="fs_14">Contents</p>
                                    </div>
                                    <div className="dflx">
                                        <p className="fs_14_medium w96">Label</p>
                                        <p className="fs_14">Contents</p>
                                    </div>
                                </ImageThumnailDescription>
                            </ImageThumnail>
                            <ImageThumnail>
                                <ImageThumnailLabel imgUrl='lmage_bk_24.svg' label='Button' />
                                <ImageThumnailDescription>
                                    <div className="dflx">
                                        <p className="fs_14_medium w96">Label</p>
                                        <p className="fs_14">Contents</p>
                                    </div>
                                    <div className="dflx">
                                        <p className="fs_14_medium w96">Label</p>
                                        <p className="fs_14">Contents</p>
                                    </div>
                                </ImageThumnailDescription>
                            </ImageThumnail>
                            <ImageThumnail>
                                <ImageThumnailLabel imgUrl='lmage_bk_24.svg' label='Button' />
                                <ImageThumnailDescription>
                                    <div className="dflx">
                                        <p className="fs_14_medium w96">Label</p>
                                        <p className="fs_14">Contents</p>
                                    </div>
                                    <div className="dflx">
                                        <p className="fs_14_medium w96">Label</p>
                                        <p className="fs_14">Contents</p>
                                    </div>
                                </ImageThumnailDescription>
                            </ImageThumnail>
                            <ImageThumnail>
                                <ImageThumnailLabel imgUrl='lmage_bk_24.svg' label='Button' />
                                <ImageThumnailDescription>
                                    <div className="dflx">
                                        <p className="fs_14_medium w96">Label</p>
                                        <p className="fs_14">Contents</p>
                                    </div>
                                    <div className="dflx">
                                        <p className="fs_14_medium w96">Label</p>
                                        <p className="fs_14">Contents</p>
                                    </div>
                                </ImageThumnailDescription>
                            </ImageThumnail>
                        </div>  
                        <Paging10Component wrapClass="dflx_ac_jcent gap_8 m-t-20 paging_large"></Paging10Component>
                    </div>
                </div>
            </main>
        {/* </OverlayScrollbarsComponent> */}
    </div>    
  );
};

export default TemplateCardGrid;
