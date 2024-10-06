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
import ImgComponent from "../components/common/ImgComponent";
import TableComponent from "../components/common/TableComponent";
import TableTh from "../components/common/TableTh";
import TableTd from "../components/common/TableTd";
import Paging10Component from "../components/common/Paging10Component";

import CardShadowBlock from "../components/cards/CardShadowBlock";
import DatepickerLine from '../components/atom/DatepickerLine';
import SideMenu from "../components/menu/SideMenu";
import SelectBoxSelected from "../components/select/SelectBoxSelected";
import LabelComponent from "../components/common/LabelComponent";

const TemplateMap = () => {
    
    const [sideMenu, sideMenuToggle] = useState(true);
    const ToggleSideMenu = () => {
        sideMenuToggle(!sideMenu);
    }

        
    const [footerBtn, footerBtnToggle] = useState(true);
    const btnToggle = () => {
        footerBtnToggle(!footerBtn);
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
        <SideMenu className={sideMenu ? "sidebar_menu lightmode hide" : "sidebar_menu lightmode"} id="leftMenu"></SideMenu>
        <main className={sideMenu ? "main_dashboard" : "main_dashboard on"}>
            <div className="dashboard_title">
                <h1>답변관리</h1>
                <Link to="#" className="btn_primary btn_32 w140" type="button">등록하기</Link>
            </div>
            <div className={sideMenu ? "map_box" : "map_box on"}>
                <article className="map_sidebar left">
                    <CardShadowBlock className={'w320'} title={'선택 정류장 목록'} titleButton boolean={true}>
                        <div className="p-20">
                            <div className="dflx_ac gap_12">
                                <p className="w82 fs_14_medium">기준일자 *</p>
                                <DatepickerLine wrapClass="put_zone date_icon flex1" inputClass="wrput line datepicker" inputDate="2023/06/01" />
                            </div>
                            <div className="m-t-12 display_grid gap_4 ai_center">
                                <p className="fs_14_medium m-b-4">변경설정</p>
                                <div className="dflx_ac gap_12">                                
                                    <p className="w82 fs_14 tar">정류장</p>
                                    <SelectBoxSelected selectClass="line medium flex1" value={"50m"}></SelectBoxSelected>
                                </div>
                                <div className="dflx_ac gap_12">                                
                                    <p className="w82 fs_14 tar">지하철 역</p>
                                    <SelectBoxSelected selectClass="line medium flex1" value={"100m"}></SelectBoxSelected>
                                </div>
                                <div className="dflx_ac gap_12">                                
                                    <p className="w82 fs_14 tar">승차대</p>
                                    <SelectBoxSelected selectClass="line medium flex1" value={"25m"}></SelectBoxSelected>
                                </div>
                            </div>
                            <div className="m-t-12 display_grid gap_4 ai_center">
                                <p className="fs_14_medium m-b-4">사각지대 기준 </p>
                                <div className="dflx_ac gap_12">                                
                                    <p className="w82 fs_14 tar">정류장</p>  
                                    <SelectBoxSelected selectClass="line medium w75" value={"0"}></SelectBoxSelected>
                                    <span>~</span>                                    
                                    <SelectBoxSelected selectClass="line medium w75" value={"0"}></SelectBoxSelected>
                                </div>
                                <div className="dflx_ac gap_12">                                
                                    <p className="w82 fs_14 tar">지하철 역</p>
                                    <SelectBoxSelected selectClass="line medium w75" value={"0"}></SelectBoxSelected>
                                    <span>~</span>                                    
                                    <SelectBoxSelected selectClass="line medium w75" value={"0"}></SelectBoxSelected>
                                </div>
                                <div className="dflx_ac gap_12">                                
                                    <p className="w82 fs_14 tar">승차대</p>
                                    <SelectBoxSelected selectClass="line medium w75" value={"0"}></SelectBoxSelected>
                                    <span>~</span>                                    
                                    <SelectBoxSelected selectClass="line medium w75" value={"0"}></SelectBoxSelected>
                                </div>
                            </div>
                            <button className="btn_primary btn_m m-t-20 w-100" type="button">조회</button>
                        </div>
                    </CardShadowBlock>                       
                </article>
                <article className="map_sidebar right">
                    <CardShadowBlock className={'w1036'} title={'사각지대 목록'} titleButton boolean={true}>
                        <div className="p-20">
                            <div className="dflx_jend gap_4">
                                <ButtonComponent className="btn_secondary btn_s fs_medium" type="button" txt="컬럼 선택"></ButtonComponent>
                                <ButtonComponent className="btn_secondary btn_s fs_medium" type="button" txt="엑셀"></ButtonComponent>
                            </div>  
                            <TableComponent tableClass="table_box card cell_50 m-t-16">                     
                                <TableTh>
                                    <tr>
                                        <th className="w-60">
                                            지역명
                                        </th>                                        
                                        <th className="w-10">
                                            정류장(개소)
                                        </th>                              
                                        <th className="w-10">
                                            역사(개소)
                                        </th>                              
                                        <th className="w-10">
                                            승차대(개소)
                                        </th>
                                    </tr>
                                </TableTh>
                                <TableTd>
                                    <td className="">
                                        [연수구]송도5동_036
                                    </td>
                                    <td className="tar">
                                        1,903
                                    </td>
                                    <td className="tar">
                                        2,904
                                    </td>
                                    <td className="tar">
                                        2,905
                                    </td>
                                </TableTd>
                                <TableTd>
                                    <td className="">
                                        [연수구]송도5동_036
                                    </td>
                                    <td className="tar">
                                        1,903
                                    </td>
                                    <td className="tar">
                                        2,904
                                    </td>
                                    <td className="tar">
                                        2,905
                                    </td>
                                </TableTd>
                                <TableTd>
                                    <td className="">
                                        [연수구]송도5동_036
                                    </td>
                                    <td className="tar">
                                        1,903
                                    </td>
                                    <td className="tar">
                                        2,904
                                    </td>
                                    <td className="tar">
                                        2,905
                                    </td>
                                </TableTd>
                            </TableComponent> 
                            <Paging10Component wrapClass="dflx_ac_jcent gap_8 m-t-20"></Paging10Component>
                        </div>
                    </CardShadowBlock> 
                    <CardShadowBlock className={'w1036 m-t-8'} title={'지역별 교통시설 현황'} titleButton boolean={true}>
                        <div className="p-20">
                            <div className="dflx_ac gap_4">
                                <div className="dflx gap_20">                                    
                                    <CheckComponent checkClass={'radio_type'} type={'radio'} checkId={'radio01'} name={'radio_list'} labelClass={'fs_14'} defaultType="defaultChecked" txt="자치구별" />
                                    <CheckComponent checkClass={'radio_type'} type={'radio'} checkId={'radio02'} name={'radio_list'} labelClass={'fs_14'} txt="행정동별" />
                                    <CheckComponent checkClass={'radio_type'} type={'radio'} checkId={'radio03'} name={'radio_list'} labelClass={'fs_14'} txt="집계구별" />
                                </div>
                                <ButtonComponent className="btn_secondary btn_s fs_medium m-l-a" type="button" txt="컬럼 선택"></ButtonComponent>
                                <ButtonComponent className="btn_secondary btn_s fs_medium" type="button" txt="엑셀"></ButtonComponent>
                            </div>  
                            <TableComponent tableClass="table_box cell_36 card m-t-16">                     
                                <TableTh>
                                    <tr>
                                        <th rowspan="2" class="w80">지역명</th>
                                        <th colspan="2">전체</th> 
                                        <th colspan="2">버스</th>
                                        <th colspan="2">지하철</th>
                                        <th colspan="2">택시</th>
                                    </tr>
                                    <tr>
                                        <th class="w115 text_nowrap">시술서(개소)</th>
                                        <th class="w115">이용객(명)</th>
                                        <th class="w115 text_nowrap">정류장(개소)</th>
                                        <th class="w115">이용객(명)</th>
                                        <th class="w115">역사(개소)</th>
                                        <th class="w115">이용객(명)</th>
                                        <th class="w115 text_nowrap">승차대(개소)</th>
                                        <th class="w115">이용객(명)</th>
                                    </tr>
                                </TableTh>
                                <TableTd>
                                    <td className="tac">강화군</td>
                                    <td className="tar">649</td>
                                    <td className="tar">2,903</td>
                                    <td className="tar">649</td>
                                    <td className="tar">2,664</td>
                                    <td className="tar">0</td>
                                    <td className="tar">0</td>
                                    <td className="tar">0</td>
                                    <td className="tar">239</td>
                                </TableTd>
                                <TableTd>
                                    <td className="tac">강화군</td>
                                    <td className="tar">649</td>
                                    <td className="tar">2,903</td>
                                    <td className="tar">649</td>
                                    <td className="tar">2,664</td>
                                    <td className="tar">0</td>
                                    <td className="tar">0</td>
                                    <td className="tar">0</td>
                                    <td className="tar">239</td>
                                </TableTd>
                                <TableTd>
                                    <td className="tac">강화군</td>
                                    <td className="tar">649</td>
                                    <td className="tar">2,903</td>
                                    <td className="tar">649</td>
                                    <td className="tar">2,664</td>
                                    <td className="tar">0</td>
                                    <td className="tar">0</td>
                                    <td className="tar">0</td>
                                    <td className="tar">239</td>
                                </TableTd>
                                <TableTd>
                                    <td className="tac">강화군</td>
                                    <td className="tar">649</td>
                                    <td className="tar">2,903</td>
                                    <td className="tar">649</td>
                                    <td className="tar">2,664</td>
                                    <td className="tar">0</td>
                                    <td className="tar">0</td>
                                    <td className="tar">0</td>
                                    <td className="tar">239</td>
                                </TableTd>
                            </TableComponent> 
                            <Paging10Component wrapClass="dflx_ac_jcent gap_8 m-t-20"></Paging10Component>
                        </div>
                    </CardShadowBlock> 
                </article>
                <article className="map_sidebar footer">
                    <div className="popover_box">
                        <div className="button_shadow border_radius4">
                            <ButtonWithComponent onClick={btnToggle} className={footerBtn ? 'btn_secondary btn_32 pressed_img icon_type toggle on' : 'btn_secondary btn_32 pressed_img icon_type toggle'} type="button">
                                <ImgComponent src={'legend_bk_24.svg'} alt={''} />
                            </ButtonWithComponent>
                        </div>
                        <div className={footerBtn ? "placement left top" : "placement left top hide" }>
                            <div className="map_label_bg display_grid gap_4">
                                <LabelComponent className='map_label label_color04 fs_12_medium'>정류장 범위</LabelComponent>
                                <LabelComponent className='map_label label_color06 fs_12_medium'>Label</LabelComponent>
                                <LabelComponent className='map_label label_color07 fs_12_medium'>Label</LabelComponent>
                                <LabelComponent className='map_label label_color10 fs_12_medium'>Label</LabelComponent>
                                <LabelComponent className='map_label label_color11 fs_12_medium'>Label</LabelComponent>
                                <LabelComponent className='map_label label_color14 fs_12_medium'>Label</LabelComponent>
                            </div>
                        </div>                 
                    </div>
                </article>
            </div>
        </main>
    </div>    
  );
};

export default TemplateMap;
