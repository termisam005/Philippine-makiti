import React from "react";
import { useState, useEffect } from "react";
import Content from "../components/atom/Content.jsx";
import Button from "../components/atom/Button.jsx";
import ImgComponent from "../components/common/ImgComponent.jsx";
import MenuTab from "../components/atom/MenuTab.jsx";
import Footer from "../components/footer/Footer.jsx";
import FooterLeft from "../components/footer/FooterLeft.jsx";
import FooterRight from "../components/footer/FooterRight.jsx";
import SelectBoxComponent from "../components/molecule/SelectBoxComponent.jsx";
import DatepickerLine from "../components/atom/DatepickerLine.jsx";
import BottomLine from "../components/atom/BottomLine.jsx";
import MainLayout from "../components/layouts/MainLayout.jsx";

import 'tui-grid/dist/tui-grid.css';
import Grid from '@toast-ui/react-grid';
import {averageTrans, averageColumns, averagedata} from "../components/data/column.js";


const AverageRevenue = () => {

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
    });

    return (
        <MainLayout>

            <Content>
                <div className="wrap_tabline">
                    <div className="tabline">
                        <Button type="button" className={'btn_tab home'}>
                            <ImgComponent className={'w16'} src={'home_fff_16.svg'} />
                        </Button>
                        <MenuTab tabClass={'btn_tab'} title={'Payment Transaction History'} />
                        <MenuTab tabClass={'btn_tab'} title={'Work History'} />
                        <MenuTab tabClass={'btn_tab'} title={'Abnormal Transaction History'} />
                        <MenuTab tabClass={'btn_tab'} title={'Fare Information'} />
                        <MenuTab tabClass={'btn_tab'} title={'Lower Transmission/Reception History'} />
                        <MenuTab tabClass={'btn_tab'} title={'Fare Information'} />
                        <MenuTab tabClass={'btn_tab'} title={'Fare Information'} />
                        <MenuTab tabClass={'btn_tab on'} title={'Collection Summary by Vehicle'} />
                    </div>
                    <Button type="button" className="btn_tab_del">
                        <ImgComponent className={'m-t-2'} src={'close_round_bk_16.svg'} />
                    </Button>
                </div>

                <div className="main_dashboard">
                    <div className="with_colline">
                        <article className="m-b-12">
                            <ul className="depth_line">
                                <li className="depth">Settlement</li>
                                <li><ImgComponent src={'arrow_right2_bk_16.svg'} /></li>
                                <li className="depth">Revenue History Statistics</li>
                                <li><ImgComponent src={'arrow_right2_bk_16.svg'} /></li>
                                <li className="depth">Average Revenue by Transport Company</li>
                            </ul>
                            <div className="cont_tabline">
                                <div className="big_title_line gap_12">
                                    <h1 className="big_title">
                                        Average Revenue by Transport Company
                                    </h1>
                                    <p className="big_mark">
                                        <ImgComponent className={'w20'} src={'big_bookmark_20.svg'} />
                                    </p>
                                </div>
                                <div className="dflx_ac gap_8 m-l-a m-t-a">
                                    <span className="fs_12 fc_black100">Search Time: 01/08/2024, 08:33:39</span>
                                </div>
                            </div>
                        </article>

                        <section className={"cont_content"}>
                            <div className="gray_box m-t-2">
                                <div className="dflx_ac_jbet gap_40">
                                    <div className="dflx_ac gap_16 w-70">
                                        <p className="forms_word">Date Type</p>
                                        <div className="dflx_ac gap_8 flex1">
                                            <SelectBoxComponent selectClass={"line medium flex1"} value={'Period'}>
                                                <p className="option">Operating</p>
                                                <p className="option">Transport</p>
                                                <p className="option">Administrator</p>
                                            </SelectBoxComponent>
                                            <span className="pipe"></span>
                                            <div className="dflx_ac gap_4 flex2">
                                                <DatepickerLine wrapClass="put_zone date_icon" inputClass="wrput line white datepicker" inputDate="2023/06/01"/>
                                                <span className="fs_14_medium fc_black100">~</span>
                                                <DatepickerLine wrapClass="put_zone date_icon" inputClass="wrput line white datepicker" inputDate="2023/06/01"/>
                                            </div>
                                            <SelectBoxComponent selectClass={"line medium flex1"} value={'Day Type'}>
                                                <p className="option">Day Type</p>
                                                <p className="option">Month Type</p>
                                                <p className="option">Year Type</p>
                                            </SelectBoxComponent>
                                        </div>
                                    </div>
                                    <div className="dflx_ac gap_16 w-25">
                                        <p className="forms_word">Transprot Company</p>
                                        <SelectBoxComponent selectClass={"line medium flex1"} value={'All'}>
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
                            
                            <div className="grid_type1 flex1">
                                <Grid
                                    data={averagedata}
                                    columns={averageColumns}
                                    header={averageTrans}
                                    bodyHeight={'fitToParent'}
                                    rowHeaders={["rowNum"]}
                                />
                            </div>
                            {/* Grid 컬러, header 높이, bodyHeight 높이꽉참 참고 */}
                            <div className="dflx gap_8">
                                <div className="amount_box">
                                    <h5 className="edit_tlt lh_20">Total Income(PHP)</h5>
                                    <div className="average_info_line m-b-4">
                                        <div className="tal">
                                            <p className="fs_14 fc_black100"></p>
                                        </div>
                                        <div className="tac">
                                            <p className="fs_14 fc_black100">Amount (PHP)</p>
                                        </div>
                                        <div className="tac">
                                            <p className="fs_14 fc_black100">Count</p>
                                        </div>
                                    </div>
                                    <div className="average_info_line white">
                                        <div className="tal">
                                            <p className="fs_14 fc_black100">Total</p>
                                        </div>
                                        <div className="tac">
                                            <p className="fs_14_bold fc_black100">76200</p>
                                        </div>
                                        <div className="tac">
                                            <p className="fs_14_bold fc_black100">113</p>
                                        </div>
                                    </div>
                                    <div className="average_info_line white m-t-4">
                                        <div className="tal">
                                            <p className="fs_14 fc_black100">Average</p>
                                        </div>
                                        <div className="tac">
                                            <p className="fs_14_bold fc_black100">19050</p>
                                        </div>
                                        <div className="tac">
                                            <p className="fs_14_bold fc_black100">2825</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="amount_box">
                                    <h5 className="edit_tlt lh_20">Makati Zen</h5>
                                    <div className="average_info_line m-b-4">
                                        <div className="tal">
                                            <p className="fs_14 fc_black100"></p>
                                        </div>
                                        <div className="tac">
                                            <p className="fs_14 fc_black100">Amount (PHP)</p>
                                        </div>
                                        <div className="tac">
                                            <p className="fs_14 fc_black100">Count</p>
                                        </div>
                                    </div>
                                    <div className="average_info_line white">
                                        <div className="tal">
                                            <p className="fs_14 fc_black100">Total</p>
                                        </div>
                                        <div className="tac">
                                            <p className="fs_14_bold fc_black100">76200</p>
                                        </div>
                                        <div className="tac">
                                            <p className="fs_14_bold fc_black100">113</p>
                                        </div>
                                    </div>
                                    <div className="average_info_line white m-t-4">
                                        <div className="tal">
                                            <p className="fs_14 fc_black100">Average</p>
                                        </div>
                                        <div className="tac">
                                            <p className="fs_14_bold fc_black100">19050</p>
                                        </div>
                                        <div className="tac">
                                            <p className="fs_14_bold fc_black100">2825</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="amount_box">
                                    <h5 className="edit_tlt lh_20">Beep Card</h5>
                                    <div className="average_info_line m-b-4">
                                        <div className="tal">
                                            <p className="fs_14 fc_black100"></p>
                                        </div>
                                        <div className="tac">
                                            <p className="fs_14 fc_black100">Amount (PHP)</p>
                                        </div>
                                        <div className="tac">
                                            <p className="fs_14 fc_black100">Count</p>
                                        </div>
                                    </div>
                                    <div className="average_info_line white">
                                        <div className="tal">
                                            <p className="fs_14 fc_black100">Total</p>
                                        </div>
                                        <div className="tac">
                                            <p className="fs_14_bold fc_black100">76200</p>
                                        </div>
                                        <div className="tac">
                                            <p className="fs_14_bold fc_black100">113</p>
                                        </div>
                                    </div>
                                    <div className="average_info_line white m-t-4">
                                        <div className="tal">
                                            <p className="fs_14 fc_black100">Average</p>
                                        </div>
                                        <div className="tac">
                                            <p className="fs_14_bold fc_black100">19050</p>
                                        </div>
                                        <div className="tac">
                                            <p className="fs_14_bold fc_black100">2825</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <BottomLine className={'bottom_btnline'}>
                        <div className="dflx_ac gap_12"></div>
                        <div className="dflx_ac gap_12">
                        <Button type={'button'} className={'btn_primary bottom btn_m disabled'} disabled={true}>
                            <ImgComponent className={'m-r-10 op02'} src={'plus_line_bk_16.svg'} />
                            <span className="bottom_word">Add</span>
                        </Button>
                        <Button type={'button'} className={'btn_primary bottom btn_m disabled'} disabled={true}>
                            <ImgComponent className={'m-r-10 op02'} src={'save_bk_16.svg'} />
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

        </MainLayout>
    );
};

export default AverageRevenue;
