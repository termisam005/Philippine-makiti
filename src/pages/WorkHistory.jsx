import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import MainLayout from "../components/layouts/MainLayout";
import Button from "../components/atom/Button";
import ImgComponent from "../components/common/ImgComponent";
import MenuTab from "../components/atom/MenuTab";
import SelectBoxComponent from "../components/molecule/SelectBoxComponent";
import BottomLine from "../components/atom/BottomLine";
import Input from "../components/atom/Input";
import DatepickerLine from "../components/atom/DatepickerLine";

import 'tui-grid/dist/tui-grid.css';
import Grid from '@toast-ui/react-grid';


const WorkHistory = () => {

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
        <MainLayout>

            <div className="wrap_tabline">
                    <div className="tabline">
                        <Button type="button" className={'btn_tab home'}>
                            <ImgComponent className={'w16'} src={'home_fff_16.svg'} />
                        </Button>
                        <MenuTab tabClass={'btn_tab on'} title={'Work History'} />
                        <MenuTab tabClass={'btn_tab'} title={'Abnormal Transaction History'} />
                        <MenuTab tabClass={'btn_tab'} title={'Fare Information'} />
                        <MenuTab tabClass={'btn_tab'} title={'Lower Transmission/Reception History'} />
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
                                <li className="depth">Transaction Performance</li>
                                <li><ImgComponent src={'arrow_right2_bk_16.svg'} /></li>
                                <li className="depth">Work History</li>
                            </ul>
                            <div className="big_title_line gap_12">
                                <h1 className="big_title">
                                    Work History
                                </h1>
                                <p className="big_mark">
                                    <ImgComponent className={'w20'} src={'big_bookmark_20.svg'} />
                                </p>
                                <div className="dflx_ac gap_8 m-l-a m-t-a">
                                    <span className="fs_12 fc_black100">Search Time: 01/08/2024, 08:33:39</span>
                                </div>
                            </div>
                        </article>

                        <section className={"cont_content"}>
                            <div className="gray_box m-t-2">
                                <div className="dflx_ac gap_20">
                                    <div className="dflx_ac gap_8">
                                        <p className="forms_word">Work Date</p>
                                        <div className="dflx_ac gap_8 flex1">
                                            <DatepickerLine wrapClass="put_zone date_icon" inputClass="wrput line white datepicker" inputDate="2023/06/01"/>
                                        </div>
                                    </div>
                                    <div className="dflx_ac gap_8">
                                        <p className="forms_word w100">Start Time of Operation</p>
                                        <div className="dflx_ac gap_4">
                                            <Input type={"text"} className={"wrput line medium tac w80"} value={"00:00"} />
                                            <span className="fs_14_medium fc_black100">~</span>
                                            <Input type={"text"} className={"wrput line medium tac w80"} value={"00:00"} />
                                        </div>
                                    </div>
                                    <div className="dflx_ac gap_8">
                                        <p className="forms_word">Bus type</p>
                                        <SelectBoxComponent selectClass={"line medium flex1"} value={'All'}>
                                            <p className="option">Operating</p>
                                            <p className="option">Transport</p>
                                            <p className="option">Administrator</p>
                                        </SelectBoxComponent>
                                    </div>
                                    <div className="dflx_ac gap_8">
                                        <p className="forms_word">Route No</p>
                                        <SelectBoxComponent selectClass={"line medium flex1"} value={'All'}>
                                            <p className="option">Operating</p>
                                            <p className="option">Transport</p>
                                            <p className="option">Administrator</p>
                                        </SelectBoxComponent>
                                    </div>
                                    <div className="dflx_ac gap_8">
                                        <p className="forms_word">Transport company</p>
                                        <SelectBoxComponent selectClass={"line medium flex1"} value={'All'}>
                                            <p className="option">Operating</p>
                                            <p className="option">Transport</p>
                                            <p className="option">Administrator</p>
                                        </SelectBoxComponent>
                                    </div>
                                    <div className="dflx_ac gap_8">
                                        <p className="forms_word">Operation status</p>
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
                                    //data={data}
                                    columns={columns}
                                    headerHeight={40}
                                    //bodyHeight={'fitToParent'}
                                    bodyHeight={435}
                                    rowHeaders={["rowNum"]}
                                    rowHeight={25}
                                    selectionUnit={"row"}
                                    heightResizable={false}
                                    pageOptions={{ perPage: 100, useClient: true }}
                                />
                            </div>
                            {/* header 높이, bodyHeight 참고 */}
                        </section>
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

        </MainLayout>
    );
};

export default WorkHistory;
