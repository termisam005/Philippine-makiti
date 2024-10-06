import React from "react";
import { useState } from "react";
import Gnb from "../components/header/Gnb";

import ButtonComponent from '../components/common/ButtonComponent';

import HeaderMember from "../components/header/HeaderMember";

import PopupBox from "../components/popup/PopupBox";


const Popup = () => {
    
  return (
    <div className="guide_back">
        <Gnb></Gnb>
        <div className="guide_wrap">
            <div className="guide_center">
                <div className="guide_top">
                    <h1>Popup</h1>
                </div>

                <div className="Gr_contents">
                    <div className="comp_top">
                        <h2>Title</h2>
                    </div>
                    <p className="m-t-15-negative">콘텐츠 양, discription 유무에 따라 선택</p>
                    <div className="dflx m-t-80 gap_40">
                        <div>
                            <p className="fs_bold m-b-20">No line (small)</p>
                            <div className="w524">
                                <PopupBox title="Title">
                                    <div className="bg_grayf5 border_radius4 h100"></div>
                                    <div className="bg_grayf5 border_radius4 h100 m-t-12"></div>
                                    <div className="dflx_ac_jbet m-t-24 gap_16">
                                        <ButtonComponent className="btn_secondary btn_m w-100" type="button" txt="Default"></ButtonComponent>
                                        <ButtonComponent className="btn_primary btn_m w-100" type="button" txt="Default"></ButtonComponent>
                                    </div>
                                </PopupBox>
                            </div>
                        </div>
                        <div>
                            <p className="fs_bold m-b-20">With line (default)</p>
                            <div className="w524">
                                <PopupBox  title="Title" line>
                                    <div className="bg_grayf5 border_radius4 h100"></div>
                                    <div className="bg_grayf5 border_radius4 h100 m-t-12"></div>
                                    <div className="dflx_ac_jbet m-t-24 gap_16">
                                        <ButtonComponent className="btn_secondary btn_m w-100" type="button" txt="Default"></ButtonComponent>
                                        <ButtonComponent className="btn_primary btn_m w-100" type="button" txt="Default"></ButtonComponent>
                                    </div>
                                </PopupBox>
                            </div>
                        </div>
                    </div>
                    <div className="m-t-60">
                        <p className="fs_bold m-b-20">With discription + line</p>
                        <div className="w524">
                            <PopupBox title="Title" line description descText={'Description'}>
                                <div className="bg_grayf5 border_radius4 h100"></div>
                                <div className="bg_grayf5 border_radius4 h100 m-t-12"></div>
                                <div className="dflx_ac_jbet m-t-24 gap_16">
                                    <ButtonComponent className="btn_secondary btn_m w-100" type="button" txt="Default"></ButtonComponent>
                                    <ButtonComponent className="btn_primary btn_m w-100" type="button" txt="Default"></ButtonComponent>
                                </div>
                            </PopupBox>
                        </div>
                    </div>
                </div>

                <div className="Gr_contents m-t-100">
                    <div className="comp_top">
                        <h2>Width</h2>
                    </div>
                    <p className="lh_20 m-t-15-negative">W: 그리드에 맞춤, H: 콘텐츠에 맞춤<br/>
                        Button: 320/388은 width full, 나머지는 고정사이즈 (텍스트길이 길 경우 디자인 협의)</p>
                    <div className="dflx m-t-40 gap_40">
                        <div>
                            <p className="fs_bold m-b-20">320</p>
                            <div className="w320">
                                <PopupBox title="Title 320">
                                    <div className="bg_grayf5 border_radius4 h150"></div>
                                    <div className="dflx_ac_jbet m-t-24 gap_16">
                                        <ButtonComponent className="btn_secondary btn_m w-100" type="button" txt="Default"></ButtonComponent>
                                        <ButtonComponent className="btn_primary btn_m w-100" type="button" txt="Default"></ButtonComponent>
                                    </div>
                                </PopupBox>
                            </div>                            
                        </div>
                        <div>
                            <p className="fs_bold m-b-20">388</p>
                            <div className="w388">
                                <PopupBox title="Title w388">
                                    <div className="bg_grayf5 border_radius4 h150"></div>
                                    <div className="dflx_ac_jbet m-t-24 gap_16">
                                        <ButtonComponent className="btn_secondary btn_m w-100" type="button" txt="Default"></ButtonComponent>
                                        <ButtonComponent className="btn_primary btn_m w-100" type="button" txt="Default"></ButtonComponent>
                                    </div>
                                </PopupBox>
                            </div>                              
                        </div>                        
                    </div>
                    <div className="m-t-60">
                        <p className="fs_bold m-b-20">524</p>
                        <div className="w524">
                            <PopupBox title="Title w524">
                                <div className="bg_grayf5 border_radius4 h72"></div>
                                <div className="bg_grayf5 border_radius4 h72 m-t-12"></div>
                                <div className="dflx_ac_jbet m-t-24 gap_16">
                                    <ButtonComponent className="btn_secondary btn_m w-100" type="button" txt="Default"></ButtonComponent>
                                    <ButtonComponent className="btn_primary btn_m w-100" type="button" txt="Default"></ButtonComponent>
                                </div>
                            </PopupBox>
                        </div>        
                    </div>
                    <div className="m-t-60">
                        <p className="fs_bold m-b-20">680</p>
                        <div className="w680">
                            <PopupBox title="Title w680">
                                <div className="bg_grayf5 border_radius4 h72"></div>
                                <div className="bg_grayf5 border_radius4 h72 m-t-12"></div>
                                <div className="dflx_ac_jbet m-t-24 gap_16">
                                    <ButtonComponent className="btn_secondary btn_m w-100" type="button" txt="Default"></ButtonComponent>
                                    <ButtonComponent className="btn_primary btn_m w-100" type="button" txt="Default"></ButtonComponent>
                                </div>
                            </PopupBox>
                        </div>     
                    </div>
                    <div className="m-t-60">
                        <p className="fs_bold m-b-20">796</p>
                        <div className="w796">
                            <PopupBox title="Title w796">
                                <div className="bg_grayf5 border_radius4 h72"></div>
                                <div className="bg_grayf5 border_radius4 h72 m-t-12"></div>
                                <div className="dflx_ac_jbet m-t-24 gap_16">
                                    <ButtonComponent className="btn_secondary btn_m w-100" type="button" txt="Default"></ButtonComponent>
                                    <ButtonComponent className="btn_primary btn_m w-100" type="button" txt="Default"></ButtonComponent>
                                </div>
                            </PopupBox>
                        </div>                          
                    </div>
                </div>

                <div className="Gr_contents m-t-100 p-b-200">
                    <div className="comp_top">
                        <h2>User profile</h2>
                    </div>
                    <p className="lh_20 m-t-15-negative">로고 변경하여 사용</p>
                    <div className="dflx m-t-60">
                        <HeaderMember></HeaderMember>
                        <div className="m-l-120">
                            <HeaderMember boolean="true"></HeaderMember>
                        </div>
                        <div className="m-l-80 dark dflx">
                            <div className="header_in radius_15">
                                <div className="hd_profile h100">
                                    <HeaderMember></HeaderMember>
                                </div>
                            </div>                            
                            <div className="hd_profile m-l-120">
                                <HeaderMember boolean="true"></HeaderMember>                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Popup;
