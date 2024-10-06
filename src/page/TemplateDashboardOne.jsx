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
import SideMenu from "../components/menu/SideMenu";

// import 'overlayscrollbars/overlayscrollbars.css';
// import  {  OverlayScrollbarsComponent  }  from  "overlayscrollbars-react" ;

const TemplateDashboardOne = () => {
    
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
                    <Link to="#" className="btn_primary btn_32 w140" type="button">카카오채널 관리자</Link>
                </div>
                <div className="dashboard_box">
                    <div className="dashboard_counting grid_column3 gap_20">
                        <CardBlock>
                            <div className="dflx_ac gap_20">
                                <div className="w64">
                                    <ImgComponent src={'people_icon_bk_64.svg'} alt={''} />
                                </div>
                                <div>
                                    <p className="fs_bold m-b-12">이용자</p>
                                    <p className="fs_14">
                                        <span className="fs_32_bold">199</span><span className="fs_20">명</span>
                                    </p>
                                </div>
                            </div>
                        </CardBlock>   
                        <CardBlock>
                            <div className="dflx_ac gap_20">
                                <div className="w64">
                                    <ImgComponent src={'dashboard_msg_bk_64.svg'} alt={''} />
                                </div>
                                <div>
                                    <p>
                                        <span className="fs_medium">금일 누적 대화</span>
                                        <span className="fc_black60">(전일대화수 199건)</span>
                                    </p>
                                    <p className="m-t-8">
                                        <span className="fs_32_bold">129</span>
                                        <span className="fs_20">건</span>
                                    </p>
                                </div>
                            </div>
                        </CardBlock>
                        <CardBlock>
                            <div className="dflx_ac gap_20">
                                <div className="w64">
                                    <ImgComponent src={'dashboard_answer_bk_64.svg'} alt={''} />
                                </div>
                                <div>
                                    <p>
                                        <span className="fs_medium">금일 응답률</span>
                                        <span className="fc_black60">(전일 응답률 100%)</span>
                                    </p>
                                    <p className="m-t-8">
                                        <span className="fs_32_bold">88</span>
                                        <span className="fs_20">%</span>
                                    </p>
                                </div>
                            </div>
                        </CardBlock>
                    </div>
                    <div className="bg_white p-20">
                        <h3 className="fs_bold m-b-16">시간별 현황(최근 12시간)</h3>
                        <ImgComponent src={'line_chart_dot.png'} alt={''} />
                    </div>
                    <div className="grid_column2 gap_20">
                        <div className="bg_white p-20">
                            <h3 className="fs_bold m-b-16">TOP 10 Intent</h3>
                            <TableComponent tableClass="table_box">                     
                                <TableTh>
                                    <tr>
                                        <th className="w64 p-0">순위</th>
                                        <th className="">Intent</th>
                                        <th className="w120">레벨 1</th>
                                        <th className="w120">건수</th>
                                        <th className="w120">비율</th>
                                    </tr>
                                </TableTh>
                                <TableTd>
                                    <td className="tac"></td>
                                    <td className="fs_medium">합계/평균</td>
                                    <td className="tac fs_medium">-</td>
                                    <td className="tac fs_medium">총 1180</td>
                                    <td className="tac fs_medium">총 100</td>
                                </TableTd>
                                <TableTd>
                                    <td className="tac">1</td>
                                    <td className="">장지역</td>
                                    <td className="tac">1107</td>
                                    <td className="tac">40</td>
                                    <td className="tac">20</td>
                                </TableTd>
                                <TableTd>
                                    <td className="tac">2</td>
                                    <td className="">석촌호수,한솥병원</td>
                                    <td className="tac">1120</td>
                                    <td className="tac">30</td>
                                    <td className="tac">18</td>
                                </TableTd>
                                <TableTd>
                                    <td className="tac">3</td>
                                    <td className="">송파역</td>
                                    <td className="tac">1107</td>
                                    <td className="tac">40</td>
                                    <td className="tac">20</td>
                                </TableTd>
                                <TableTd>
                                    <td className="tac">4</td>
                                    <td className="">복정역</td>
                                    <td className="tac">1120</td>
                                    <td className="tac">30</td>
                                    <td className="tac">18</td>
                                </TableTd>
                                <TableTd>
                                    <td className="tac">5</td>
                                    <td className="">남강전화국사거리</td>
                                    <td className="tac">1120</td>
                                    <td className="tac">10</td>
                                    <td className="tac">11</td>
                                </TableTd>
                                <TableTd>
                                    <td className="tac">6</td>
                                    <td className="">삼삼주유소</td>
                                    <td className="tac">1120</td>
                                    <td className="tac">10</td>
                                    <td className="tac">11</td>
                                </TableTd>
                                <TableTd>
                                    <td className="tac">7</td>
                                    <td className="">삼삼주유소</td>
                                    <td className="tac">1120</td>
                                    <td className="tac">10</td>
                                    <td className="tac">11</td>
                                </TableTd>
                                <TableTd>
                                    <td className="tac">7</td>
                                    <td className="">삼삼주유소</td>
                                    <td className="tac">1120</td>
                                    <td className="tac">10</td>
                                    <td className="tac">11</td>
                                </TableTd>
                                <TableTd>
                                    <td className="tac">8</td>
                                    <td className="">삼삼주유소</td>
                                    <td className="tac">1120</td>
                                    <td className="tac">10</td>
                                    <td className="tac">11</td>
                                </TableTd>
                                <TableTd>
                                    <td className="tac">9</td>
                                    <td className="">삼삼주유소</td>
                                    <td className="tac">1120</td>
                                    <td className="tac">10</td>
                                    <td className="tac">11</td>
                                </TableTd>
                                <TableTd>
                                    <td className="tac">10</td>
                                    <td className="">삼삼주유소</td>
                                    <td className="tac">1120</td>
                                    <td className="tac">10</td>
                                    <td className="tac">11</td>
                                </TableTd>
                            </TableComponent>
                        </div>
                        <div className="bg_white p-20">
                            <h3 className="fs_bold m-b-16">시간별 현황(최근 12시간)</h3>
                            <div className="tac">
                                <ImgComponent src={'dashboard_piechart.jpg'} className="w200" alt={''} />
                            </div>
                            <TableComponent tableClass="table_box m-t-40">
                                <TableTh>
                                    <tr>
                                        <th className="w64 p-0">순위</th>
                                        <th className="">Intent</th>
                                        <th className="w120">레벨 1</th>
                                        <th className="w120">건수</th>
                                        <th className="w120">비율</th>
                                    </tr>
                                </TableTh>
                                <TableTd>
                                    <td className="tac" colSpan="5">
                                        <p className="fc_black30">통계정보가 없습니다.</p>
                                    </td>
                                </TableTd>
                            </TableComponent>
                        </div>
                    </div>
                </div>
            </main>
        {/* </OverlayScrollbarsComponent> */}
    </div>    
  );
};

export default TemplateDashboardOne;
