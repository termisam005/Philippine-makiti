import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Button from "../components/atom/Button";
import ImgComponent from "../components/common/ImgComponent";
import MenuTab from "../components/atom/MenuTab";
import SelectBoxComponent from "../components/molecule/SelectBoxComponent";
import DatepickerLine from "../components/atom/DatepickerLine";
import BottomLine from "../components/atom/BottomLine";
import MainLayout from "../components/layouts/MainLayout";
import HelpboxComponent from "../components/molecule/HelpboxComponent";

import 'tui-grid/dist/tui-grid.css';
import Grid from '@toast-ui/react-grid';


// grid data
const columns = [
    {   name: "ClaimDate", 
        header: "Claim Date" 
    },
    {   name: "TransportCompany", 
        header: "Transport Company" 
    },
    {   name: "CardCompany", 
        header: "Card Company" 
    },
    {   name: "ClaimsCount", 
        header: "Claims Count"
    },
    {   name: "ClaimAmount", 
        header: "Claim Amount(PHP)"
    },
];
const data = [
    {   id: 1, 
        ClaimDate: "Row", 
        TransportCompany: "Row",
        CardCompany: "Row",
        ClaimsCount: "Row", 
        ClaimAmount: "Row", 
    },
    {   id: 2, 
        ClaimDate: "Row", 
        TransportCompany: "Row",
        CardCompany: "Row",
        ClaimsCount: "Row", 
        ClaimAmount: "Row", 
    },
];
const columns2 = [
    {   name: "SettlementDate", 
        header: "Settlement Date" 
    },
    {   name: "TransportCompany", 
        header: "Transport Company" 
    },
    {   name: "CardCompany", 
        header: "Card Company" 
    },
    {   name: "SettlementCount", 
        header: "Settlement Count" 
    },
    {   name: "TransportCompany1", 
        header: "Transport Company" 
    },
    {   name: "CardCompany1", 
        header: "Card Company" 
    },
    {   name: "SettlementCount1", 
        header: "Settlement Count" 
    },
];
const data2 = [
    {   id: 1, 
        SettlementDate: "Row", 
        TransportCompany: "Row",
        CardCompany: "Row",
        SettlementCount: "Row", 
        TransportCompany1: "Row",
        CardCompany1: "Row",
        SettlementCount1: "Row", 
    },
    {   id: 1, 
        SettlementDate: "Row", 
        TransportCompany: "Row",
        CardCompany: "Row",
        SettlementCount: "Row", 
        TransportCompany1: "Row",
        CardCompany1: "Row",
        SettlementCount1: "Row", 
    },
];
const settTrans = {
    height:52,
};

const SettlementResults = () => {

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
                            <li className="depth">Settlement Results by Transport Company</li>
                        </ul>
                        <div className="dflx_ac_jbet">
                            <div className="big_title_line gap_12">
                                <h1 className="big_title">
                                    Settlement Results by Transport Company
                                </h1>
                                <p className="big_mark">
                                    <ImgComponent className={'w20'} src={'big_bookmark_20.svg'} />
                                </p>
                            </div>
                            <div className="dflx_ac gap_8 m-l-a m-t-a">
                                <span className="fs_12 fc_black100">Search Time: 01/08/2024, 08:33:39</span>
                                <HelpboxComponent 
                                    title={'View Settlement Results Information When Selecting Claim Information on the Left'} 
                                    cont_title1={'1. Select a Row in the Claim Information Grid on the Left'} 
                                    cont_title2={'2. View Settlement Results Information'} 
                                    cont1={'The Claim Information Grid on the left displays a list of claims by date or month, transport company, and card company, including the number of claims and the amounts. Select a row from this list.'} 
                                    cont2={'When a row is selected in the Claim Information Grid on the left, the settlement results information for the selected row will be automatically displayed in the Grid on the right. The Settlement Results Information Grid on the right shows the settlement results information related to the claim month, transport company, and card company of the selected row from the left.'}
                                />
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

                        <div className="settlement_line flex1">
                            <section className={"cont_content"}>
                                <h5 className="settle_tlt">Table Title</h5>
                                <div className="grid_type1 flex1 bd_grid1">
                                    <Grid
                                        data={data}
                                        columns={columns}
                                        header={settTrans}
                                        bodyHeight={"fitToParent"}
                                        selectionUnit={"row"}
                                        heightResizable={false}
                                        scrollX={true}
                                        scrollY={false}
                                        editable={true}
                                        rowHeaders={["rowNum"]}
                                    />
                                </div>
                            </section>
                            <div className="dflx_ac_jcent h-100">
                                <Button type="button" className={'btn_rd_arrow32'}>
                                    <ImgComponent className={'w20'} src={'arrow_bold_down_fff_20.svg'} />
                                </Button>
                            </div>
                            <section className={"cont_content"}>
                                <h5 className="settle_tlt">Table Title</h5>
                                <div className="grid_type1 flex1 bd_grid1">
                                    <Grid
                                        data={data2}
                                        columns={columns2}
                                        header={settTrans}
                                        bodyHeight={"fitToParent"}
                                        selectionUnit={"row"}
                                        heightResizable={false}
                                        scrollX={true}
                                        scrollY={false}
                                        editable={true}
                                        rowHeaders={["rowNum"]}
                                    />
                                </div>
                            </section>
                        </div>
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

export default SettlementResults;
