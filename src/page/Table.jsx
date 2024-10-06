import React from "react";
import { useState } from "react";
import Gnb from "../components/header/Gnb";

import TableComponent from "../components/common/TableComponent";
import TableTh from "../components/common/TableTh";
import TableTd from "../components/common/TableTd";
import ButtonComponent from "../components/common/ButtonComponent";
import ButtonWithComponent from "../components/common/ButtonWithComponent";
import LabelComponent from "../components/common/LabelComponent";
import ImgComponent from "../components/common/ImgComponent";
import CheckComponent from "../components/common/CheckComponent";

import SelectBoxComponent from "../components/molecule/SelectBoxComponent";
import SelectBoxSelected from "../components/select/SelectBoxSelected";
import SelectBoxClearShow from "../components/select/SelectBoxClearShow";


const Table = () => {
    
  return (
    <div className="guide_back">
        <Gnb></Gnb>
        <div className="guide_wrap">
            <div className="guide_center">
                <div className="guide_top">
                    <h1>Table</h1>
                </div>

                <div className="Gr_contents">
                    <div className="comp_top">
                        <h2>Item</h2>
                    </div>
                    <p className="m-t-15-negative">W: 디자인에 맞춰 조절 가능 / H: 스크롤 사용 시 고정, 페이지네이션 사용 시 화면에 맞춰 균등분할 / Radius 4</p>
                    <section className="m-t-160">                    
                        <div className="dflx gap_40">
                            <div className="relative">
                                <p className="fs_bold absolute" style={{top:"-100px"}}>Row 1</p>
                                <TableComponent tableClass="table_box">                     
                                    <TableTh>
                                        <tr>
                                            <th className="w120">Row 1</th>
                                        </tr>
                                    </TableTh>
                                </TableComponent>
                                <TableComponent tableClass="table_box m-t-10">                     
                                    <TableTh>
                                        <tr>
                                            <th className="w120">
                                                <CheckComponent checkClass="checkbox_type simply_one" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckComponent>
                                            </th>
                                        </tr>
                                    </TableTh>
                                </TableComponent>
                                <TableComponent tableClass="table_box m-t-10">                     
                                    <TableTh>
                                        <tr>
                                            <th className="w120">
                                                <SelectBoxSelected selectClass="w100 large text" value="Selected"></SelectBoxSelected>
                                            </th>
                                        </tr>
                                    </TableTh>
                                </TableComponent>
                                <TableComponent tableClass="table_box m-t-10">                     
                                    <TableTh>
                                        <tr>
                                            <th className="w120">
                                                <div className="dflx_ac_jcent gap_8">
                                                    <p>Row 1</p>
                                                    <ButtonWithComponent>
                                                        <ImgComponent src="array_fill_bk_16.svg" alt="" />
                                                    </ButtonWithComponent>
                                                </div>
                                            </th>
                                        </tr>                                       
                                    </TableTh>
                                </TableComponent>
                            </div>
                            <div className="relative">
                                <div className="absolute" style={{top:"-100px"}}>
                                    <p className="fs_bold">Row 2</p>
                                    <p className="fs_12 fc_black60 m-t-10">hover</p>                                    
                                </div>
                                <TableComponent tableClass="table_box">                     
                                    <TableTd className="hover">
                                        <td className="w120 tac">Hover</td>
                                    </TableTd>
                                </TableComponent>
                                <TableComponent tableClass="table_box m-t-10">                     
                                    <TableTd className="hover">
                                        <td className="w120 tac">
                                            <CheckComponent checkClass="checkbox_type simply_one" type="checkbox" name="checkbox_list" checkId="table_check02" labelClass="fs_14"></CheckComponent>
                                        </td>
                                    </TableTd>
                                </TableComponent>
                                <TableComponent tableClass="table_box m-t-10">                     
                                    <TableTd className="hover">
                                        <td className="w120 tac">
                                            <LabelComponent className="card_label line medium on">Label</LabelComponent>
                                        </td>
                                    </TableTd>
                                </TableComponent>
                                <TableComponent tableClass="table_box m-t-10">                     
                                    <TableTd className="hover">
                                        <td className="w120 tac">
                                            <ButtonComponent className="btn_secondary btn_s m-a fs_14_medium" type="button" txt="Default"></ButtonComponent>
                                        </td>
                                    </TableTd>
                                </TableComponent>
                                <TableComponent tableClass="table_box m-t-10">                     
                                    <TableTd className="hover">
                                        <td className="w120 tac">
                                            <div className="dflx_jcent gap_4">
                                                <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="btn"></ButtonComponent>
                                                <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="btn"></ButtonComponent>
                                            </div>
                                        </td>
                                    </TableTd>
                                </TableComponent>
                                <TableComponent tableClass="table_box m-t-10">                     
                                    <TableTd className="hover">
                                        <td className="w120 tac">
                                            <div className="dflx_jcent gap_4">
                                                <SelectBoxComponent selectClass="w90 line small m-a"></SelectBoxComponent>
                                            </div>
                                        </td>
                                    </TableTd>
                                </TableComponent>
                                <TableComponent tableClass="table_box m-t-10">                     
                                    <TableTd className="hover">
                                        <td className="w120 tac">
                                            <p className="fc_blue">Default</p>
                                        </td>
                                    </TableTd>
                                </TableComponent>
                                <TableComponent tableClass="table_box m-t-10">                     
                                    <TableTd className="hover">
                                        <td className="w120 tac">
                                            <p className="fc_black30">No data</p>
                                        </td>
                                    </TableTd>
                                </TableComponent>
                            </div>
                            <div className="relative gray_bg display_grid">
                                <div className="absolute" style={{top:"-85px"}}>
                                    <p className="fs_12 fc_black60 m-t-10">default</p>
                                </div>
                                <TableComponent tableClass="table_box z_index2">                     
                                    <TableTd>
                                        <td className="w120 tac">Hover</td>
                                    </TableTd>
                                </TableComponent>
                                <TableComponent tableClass="table_box m-t-10 z_index2">                     
                                    <TableTd>
                                        <td className="w120 tac">
                                            <CheckComponent checkClass="checkbox_type simply_one" type="checkbox" name="checkbox_list" checkId="table_check03" labelClass="fs_14"></CheckComponent>
                                        </td>
                                    </TableTd>
                                </TableComponent>
                                <TableComponent tableClass="table_box m-t-10 z_index2">                     
                                    <TableTd>
                                        <td className="w120 tac">
                                            <LabelComponent className="card_label line medium on">Label</LabelComponent>
                                        </td>
                                    </TableTd>
                                </TableComponent>
                                <TableComponent tableClass="table_box m-t-10 z_index2">                     
                                    <TableTd>
                                        <td className="w120 tac">
                                            <ButtonComponent className="btn_secondary btn_s m-a fs_14_medium" type="button" txt="Default"></ButtonComponent>
                                        </td>
                                    </TableTd>
                                </TableComponent>
                                <TableComponent tableClass="table_box m-t-10 z_index2">                     
                                    <TableTd>
                                        <td className="w120 tac">
                                            <div className="dflx_jcent gap_4">
                                                <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="btn"></ButtonComponent>
                                                <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="btn"></ButtonComponent>
                                            </div>
                                        </td>
                                    </TableTd>
                                </TableComponent>
                                <TableComponent tableClass="table_box m-t-10 z_index3">                     
                                    <TableTd>
                                        <td className="w120 tac">
                                            <div className="dflx_jcent gap_4">
                                                <SelectBoxComponent selectClass="w90 line small m-a"></SelectBoxComponent>
                                            </div>
                                        </td>
                                    </TableTd>
                                </TableComponent>
                                <TableComponent tableClass="table_box m-t-10 z_index2">                     
                                    <TableTd>
                                        <td className="w120 tac">
                                            <p className="fc_blue">Default</p>
                                        </td>
                                    </TableTd>
                                </TableComponent>
                                <TableComponent tableClass="table_box m-t-10 z_index2">                     
                                    <TableTd>
                                        <td className="w120 tac">
                                            <p className="fc_black30">No data</p>
                                        </td>
                                    </TableTd>
                                </TableComponent>
                            </div>
                        </div>
                    </section>
                </div>     
                
                <div className="Gr_contents m-t-100">
                    <div className="comp_top">
                        <h2>Border</h2>
                    </div>
                    <p className="m-t-15-negative">케이스별 옵션 변경하여 사용</p>
                    <section className="dflx m-t-100">
                        <div className="dflx gap_40">
                            <p className="fc_black60 fs_12">1단</p>
                            <div className="relative">
                                <p className="fc_black60 fs_12 absolute" style={{top:"-40px"}}>No data</p>
                                <TableComponent tableClass="table_box">                     
                                    <TableTh>
                                        <tr>
                                            <th className="w120">
                                                Row 1
                                            </th>                                        
                                            <th className="w120">
                                                Row 1
                                            </th>
                                        </tr>
                                    </TableTh>              
                                    <TableTd>
                                        <td className="tac" colSpan="2">
                                            <p className="fc_black30">No data</p>
                                        </td>
                                    </TableTd>
                                </TableComponent>
                            </div>
                            <div className="relative">
                                <p className="fc_black60 fs_12 absolute" style={{top:"-40px"}}>Default</p>
                                <TableComponent tableClass="table_box">                     
                                    <TableTh>
                                        <tr>
                                            <th className="w120">
                                                Row 1
                                            </th>
                                            <th className="w120">
                                                Row 1
                                            </th>
                                            <th className="w120">
                                                Row 1
                                            </th>
                                        </tr>
                                    </TableTh>              
                                    <TableTd className="hover">
                                        <td className="tac">
                                            Hover
                                        </td>
                                        <td className="tac">
                                            Hover
                                        </td>
                                        <td className="tac">
                                            Hover
                                        </td>
                                    </TableTd>          
                                    <TableTd>
                                        <td className="tac">
                                            Row 2
                                        </td>
                                        <td className="tac">
                                            Row 2
                                        </td>
                                        <td className="tac">
                                            Row 2
                                        </td>
                                    </TableTd>
                                </TableComponent>
                            </div>
                            <div className="relative">
                                <p className="fc_black60 fs_12 absolute" style={{top:"-40px"}}>On card</p>
                                <TableComponent tableClass="table_box card">                     
                                    <TableTh>
                                        <tr>
                                            <th className="w120">
                                                Row 1
                                            </th>
                                            <th className="w120">
                                                Row 1
                                            </th>
                                            <th className="w120">
                                                Row 1
                                            </th>
                                        </tr>
                                    </TableTh>              
                                    <TableTd className="hover">
                                        <td className="tac">
                                            Hover
                                        </td>
                                        <td className="tac">
                                            Hover
                                        </td>
                                        <td className="tac">
                                            Hover
                                        </td>
                                    </TableTd>          
                                    <TableTd>
                                        <td className="tac">
                                            Row 2
                                        </td>
                                        <td className="tac">
                                            Row 2
                                        </td>
                                        <td className="tac">
                                            Row 2
                                        </td>
                                    </TableTd>
                                </TableComponent>
                            </div>
                        </div>
                    </section>
                    <section className="dflx m-t-40">
                        <div className="dflx gap_40">
                            <p className="fc_black60 fs_12">2단</p>
                            <div className="relative">
                                <TableComponent tableClass="table_box card">                     
                                    <TableTh>
                                        <tr>
                                            <th rowSpan="2" className="w120">
                                                Row 1
                                            </th>
                                            <th className="w120">
                                                Row 1
                                            </th>
                                        </tr>
										<tr>
                                            <th className="w120">
                                                Row 1
                                            </th>
                                        </tr>
                                    </TableTh>   
                                    <TableTd>
                                        <td className="tac" colSpan="2">
                                            <p className="fc_black30">No data</p>
                                        </td>
                                    </TableTd>
                                </TableComponent>
                            </div>
                            <div className="relative">
                                <TableComponent tableClass="table_box">                     
                                    <TableTh>
                                        <tr>
                                            <th rowSpan="2" className="w120">
                                                Row 1
                                            </th>
                                            <th className="w120">
                                                Row 1
                                            </th>
                                            <th className="w120">
                                                Row 1
                                            </th>
                                        </tr>
										<tr>
                                            <th className="w120">
                                                Row 1
                                            </th>
                                            <th className="w120">
                                                Row 1
                                            </th>
                                        </tr>
                                    </TableTh>             
                                    <TableTd className="hover">
                                        <td className="tac">
                                            Hover
                                        </td>
                                        <td className="tac">
                                            Hover
                                        </td>
                                        <td className="tac">
                                            Hover
                                        </td>
                                    </TableTd>       
                                    <TableTd>
                                        <td className="tac">
                                            Row 2
                                        </td>
                                        <td className="tac">
                                            Row 2
                                        </td>
                                        <td className="tac">
                                            Row 2
                                        </td>
                                    </TableTd>
                                </TableComponent>
                            </div>
                            <div className="relative">
                                <TableComponent tableClass="table_box card">                     
                                    <TableTh>
                                        <tr>
                                            <th rowSpan="2" className="w120">
                                                Row 1
                                            </th>
                                            <th className="w120">
                                                Row 1
                                            </th>
                                            <th className="w120">
                                                Row 1
                                            </th>
                                        </tr>
										<tr>
                                            <th className="w120">
                                                Row 1
                                            </th>
                                            <th className="w120">
                                                Row 1
                                            </th>
                                        </tr>
                                    </TableTh>             
                                    <TableTd className="hover">
                                        <td className="tac">
                                            Hover
                                        </td>
                                        <td className="tac">
                                            Hover
                                        </td>
                                        <td className="tac">
                                            Hover
                                        </td>
                                    </TableTd>       
                                    <TableTd>
                                        <td className="tac">
                                            Row 2
                                        </td>
                                        <td className="tac">
                                            Row 2
                                        </td>
                                        <td className="tac">
                                            Row 2
                                        </td>
                                    </TableTd>
                                </TableComponent>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="Gr_contents m-t-100">
                    <div className="comp_top">
                        <h2>Usage</h2>
                    </div>
                    <section className="dflx m-t-20">
                        <div className="dflx gap_40">
                            <div className="relative">
                                <TableComponent tableClass="table_box">                     
                                    <TableTh>
                                        <tr>
                                            <th className="w40">
                                                <CheckComponent checkClass="checkbox_type simply_one" type="checkbox" name="checkbox_list" checkId="table_usage01" labelClass="fs_14"></CheckComponent>
                                            </th>
                                            <th className="w120">
                                                <div className="dflx_ac_jcent gap_8">
                                                    <p>Row 1</p>
                                                    <ButtonWithComponent>
                                                        <ImgComponent src="array_fill_bk_16.svg" alt="" />
                                                    </ButtonWithComponent>
                                                </div>
                                            </th>
                                            <th className="w120">
                                                Row 1
                                            </th>
                                            <th className="w120">
                                                <SelectBoxClearShow selectClass="w90 text small m-a" txt="Active"></SelectBoxClearShow>
                                            </th>
                                            <th className="w120">
                                                Row 1
                                            </th>
                                            <th className="w120">
                                                Row 1
                                            </th>
                                        </tr>
                                    </TableTh>             
                                    <TableTd className="hover">                                        
                                        <td className="tac">
                                            <CheckComponent checkClass="checkbox_type simply_one" type="checkbox" name="checkbox_list" checkId="table_usage02" labelClass="fs_14"></CheckComponent>
                                        </td>     
                                        <td className="tac">
                                            Hover
                                        </td>
                                        <td className="tac">
                                            <p className="fc_blue">Default</p>
                                        </td>
                                        <td className="tac">
                                            <p className="fc_black30">No data</p>
                                        </td>
                                        <td className="tac">
                                            <SelectBoxComponent selectClass="w90 line small m-a"></SelectBoxComponent>
                                        </td>
                                        <td className="tac">                                            
                                            <div className="dflx_jcent gap_4">
                                                <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="btn"></ButtonComponent>
                                                <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="btn"></ButtonComponent>
                                            </div>
                                        </td>
                                    </TableTd> 
                                    <TableTd>                                        
                                        <td className="tac">
                                            <CheckComponent checkClass="checkbox_type simply_one" type="checkbox" name="checkbox_list" checkId="table_usage03" labelClass="fs_14"></CheckComponent>
                                        </td>     
                                        <td className="tac">
                                            Hover
                                        </td>
                                        <td className="tac">
                                            <p className="fc_blue">Default</p>
                                        </td>
                                        <td className="tac">
                                            <p className="fc_black30">No data</p>
                                        </td>
                                        <td className="tac">
                                            <SelectBoxComponent selectClass="w90 line small m-a"></SelectBoxComponent>
                                        </td>
                                        <td className="tac">                                            
                                            <div className="dflx_jcent gap_4">
                                                <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="btn"></ButtonComponent>
                                                <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="btn"></ButtonComponent>
                                            </div>
                                        </td>
                                    </TableTd> 
                                </TableComponent>   
                                <TableComponent tableClass="table_box m-t-80">                     
                                    <TableTh>
                                        <tr>
                                            <th rowSpan="2" className="w120">
                                                Row 1
                                            </th>
                                            <th colSpan="2" className="w240">
                                                Row 1
                                            </th>
                                            <th colSpan="2" className="w240">
                                                Row 1
                                            </th>
                                        </tr>
										<tr>
                                            <th className="w120">
                                                Row 1
                                            </th>
                                            <th className="w120">
                                                Row 1
                                            </th>
                                            <th className="w120">
                                                Row 1
                                            </th>
                                            <th className="w120">
                                                Row 1
                                            </th>
                                        </tr>
                                    </TableTh>  
                                    <TableTd className="hover">   
                                        <td className="tac">
                                            Hover
                                        </td>
                                        <td className="tac">
                                            Hover
                                        </td>
                                        <td className="tac">
                                            <p className="fc_blue">Default</p>
                                        </td>
                                        <td className="tac">
                                            <SelectBoxComponent selectClass="w90 line small m-a"></SelectBoxComponent>
                                        </td>
                                        <td className="tac">                                            
                                            <div className="dflx_jcent gap_4">
                                                <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="btn"></ButtonComponent>
                                                <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="btn"></ButtonComponent>
                                            </div>
                                        </td>
                                    </TableTd> 
                                    <TableTd>   
                                        <td className="tac">
                                            Hover
                                        </td>
                                        <td className="tac">
                                            Hover
                                        </td>
                                        <td className="tac">
                                            <p className="fc_blue">Default</p>
                                        </td>
                                        <td className="tac">
                                            <SelectBoxComponent selectClass="w90 line small m-a"></SelectBoxComponent>
                                        </td>
                                        <td className="tac">                                            
                                            <div className="dflx_jcent gap_4">
                                                <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="btn"></ButtonComponent>
                                                <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="btn"></ButtonComponent>
                                            </div>
                                        </td>
                                    </TableTd> 
                                </TableComponent> 
                            </div>
                        </div>
                    </section>                    
                </div>
            </div>
        </div>
    </div>
  );
};

export default Table;
