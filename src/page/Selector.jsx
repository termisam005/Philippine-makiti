import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import Gnb from "../components/header/Gnb";

import CheckComponent from "../components/common/CheckComponent";
import CheckBoxTree from "../components/common/CheckBoxTree";

import DatepickerLine from '../components/atom/DatepickerLine';

import SelectBoxComponent from "../components/molecule/SelectBoxComponent";
import SelectBoxHover from "../components/select/SelectBoxHover";
import SelectBoxActive from "../components/select/SelectBoxActive";
import SelectBoxSelected from "../components/select/SelectBoxSelected";
import SelectBoxDisabled from "../components/select/SelectBoxDisabled";


const Selector = () => {
    
  return (
    <div className="guide_back">
        <Gnb></Gnb>
        <div className="guide_wrap">
            <div className="guide_center">
                <div className="guide_top">
                    <h1>Selector</h1>
                </div>

                <div className="Gr_contents">
                    <div className="comp_top">
                        <h2>Selector</h2>
                    </div>
                    <p className="m-t-15-negative">W: 디자인에 맞춰 조절 가능 / H: 고정 / Radius 4</p>
                    <section>
                        <div className="dflx m-t-80">
                            <p className="fs_bold w120 p-t-36">Line</p>
                            <div className="dflx_ac m-t-20 flex1">
                                <p className="fs_12 w80 fc_black60">Default</p>
                                <div className="flex1">
                                    <div className="dflx_as gap_60">
                                        <div className="relative w-25">
                                            <p className="fs_bold absolute" style={{top: "-50px"}}>40px</p>
                                            <SelectBoxComponent selectClass="line large"></SelectBoxComponent>
                                        </div>
                                        <div className="relative w-25">
                                            <p className="fs_bold absolute" style={{top: "-50px"}}>32px</p>
                                            <SelectBoxComponent selectClass="line medium m-t-3"></SelectBoxComponent>
                                        </div>
                                        <div className="relative w-25">
                                            <p className="fs_bold absolute" style={{top: "-50px"}}>28px</p>
                                            <SelectBoxComponent selectClass="line small m-t-6"></SelectBoxComponent>
                                        </div>
                                        <div className="relative dflx gap_4 w-35">
                                            <p className="fs_bold absolute" style={{top: "-50px"}}>28px(text)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx_ac m-t-20 m-l-120">
                            <p className="fs_12 w80 fc_black60">Hover</p>
                            <div className="flex1">
                                <div className="dflx_as gap_60">
                                    <div className="relative w-25">
                                        <SelectBoxHover selectClass="line large"></SelectBoxHover>
                                    </div>
                                    <div className="relative w-25">
                                        <SelectBoxHover selectClass="line medium m-t-3"></SelectBoxHover>
                                    </div>
                                    <div className="relative w-25">
                                        <SelectBoxHover selectClass="line small m-t-6"></SelectBoxHover>
                                    </div>
                                    <div className="relative dflx gap_4 w-35">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx_ac m-t-20 m-l-120">
                            <p className="fs_12 w80 fc_black60">Active</p>
                            <div className="flex1">
                                <div className="dflx_as gap_60">
                                    <div className="relative w-25">
                                        <SelectBoxActive selectClass="line large"></SelectBoxActive>
                                    </div>
                                    <div className="relative w-25">
                                        <SelectBoxActive selectClass="line medium"></SelectBoxActive>
                                    </div>
                                    <div className="relative w-25">
                                        <SelectBoxActive selectClass="line small"></SelectBoxActive>
                                    </div>
                                    <div className="relative dflx gap_4 w-35">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx_ac m-t-160 m-l-120">
                            <p className="fs_12 w80 fc_black60">Selected</p>
                            <div className="flex1">
                                <div className="dflx_as gap_60">
                                    <div className="relative w-25">
                                        <SelectBoxSelected selectClass="line large" value="Selected"></SelectBoxSelected>
                                    </div>
                                    <div className="relative w-25">
                                        <SelectBoxSelected selectClass="line medium" value="Selected"></SelectBoxSelected>
                                    </div>
                                    <div className="relative w-25">
                                        <SelectBoxSelected selectClass="line small" value="Selected"></SelectBoxSelected>
                                    </div>
                                    <div className="relative dflx gap_4 w-35">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx_ac m-t-20 m-l-120">
                            <p className="fs_12 w80 fc_black60">Disabled</p>
                            <div className="flex1">
                                <div className="dflx_as gap_60">
                                    <div className="relative w-25">
                                        <SelectBoxDisabled selectClass="line large disabled"></SelectBoxDisabled>
                                    </div>
                                    <div className="relative w-25">
                                        <SelectBoxDisabled selectClass="line medium disabled"></SelectBoxDisabled>
                                    </div>
                                    <div className="relative w-25">
                                        <SelectBoxDisabled selectClass="line small disabled"></SelectBoxDisabled>
                                    </div>
                                    <div className="relative dflx gap_4 w-35">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="dflx m-t-40">
                            <p className="fs_bold w120 p-t-36">Fill</p>
                            <div className="dflx_ac m-t-20 flex1">
                                <p className="fs_12 w80 fc_black60">Default</p>
                                <div className="flex1">
                                    <div className="dflx_as gap_60">
                                        <div className="relative w-25">
                                            <SelectBoxComponent selectClass="fill large"></SelectBoxComponent>
                                        </div>
                                        <div className="relative w-25">
                                            <SelectBoxComponent selectClass="fill medium m-t-3"></SelectBoxComponent>
                                        </div>
                                        <div className="relative w-25">
                                            <SelectBoxComponent selectClass="fill small m-t-6"></SelectBoxComponent>
                                        </div>
                                        <div className="relative dflx gap_4 w-35">
                                            <SelectBoxSelected selectClass="text small w120 m-t-6" value="Selected"></SelectBoxSelected>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx_ac m-t-20 m-l-120">
                            <p className="fs_12 w80 fc_black60">Hover</p>
                            <div className="flex1">
                                <div className="dflx_as gap_60">
                                    <div className="relative w-25">
                                        <SelectBoxHover selectClass="fill large"></SelectBoxHover>
                                    </div>
                                    <div className="relative w-25">
                                        <SelectBoxHover selectClass="fill medium m-t-3"></SelectBoxHover>
                                    </div>
                                    <div className="relative w-25">
                                        <SelectBoxHover selectClass="fill small m-t-6"></SelectBoxHover>
                                    </div>
                                    <div className="relative dflx gap_4 w-35">
                                        <SelectBoxSelected selectClass="text small w120 m-t-6 bg_grayf5" value="Selected"></SelectBoxSelected>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx_ac m-t-20 m-l-120">
                            <p className="fs_12 w80 fc_black60">Active</p>
                            <div className="flex1">
                                <div className="dflx_as gap_60">
                                    <div className="relative w-25">
                                        <SelectBoxActive selectClass="fill large"></SelectBoxActive>
                                    </div>
                                    <div className="relative w-25">
                                        <SelectBoxActive selectClass="fill medium"></SelectBoxActive>
                                    </div>
                                    <div className="relative w-25">
                                        <SelectBoxActive selectClass="fill small"></SelectBoxActive>
                                    </div>
                                    <div className="relative dflx gap_4 w-35">
                                        <SelectBoxActive selectClass="text small w120"></SelectBoxActive>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx_ac m-t-160 m-l-120">
                            <p className="fs_12 w80 fc_black60">Selected</p>
                            <div className="flex1">
                                <div className="dflx_as gap_60">
                                    <div className="relative w-25">
                                        <SelectBoxSelected selectClass="fill large" value="Selected"></SelectBoxSelected>
                                    </div>
                                    <div className="relative w-25">
                                        <SelectBoxSelected selectClass="fill medium" value="Selected"></SelectBoxSelected>
                                    </div>
                                    <div className="relative w-25">
                                        <SelectBoxSelected selectClass="fill small" value="Selected"></SelectBoxSelected>
                                    </div>
                                    <div className="relative dflx gap_4 w-35">
                                        <SelectBoxSelected selectClass="text small w120" value="Selected"></SelectBoxSelected>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx_ac m-t-20 m-l-120">
                            <p className="fs_12 w80 fc_black60">Disabled</p>
                            <div className="flex1">
                                <div className="dflx_as gap_60">
                                    <div className="relative w-25">
                                        <SelectBoxDisabled selectClass="fill large disabled"></SelectBoxDisabled>
                                    </div>
                                    <div className="relative w-25">
                                        <SelectBoxDisabled selectClass="fill medium disabled"></SelectBoxDisabled>
                                    </div>
                                    <div className="relative w-25">
                                        <SelectBoxDisabled selectClass="fill small disabled"></SelectBoxDisabled>
                                    </div>
                                    <div className="relative dflx gap_4 w-35">
                                        <SelectBoxDisabled selectClass="text small w120 disabled"></SelectBoxDisabled>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="dflx m-t-40">
                            <div className="fs_bold w120 p-t-36">
                                <p className="fs_12_bold fc_black60">White bg only</p>
                            </div>
                            <div className="dflx_ac m-t-20 flex1">
                                <p className="fs_12 w80 fc_black60">Default</p>
                                <div className="gray_bg">
                                    <div className="dflx_as gap_60 w742">
                                        <div className="relative w-25">
                                            <SelectBoxComponent selectClass="white large"></SelectBoxComponent>
                                        </div>
                                        <div className="relative w-25">
                                            <SelectBoxComponent selectClass="white medium m-t-3"></SelectBoxComponent>
                                        </div>
                                        <div className="relative w-25">
                                            <SelectBoxComponent selectClass="white small m-t-6"></SelectBoxComponent>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx_ac m-t-5 m-l-120">
                            <div className="dflx_ac m-t-20 flex1">
                                <p className="fs_12 w80 fc_black60">Active</p>
                                <div className="gray_bg">
                                    <div className="dflx_as gap_60 w742">
                                        <div className="relative w-25">
                                            <SelectBoxActive selectClass="white large"></SelectBoxActive>
                                        </div>
                                        <div className="relative w-25">
                                            <SelectBoxActive selectClass="white medium m-t-3"></SelectBoxActive>
                                        </div>
                                        <div className="relative w-25">
                                            <SelectBoxActive selectClass="white small m-t-6"></SelectBoxActive>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx_ac m-l-120">  
                            <div className="dflx_ac m-t-20 flex1">
                                <p className="fs_12 w80 fc_black60">&nbsp;</p>
                                <div className="gray_bg h120 w742"></div>            
                            </div>             
                        </div>
                        <div className="dflx_ac m-t-5 m-l-120">
                            <div className="dflx_ac m-t-20 flex1">
                                <p className="fs_12 w80 fc_black60">Selected</p>
                                <div className="gray_bg">
                                    <div className="dflx_as gap_60 w742">
                                        <div className="relative w-25">
                                            <SelectBoxSelected selectClass="white large" value="Selected"></SelectBoxSelected>
                                        </div>
                                        <div className="relative w-25">
                                            <SelectBoxSelected selectClass="white medium m-t-3" value="Selected"></SelectBoxSelected>
                                        </div>
                                        <div className="relative w-25">
                                            <SelectBoxSelected selectClass="white small m-t-6" value="Selected"></SelectBoxSelected>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx_ac m-t-5 m-l-120">
                            <div className="dflx_ac m-t-20 flex1">
                                <p className="fs_12 w80 fc_black60">Disabled</p>
                                <div className="gray_bg">
                                    <div className="dflx_as gap_60 w742">
                                        <div className="relative w-25">
                                            <SelectBoxDisabled selectClass="white large disabled"></SelectBoxDisabled>
                                        </div>
                                        <div className="relative w-25">
                                            <SelectBoxDisabled selectClass="white medium disabled m-t-3"></SelectBoxDisabled>
                                        </div>
                                        <div className="relative w-25">
                                            <SelectBoxDisabled selectClass="white small disabled m-t-6"></SelectBoxDisabled>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="Gr_contents m-t-100">
                    <div className="comp_top">
                        <h2>Date picker</h2>
                    </div>
                    <p className="m-t-15-negative">W: 디자인에 맞춰 조절 가능 / H: 고정 / Radius 4</p>
                    <section>
                        <div className="dflx m-t-120">
                            <p className="fs_bold w120 p-t-5">Line</p>
                            <div className="dflx_ac flex1">
                                <p className="fs_12 w80 fc_black60">Default</p>
                                <div className="flex1">
                                    <div className="dflx_as gap_60">
                                        <div className="relative w-25">
                                            <p className="fs_bold absolute" style={{top: "-50px"}}>32px</p>
                                            <DatepickerLine wrapClass="put_zone w160 date_icon" inputClass="wrput line datepicker" />
                                        </div>
                                        <div className="relative w-25">
                                            <p className="fs_bold absolute" style={{top: "-50px"}}>28px</p>
                                            <DatepickerLine wrapClass="put_zone w160 date_icon" inputClass="wrput small line datepicker" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx m-t-30 m-l-120">
                            <div className="dflx_ac flex1">
                                <p className="fs_12 w80 fc_black60">Hover</p>
                                <div className="flex1">
                                    <div className="dflx_as gap_60">
                                        <div className="relative w-25">                                            
                                            <DatepickerLine wrapClass="put_zone w160 date_icon" inputClass="wrput line datepicker bg_ui_blue_12" />
                                        </div>
                                        <div className="relative w-25">
                                            <DatepickerLine wrapClass="put_zone w160 date_icon" inputClass="wrput small line datepicker bg_ui_blue_12" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx m-t-30 m-l-120">
                            <div className="dflx_ac flex1">
                                <p className="fs_12 w80 fc_black60">Active</p>
                                <div className="flex1">
                                    <div className="dflx_as gap_60">
                                        <div className=" relative w-25">
                                            <DatepickerLine wrapClass="put_zone w160 date_icon" inputClass="wrput line datepicker border_blue" open="true" />
                                        </div>
                                        <div className="relative w-25">
                                            <DatepickerLine wrapClass="put_zone w160 date_icon" inputClass="wrput small line datepicker border_blue" open="true" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx m-l-120 m-t-320">
                            <div className="dflx_ac flex1">
                                <p className="fs_12 w80 fc_black60">Selected</p>
                                <div className="flex1">
                                    <div className="dflx_as gap_60">
                                        <div className="relative w-25">
                                            <DatepickerLine wrapClass="put_zone w160 date_icon" inputClass="wrput line datepicker" inputDate="2023/06/01" />
                                        </div>
                                        <div className="relative w-25">
                                            <DatepickerLine wrapClass="put_zone w160 date_icon" inputClass="wrput small line datepicker" inputDate="2023/06/01" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx m-t-30 m-l-120">
                            <div className="dflx_ac flex1">
                                <p className="fs_12 w80 fc_black60">Disabled</p>
                                <div className="flex1">
                                    <div className="dflx_as gap_60">
                                        <div className="relative w-25">
                                            <DatepickerLine wrapClass="put_zone w160 date_icon" inputClass="wrput line datepicker"  disabled readOnly />
                                        </div>
                                        <div className="relative w-25">
                                            <DatepickerLine wrapClass="put_zone w160 date_icon" inputClass="wrput small line datepicker" disabled />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="dflx m-t-30">
                            <p className="fs_bold w120 p-t-10">Fill</p>
                            <div className="dflx_ac flex1">
                                <p className="fs_12 w80 fc_black60">Default</p>
                                <div className="flex1">
                                    <div className="dflx_as gap_60">
                                        <div className="relative w-25">
                                            <DatepickerLine wrapClass="put_zone w160 date_icon" inputClass="wrput fillgray datepicker" />
                                        </div>
                                        <div className="relative w-25">
                                            <DatepickerLine wrapClass="put_zone w160 date_icon" inputClass="wrput small fillgray datepicker" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx m-t-30 m-l-120">
                            <div className="dflx_ac flex1">
                                <p className="fs_12 w80 fc_black60">Hover</p>
                                <div className="flex1">
                                    <div className="dflx_as gap_60">
                                        <div className="relative w-25">
                                            <DatepickerLine wrapClass="put_zone w160 date_icon" inputClass="wrput fillgray datepicker bg_ui_blue_12" />
                                        </div>
                                        <div className="relative w-25">
                                            <DatepickerLine wrapClass="put_zone w160 date_icon" inputClass="wrput small fillgray datepicker bg_ui_blue_12" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx m-l-120 m-t-30">
                            <div className="dflx_ac flex1">
                                <p className="fs_12 w80 fc_black60">Selected</p>
                                <div className="flex1">
                                    <div className="dflx_as gap_60">
                                        <div className="relative w-25">
                                            <DatepickerLine wrapClass="put_zone w160 date_icon" inputClass="wrput fillgray datepicker" inputDate="2023/06/01" />
                                        </div>
                                        <div className="relative w-25">
                                            <DatepickerLine wrapClass="put_zone w160 date_icon" inputClass="wrput small fillgray datepicker" inputDate="2023/06/01" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx m-t-30 m-l-120">
                            <div className="dflx_ac flex1">
                                <p className="fs_12 w80 fc_black60">Disabled</p>
                                <div className="flex1">
                                    <div className="dflx_as gap_60">
                                        <div className="relative w-25">
                                            <DatepickerLine wrapClass="put_zone w160 date_icon" inputClass="wrput fillgray datepicker"  disabled />
                                        </div>
                                        <div className="relative w-25">
                                            <DatepickerLine wrapClass="put_zone w160 date_icon" inputClass="wrput small fillgray datepicker"  disabled />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="dflx m-t-60">
                            <p className="fs_12_bold fc_black60 p-t-10 w120">White bg only</p>
                            <div className="dflx_ac flex1">
                                <p className="fs_12 w80 fc_black60">Default</p>
                                <div className="gray_bg">
                                    <div className="dflx_as gap_60">
                                        <div className="relative w-25">
                                            <DatepickerLine wrapClass="put_zone w160 date_icon" inputClass="wrput white datepicker" />
                                        </div>
                                        <div className="relative w-25 m-l-120">
                                            <DatepickerLine wrapClass="put_zone w160 date_icon" inputClass="wrput small white datepicker" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx m-t-30">
                            <div className="dflx_ac flex1 m-l-120">
                                <p className="fs_12 w80 fc_black60">Selected</p>
                                <div className="gray_bg">
                                    <div className="dflx_as gap_60">
                                        <div className="relative w-25">
                                            <DatepickerLine wrapClass="put_zone w160 date_icon" inputClass="wrput white datepicker" inputDate="2023/06/01" />
                                        </div>
                                        <div className="relative w-25 m-l-120">
                                            <DatepickerLine wrapClass="put_zone w160 date_icon" inputClass="wrput small white datepicker" inputDate="2023/06/01" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dflx m-t-30">
                            <div className="dflx_ac flex1 m-l-120">
                                <p className="fs_12 w80 fc_black60">Disabled</p>
                                <div className="gray_bg">
                                    <div className="dflx_as gap_60">
                                        <div className="relative w-25">
                                            <DatepickerLine wrapClass="put_zone w160 date_icon" inputClass="wrput white datepicker" disabled />
                                        </div>
                                        <div className="relative w-25 m-l-120">
                                            <DatepickerLine wrapClass="put_zone w160 date_icon" inputClass="wrput small white datepicker" disabled />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>                
                <div className="Gr_contents m-t-80">
                    <div className="comp_top">
                        <h2>Tree</h2>
                    </div>
                    <div className="accordion_block">
                        {/* tree 구조 1단계 */}
                        <div className="dflx_ac gap_8 h32">
                            <CheckComponent checkClass="checkbox_type" type="checkbox" name="checkbox_list" labelClass="fs_14" checkId="tree_check01" txt="Lv.1 Default"></CheckComponent>
                        </div>
                        <div className="dflx_ac gap_8 h32">
                            <CheckComponent checkClass="checkbox_type" type="checkbox" name="checkbox_list" labelClass="fs_14" checkId="tree_check02" txt="Lv.1 Selected" defaultType="defaultChecked"></CheckComponent>
                        </div>
                        <div className="dflx_ac gap_8 h32">
                            <CheckComponent checkClass="checkbox_type" type="checkbox" name="checkbox_list" labelClass="fs_14" checkId="tree_check03" txt="Lv.1 Disabled" disabled></CheckComponent>
                        </div>
                        {/* tree 구조 2단계 */}
                        <div className="tree_contents show">
                            <CheckBoxTree></CheckBoxTree>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Selector;
