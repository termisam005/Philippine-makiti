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
import InputMdLineComponent from "../components/inputfield/InputMdLineComponent";
import ImgComponent from "../components/common/ImgComponent";
import TableComponent from "../components/common/TableComponent";
import TableTh from "../components/common/TableTh";
import TableTd from "../components/common/TableTd";
import Paging10Component from "../components/common/Paging10Component";

import SideMenu from "../components/menu/SideMenu";

import SelectBoxClear from "../components/select/SelectBoxClear";

// import 'overlayscrollbars/overlayscrollbars.css';
// import  {  OverlayScrollbarsComponent  }  from  "overlayscrollbars-react" ;

const TemplateTable = () => {
    
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
                    <h1>답변관리</h1>
                    <Link to="#" className="btn_primary btn_32 w140" type="button">등록하기</Link>
                </div>
                <div className="dashboard_box">
                    <div className="bg_white p-20">
                        <div className="dflx_ac m-b-20">
                            <p className="fs_bold">목록(999)</p>
                            <div className="m-l-a dflx gap_8">
                                <ButtonWithComponent className={'btn_primary gray btn_32 gap_8'}>
                                    <ImgComponent src={'download_bk_16.svg'} alt={''} />
                                    <span>엑셀 다운로드</span>
                                </ButtonWithComponent>
                                <ButtonWithComponent className={'btn_primary gray btn_32 gap_8'}>
                                    <ImgComponent src={'trash_bk_16.svg'} alt={''} />
                                    <span>삭제</span>
                                </ButtonWithComponent>
                                <div>
                                    <InputMdLineComponent zoneClass={'put_zone w260'} type={'text'} placeholder={'placeholder'} />
                                </div>
                                <ButtonComponent className="btn_primary btn_32 disabled" type="button" txt="검색"></ButtonComponent>
                            </div>
                        </div>
                        <TableComponent tableClass="table_box">                     
                            <TableTh>
                                <tr>
                                    <th className="w42">
                                        <CheckComponent checkClass="checkbox_type simply_one" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckComponent>
                                    </th>
                                    <th className="w160">
                                        <div className="dflx_ac_jcent gap_8">
                                            <p>수정 일자</p>
                                            <ButtonWithComponent>
                                                <ImgComponent src="array_fill_bk_16.svg" alt="" />
                                            </ButtonWithComponent>
                                        </div>
                                    </th>
                                    <th className="w172">
                                        스킬명
                                    </th>
                                    <th className="w136">
                                        스킬코드
                                    </th>
                                    <th className="w300">
                                        <SelectBoxClear selectClass="selectbox_text large text" txt="답변 레벨"></SelectBoxClear>
                                    </th>
                                    <th className="w136">
                                        응답타입 1
                                    </th>
                                    <th className="w136">
                                        응답타입 2
                                    </th>
                                    <th className="w136">
                                        응답타입 3
                                    </th>
                                    <th className="w136">
                                        수정/삭제
                                    </th>
                                </tr>
                            </TableTh>
                            <TableTd>
                                <td className="tac">
                                    <CheckComponent checkClass="checkbox_type simply_one" type="checkbox" name="checkbox_list" checkId="table_check02" labelClass="fs_14"></CheckComponent>
                                </td>
                                <td className="tac">2021-12-10. 13:16:28</td>
                                <td className=""><p className="fc_blue">GY03 설문 3</p></td>
                                <td className="">GY01-03</td>
                                <td className="">기타 &gt; 미리보기테스트</td>
                                <td className="">-</td>
                                <td className="">-</td>
                                <td className="">-</td>
                                <td className="tac">
                                    <div className="dflx_jcent gap_4">
                                        <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="수정"></ButtonComponent>
                                        <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="삭제"></ButtonComponent>
                                    </div>
                                </td>
                            </TableTd>
                            <TableTd>
                                <td className="tac">
                                    <CheckComponent checkClass="checkbox_type simply_one" type="checkbox" name="checkbox_list" checkId="table_check03" labelClass="fs_14"></CheckComponent>
                                </td>
                                <td className="tac">2021-12-10. 13:16:28</td>
                                <td className=""><p className="fc_blue">B02-04 대출정보 조회</p></td>
                                <td className="">GY01-03</td>
                                <td className="">기타 &gt; 사후관리 &gt; 대출정보조회</td>
                                <td className="">카드형</td>
                                <td className="">-</td>
                                <td className="">-</td>
                                <td className="tac">
                                    <div className="dflx_jcent gap_4">
                                        <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="수정"></ButtonComponent>
                                        <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="삭제"></ButtonComponent>
                                    </div>
                                </td>
                            </TableTd>
                            <TableTd>
                                <td className="tac">
                                    <CheckComponent checkClass="checkbox_type simply_one" type="checkbox" name="checkbox_list" checkId="table_check04" labelClass="fs_14"></CheckComponent>
                                </td>
                                <td className="tac">2021-12-10. 13:16:28</td>
                                <td className=""><p className="fc_blue">S03-02 보금자리론</p></td>
                                <td className="">GY01-03</td>
                                <td className="">-</td>
                                <td className="">리스트형</td>
                                <td className="">리스트형</td>
                                <td className="">-</td>
                                <td className="tac">
                                    <div className="dflx_jcent gap_4">
                                        <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="수정"></ButtonComponent>
                                        <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="삭제"></ButtonComponent>
                                    </div>
                                </td>
                            </TableTd>
                            <TableTd>
                                <td className="tac">
                                    <CheckComponent checkClass="checkbox_type simply_one" type="checkbox" name="checkbox_list" checkId="table_check05" labelClass="fs_14"></CheckComponent>
                                </td>
                                <td className="tac">2021-12-10. 13:16:28</td>
                                <td className=""><p className="fc_blue">S03-01 주택담보대출</p></td>
                                <td className="">GY01-05</td>
                                <td className="">상품문의 &gt; 주택담보대출</td>
                                <td className="">리스트형</td>
                                <td className="">리스트형</td>
                                <td className="">카드형</td>
                                <td className="tac">
                                    <div className="dflx_jcent gap_4">
                                        <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="수정"></ButtonComponent>
                                        <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="삭제"></ButtonComponent>
                                    </div>
                                </td>
                            </TableTd>
                            <TableTd>
                                <td className="tac">
                                    <CheckComponent checkClass="checkbox_type simply_one" type="checkbox" name="checkbox_list" checkId="table_check06" labelClass="fs_14"></CheckComponent>
                                </td>
                                <td className="tac">2021-12-10. 13:16:28</td>
                                <td className=""><p className="fc_blue">S03-01 주택담보대출</p></td>
                                <td className="">GY01-05</td>
                                <td className="">상품문의 &gt; 주택담보대출</td>
                                <td className="">리스트형</td>
                                <td className="">리스트형</td>
                                <td className="">카드형</td>
                                <td className="tac">
                                    <div className="dflx_jcent gap_4">
                                        <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="수정"></ButtonComponent>
                                        <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="삭제"></ButtonComponent>
                                    </div>
                                </td>
                            </TableTd>
                            <TableTd>
                                <td className="tac">
                                    <CheckComponent checkClass="checkbox_type simply_one" type="checkbox" name="checkbox_list" checkId="table_check07" labelClass="fs_14"></CheckComponent>
                                </td>
                                <td className="tac">2021-12-10. 13:16:28</td>
                                <td className=""><p className="fc_blue">S03-01 주택담보대출</p></td>
                                <td className="">GY01-05</td>
                                <td className="">상품문의 &gt; 주택담보대출</td>
                                <td className="">리스트형</td>
                                <td className="">리스트형</td>
                                <td className="">카드형</td>
                                <td className="tac">
                                    <div className="dflx_jcent gap_4">
                                        <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="수정"></ButtonComponent>
                                        <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="삭제"></ButtonComponent>
                                    </div>
                                </td>
                            </TableTd>
                            <TableTd>
                                <td className="tac">
                                    <CheckComponent checkClass="checkbox_type simply_one" type="checkbox" name="checkbox_list" checkId="table_check08" labelClass="fs_14"></CheckComponent>
                                </td>
                                <td className="tac">2021-12-10. 13:16:28</td>
                                <td className=""><p className="fc_blue">S03-01 주택담보대출</p></td>
                                <td className="">GY01-05</td>
                                <td className="">상품문의 &gt; 주택담보대출</td>
                                <td className="">리스트형</td>
                                <td className="">리스트형</td>
                                <td className="">카드형</td>
                                <td className="tac">
                                    <div className="dflx_jcent gap_4">
                                        <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="수정"></ButtonComponent>
                                        <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="삭제"></ButtonComponent>
                                    </div>
                                </td>
                            </TableTd>
                            <TableTd>
                                <td className="tac">
                                    <CheckComponent checkClass="checkbox_type simply_one" type="checkbox" name="checkbox_list" checkId="table_check09" labelClass="fs_14"></CheckComponent>
                                </td>
                                <td className="tac">2021-12-10. 13:16:28</td>
                                <td className=""><p className="fc_blue">S03-01 주택담보대출</p></td>
                                <td className="">GY01-05</td>
                                <td className="">상품문의 &gt; 주택담보대출</td>
                                <td className="">리스트형</td>
                                <td className="">리스트형</td>
                                <td className="">카드형</td>
                                <td className="tac">
                                    <div className="dflx_jcent gap_4">
                                        <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="수정"></ButtonComponent>
                                        <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="삭제"></ButtonComponent>
                                    </div>
                                </td>
                            </TableTd>
                            <TableTd>
                                <td className="tac">
                                    <CheckComponent checkClass="checkbox_type simply_one" type="checkbox" name="checkbox_list" checkId="table_check10" labelClass="fs_14"></CheckComponent>
                                </td>
                                <td className="tac">2021-12-10. 13:16:28</td>
                                <td className=""><p className="fc_blue">S03-01 주택담보대출</p></td>
                                <td className="">GY01-05</td>
                                <td className="">상품문의 &gt; 주택담보대출</td>
                                <td className="">리스트형</td>
                                <td className="">리스트형</td>
                                <td className="">카드형</td>
                                <td className="tac">
                                    <div className="dflx_jcent gap_4">
                                        <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="수정"></ButtonComponent>
                                        <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="삭제"></ButtonComponent>
                                    </div>
                                </td>
                            </TableTd>
                            <TableTd>
                                <td className="tac">
                                    <CheckComponent checkClass="checkbox_type simply_one" type="checkbox" name="checkbox_list" checkId="table_check11" labelClass="fs_14"></CheckComponent>
                                </td>
                                <td className="tac">2021-12-10. 13:16:28</td>
                                <td className=""><p className="fc_blue">S03-01 주택담보대출</p></td>
                                <td className="">GY01-05</td>
                                <td className="">상품문의 &gt; 주택담보대출</td>
                                <td className="">리스트형</td>
                                <td className="">리스트형</td>
                                <td className="">카드형</td>
                                <td className="tac">
                                    <div className="dflx_jcent gap_4">
                                        <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="수정"></ButtonComponent>
                                        <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="삭제"></ButtonComponent>
                                    </div>
                                </td>
                            </TableTd>
                            <TableTd>
                                <td className="tac">
                                    <CheckComponent checkClass="checkbox_type simply_one" type="checkbox" name="checkbox_list" checkId="table_check12" labelClass="fs_14"></CheckComponent>
                                </td>
                                <td className="tac">2021-12-10. 13:16:28</td>
                                <td className=""><p className="fc_blue">S03-01 주택담보대출</p></td>
                                <td className="">GY01-05</td>
                                <td className="">상품문의 &gt; 주택담보대출</td>
                                <td className="">리스트형</td>
                                <td className="">리스트형</td>
                                <td className="">카드형</td>
                                <td className="tac">
                                    <div className="dflx_jcent gap_4">
                                        <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="수정"></ButtonComponent>
                                        <ButtonComponent className="btn_secondary btn_s fs_14_medium" type="button" txt="삭제"></ButtonComponent>
                                    </div>
                                </td>
                            </TableTd>
                        </TableComponent>                        
                        <Paging10Component wrapClass="dflx_ac_jcent gap_8 m-t-20 paging_large"></Paging10Component>
                    </div>
                </div>
            </main>
        {/* </OverlayScrollbarsComponent> */}
    </div>    
  );
};

export default TemplateTable;
