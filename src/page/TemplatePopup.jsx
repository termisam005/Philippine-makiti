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
import CheckComponent from "../components/common/CheckComponent";
import ImageUpload from "../components/common/ImageUpload";
import ImgComponent from "../components/common/ImgComponent";

import InputMdComponent from "../components/inputfield/InputMdComponent";
import InputMdLineComponent from "../components/inputfield/InputMdLineComponent";

import CardBlock from "../components/cards/CardBlock";
import CardInnerBlock from "../components/cards/CardInnerBlock";
import CardLabelAccordion from "../components/cards/CardLabelAccordion";
import CardPopupBg from "../components/cards/CardPopupBg";

import SelectBoxComponent from "../components/molecule/SelectBoxComponent";
import TextareaComponent from "../components/inputfield/TextareaComponent";
import SideMenu from "../components/menu/SideMenu";

// import 'overlayscrollbars/overlayscrollbars.css';
// import  {  OverlayScrollbarsComponent  }  from  "overlayscrollbars-react" ;

const TemplatePopup = () => {
    
    // sidemenu
    const [sideMenu, sideMenuToggle] = useState(false);
    const ToggleSideMenu = () => {
        sideMenuToggle(!sideMenu);
    }
    
    // checkbox all
    const [isAllChecked, setAllChecked] = useState(false);
    const [checkedState, setCheckedState] = useState(new Array(2).fill(false));

    const handleAllCheck = () => {
        setAllChecked((prev) => !prev);
        let array = new Array(2).fill(!isAllChecked);
        setCheckedState(array);
    };

    const handleMonoCheck = (position) => {
        const updatedCheckedState = checkedState.map((item, index) => (index === position ? !item : item));
        setCheckedState(updatedCheckedState);
        const checkedLength = updatedCheckedState.reduce((sum, currentState) => {
            if (currentState === true) {
                return sum + 1;
            }
            return sum;
        }, 0);
        setAllChecked(checkedLength === updatedCheckedState.length);
    };
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
                <div className="dashboard_box">
                    <p className="fs_bold fc_black87">Popup Accordion Closed(Default)</p>
                    <CardBlock className="w788">
                        <div className="dflx_ac_jbet m-b-24">                            
                            <div className="fs_20_bold">
                                답변 등록
                            </div>
                            <ButtonWithComponent type="button">
                                <ImgComponent src="close_line_bk_24.svg" alt="" />
                            </ButtonWithComponent>
                        </div>
                        <div className="">
                            <CardPopupBg className={"gap_24"}>
                                <div>
                                    <p className="fs_bold">스킬명</p>
                                    <InputMdComponent zoneClass={'put_zone m-t-10'} type={'text'} placeholder={'placeholder'} inputStyle={'large'} />
                                </div>
                                <div>
                                    <p className="fs_bold">스킬코드 *</p>
                                    <InputMdComponent zoneClass={'put_zone m-t-10'} type={'text'} placeholder={'placeholder'} inputStyle={'large'} />
                                </div>
                                <div>
                                    <p className="fs_bold">레벨 *</p>
                                    <div className="grid_column4 gap_8 m-t-10">
                                        <SelectBoxComponent selectClass="white large w180"></SelectBoxComponent>
                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'large'} />
                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'large'} />
                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'large'} />
                                    </div>
                                </div>
                                <div>
                                    <p className="fs_bold">프로필 인증 여부</p>
                                    <SelectBoxComponent selectClass="white large m-t-10"></SelectBoxComponent>
                                </div>
                            </CardPopupBg>
                            <CardPopupBg className="m-t-12">
                                <CardLabelAccordion label labelTitle={"응답타입 1*"} labelName={"텍스트형"}>
                                    <SelectBoxComponent selectClass={'white large m-t-24'}></SelectBoxComponent>
                                    <CardInnerBlock className="dflx_column gap_8 m-t-8">
                                        <div className="dflx_as gap_20">
                                            <p className="card_subtitle">Label</p>
                                            <TextareaComponent className="flex1 h100 p-r-4" placeholder="placeholder">
                                                <div className="textarea_length">
                                                    <span>0</span>
                                                    <span>/</span>
                                                    <span>128</span>
                                                </div>
                                            </TextareaComponent>
                                        </div>
                                    </CardInnerBlock>
                                </CardLabelAccordion>                           
                            </CardPopupBg>
                            <CardPopupBg className="m-t-12">
                                <CardLabelAccordion label labelTitle={"응답타입 2*"} labelName={"카드형"}>
                                    <SelectBoxComponent selectClass={'white large m-t-24'}></SelectBoxComponent>
                                    <CardInnerBlock className="dflx_column gap_8 m-t-16">
                                        <div className="dflx">
                                            <div className="popup_pager gap_6">
                                                <ButtonComponent className="selected" type="button" txt="1"></ButtonComponent>
                                                <ButtonComponent type="button" txt="2"></ButtonComponent>
                                                <ButtonComponent type="button" txt="3"></ButtonComponent>
                                            </div>
                                            <div className="m-l-a dflx gap_4">
                                                <ButtonComponent className="btn_secondary btn_32 disabled" type="button" txt="추가"></ButtonComponent>
                                                <ButtonComponent className="btn_secondary btn_32" type="button" txt="삭제"></ButtonComponent>
                                            </div>
                                        </div>
                                        <hr className="popup_divider" />
                                        <div className="dflx_ac gap_20">
                                            <p className="card_subtitle">Label</p>
                                            <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'wrput large line'} />
                                        </div>         
                                        <div className="dflx_as gap_20">
                                            <p className="card_subtitle">Label</p>
                                            <TextareaComponent className="flex1 h100 p-r-4" placeholder="placeholder">
                                                <div className="textarea_length">
                                                    <span>0</span>
                                                    <span>/</span>
                                                    <span>128</span>
                                                </div>
                                            </TextareaComponent>
                                        </div>                         
                                        <div className="dflx_ac gap_20">
                                            <p className="card_subtitle">Label</p>
                                            <div className="dflx gap_4 flex1">                                            
                                                <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'wrput large line'} />
                                                <ButtonComponent className="btn_secondary btn_m" type="button" txt="선택"></ButtonComponent>
                                            </div>
                                        </div>    
                                        <div className="dflx_as gap_20">
                                            <p className="card_subtitle">Label</p>
                                            <CardInnerBlock className="dflx_column gap_8 flex1 border_grayd6">
                                                <div className="dflx">
                                                    <div className="popup_pager gap_6">
                                                        <ButtonComponent className="selected" type="button" txt="1"></ButtonComponent>
                                                        <ButtonComponent type="button" txt="2"></ButtonComponent>
                                                        <ButtonComponent type="button" txt="3"></ButtonComponent>
                                                    </div>
                                                    <div className="m-l-a dflx gap_4">
                                                        <ButtonComponent className="btn_secondary btn_32 disabled" type="button" txt="추가"></ButtonComponent>
                                                        <ButtonComponent className="btn_secondary btn_32" type="button" txt="삭제"></ButtonComponent>
                                                    </div>
                                                </div>
                                                <hr className="popup_divider" />
                                                <div className="grid_column1 gap_8">
                                                    <div className="dflx_ac gap_4">
                                                        <p className="card_subtitle">Label</p>
                                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'wrput large fillgray'} />
                                                    </div>   
                                                    <div className="dflx_ac gap_4">
                                                        <p className="card_subtitle">Label</p>
                                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'wrput large fillgray'} />
                                                    </div>   
                                                    <div className="dflx_ac gap_4">
                                                        <p className="card_subtitle">Label</p>
                                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'wrput large fillgray'} />
                                                    </div>   
                                                </div>  
                                            </CardInnerBlock>
                                        </div>        
                                    </CardInnerBlock>
                                </CardLabelAccordion>
                            </CardPopupBg>
                            <CardPopupBg className="m-t-12">
                                <CardLabelAccordion label labelTitle={"응답타입 3*"} labelName={"선택안함"}>
                                    <SelectBoxComponent selectClass={'white large m-t-24'}></SelectBoxComponent>
                                    <CardInnerBlock className="dflx_column gap_8 m-t-8">
                                        <div className="dflx_ac gap_20">
                                            <p className="card_subtitle">Label</p>
                                            <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'wrput large line'} />
                                        </div>
                                        <div className="dflx_ac gap_20">
                                            <p className="card_subtitle">Label</p>
                                            <SelectBoxComponent selectClass={'line large'}></SelectBoxComponent>
                                        </div>
                                        <CardInnerBlock className="dflx_column gap_8 notitle">
                                            <div className="dflx_ac">
                                                <p className="card_subtitle">Label</p>
                                                <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'wrput large fillgray'} value={'Label'} />
                                            </div>
                                            <div className="dflx_ac">
                                                <p className="card_subtitle">Label</p>
                                                <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'wrput large fillgray'} value={'Label'} />
                                            </div>
                                        </CardInnerBlock>
                                    </CardInnerBlock>
                                </CardLabelAccordion>
                            </CardPopupBg>
                            <CardPopupBg className="m-t-12">
                                <CardLabelAccordion label labelTitle={"바로연결 버튼"} labelHidden>
                                    <CardInnerBlock className="dflx_column gap_8 m-t-24">
                                        <div className="dflx">
                                            <div className="popup_pager gap_6">
                                                <ButtonComponent className="selected" type="button" txt="1"></ButtonComponent>
                                                <ButtonComponent type="button" txt="2"></ButtonComponent>
                                                <ButtonComponent type="button" txt="3"></ButtonComponent>
                                            </div>
                                            <div className="m-l-a dflx gap_4">
                                                <ButtonComponent className="btn_secondary btn_32 disabled" type="button" txt="추가"></ButtonComponent>
                                                <ButtonComponent className="btn_secondary btn_32" type="button" txt="삭제"></ButtonComponent>
                                            </div>
                                        </div>
                                        <hr className="popup_divider" />
                                        <div className="dflx_ac gap_20">
                                            <p className="card_subtitle">Label</p>
                                            <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'wrput large line'} />
                                        </div> 
                                        <div className="dflx_ac gap_20">
                                            <p className="card_subtitle">Label</p>
                                            <SelectBoxComponent selectClass="line large"></SelectBoxComponent>
                                        </div> 
                                        <div className="dflx_ac gap_20">
                                            <p className="card_subtitle">Label</p>
                                            <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'wrput large line'} />
                                        </div> 
                                        <div className="dflx_ac gap_20">
                                            <p className="card_subtitle">Label</p>
                                            <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'wrput large line'} />
                                        </div> 
                                    </CardInnerBlock>
                                </CardLabelAccordion>
                            </CardPopupBg>
                        </div>
                        <div className="m-t-24 dflx">
                            <ButtonComponent className="btn_secondary btn_m w160" type="button" txt="미리보기"></ButtonComponent>
                            <ButtonComponent className="btn_secondary btn_m w160 m-l-a" type="button" txt="닫기"></ButtonComponent>
                            <ButtonComponent className="btn_primary btn_m w160 m-l-16" type="button" txt="저장"></ButtonComponent>
                        </div>
                    </CardBlock>
                    <p className="m-t-80 fs_bold fc_black87">Popup Accordion Opened</p>
                    <CardBlock className="w788">
                        <div className="dflx_ac_jbet m-b-24">                            
                            <div className="fs_20_bold">
                                답변 등록
                            </div>
                            <ButtonWithComponent type="button">
                                <ImgComponent src="close_line_bk_24.svg" alt="" />
                            </ButtonWithComponent>
                        </div>
                        <div>
                            <CardPopupBg className={"gap_24"}>
                                <div>
                                    <p className="fs_bold">스킬명</p>
                                    <InputMdComponent zoneClass={'put_zone m-t-10'} type={'text'} placeholder={'placeholder'} inputStyle={'large'} />
                                </div>
                                <div>
                                    <p className="fs_bold">스킬코드 *</p>
                                    <InputMdComponent zoneClass={'put_zone m-t-10'} type={'text'} placeholder={'placeholder'} inputStyle={'large'} />
                                </div>
                                <div>
                                    <p className="fs_bold">레벨 *</p>
                                    <div className="grid_column4 gap_8 m-t-10">
                                        <SelectBoxComponent selectClass="white large w180"></SelectBoxComponent>
                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'large'} />
                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'large'} />
                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'large'} />
                                    </div>
                                </div>
                                <div>
                                    <p className="fs_bold">프로필 인증 여부</p>
                                    <SelectBoxComponent selectClass="white large m-t-10"></SelectBoxComponent>
                                </div>
                            </CardPopupBg>
                            <CardPopupBg className="m-t-12">
                                <CardLabelAccordion boolean={true} label labelTitle={"응답타입 1*"} labelName={"텍스트형"}>
                                    <SelectBoxComponent selectClass={'white large m-t-24'}></SelectBoxComponent>
                                    <CardInnerBlock className="dflx_column gap_8 m-t-8">
                                        <div className="dflx_as gap_20">
                                            <p className="card_subtitle">Label</p>
                                            <TextareaComponent className="flex1 h100 p-r-4" placeholder="placeholder">
                                                <div className="textarea_length">
                                                    <span>0</span>
                                                    <span>/</span>
                                                    <span>128</span>
                                                </div>
                                            </TextareaComponent>
                                        </div>
                                    </CardInnerBlock>
                                </CardLabelAccordion>                           
                            </CardPopupBg>
                            <CardPopupBg className="m-t-12">
                                <CardLabelAccordion boolean={true} label labelTitle={"응답타입 2*"} labelName={"카드형"}>
                                    <SelectBoxComponent selectClass={'white large m-t-24'}></SelectBoxComponent>
                                    <CardInnerBlock className="dflx_column gap_8 m-t-16">
                                        <div className="dflx">
                                            <div className="popup_pager gap_6">
                                                <ButtonComponent className="selected" type="button" txt="1"></ButtonComponent>
                                                <ButtonComponent type="button" txt="2"></ButtonComponent>
                                                <ButtonComponent type="button" txt="3"></ButtonComponent>
                                            </div>
                                            <div className="m-l-a dflx gap_4">
                                                <ButtonComponent className="btn_secondary btn_32 disabled" type="button" txt="추가"></ButtonComponent>
                                                <ButtonComponent className="btn_secondary btn_32" type="button" txt="삭제"></ButtonComponent>
                                            </div>
                                        </div>
                                        <hr className="popup_divider" />
                                        <div className="dflx_ac gap_20">
                                            <p className="card_subtitle">Label</p>
                                            <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'wrput large line'} />
                                        </div>         
                                        <div className="dflx_as gap_20">
                                            <p className="card_subtitle">Label</p>
                                            <TextareaComponent className="flex1 h100 p-r-4" placeholder="placeholder">
                                                <div className="textarea_length">
                                                    <span>0</span>
                                                    <span>/</span>
                                                    <span>128</span>
                                                </div>
                                            </TextareaComponent>
                                        </div>                         
                                        <div className="dflx_ac gap_20">
                                            <p className="card_subtitle">Label</p>
                                            <div className="dflx gap_4 flex1">                                            
                                                <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'wrput large line'} />
                                                <ButtonComponent className="btn_secondary btn_m" type="button" txt="선택"></ButtonComponent>
                                            </div>
                                        </div>    
                                        <div className="dflx_as gap_20">
                                            <p className="card_subtitle">Label</p>
                                            <CardInnerBlock className="dflx_column gap_8 flex1 border_grayd6">
                                                <div className="dflx">
                                                    <div className="popup_pager gap_6">
                                                        <ButtonComponent className="selected" type="button" txt="1"></ButtonComponent>
                                                        <ButtonComponent type="button" txt="2"></ButtonComponent>
                                                        <ButtonComponent type="button" txt="3"></ButtonComponent>
                                                    </div>
                                                    <div className="m-l-a dflx gap_4">
                                                        <ButtonComponent className="btn_secondary btn_32 disabled" type="button" txt="추가"></ButtonComponent>
                                                        <ButtonComponent className="btn_secondary btn_32" type="button" txt="삭제"></ButtonComponent>
                                                    </div>
                                                </div>
                                                <hr className="popup_divider" />
                                                <div className="grid_column1 gap_8">
                                                    <div className="dflx_ac gap_4">
                                                        <p className="card_subtitle">Label</p>
                                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'wrput large fillgray'} />
                                                    </div>   
                                                    <div className="dflx_ac gap_4">
                                                        <p className="card_subtitle">Label</p>
                                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'wrput large fillgray'} />
                                                    </div>   
                                                    <div className="dflx_ac gap_4">
                                                        <p className="card_subtitle">Label</p>
                                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'wrput large fillgray'} />
                                                    </div>   
                                                </div>  
                                            </CardInnerBlock>
                                        </div>        
                                    </CardInnerBlock>
                                </CardLabelAccordion>
                            </CardPopupBg>
                            <CardPopupBg className="m-t-12">
                                <CardLabelAccordion label labelTitle={"응답타입 3*"} labelName={"선택안함"}>
                                    <SelectBoxComponent selectClass={'white large m-t-24'}></SelectBoxComponent>
                                    <CardInnerBlock className="dflx_column gap_8 m-t-8">
                                        <div className="dflx_ac gap_20">
                                            <p className="card_subtitle">Label</p>
                                            <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'wrput large line'} />
                                        </div>
                                        <div className="dflx_ac gap_20">
                                            <p className="card_subtitle">Label</p>
                                            <SelectBoxComponent selectClass={'line large'}></SelectBoxComponent>
                                        </div>
                                        <CardInnerBlock className="dflx_column gap_8 notitle">
                                            <div className="dflx_ac">
                                                <p className="card_subtitle">Label</p>
                                                <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'wrput large fillgray'} value={'Label'} />
                                            </div>
                                            <div className="dflx_ac">
                                                <p className="card_subtitle">Label</p>
                                                <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'wrput large fillgray'} value={'Label'} />
                                            </div>
                                        </CardInnerBlock>
                                    </CardInnerBlock>
                                </CardLabelAccordion>
                            </CardPopupBg>
                            <CardPopupBg className="m-t-12">
                                <CardLabelAccordion boolean={true} label labelTitle={"바로연결 버튼"} labelHidden>
                                    <CardInnerBlock className="dflx_column gap_8 m-t-24">
                                        <div className="dflx">
                                            <div className="popup_pager gap_6">
                                                <ButtonComponent className="selected" type="button" txt="1"></ButtonComponent>
                                                <ButtonComponent type="button" txt="2"></ButtonComponent>
                                                <ButtonComponent type="button" txt="3"></ButtonComponent>
                                            </div>
                                            <div className="m-l-a dflx gap_4">
                                                <ButtonComponent className="btn_secondary btn_32 disabled" type="button" txt="추가"></ButtonComponent>
                                                <ButtonComponent className="btn_secondary btn_32" type="button" txt="삭제"></ButtonComponent>
                                            </div>
                                        </div>
                                        <hr className="popup_divider" />
                                        <div className="dflx_ac gap_20">
                                            <p className="card_subtitle">Label</p>
                                            <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'wrput large line'} />
                                        </div> 
                                        <div className="dflx_ac gap_20">
                                            <p className="card_subtitle">Label</p>
                                            <SelectBoxComponent selectClass="line large"></SelectBoxComponent>
                                        </div> 
                                        <div className="dflx_ac gap_20">
                                            <p className="card_subtitle">Label</p>
                                            <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'wrput large line'} />
                                        </div> 
                                        <div className="dflx_ac gap_20">
                                            <p className="card_subtitle">Label</p>
                                            <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'wrput large line'} />
                                        </div> 
                                    </CardInnerBlock>
                                </CardLabelAccordion>
                            </CardPopupBg>
                        </div>
                        <div className="m-t-24 dflx">
                            <ButtonComponent className="btn_secondary btn_m w160" type="button" txt="미리보기"></ButtonComponent>
                            <ButtonComponent className="btn_secondary btn_m w160 m-l-a" type="button" txt="닫기"></ButtonComponent>
                            <ButtonComponent className="btn_primary btn_m w160 m-l-16" type="button" txt="저장"></ButtonComponent>
                        </div>
                    </CardBlock>
                    <p className="fs_bold fc_black87 m-t-80">Popup Upload</p>
                    <CardBlock className="w788">
                        <div className="dflx_ac_jbet m-b-24">                            
                            <div className="fs_20_bold">
                                이미지 등록
                            </div>
                            <ButtonWithComponent type="button">
                                <ImgComponent src="close_line_bk_24.svg" alt="" />
                            </ButtonWithComponent>
                        </div>
                        <div>
                            <CardPopupBg className={"gap_24"}>
                                <div>
                                    <p className="fs_bold">이미지명</p>
                                    <InputMdComponent zoneClass={'put_zone m-t-10'} type={'text'} placeholder={'placeholder'} inputStyle={'large'} />
                                </div>
                                <div>
                                    <p className="fs_bold">이미지 등록</p>
                                    <div className="m-t-10">
                                        <ImageUpload value="IMG_000021" id="imageUpload" btnTxt="찾아보기"></ImageUpload>
                                    </div>
                                </div>
                                <div>
                                    <p className="fs_bold m-b-10">미리보기</p>
                                    <div className="w244">
                                        <div className="thumnbnail_image white">
                                            <ImgComponent src="lmage_bk_24.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </CardPopupBg>
                        </div>
                        <div className="m-t-24 dflx">
                            <ButtonComponent className="btn_secondary btn_m w160" type="button" txt="미리보기"></ButtonComponent>
                            <ButtonComponent className="btn_secondary btn_m w160 m-l-a" type="button" txt="닫기"></ButtonComponent>
                            <ButtonComponent className="btn_primary btn_m w160 m-l-16" type="button" txt="저장"></ButtonComponent>
                        </div>
                    </CardBlock>
                    <p className="fs_bold fc_black87 m-t-80">Popup Selector</p>
                    <CardBlock className="w788">
                        <div className="dflx_ac_jbet m-b-24">                            
                            <div className="fs_20_bold">
                                서브시스템 등록
                            </div>
                            <ButtonWithComponent type="button">
                                <ImgComponent src="close_line_bk_24.svg" alt="" />
                            </ButtonWithComponent>
                        </div>
                        <div>
                            <CardPopupBg className={"gap_24"}>
                                <div>
                                    <p className="fs_bold">서브시스템명</p>
                                    <InputMdComponent zoneClass={'put_zone m-t-10'} type={'text'} placeholder={'placeholder'} inputStyle={'large'} />
                                </div>
                                <div>
                                    <p className="fs_bold">서브시스템 타입</p>
                                    <div className="m-t-10 card_blank_row">
                                        <div className="dflx_ac gap_20">
                                            <CheckComponent checkClass={'radio_type'} type={'radio'} checkId={'radio01'} name={'radio_list'} labelClass={'fs_14'} defaultType="checked" txt="전체" />
                                            <CheckComponent checkClass={'radio_type'} type={'radio'} checkId={'radio02'} name={'radio_list'} labelClass={'fs_14'} txt="예약시스템" />
                                            <CheckComponent checkClass={'radio_type'} type={'radio'} checkId={'radio03'} name={'radio_list'} labelClass={'fs_14'} txt="120 다산콜재단" />
                                        </div>
                                    </div>
                                </div>
                                <div className="dflx_column gap_8 card_inner_noline">
                                    <div className="dflx_ac gap_8">
                                        <CheckComponent checkClass="checkbox_type" type="checkbox" name="accessible_menu" labelClass="fs_14_medium" checkId="tree_checkAll" txt="전체" checked={isAllChecked} onChange={() => handleAllCheck()}></CheckComponent>
                                    </div>
                                    <hr className="popup_divider" />     
                                    <div className="display_grid auto_row32">
                                        <CheckComponent checkClass="checkbox_type as_center" type="checkbox" name="accessible_menuList" labelClass="fs_14" checkId="accessible_menu_option1" txt="대시보드" checked={checkedState[0]} onChange={() => handleMonoCheck(0)}></CheckComponent>
                                        <CheckComponent checkClass="checkbox_type as_center" type="checkbox" name="accessible_menuList" labelClass="fs_14" checkId="accessible_menu_option2" txt="스킬관리" checked={checkedState[1]} onChange={() => handleMonoCheck(1)}></CheckComponent>
                                        <CheckComponent checkClass="checkbox_type as_center" type="checkbox" name="accessible_menuList" labelClass="fs_14" checkId="accessible_menu_option3" txt="답변관리" checked={checkedState[2]} onChange={() => handleMonoCheck(2)}></CheckComponent>
                                        <CheckComponent checkClass="checkbox_type as_center" type="checkbox" name="accessible_menuList" labelClass="fs_14" checkId="accessible_menu_option3" txt="관리기능" checked={checkedState[3]} onChange={() => handleMonoCheck(3)}></CheckComponent>
                                        <CheckComponent checkClass="checkbox_type as_center" type="checkbox" name="accessible_menuList" labelClass="fs_14" checkId="accessible_menu_option3" txt="사용자 및 권한 관리" checked={checkedState[4]} onChange={() => handleMonoCheck(4)}></CheckComponent>
                                        <CheckComponent checkClass="checkbox_type as_center" type="checkbox" name="accessible_menuList" labelClass="fs_14" checkId="accessible_menu_option3" txt="이미지 관리" checked={checkedState[5]} onChange={() => handleMonoCheck(5)}></CheckComponent>
                                        <CheckComponent checkClass="checkbox_type as_center" type="checkbox" name="accessible_menuList" labelClass="fs_14" checkId="accessible_menu_option3" txt="서브 시스템 관리" checked={checkedState[6]} onChange={() => handleMonoCheck(6)}></CheckComponent>
                                    </div>
                                </div>
                            </CardPopupBg>
                        </div>
                        <div className="m-t-24 dflx">
                            <ButtonComponent className="btn_secondary btn_m w160 m-l-a" type="button" txt="닫기"></ButtonComponent>
                            <ButtonComponent className="btn_primary btn_m w160 m-l-16" type="button" txt="저장"></ButtonComponent>
                        </div>
                    </CardBlock>
                </div>
            </main>
        {/* </OverlayScrollbarsComponent> */}
    </div>    
  );
};

export default TemplatePopup;
