import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

import Header from "../components/header/Header";
import TemplateNav from "../components/header/TemplateNav";

import ButtonComponent from "../components/common/ButtonComponent";
import ButtonWithComponent from "../components/common/ButtonWithComponent";
import ImgComponent from "../components/common/ImgComponent";

import InputMdComponent from "../components/inputfield/InputMdComponent";
import InputMdLineComponent from "../components/inputfield/InputMdLineComponent";


const TemplateLogin = () => {
    
  return (
    <div className="wrap"> 
        <Header headerClass="posrel">     
            <TemplateNav></TemplateNav>               
        </Header> 
        <main className="login_box">
            <div>
                <div className="tac">
                    <ImgComponent src="login_logo_wh.svg" alt="" />
                </div>
                <div className="login_form m-t-20 gap_20">
                    <p className="fs_24_bold tac">로그인</p>
                    <InputMdLineComponent zoneClass={'put_zone m-t-20'} type={'text'} placeholder={'아이디'} inputStyle={'xlarge line'} />
                    <InputMdLineComponent zoneClass={'put_zone'} type={'password'} placeholder={'비밀번호'} inputStyle={'xlarge line'} />
                    <div className="dflx_ac gap_8">
                        <Link to="#" className="fs_14 fc_black87">아이디</Link>
                        <span className="dashbar"></span>
                        <Link to="#" className="fs_14 fc_black87">비밀번호 찾기</Link>
                        <Link to="#" className="fs_14 fc_black87 m-l-a">회원가입</Link>
                    </div>
                    <ButtonComponent className="btn_primary btn_l w-100" type="button" txt="로그인"></ButtonComponent>
                    <p className="fc_black60 fs_11 tac">본 시스템은 유아이네트웍스 직원에 한하여 사용가능합니다.<br/>
                        불법적인 접근 및 사용 시, 관련 법규에 의해 처벌될 수 있습니다.</p>
                </div>
            </div>        
        </main>
    </div>    
  );
};

export default TemplateLogin;
