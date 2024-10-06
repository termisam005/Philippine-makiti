import React from "react";
import { useState } from "react";
import Gnb from "../components/header/Gnb";

import ButtonComponent from "../components/common/ButtonComponent";
import ImgComponent from "../components/common/ImgComponent";

import InputMdComponent from "../components/inputfield/InputMdComponent";
import InputMdLineComponent from "../components/inputfield/InputMdLineComponent";
import TextareaComponent from "../components/inputfield/TextareaComponent";


const Inputfield = () => {
    
  return (
    <div className="guide_back">
        <Gnb></Gnb>
        <div className="guide_wrap">
            <div className="guide_center">
                <div className="guide_top">
                    <h1>Input filed</h1>
                </div>
                
                <div className="Gr_contents m-t-100">
                    <div className="comp_top">
                        <h2>Basic</h2>
                    </div>
                    <p>W: 디자인에 맞춰 조절 가능 / H: 고정 / Radius 4</p>
                    <section>
                        <div className="dflx m-t-80">
                            <p className="fs_bold w120 p-t-36">Line</p>
                            <div className="dflx_ac m-t-20 flex1">
                                <p className="fs_12 w80 fc_black60">Default</p>
                                <div className="flex1">
                                    <div className="dflx_ac gap_60">
                                        <div className="relative w-25">
                                            <p className="fs_bold absolute" style={{top: '-50px'}}>48px</p>
                                            <InputMdLineComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'xlarge default'} />
                                        </div>
                                        <div className="relative w-25">
                                            <p className="fs_bold absolute" style={{top: '-52px'}}>40px</p>
                                            <InputMdLineComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'large default'} />
                                        </div>
                                        <div className="relative w-25">
                                            <p className="fs_bold absolute" style={{top: '-54px'}}>32px</p>
                                            <InputMdLineComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'default'} />
                                        </div>
                                        <div className="relative dflx gap_4 w-35">
                                            <p className="fs_bold absolute" style={{top: '-54px'}}>32px(Search)</p>
                                            <InputMdLineComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'default'} />
                                            <ButtonComponent className="btn_primary btn_32 disabled border_none" type="button" txt="검색"></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx_ac m-t-20 m-l-120">
                            <p className="fs_12 w80 fc_black60">Active</p>
                            <div className="flex1">
                                <div className="dflx_ac gap_60">
                                    <div className="relative w-25">
                                        <InputMdLineComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'xlarge on'} />
                                    </div>
                                    <div className="relative w-25">
                                        <InputMdLineComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'large on'} />
                                    </div>
                                    <div className="relative w-25">
                                        <InputMdLineComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'on'} />
                                    </div>
                                    <div className="relative dflx gap_4 w-35">
                                        <InputMdLineComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'on'} />
                                        <ButtonComponent className="btn_primary btn_32 disabled border_none" type="button" txt="검색"></ButtonComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx_ac m-t-20 m-l-120">
                            <p className="fs_12 w80 fc_black60">Success</p>
                            <div className="flex1">
                                <div className="dflx_ac gap_60">
                                    <div className="relative w-25">
                                        <InputMdLineComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'xlarge'} value='Label' />
                                    </div>
                                    <div className="relative w-25">
                                        <InputMdLineComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'large'} value='Label' />
                                    </div>
                                    <div className="relative w-25">
                                        <InputMdLineComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={''} value='Label' />
                                    </div>
                                    <div className="relative dflx gap_4 w-35">
                                        <InputMdLineComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={''} value='Label' />                                        
                                        <ButtonComponent className="btn_primary btn_32 border_none" type="button" txt="검색"></ButtonComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx_ac m-t-20 m-l-120">
                            <p className="fs_12 w80 fc_black60 transform_0-7">Error</p>
                            <div className="flex1">
                                <div className="dflx_as gap_60">
                                    <div className="relative w-25">
                                        <InputMdLineComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'xlarge error'} messClass={'mess error m-t-8'} message={'Error message'} value='Label' />       
                                    </div>
                                    <div className="relative w-25">
                                        <InputMdLineComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'large error'} messClass={'mess error m-t-8'} message={'Error message'} value='Label' />  
                                    </div>
                                    <div className="relative w-25">
                                        <InputMdLineComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'error'} messClass={'mess error m-t-8'} message={'Error message'} value='Label' />  
                                    </div>
                                    <div className="relative dflx gap_4 w-35">
                                        &nbsp;
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx_ac m-t-20 m-l-120">
                            <p className="fs_12 w80 fc_black60">Disabled</p>
                            <div className="flex1">
                                <div className="dflx_ac gap_60">
                                    <div className="relative w-25">
                                        <InputMdLineComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'xlarge'} value='Disabled' disabled='disabled' />   
                                    </div>
                                    <div className="relative w-25">
                                        <InputMdLineComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'large'} value='Disabled' disabled='disabled' />   
                                    </div>
                                    <div className="relative w-25">
                                        <InputMdLineComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={''} value='Disabled' disabled='disabled' />   
                                    </div>
                                    <div className="relative dflx gap_4 w-35">
                                        <InputMdLineComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={''} value='Disabled' disabled='disabled' />                                     
                                        <ButtonComponent className="btn_primary btn_32 border_none disabled" type="button" txt="검색"></ButtonComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="dflx m-t-40">
                            <div className="fs_bold w120 p-t-36">Fill-white<br/>
                                <p className="fs_12 fc_black60 p-t-12">Gray bg only</p>
                            </div>
                            <div className="dflx_ac m-t-20 flex1">
                                <p className="fs_12 w80 fc_black60">Default</p>
                                <div className="flex1 gray_bg" >
                                    <div className="dflx_ac gap_60">
                                        <div className="relative w-25">
                                            <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'xlarge fill'} />          
                                        </div>
                                        <div className="relative w-25">
                                            <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'large fill'} />
                                        </div>
                                        <div className="relative w-25">
                                            <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'fill'} />
                                        </div>
                                        <div className="relative dflx gap_4 w-35">
                                            <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'fill'} />                              
                                            <ButtonComponent className="btn_primary btn_32 border_none disabled" type="button" txt="검색"></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx_ac m-t-20 m-l-120">
                            <p className="fs_12 w80 fc_black60">Success</p>
                            <div className="flex1">
                                <div className="dflx_ac gray_bg gap_60">
                                    <div className="relative w-25">
                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'xlarge fill'} value="Label" />
                                    </div>
                                    <div className="relative w-25">
                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'large fill'} value="Label" />
                                    </div>
                                    <div className="relative w-25">
                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'fill'} value="Label" />
                                    </div>
                                    <div className="relative dflx gap_4 w-35">
                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'fill'} value="Label" />                       
                                        <ButtonComponent className="btn_primary btn_32 border_none" type="button" txt="검색"></ButtonComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx_ac m-t-20 m-l-120">
                            <p className="fs_12 w80 fc_black60">Disabled</p>
                            <div className="flex1">
                                <div className="dflx_ac gray_bg gap_60">
                                    <div className="relative w-25">
                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'xlarge fill'} value="Disabled" disabled={'disabled'} /> 
                                    </div>
                                    <div className="relative w-25">
                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'large fill'} value="Disabled" disabled={'disabled'} />
                                    </div>
                                    <div className="relative w-25">
                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'fill'} value="Disabled" disabled={'disabled'} />
                                    </div>
                                    <div className="relative dflx gap_4 w-35">
                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'fill'} value="Disabled" disabled={'disabled'} />               
                                        <ButtonComponent className="btn_primary btn_32 border_none disabled" type="button" txt="검색"></ButtonComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="dflx m-t-40">
                            <div className="fs_bold w120 p-t-36">Fill-gray<br/>
                                <p className="fs_12 fc_black60 p-t-12">Gray</p>
                            </div>
                            <div className="dflx_ac m-t-20 flex1">
                                <p className="fs_12 w80 fc_black60">Default</p>
                                <div className="flex1 " >
                                    <div className="dflx_ac gap_60">
                                        <div className="relative w-25">
                                            <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'xlarge fillgray default'} />  
                                        </div>
                                        <div className="relative w-25">
                                            <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'large fillgray default'} />  
                                        </div>
                                        <div className="relative w-25">
                                            <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'fillgray default'} />  
                                        </div>
                                        <div className="relative dflx gap_4 w-35">
                                            <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'fillgray default'} />               
                                            <ButtonComponent className="btn_primary btn_32 border_none disabled" type="button" txt="검색"></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx_ac m-t-20 m-l-120">
                            <p className="fs_12 w80 fc_black60">Active</p>
                            <div className="flex1">
                                <div className="dflx_ac gap_60">
                                    <div className="relative w-25">
                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'xlarge on fillgray'} />
                                    </div>
                                    <div className="relative w-25">
                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'large on fillgray'} />
                                    </div>
                                    <div className="relative w-25">
                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'on fillgray'} />
                                    </div>
                                    <div className="relative dflx gap_4 w-35">
                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'on fillgray'} />              
                                        <ButtonComponent className="btn_primary btn_32 border_none disabled" type="button" txt="검색"></ButtonComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx_ac m-t-20 m-l-120">
                            <p className="fs_12 w80 fc_black60">Success</p>
                            <div className="flex1">
                                <div className="dflx_ac gap_60">
                                    <div className="relative w-25">
                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'xlarge fillgray'} value="Label" /> 
                                    </div>
                                    <div className="relative w-25">
                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'large fillgray'} value="Label" /> 
                                    </div>
                                    <div className="relative w-25">
                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'fillgray'} value="Label" /> 
                                    </div>
                                    <div className="relative dflx gap_4 w-35">
                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'fillgray'} value="Label" />            
                                        <ButtonComponent className="btn_primary btn_32 border_none" type="button" txt="검색"></ButtonComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx_ac m-t-20 m-l-120">
                            <p className="fs_12 w80 fc_black60">Error</p>
                            <div className="flex1">
                                <div className="dflx_ac gap_60">
                                    <div className="relative w-25">
                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'xlarge error fillgray'} value="Label" messClass={'mess error m-t-8'} message={'Error message'} />
                                    </div>
                                    <div className="relative w-25">
                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'large error fillgray'} value="Label" messClass={'mess error m-t-8'} message={'Error message'} />
                                    </div>
                                    <div className="relative w-25">
                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'error fillgray'} value="Label" messClass={'mess error m-t-8'} message={'Error message'} />
                                    </div>
                                    <div className="relative dflx gap_4 w-35">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx_ac m-t-20 m-l-120">
                            <p className="fs_12 w80 fc_black60">Disabled</p>
                            <div className="flex1">
                                <div className="dflx_ac gap_60">
                                    <div className="relative w-25">
                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'xlarge fillgray'} value="Disabled" disabled="disabled" />
                                    </div>
                                    <div className="relative w-25">
                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'large fillgray'} value="Disabled" disabled="disabled" />
                                    </div>
                                    <div className="relative w-25">
                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'fillgray'} value="Disabled" disabled="disabled" />
                                    </div>
                                    <div className="relative dflx gap_4 w-35">
                                        <InputMdComponent zoneClass={'put_zone'} type={'text'} placeholder={'placeholder'} inputStyle={'fillgray'} value="Disabled" disabled="disabled" />            
                                        <ButtonComponent className="btn_primary btn_32 border_none disabled" type="button" txt="검색"></ButtonComponent>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="dflx m-t-40">
                            <div className="fs_bold w120 p-t-36">Text field</div>
                            <div className="dflx_ac m-t-20 m-l-80">
                                <div className="put_zone w300">
                                    <TextareaComponent className="h100 p-r-4" placeholder="placeholder">
                                        <div className="textarea_length">
                                            <span>0</span>
                                            <span>/</span>
                                            <span>128</span>
                                        </div>
                                    </TextareaComponent>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="dflx_ac m-t-60">
                            <div className="fs_bold w120">Form</div>
                            <div className="dflx_ac m-l-80">
                                <p className="fs_14_medium">Label</p>
                                <p className="m-l-4">
                                    <ImgComponent src="notice_fill_blue_16.svg" alt="" />
                                </p>
                                <InputMdLineComponent zoneClass={'put_zone m-l-14 w260'} type={'text'} placeholder={'placeholder'} inputStyle={'xlarge'} />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Inputfield;
