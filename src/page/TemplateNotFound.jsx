import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

import TemplateNav from "../components/header/TemplateNav";
import Header from "../components/header/Header";
import HeaderLeft from "../components/header/HeaderLeft";
import HeaderLogo from "../components/header/HeaderLogo";
import HeaderLeftMenu from "../components/header/HeaderLeftMenu";
import HeaderMember from "../components/header/HeaderMember";
import HeaderNav from "../components/header/HeaderNav";
import HeaderRight from "../components/header/HeaderRight";

import ButtonComponent from "../components/common/ButtonComponent";
import ButtonWithComponent from "../components/common/ButtonWithComponent";
import ImgComponent from "../components/common/ImgComponent";

import SideMenu from "../components/menu/SideMenu";


const TemplateNotFound = () => {
    
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
        <SideMenu className={sideMenu ? "sidebar_menu lightmode" : "sidebar_menu lightmode hide"} id="leftMenu"></SideMenu>
        <main className="main_dashboard dflx_ac_jcent">
            <div>
                <div className="tac">
                    <ImgComponent src="not_found_icon_bk.svg" alt="" />
                </div>
                <p className="fs_24_bold m-t-20 tac">페이지를 찾을 수 없습니다.</p>
                <p className="fc_black80 tac m-t-16">요청 페이지가 서버에 존재하지 않습니다.<br/>
                    호출 URL 주소가 정확한지 다시 한 번 확인해 주세요.</p>
                <ButtonComponent className="btn_primary btn_l w-100 m-t-40" type="button" txt="이전 페이지로 돌아가기"></ButtonComponent>
            </div>
        </main>
    </div>    
  );
};

export default TemplateNotFound;
