import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import HeaderNav from "../components/header/HeaderNav";
import Header from "../components/header/Header";
import HeaderLeft from "../components/header/HeaderLeft";
import HeaderLogo from "../components/header/HeaderLogo";
import HeaderLeftMenu from "../components/header/HeaderLeftMenu";
import HeaderMember from "../components/header/HeaderMember";
import HeaderRight from "../components/header/HeaderRight";
import SideMenus from "../components/layouts/SideMenus";
import Content from "../components/atom/Content";
import Button from "../components/atom/Button";
import ImgComponent from "../components/common/ImgComponent";
import MenuTab from "../components/atom/MenuTab";
import Footer from "../components/footer/Footer";
import FooterLeft from "../components/footer/FooterLeft";
import FooterRight from "../components/footer/FooterRight";
import BookMarker from "../components/menu/BookMarker";
import SideMenuDepth from "../components/layouts/SideMenuDepth";
import SelectBoxComponent from "../components/molecule/SelectBoxComponent";
import DatepickerLine from "../components/atom/DatepickerLine";
import BottomLine from "../components/atom/BottomLine";
import 'tui-grid/dist/tui-grid.css';
import Grid from '@toast-ui/react-grid';


const CommonLayout2 = () => {

    const navigator = useNavigate();

    // 사이드메뉴 않보이기
    const [sideMenu, sideMenuToggle] = useState(false);
    const ToggleSideMenu = () => {
        sideMenuToggle(!sideMenu);
    }

    // my menu 토글
    const [myMenu, setMyMenu] = useState(false);
    const toggleMyMenu = () => {
        setMyMenu(!myMenu);
    }

    // side menu 펼치기
    const [sideDepth, setSideDepth] = useState(false);
    const toggleMenuDepth = () => {
        setSideDepth(!sideDepth);
    }

    useEffect(()=>{
        // btn_tab 탭
        const buttonTab = document.querySelectorAll('.btn_tab');
        buttonTab.forEach((button) => {
            button.addEventListener('click', function(){
                buttonTab.forEach(function(btn) {
                    btn.classList.remove('on');
                });
                this.classList.add('on');
            })
        })
        // side_menu 탭
        const asideMenu = document.querySelectorAll('.side_menu');
        asideMenu.forEach((sideTab) => {
            sideTab.addEventListener('click', function(){
                asideMenu.forEach(function(menu) {
                    menu.classList.remove('on');
                });
                this.classList.add('on');
            })
        })
        // side_menu_in 탭
        const asideMenuIn = document.querySelectorAll('.side_menu_in');
        asideMenuIn.forEach((sideTab) => {
            sideTab.addEventListener('click', function(){
                asideMenuIn.forEach(function(menu) {
                    menu.classList.remove('on');
                });
                this.classList.add('on');
            })
        })
    });

    // content 탭
    const [contentTab, setContentTab] = useState(1);
    const tabContent = (index) => {
        setContentTab(index);
    }

    // grid data
    const columns = [
        {   name: "BusType", 
            header: "Bus Type" 
        },
        {   name: "BasicFare", 
            header: "Basic Fare(PHP)" 
        },
        {   name: "BasicDistance", 
            header: "Basic Distance(m)" 
        },
        {   name: "AdditionalFare", 
            header: "Additional Fare(PHP)" 
        },
    ];
    const data = [
        {   id: 1, 
            BusType: "Row", 
            BasicFare: "Row",
            BasicDistance: "Row",
            AdditionalFare: "Row", 
        },
        {   id: 2, 
            BusType: "Row", 
            BasicFare: "Row",
            BasicDistance: "Row",
            AdditionalFare: "Row", 
        },
        {   id: 3, 
            BusType: "Row", 
            BasicFare: "Row",
            BasicDistance: "Row",
            AdditionalFare: "Row", 
        },
        {   id: 4, 
            BusType: "Row", 
            BasicFare: "Row",
            BasicDistance: "Row",
            AdditionalFare: "Row", 
        },
    ];

    return (
        <div className="wrap">

            <Header headerClass="posrel">                                        
                <HeaderLeft>
                    <HeaderLeftMenu clickParams={ToggleSideMenu}></HeaderLeftMenu>
                    <HeaderLogo src='logo_makati.png'></HeaderLogo>
                </HeaderLeft>
                <HeaderNav>
                    <li>
                        <Link onClick={""} className="on" to="#none">Transaction Performance</Link>
                    </li>
                    <li>
                        <Link onClick={""} to="#none">Operation Information</Link>
                    </li>
                    <li>
                        <Link onClick={""} to="#none">Transmission/Reception</Link>
                    </li>
                    <li>
                        <Link onClick={""} to="#none">Settlement</Link>
                    </li>
                    <li>
                        <Link onClick={""} to="#none">System</Link>
                    </li>
                </HeaderNav>
                <HeaderRight>
                    <HeaderMember></HeaderMember>
                </HeaderRight>                            
            </Header>

            <SideMenus className={sideMenu ? "sidebar_menu hide" : "sidebar_menu"}>
                <div className="my_menu">
                    <span className="menu_title">Menu</span>
                    <Button type={'button'} onClick={toggleMyMenu} className={myMenu? 'btn_my_menu on' : 'btn_my_menu'}>
                        <ImgComponent className={'img_bookmark'} src={'my_bookmark_16.svg'} />
                        <span className="fs_12_medium word">My menu</span>
                    </Button>
                </div>
                <div className="side_menu_bar">
                    <ul>
                        <li>
                            <div onClick={toggleMenuDepth} className={sideDepth? "side_menu on" : "side_menu"}>
                                <span className="menu_title">Revenue History Statistics</span>
                                <ImgComponent className={'img_arrow'} src={'arrow_down_bk_16.svg'} />
                            </div>
                            <ul className={sideDepth? "side_depth2 on" : "side_depth2"}>
                                <li>
                                    <div className="side_menu_in">
                                        <span className="menu_title">Average Revenue by Transport Company</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="side_menu_in">
                                        <span className="menu_title">Cumulative Fare by Route</span>
                                        <BookMarker className={'btn_bookmark'} />
                                    </div>
                                </li>
                                <li>
                                    <div className="side_menu_in">
                                        <span className="menu_title">Fare Increase Rate by Route</span>
                                        <BookMarker className={'btn_bookmark'} />
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <SideMenuDepth menuTitle={'Revenue History Statistics'}>
                            <li>
                                <div className="side_menu_in">
                                    <span className="menu_title">Cumulative Fare by Route</span>
                                </div>
                            </li>
                            <li>
                                <div className="side_menu_in">
                                    <span className="menu_title">Fare Increase Rate by Route</span>
                                    <BookMarker className={'btn_bookmark'} />
                                </div>
                            </li>
                        </SideMenuDepth>
                    </ul>
                </div>
            </SideMenus>

            <Content className={sideMenu ? 'content_left_none bottom100' : 'content_left'}>
                <div className="wrap_tabline">
                    <div className="tabline">
                        <Button type="button" className={'btn_tab home'} onClick={() => navigator('/dashboard1')}>
                            <ImgComponent className={'w16'} src={'home_fff_16.svg'} />
                        </Button>
                        <MenuTab tabClass={'btn_tab on'} title={'Payment Transaction History'} />
                        <MenuTab tabClass={'btn_tab'} title={'Work History'} />
                        <MenuTab tabClass={'btn_tab'} title={'Abnormal Transaction History'} />
                        <MenuTab tabClass={'btn_tab'} title={'Fare Information'} />
                        <MenuTab tabClass={'btn_tab'} title={'Lower Transmission/Reception History'} />
                        <MenuTab tabClass={'btn_tab'} title={'Fare Information'} />
                        <MenuTab tabClass={'btn_tab'} title={'Fare Information'} />
                        <MenuTab tabClass={'btn_tab'} title={'Fare Information'} />
                    </div>
                    <Button type="button" className="btn_tab_del">
                        <ImgComponent className={'m-t-2'} src={'close_round_bk_16.svg'} />
                    </Button>
                </div>

                <div className="main_dashboard">
                    <div className="with_colline">
                        <article className="m-b-12">
                            <ul className="depth_line">
                                <li className="depth">Depth 1</li>
                                <li><ImgComponent src={'arrow_right2_bk_16.svg'} /></li>
                                <li className="depth">Depth 2</li>
                                <li><ImgComponent src={'arrow_right2_bk_16.svg'} /></li>
                                <li className="depth">Depth 3</li>
                            </ul>
                            <div className="big_title_line gap_12">
                                <h1 className="big_title">Page title</h1>
                                <p className="big_mark">
                                    <ImgComponent className={'w20'} src={'big_bookmark_20.svg'} />
                                </p>
                            </div>
                        </article>

                        <section className="cont_tabline">
                            <div className="dflx_ac">
                                <Button onClick={()=>tabContent(1)} className={contentTab === 1? 'cont_tab_button on':'cont_tab_button'}>Default</Button>
                                <Button onClick={()=>tabContent(2)} className={contentTab === 2? 'cont_tab_button on':'cont_tab_button'}>Default</Button>
                                <Button onClick={()=>tabContent(3)} className={contentTab === 3? 'cont_tab_button on':'cont_tab_button'}>Default</Button>
                                <Button onClick={()=>tabContent(4)} className={contentTab === 4? 'cont_tab_button on':'cont_tab_button'}>Default</Button>
                            </div>
                            <div className="dflx_ac gap_8">
                                <span className="fs_12 fc_black100">Search Time: 01/08/2024, 08:33:39</span>
                                <p className="mark_question">
                                    <ImgComponent className={'w20'} src={'help_fill_bk_16.svg'} />
                                </p>
                            </div>
                        </section>

                        <section className={contentTab === 1? "cont_content":"cont_content hide"}>
                            <div className="gray_box m-t-2">
                                <div className="dflx_ac_jbet gap_40">
                                    <div className="dflx_ac gap_16 w-75">
                                        <p className="forms_word">Date Type</p>
                                        <div className="dflx_ac gap_8 flex1">
                                            <SelectBoxComponent selectClass={"line medium maxw_none flex1"} value={'Period'}>
                                                <p className="option">Operating</p>
                                                <p className="option">Transport</p>
                                                <p className="option">Administrator</p>
                                            </SelectBoxComponent>
                                            <span className="pipe"></span>
                                            <div className="dflx_ac gap_4 flex2">
                                                <DatepickerLine wrapClass="put_zone date_icon maxw_none" inputClass="wrput line white datepicker" inputDate="2023/06/01"/>
                                                <span className="fs_14_medium fc_black100">~</span>
                                                <DatepickerLine wrapClass="put_zone date_icon maxw_none" inputClass="wrput line white datepicker" inputDate="2023/06/01"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dflx_ac gap_16 w-25">
                                        <p className="forms_word">Route No.</p>
                                        <SelectBoxComponent selectClass={"line medium maxw_none flex1"} value={'All'}>
                                            <p className="option">Operating</p>
                                            <p className="option">Transport</p>
                                            <p className="option">Administrator</p>
                                        </SelectBoxComponent>
                                    </div>
                                </div>
                                <div className="gray_bottom m-t-12">
                                    <div className="dflx_jend">
                                        <Button type={'button'} className={'btn_primary search btn_32'}>
                                            Search
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="grid_type1">
                                <Grid
                                    data={data}
                                    columns={columns}
                                    rowHeight={25}
                                    bodyHeight={"auto"}
                                    selectionUnit={"row"}
                                    heightResizable={false}
                                    scrollX={false}
                                    scrollY={false}
                                    editable={true}
                                    rowHeaders={["rowNum"]}
                                />
                            </div>
                            <div className="gray_box02 p-20 h292">
                                <div className="cont_top">
                                    <h3 className="cont_title">Title</h3>
                                    <div></div>
                                </div>
                                <div className="cont_body">
                                    <ImgComponent className={'w-100'} src={'chart_ex01.png'} />
                                </div>
                            </div>
                        </section>

                        <section className={contentTab === 2? "cont_content":"cont_content hide"}></section>
                        <section className={contentTab === 3? "cont_content":"cont_content hide"}></section>
                        <section className={contentTab === 4? "cont_content":"cont_content hide"}></section>
                    </div>

                    <BottomLine className={'bottom_btnline'}>
                        <div className="dflx_ac gap_12"></div>
                        <div className="dflx_ac gap_12">
                            <Button type={'button'} className={'btn_primary bottom btn_m'}>
                                <ImgComponent className={'m-r-10'} src={'plus_line_wh_16.svg'} />
                                <span className="bottom_word">Add</span>
                            </Button>
                            <Button type={'button'} className={'btn_primary bottom btn_m'}>
                                <ImgComponent className={'m-r-10'} src={'save_wh_16.svg'} />
                                <span className="bottom_word">Save</span>
                            </Button>
                            <Button type={'button'} className={'btn_primary bottom btn_m'}>
                                <ImgComponent className={'m-r-8'} src={'trash_wh_16.svg'} />
                                <span className="bottom_word">Delete</span>
                            </Button>
                            <Button type={'button'} className={'btn_primary bottom btn_m'}>
                                <ImgComponent className={'m-r-8'} src={'download_wh_16.svg'} />
                                <span className="bottom_word">Excel</span>
                            </Button>
                        </div>
                    </BottomLine>
                </div>
            </Content>

            <Footer footerClass={"footer_box w-100 bg_white"}>
                <FooterLeft className={'dflx_ac gap_20'}>
                    <ImgComponent src={"logo_gray_80.svg"} />
                    <span className={"fc_black60 fs_11"}>
                        Copyright @ 2024 UI Networks
                    </span>
                </FooterLeft>
                <FooterRight className={"dflx_ac gap_20"}>
                    <div className="footer_member">
                        <span className="profile20"></span>
                        <span className="fs_11 fc_black40">Robert(rbt1234)</span>
                    </div>
                    <div className="footer_member">
                        <span className="admin18"></span>
                        <span className="fs_11 fc_black40">Administrator</span>
                    </div>
                </FooterRight>
            </Footer>

        </div>
    );
};

export default CommonLayout2;
