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
import ImgComponent from "../components/common/ImgComponent";
import TableComponent from "../components/common/TableComponent";
import TableTh from "../components/common/TableTh";
import TableTd from "../components/common/TableTd";

import CardBlock from "../components/cards/CardBlock";

import DatepickerLine from '../components/atom/DatepickerLine';

import SideMenu from "../components/menu/SideMenu";

// import 'overlayscrollbars/overlayscrollbars.css';
// import  {  OverlayScrollbarsComponent  }  from  "overlayscrollbars-react" ;

const TemplateDashboardTwo = () => {
    
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
        <SideMenu className={sideMenu ? "sidebar_menu lightmode hide" : "sidebar_menu lightmode "} id="leftMenu"></SideMenu>
        {/* <OverlayScrollbarsComponent defer> */}
            <main className={sideMenu ? "main_dashboard" : "main_dashboard on"}>
                <div className="dashboard_title">
                    <h1>대시보드</h1>
                    <DatepickerLine wrapClass="put_zone w140 date_icon" inputClass="wrput fillgray datepicker" />
                </div>
                <div className="dashboard_box">
                    <div className="grid_column5 gap_20">
                        <div className="bg_white p-20">
                            <p className="m-b-16 fs_bold">차종별 통행량</p>
                            <ImgComponent src={'tpye2_chart1.png'} alt={''} />
                        </div>
                        <div className="bg_white p-20">
                            <p className="m-b-16 fs_bold">평균 속도</p>
                            <ImgComponent src={'tpye2_chart2.png'} alt={''} />
                        </div>
                        <div className="bg_white p-20">
                            <p className="m-b-16 fs_bold">주요 도로별 통행량 및 평균속도</p>
                            <ImgComponent src={'tpye2_chart3.png'} alt={''} />
                        </div>
                        <div className="bg_white p-20">
                            <p className="m-b-16 fs_bold">주요 도로별 통행량 및 평균속도</p>
                            <ImgComponent src={'tpye2_chart4.png'} alt={''} />
                        </div>
                        <div className="bg_white p-20">
                            <p className="m-b-16 fs_bold">스마트 교차로 통행량 TOP5</p>
                            <TableComponent tableClass="table_box cell_30 cellpad_0">                     
                                <TableTh>
                                    <tr>
                                        <th className=""></th>
                                        <th className="w-45">교차로명</th>
                                        <th className="w-45">통행량</th>
                                    </tr>
                                </TableTh>
                                <TableTd>
                                    <td className="tac">1</td>
                                    <td className="tac">신광사거리</td>
                                    <td className="tac">127, 112</td>
                                </TableTd>
                                <TableTd>
                                    <td className="tac">2</td>
                                    <td className="tac">신광사거리</td>
                                    <td className="tac">127, 112</td>
                                </TableTd>
                                <TableTd>
                                    <td className="tac">3</td>
                                    <td className="tac">신광사거리</td>
                                    <td className="tac">127, 112</td>
                                </TableTd>
                                <TableTd>
                                    <td className="tac">4</td>
                                    <td className="tac">신광사거리</td>
                                    <td className="tac">127, 112</td>
                                </TableTd>
                                <TableTd>
                                    <td className="tac">5</td>
                                    <td className="tac">신광사거리</td>
                                    <td className="tac">127, 112</td>
                                </TableTd>
                            </TableComponent>
                        </div>
                    </div>
                    <div className="dflx gap_20">
                        <div className="bg_white p-20 flex1">
                            <p className="fs_bold m-b-16">실시간 도로</p>
                            <ImgComponent src={'type2_map.png'} className="w-100" alt={''} />
                        </div>
                        <div className="dflx_column flex1 gap_20">
                            <div className="bg_white p-20 flex1">
                                <p className="fs_bold m-b-16">도로별 현황(최근 12시간)</p>
                                <ImgComponent src={'type2_linechart1.png'} className="w-100" alt={''} />
                            </div>
                            <div className="bg_white p-20 flex1">
                                <p className="fs_bold m-b-16">차종별 현황(최근 12시간)</p>
                                <ImgComponent src={'type2_linechart2.png'} className="w-100" alt={''} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        {/* </OverlayScrollbarsComponent> */}
    </div>    
  );
};

export default TemplateDashboardTwo;
