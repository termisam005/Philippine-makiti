import React from "react";
import { useState } from "react";
import Gnb from "../components/header/Gnb";

import AccordionComponent from "../components/accordion/AccordionComponent";

import ButtonComponent from "../components/common/ButtonComponent";
import ButtonWithComponent from "../components/common/ButtonWithComponent"
import ImgComponent from "../components/common/ImgComponent";
import ImageThumnail from "../components/common/ImageThumnail";
import ImageThumnailLabel from "../components/common/ImageThumnailLabel";
import ImageThumnailDescription from "../components/common/ImageThumnailDescription";

import CardBlock from "../components/cards/CardBlock";
import CardInnerBlock from "../components/cards/CardInnerBlock";
import CardLabelAccordion from "../components/cards/CardLabelAccordion";
import CardShadowBlock from "../components/cards/CardShadowBlock";
import CardPopupBg from "../components/cards/CardPopupBg";

import InputComponent from "../components/inputfield/InputComponent";
import InputMdComponent from "../components/inputfield/InputMdComponent";
import InputMdLineComponent from "../components/inputfield/InputMdLineComponent";

import SelectBoxComponent from "../components/molecule/SelectBoxComponent";
import { Link } from "react-router-dom";

const Cards = () => {
    
  return (
    <div className="guide_back">
        <Gnb></Gnb>
        <div className="guide_wrap">
            <div className="guide_center">
                <div className="guide_top">
                    <h1>Cards</h1>
                </div>

                <div className="Gr_contents">
                    <div className="comp_top">
                        <h2>Main</h2>
                    </div>
                    <section>
                        <div className="bg_grayf5 dflx p-40 card_wrap_6040">
                            <CardBlock className="w400">
                                <p className="fs_bold">Title</p>
                                <p className="fs_14 m-t-20">Contents</p>
                            </CardBlock>                            
                            <CardBlock className="flex1">
                                <div className="dflx_ac">
                                    <p className="fs_bold">Title</p>
                                    <div className="m-l-a dflx gap_8">
                                        <ButtonWithComponent className={'btn_primary gray btn_32 gap_8'}>
                                            <ImgComponent src={'download_bk_16.svg'} alt={''} />
                                            <span>다운로드</span>
                                        </ButtonWithComponent>
                                        <ButtonWithComponent className={'btn_primary gray btn_32 gap_8'}>
                                            <ImgComponent src={'trash_bk_16.svg'} alt={''} />
                                            <span>삭제</span>
                                        </ButtonWithComponent>
                                        <div>
                                            <InputMdLineComponent zoneClass={'put_zone w240'} type={'text'} placeholder={'placeholder'} 
                                            />
                                        </div>
                                        <ButtonComponent className="btn_primary btn_32 disabled" type="button" txt="검색">
                                        </ButtonComponent>
                                    </div>
                                </div>
                                <p className="fs_14 m-t-16">Contents<br/>Contents</p>
                            </CardBlock>
                            <div className="w-100">
                                <CardBlock className="w400">
                                    <div className="dflx_ac gap_20">
                                        <div className="w64">
                                            <ImgComponent src={'people_icon_bk_64.svg'} alt={''} />
                                        </div>
                                        <div>
                                            <p className="fs_bold m-b-12">Title</p>
                                            <p className="fs_14">
                                                <span className="fs_32_bold">199</span><span className="fs_20">명</span>
                                            </p>
                                        </div>
                                    </div>
                                </CardBlock>   
                            </div>
                        </div>
                    </section>
                </div>         
                
                <div className="Gr_contents">
                    <div className="comp_top">
                        <h2>Inner card</h2>
                    </div>
                    <p className="m-t-15-negative">대시보드 카드 안에 넣어 사용</p>
                    <section className="m-t-40">
                        <p className="fs_bold">Image thumbnail</p>
                        <div className="dflx m-t-20 w394">
                            <ImageThumnail>
                                <ImageThumnailLabel imgUrl='lmage_bk_24.svg' label='Label' />
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
                    </section> 
                </div>      

                <div className="dflx">
                    <div className="Gr_contents">
                        <div className="comp_top">
                            <h2>Title point</h2>
                        </div>
                        <section className="m-t-20">
                            <CardShadowBlock className={'w320'} title={'Title'} boolean={true}>
                                <div className="scroll h100 p-20">
                                    Contents
                                </div>
                            </CardShadowBlock>
                            
                            <CardShadowBlock className={'w440 m-t-36'} title={'Title'} boolean={true}>
                                <ul className="tab box">
                                    <li className="tab_item on">
                                        Selected
                                    </li>
                                    <li className="tab_item">
                                        Default
                                    </li>
                                    <li className="tab_item">
                                        Default
                                    </li>
                                    <li className="tab_item">
                                        Default
                                    </li>
                                </ul>
                                <div className="scroll p-20 h200">
                                    Contents
                                </div>
                            </CardShadowBlock>
                        </section>
                    </div>     
                    <div className="Gr_contents">
                        <div className="comp_top">
                            <h2>Accordion</h2>
                        </div>
                        <section className="m-t-20">
                            <CardShadowBlock className={'w320'} title={'Title'} titleButton boolean={false}>
                                <div className="p-20">
                                    Contents
                                </div>
                            </CardShadowBlock>   
                            <CardShadowBlock className={'w320 m-t-36'} title={'Title'} titleButton boolean={true}>
                                <div className="p-20 h120">
                                    Contents
                                </div>
                            </CardShadowBlock>
                        </section>
                    </div>      
                </div>
                <div className="Gr_contents">
                    <div className="comp_top">
                        <h2>On popup</h2>
                    </div>
                    <section className="m-t-20">
                        <div className="dflx">
                            <p className="fs_12 w160 fc_black60 p-t-20">Default</p>
                            <CardPopupBg className={"w720 gap_24"}>
                                <div>
                                    <p className="fs_bold">Label</p>
                                    <InputMdComponent zoneClass={'put_zone m-t-10'} type={'text'} placeholder={'placeholder'} inputStyle={'large'} />
                                </div>
                                <div>
                                    <p className="fs_bold">Label 2</p>
                                    <InputMdComponent zoneClass={'put_zone m-t-10'} type={'text'} placeholder={'placeholder'} inputStyle={'large'} />
                                </div>
                            </CardPopupBg>
                        </div>

                        <div className="dflx m-t-20">
                            <p className="fs_12 w160 fc_black60 p-t-20">Accordion</p>
                            <CardPopupBg className={"w720 gap_24"}>
                                <CardLabelAccordion boolean={false} labelName={'Label'}>
                                    <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'large'} />
                                </CardLabelAccordion>
                            </CardPopupBg>                           
                        </div>
                        <div className="dflx m-t-20">
                            <p className="fs_12 w160 fc_black60 p-t-20">&nbsp;</p>
                            <CardPopupBg className={"w720 gap_24"}>
                                <CardLabelAccordion boolean={true} labelName={'Label'}>
                                    <SelectBoxComponent selectClass={'white large'}></SelectBoxComponent>
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
                        </div>
                    </section>
                </div>    
            </div>
        </div>
    </div>
  );
};

export default Cards;
