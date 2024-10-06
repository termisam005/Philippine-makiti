import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Gnb from "../components/header/Gnb";

import ButtonComponent from '../components/common/ButtonComponent';
import ButtonWithComponent from '../components/common/ButtonWithComponent'
import CheckComponent from '../components/common/CheckComponent'
import ImgComponent from '../components/common/ImgComponent';
import Paging10Component from '../components/common/Paging10Component';
import SwitchComponent from '../components/common/SwitchComponent';

const Button = () => {
    
  return (
    <div className="guide_back">
        <Gnb></Gnb>
        <div className="guide_wrap">
            <div className="guide_center">
                <div className="guide_top">
                    <h1>Button</h1>
                </div>

                <div className="Gr_contents">
                    <div className="comp_top">
                        <h2>Box type</h2>
                    </div>
                    <p>W: 디자인에 맞춰 조절 가능 / H: 고정 / Radius 4</p>
                    <section>
                        <p className="fs_bold m-t-40">Primary</p>
                        <div className="dflx_ac m-t-20">
                            <p className="fs_bold">48px</p>
                            <p className="fs_12 w220 m-l-30 fc_black60">Login / Sign up</p>
                            <div className="dflx gap_20">
                                <ButtonComponent type={''} id={''} className={'btn_primary btn_l w160'} txt={'Default'} onClick={''} />
                                <ButtonComponent type={''} id={''} className={'btn_primary btn_l selected w160'} txt={'Hover'} onClick={''} />
                                <ButtonComponent type={''} id={''} className={'btn_primary btn_l press w160'} txt={'Pressed'} onClick={''} />
                                <ButtonComponent type={''} id={''} className={'btn_primary btn_l disabled w160'} txt={'Disabled'} onClick={''} />
                            </div>
                        </div>
                        <div className="dflx_ac m-t-40">
                            <p className="fs_bold">40px</p>
                            <p className="fs_12 w220 m-l-30 fc_black60">Primary button, width min 120</p>
                            <div className="dflx gap_20">
                                <ButtonComponent type={''} id={''} className={'btn_primary btn_m w160'} txt={'Default'} onClick={''} />
                                <ButtonComponent type={''} id={''} className={'btn_primary btn_m selected w160'} txt={'Hover'} onClick={''} />
                                <ButtonComponent type={''} id={''} className={'btn_primary btn_m press w160'} txt={'Pressed'} onClick={''} />
                                <ButtonComponent type={''} id={''} className={'btn_primary btn_m disabled w160'} txt={'Disabled'} onClick={''} />
                            </div>
                        </div>
                        <div className="dflx m-t-40">
                            <p className="fs_bold p-t-10">32px</p>
                            <p className="fs_12 w220 m-l-30 fc_black60 p-t-10">Search, width min 58</p>
                            <div>
                                <div className="dflx gap_20">
                                    <ButtonComponent type={''} id={''} className={'btn_primary btn_32 w160'} txt={'Default'} onClick={''} />
                                    <ButtonComponent type={''} id={''} className={'btn_primary btn_32 selected w160'} txt={'Hover'} onClick={''} />
                                    <ButtonComponent type={''} id={''} className={'btn_primary btn_32 press w160'} txt={'Pressed'} onClick={''} />
                                    <ButtonComponent type={''} id={''} className={'btn_primary btn_32 disabled w160'} txt={'Disabled'} onClick={''} />
                                </div>
                                <div className="dflx gap_20 m-t-20">
                                    <ButtonComponent type={''} id={''} className={'btn_primary gray btn_32 w160'} txt={'Default'} onClick={''} />
                                    <ButtonComponent type={''} id={''} className={'btn_primary gray btn_32 selected w160'} txt={'Hover'} onClick={''} />
                                    <ButtonComponent type={''} id={''} className={'btn_primary gray btn_32 press w160'} txt={'Pressed'} onClick={''} />
                                </div>
                            </div>
                        </div>
                        <div className="dflx m-t-40">
                            <p className="fs_bold p-t-10">28px</p>
                            <p className="fs_12 w220 m-l-30 fc_black60 p-t-10">In input, width min 50</p>
                            <div>
                                <div className="dflx gap_20">
                                    <ButtonComponent type={''} id={''} className={'btn_primary gray btn_s w160'} txt={'Default'} onClick={''} />
                                    <ButtonComponent type={''} id={''} className={'btn_primary gray btn_s selected w160'} txt={'Hover'} onClick={''} />
                                    <ButtonComponent type={''} id={''} className={'btn_primary gray btn_s press w160'} txt={'Pressed'} onClick={''} />
                                    <ButtonComponent type={''} id={''} className={'btn_primary btn_s disabled w160'} txt={'Disabled'} onClick={''} />
                                </div>
                            </div>
                        </div>
                        <p className="fs_bold m-t-80">Secondary</p>
                        <div className="dflx_ac m-t-40">
                            <p className="fs_bold">40px</p>
                            <p className="fs_12 w220 m-l-30 fc_black60">Primary button, width min 120</p>
                            <div className="dflx gap_20">
                                <ButtonComponent type={''} id={''} className={'btn_secondary btn_m w160'} txt={'Default'} onClick={''} />
                                <ButtonComponent type={''} id={''} className={'btn_secondary btn_m selected w160'} txt={'Hover'} onClick={''} />
                                <ButtonComponent type={''} id={''} className={'btn_secondary btn_m disabled w160'} txt={'Disabled'} onClick={''} />
                            </div>
                        </div>
                        <div className="dflx_ac m-t-40">
                            <p className="fs_bold">32px</p>
                            <p className="fs_12 w220 m-l-30 fc_black60">Search, width min 58</p>
                            <div className="dflx gap_20">
                                <ButtonComponent type={''} id={''} className={'btn_secondary btn_32 w160'} txt={'Default'} onClick={''} />
                                <ButtonComponent type={''} id={''} className={'btn_secondary btn_32 selected w160'} txt={'Hover'} onClick={''} />
                                <ButtonComponent type={''} id={''} className={'btn_secondary btn_32 disabled w160'} txt={'Disabled'} onClick={''} />
                            </div>
                        </div>
                        <div className="dflx m-t-40">
                            <p className="fs_bold p-t-10">28px</p>
                            <div className="w220 m-l-30 p-t-10">
                                <p className="fs_12 fc_black60">In input, width min 50</p>
                                <p className="m-t-36 fs_12 fc_black60">header text btn</p>
                            </div>
                            <div>
                                <div className="dflx gap_20">
                                    <ButtonComponent type={''} id={''} className={'btn_secondary btn_s border_none w160'} txt={'Default'} onClick={''} />
                                    <ButtonComponent type={''} id={''} className={'btn_secondary btn_s selected border_none w160'} txt={'Hover'} onClick={''} />
                                    <ButtonComponent type={''} id={''} className={'btn_secondary btn_s disabled border_none w160'} txt={'Disabled'} onClick={''} />
                                </div>
                                <div className="dflx gap_20 m-t-20">
                                    <ButtonComponent type={''} id={''} className={'btn_secondary btn_s w160'} txt={'Default'} onClick={''} />
                                    <ButtonComponent type={''} id={''} className={'btn_secondary btn_s selected w160'} txt={'Hover'} onClick={''} />
                                    <ButtonComponent type={''} id={''} className={'btn_secondary btn_s disabled w160'} txt={'Disabled'} onClick={''} />
                                </div>
                                <div className="dflx gap_20 m-t-20">
                                    <ButtonComponent type={''} id={''} className={'btn_secondary btn_s ghost w160'} txt={'Default'} onClick={''} />
                                    <ButtonComponent type={''} id={''} className={'btn_secondary btn_s selected ghost w160'} txt={'Hover'} onClick={''} />
                                    <ButtonComponent type={''} id={''} className={'btn_secondary btn_s disabled ghost w160'} txt={'Disabled'} onClick={''} />
                                </div>
                            </div>
                        </div>

                        <div className="dflx_ac m-t-40">
                            <div className="w290">
                                <p className="fs_bold">Minimum width</p>
                                <p className="fs_12 fc_black60 m-t-10">height 고정</p>
                            </div>
                            <div className="bg_grayf5 dflx_ae flex1 gap_60 radius_8" style={{padding: '40px 20px'}}>
                                <div className="dflx">
                                    <div>
                                        <ButtonComponent type={''} id={''} className={'btn_secondary btn_s'} txt={'추가'} onClick={''} />
                                        <p className="m-t-10 fs_13 fc_pink tac">50px</p>
                                    </div>
                                    <p className="fs_13 fc_pink m-l-10 p-t-8">28px</p>
                                </div>
                                <div className="dflx">
                                    <div>
                                        <ButtonComponent type={''} id={''} className={'btn_primary btn_32'} txt={'검색'} onClick={''} />
                                        <p className="m-t-10 fs_13 fc_pink tac">58px</p>
                                    </div>
                                    <p className="fs_13 fc_pink m-l-10 p-t-8">32px</p>
                                </div>
                                <div className="dflx">
                                    <div>
                                        <ButtonComponent type={''} id={''} className={'btn_primary btn_m'} txt={'저장'} onClick={''} />
                                        <p className="m-t-10 fs_13 fc_pink tac">58px</p>
                                    </div>
                                    <p className="fs_13 fc_pink m-l-10 p-t-12">40px</p>
                                </div>
                                <div className="dflx flex1">
                                    <div className="flex1">
                                        <ButtonComponent type={''} id={''} className={'btn_primary btn_l w-100'} txt={'로그인'} onClick={''} />
                                        <p className="m-t-10 fs_13 fc_pink tac">최대로 사용</p>
                                    </div>
                                    <p className="fs_13 fc_pink m-l-10 p-t-16">48px</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="Gr_contents m-t-100">
                    <div className="comp_top">
                        <h2>Text type</h2>
                    </div>
                    <section className="dflx gap_40 m-t-40">
                        <Link to='#' className="anchor_default">Default</Link>
                        <Link to='#' className="anchor_default hover">Hover</Link>
                        <Link to='#' className="anchor_default disabled">Disabled</Link>
                    </section>
                </div>
                <div className="Gr_contents m-t-100">
                    <div className="comp_top">
                        <h2>Icon type</h2>
                    </div>
                    <p>W: Label 있을 경우 맞춤 / H: 고정 / Radius 4</p>
                    <section>
                        <div className="dflx m-t-40">
                            <p className="fs_bold m-l-220">32px</p>
                            <p className="fs_bold m-l-340">28px</p>
                        </div>
                        <div className="dflx_ac m-t-20">
                            <p className="fs_12 w220 fc_black60">Default</p>
                            <div className="dflx gap_20">
                                <ButtonWithComponent className={'btn_primary gray btn_32 gap_8'}>
                                    <ImgComponent src={'download_bk_16.svg'} alt={''} />
                                    <span>다운로드</span>
                                </ButtonWithComponent>
                                <ButtonWithComponent className={'btn_primary gray btn_32 gap_8'}>
                                    <ImgComponent src={'trash_bk_16.svg'} alt={''} />
                                    <span>삭제</span>
                                </ButtonWithComponent>
                                <ButtonWithComponent className={'button_shadow btn_secondary btn_32 pressed_img icon_type'}>
                                    <ImgComponent src={'legend_bk_24.svg'} alt={''} />
                                </ButtonWithComponent>
                                <div className="tab_line button_shadow border_radius4">
                                    <ButtonWithComponent className={'btn_secondary btn_32 icon_type'}>
                                        <ImgComponent src={'minus_bk_16.svg'} alt={''} />
                                    </ButtonWithComponent>
                                    <ButtonWithComponent className={'btn_secondary btn_32 icon_type'}>
                                        <ImgComponent src={'plus_line_bk_16.svg'} alt={''} />
                                    </ButtonWithComponent>
                                </div>
                            </div>
                            <div className="dflx gap_20 m-l-64">
                                <ButtonWithComponent className={'btn_primary gray btn_s gap_8'}>
                                    <ImgComponent src={'download_bk_16.svg'} alt={''} />
                                    <span>다운로드</span>
                                </ButtonWithComponent>
                                <ButtonWithComponent className={'btn_primary gray btn_s gap_8'}>
                                    <ImgComponent src={'trash_bk_16.svg'} alt={''} />
                                    <span>삭제</span>
                                </ButtonWithComponent>
                            </div>
                        </div>
                        <div className="dflx_ac m-t-20">
                            <p className="fs_12 w220 fc_black60">Hover</p>
                            <div className="dflx gap_20">
                                <ButtonWithComponent className={'btn_primary gray btn_32 gap_8 selected'}>
                                    <ImgComponent src={'download_bk_16.svg'} alt={''} />
                                    <span>다운로드</span>
                                </ButtonWithComponent>
                                <ButtonWithComponent className={'btn_primary gray btn_32 gap_8 selected'}>
                                    <ImgComponent src={'trash_bk_16.svg'} alt={''} />
                                    <span>삭제</span>
                                </ButtonWithComponent>
                                <ButtonWithComponent className={'button_shadow btn_secondary btn_32 pressed_img icon_type selected'}>
                                    <ImgComponent src={'legend_bk_24.svg'} alt={''} />
                                </ButtonWithComponent>
                                <div className="tab_line button_shadow border_radius4">
                                    <ButtonWithComponent className={'btn_secondary btn_32 icon_type selected'}>
                                        <ImgComponent src={'minus_bk_16.svg'} alt={''} />
                                    </ButtonWithComponent>
                                    <ButtonWithComponent className={'btn_secondary btn_32 icon_type selected'}>
                                        <ImgComponent src={'plus_line_bk_16.svg'} alt={''} />
                                    </ButtonWithComponent>
                                </div>
                            </div>
                            <div className="dflx gap_20 m-l-64">
                                <ButtonWithComponent className={'btn_primary gray btn_s gap_8 selected'}>
                                    <ImgComponent src={'download_bk_16.svg'} alt={''} />
                                    <span>다운로드</span>
                                </ButtonWithComponent>
                                <ButtonWithComponent className={'btn_primary gray btn_s gap_8 selected'}>
                                    <ImgComponent src={'trash_bk_16.svg'} alt={''} />
                                    <span>삭제</span>
                                </ButtonWithComponent>
                            </div>
                        </div>      
                        <div className="dflx_ac m-t-20">
                            <p className="fs_12 w220 fc_black60">Pressed</p>
                            <div className="dflx gap_20">
                                <ButtonWithComponent className={'btn_primary gray btn_32 gap_8 press'}>
                                    <ImgComponent src={'download_bk_16.svg'} alt={''} />
                                    <span>다운로드</span>
                                </ButtonWithComponent>
                                <ButtonWithComponent className={'btn_primary gray btn_32 gap_8 press'}>
                                    <ImgComponent src={'trash_bk_16.svg'} alt={''} />
                                    <span>삭제</span>
                                </ButtonWithComponent>
                                <ButtonWithComponent className={'button_shadow btn_secondary btn_32 pressed_img on icon_type selected'}>
                                    <ImgComponent src={'legend_bk_24.svg'} alt={''} />
                                </ButtonWithComponent>
                                <div className="tab_line button_shadow border_radius4">
                                    <ButtonWithComponent className={'btn_secondary btn_32 icon_type press'}>
                                        <ImgComponent src={'minus_bk_16.svg'} alt={''} />
                                    </ButtonWithComponent>
                                    <ButtonWithComponent className={'btn_secondary btn_32 icon_type press'}>
                                        <ImgComponent src={'plus_line_bk_16.svg'} alt={''} />
                                    </ButtonWithComponent>
                                </div>
                            </div>
                            <div className="dflx gap_20 m-l-64">
                                <ButtonWithComponent className={'btn_primary gray btn_s gap_8 press'}>
                                    <ImgComponent src={'download_bk_16.svg'} alt={''} />
                                    <span>다운로드</span>
                                </ButtonWithComponent>
                                <ButtonWithComponent className={'btn_primary gray btn_s gap_8 press'}>
                                    <ImgComponent src={'trash_bk_16.svg'} alt={''} />
                                    <span>삭제</span>
                                </ButtonWithComponent>
                            </div>
                        </div>  
                    </section>
                </div>
                <div className="Gr_contents m-t-100">
                    <div className="comp_top">
                        <h2>Select btn</h2>
                    </div>
                    <section className="dflx">
                        <div className="dflx m-t-20">
                            <p className="fs_bold">Check box</p>
                            <div className="p-t-4">
                                <div className="dflx_ac gap_24 m-l-60">
                                    <p className="fs_12 w80 fc_black60">Default</p>
                                    <CheckComponent checkClass={'checkbox_type'} type={'checkbox'} checkId={'checkbox01'} name={'checkbox_list'} labelClass={'fs_13'} />
                                    <CheckComponent checkClass={'checkbox_type login'} type={'checkbox'} checkId={'checkbox02'} name={'checkbox_login'} labelClass={'fs_13'} />
                                </div>
                                <div className="dflx_ac gap_24 m-t-30 m-l-60">
                                    <p className="fs_12 w80 fc_black60">Selected</p>
                                    <CheckComponent checkClass={'checkbox_type'} type={'checkbox'} checkId={'checkbox03'} defaultType="defaultChecked" name={'checkbox_list'} labelClass={'fs_13'} />
                                    <CheckComponent checkClass={'checkbox_type login'} type={'checkbox'} checkId={'checkbox04'} defaultType="defaultChecked" name={'checkbox_login'} labelClass={'fs_13'} />
                                </div>
                                <div className="dflx_ac gap_24 m-t-30 m-l-60">
                                    <p className="fs_12 w80 fc_black40">Disabled</p>
                                    <CheckComponent checkClass={'checkbox_type'} type={'checkbox'} checkId={'checkbox05'} disabled={'disabled'} name={'checkbox_list'} labelClass={'fs_13'} />
                                    <CheckComponent checkClass={'checkbox_type login'} type={'checkbox'} checkId={'checkbox06'} disabled={'disabled'} name={'checkbox_login'} labelClass={'fs_13'} />
                                </div>
                                <div className="dflx_ac gap_24 m-t-30 m-l-60">
                                    <p className="fs_12 w80 fc_black40">Part</p>
                                    <CheckComponent checkClass={'checkbox_type part'} type={'checkbox'} checkId={'checkbox07'} name={'checkbox_list'} labelClass={'fs_13'} />
                                </div>
                            </div>
                        </div>
                        <div className="dflx m-t-20 m-l-100">
                            <p className="fs_bold">Radio</p>
                            <div className="p-t-4">
                                <div className="dflx_ac gap_24 m-l-60">
                                    <p className="fs_12 w80 fc_black60">Default</p>
                                    <CheckComponent checkClass={'radio_type'} type={'radio'} checkId={'radio01'} name={'radio_list'} labelClass={'fs_13'} />
                                </div>
                                <div className="dflx_ac gap_24 m-t-30 m-l-60">
                                    <p className="fs_12 w80 fc_black60">Selected</p>
                                    <CheckComponent checkClass={'radio_type'} type={'radio'} checkId={'radio02'} name={'radio_list'} labelClass={'fs_13'} defaultType="defaultChecked" />
                                </div>
                                <div className="dflx_ac gap_24 m-t-30 m-l-60">
                                    <p className="fs_12 w80 fc_black40">Disabled</p>
                                    <CheckComponent checkClass={'radio_type'} type={'radio'} checkId={'radio03'} name={'radio_list'} labelClass={'fs_13'} disabled={'disabled'} />
                                </div>
                            </div>
                        </div>
                        <div className="dflx m-t-20 m-l-100">
                            <p className="fs_bold">Toggle</p>
                            <div className="m-l-60">
                                <div className="dflx_ac">
                                    <p className="fs_12 w50 fc_black60">On</p>
                                    <SwitchComponent boolean={true} labelClass={'switch_label'} spanClass={'switch_button'} />
                                    <div className="m-l-40">
                                        <SwitchComponent boolean={true} labelClass={'switch_label gray'} spanClass={'switch_button'} />
                                    </div>
                                </div>
                                <div className="dflx_ac m-t-30">
                                    <p className="fs_12 w50 fc_black60">Off</p>
                                    <SwitchComponent boolean={false} labelClass={'switch_label'} spanClass={'switch_button'} />
                                    <div className="m-l-40">
                                        <SwitchComponent boolean={false} labelClass={'switch_label gray'} spanClass={'switch_button'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="Gr_contents m-t-100">
                    <div className="comp_top">
                        <h2>Control btn</h2>
                    </div>
                    <section className="m-t-100">
                        <div className="dflx">
                            <p className="fs_bold">Pagination</p>
                            <div className="p-t-4">
                                <div className="dflx_ac gap_24 m-l-60">
                                    <p className="fs_12 w80 fc_black60">Default</p>
                                    <div className="relative">
                                        <div className="absolute" style={{top: '-70px'}}>
                                            <p className="fs_bold">Small</p>
                                            <p className="fc_black60 fs_12 m-t-4">Card 안에서 사용</p>
                                        </div>
                                        <Paging10Component wrapClass={'dflx_ac gap_8'}></Paging10Component>
                                    </div>
                                </div>
                                <div className="dflx_ac gap_24 m-l-60 m-t-40">
                                    <p className="fs_12 w80 fc_black60">Hover/pressed</p>
                                    <Paging10Component wrapClass={'dflx_ac gap_8 paging_hover'}></Paging10Component>
                                </div>
                            </div>
                            <div className="p-t-4 m-l-60">
                                <div className="dflx_ac gap_24 m-l-60">
                                    <div className="relative">
                                        <div className="absolute" style={{top: '-70px'}}>
                                            <p className="fs_bold">Large</p>
                                            <p className="fc_black60 fs_12 m-t-4">전체 페이지에서 사용</p>
                                        </div>
                                        <Paging10Component wrapClass={'dflx_ac gap_8 paging_large'}></Paging10Component>
                                    </div>
                                </div>
                                <div className="dflx_ac gap_24 m-l-60 m-t-40">
                                    <Paging10Component wrapClass={'dflx_ac gap_8 paging_hover paging_large'}></Paging10Component>
                                </div>
                            </div>
                        </div>
                        <div className="dflx m-t-80">
                            <p className="fs_bold w86">Arrow</p>
                            <div className="">
                                <div className="dflx_ac gap_24 m-l-60">
                                    <p className="fs_12 w80 fc_black60">Default</p>
                                    <div className="dflx_ac gap_20">
                                        <ButtonWithComponent className={'btn_secondary icon_type w24'}>
                                            <ImgComponent src={'arrow_down_bk_12.svg'} alt={''} />
                                        </ButtonWithComponent>
                                        <ButtonWithComponent className={'btn_secondary icon_type w24'}>
                                            <ImgComponent src={'arrow_up_bk_12.svg'} alt={''} />
                                        </ButtonWithComponent>
                                        <ButtonWithComponent className={'btn_secondary icon_type w24'}>
                                            <ImgComponent src={'arrow_left_bk_12.svg'} alt={''} />
                                        </ButtonWithComponent>
                                        <ButtonWithComponent className={'btn_secondary icon_type w24'}>
                                            <ImgComponent src={'arrow_right_bk_12.svg'} alt={''} />
                                        </ButtonWithComponent>
                                    </div>
                                </div>
                                <div className="dflx_ac gap_24 m-l-60 m-t-40">
                                    <p className="fs_12 w80 fc_black60">Hover</p>
                                    <div className="dflx_ac gap_20">
                                        <ButtonWithComponent className={'btn_secondary icon_type w24 selected'}>
                                            <ImgComponent src={'arrow_down_bk_12.svg'} alt={''} />
                                        </ButtonWithComponent>
                                        <ButtonWithComponent className={'btn_secondary icon_type w24 selected'}>
                                            <ImgComponent src={'arrow_up_bk_12.svg'} alt={''} />
                                        </ButtonWithComponent>
                                        <ButtonWithComponent className={'btn_secondary icon_type w24 selected'}>
                                            <ImgComponent src={'arrow_left_bk_12.svg'} alt={''} />
                                        </ButtonWithComponent>
                                        <ButtonWithComponent className={'btn_secondary icon_type w24 selected'}>
                                            <ImgComponent src={'arrow_right_bk_12.svg'} alt={''} />
                                        </ButtonWithComponent>
                                    </div>
                                </div>
                                <div className="dflx_ac gap_24 m-l-60 m-t-40">
                                    <p className="fs_12 w80 fc_black60">Pressed</p>
                                    <div className="dflx_ac gap_20">
                                        <ButtonWithComponent className={'btn_secondary icon_type w24 press'}>
                                            <ImgComponent src={'arrow_down_bk_12.svg'} alt={''} />
                                        </ButtonWithComponent>
                                        <ButtonWithComponent className={'btn_secondary icon_type w24 press'}>
                                            <ImgComponent src={'arrow_up_bk_12.svg'} alt={''} />
                                        </ButtonWithComponent>
                                        <ButtonWithComponent className={'btn_secondary icon_type w24 press'}>
                                            <ImgComponent src={'arrow_left_bk_12.svg'} alt={''} />
                                        </ButtonWithComponent>
                                        <ButtonWithComponent className={'btn_secondary icon_type w24 press'}>
                                            <ImgComponent src={'arrow_right_bk_12.svg'} alt={''} />
                                        </ButtonWithComponent>
                                    </div>
                                </div>
                            </div>
                            <div className="dflx m-l-245">
                                <p className="fs_bold w86">Close</p>
                                <div className="">
                                    <div className="dflx_ac gap_24">
                                        <p className="fs_12 w80 fc_black60">Default</p>
                                        <div className="dflx_ac gap_20">
                                            <ButtonWithComponent className={'btn_close ghost small'}>
                                                <ImgComponent src={'close_line_bk_16.svg'} alt={''} />
                                            </ButtonWithComponent>
                                            <ButtonWithComponent className={'btn_close ghost medium'}>
                                                <ImgComponent src={'close_line_bk_20.svg'} alt={''} />
                                            </ButtonWithComponent>
                                            <ButtonWithComponent className={'btn_close ghost large'}>
                                                <ImgComponent src={'close_line_bk_24.svg'} alt={''} />
                                            </ButtonWithComponent>
                                        </div>
                                    </div>
                                    <div className="dflx_ac gap_24 m-t-40">
                                        <p className="fs_12 w80 fc_black60">Hover</p>
                                        <div className="dflx_ac gap_20">
                                            <ButtonWithComponent className={'btn_close ghost small selected'}>
                                                <ImgComponent src={'close_line_bk_16.svg'} alt={''} />
                                            </ButtonWithComponent>
                                            <ButtonWithComponent className={'btn_close ghost medium selected'}>
                                                <ImgComponent src={'close_line_bk_20.svg'} alt={''} />
                                            </ButtonWithComponent>
                                            <ButtonWithComponent className={'btn_close ghost large selected'}>
                                                <ImgComponent src={'close_line_bk_24.svg'} alt={''} />
                                            </ButtonWithComponent>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Button;
