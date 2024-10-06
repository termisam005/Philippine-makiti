import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import MainLayout from "../components/layouts/MainLayout";
import Button from "../components/atom/Button";
import ImgComponent from "../components/common/ImgComponent";
import MenuTab from "../components/atom/MenuTab";
import BottomLine from "../components/atom/BottomLine";
import HelpboxComponent from "../components/molecule/HelpboxComponent";

import 'tui-grid/dist/tui-grid.css';
import Grid from '@toast-ui/react-grid';


const TransferInformation = () => {

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
            header: " Basic Fare(PHP)*" 
        },
        {   name: "BasicDistance", 
            header: "Basic Distance(m)*" 
        },
        {   name: "AdditionalFare", 
            header: "Additional Fare(PHP)*" 
        },
        {   name: "Distance", 
            header: "Additional Distance(m)* " 
        },
    ];
    const data = [
        {   id: 1, 
            BusType: "Row", 
            BasicFare: "Row",
            BasicDistance: "Row",
            AdditionalFare: "Row",
            Distance: "Row",
        },
        {   id: 2, 
            BusType: "Row", 
            BasicFare: "Row",
            BasicDistance: "Row",
            AdditionalFare: "Row",
            Distance: "Row",
        },
        {   id: 3, 
            BusType: "Row", 
            BasicFare: "Row",
            BasicDistance: "Row",
            AdditionalFare: "Row",
            Distance: "Row",
        },
        {   id: 4, 
            BusType: "Row", 
            BasicFare: "Row",
            BasicDistance: "Row",
            AdditionalFare: "Row",
            Distance: "Row",
        },
    ];

    return (
        <MainLayout>

            <div className="wrap_tabline">
                <div className="tabline">
                    <Button type="button" className={'btn_tab home'}>
                        <ImgComponent className={'w16'} src={'home_fff_16.svg'} />
                    </Button>
                    <MenuTab tabClass={'btn_tab on'} title={'Payment Transaction History'} />
                    <MenuTab tabClass={'btn_tab'} title={'Work History'} />
                    <MenuTab tabClass={'btn_tab'} title={'Abnormal Transaction History'} />
                    <MenuTab tabClass={'btn_tab'} title={'Fare Information'} />
                    <MenuTab tabClass={'btn_tab'} title={'Lower Transmission/Reception History'} />
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
                            <li className="depth">Operation Information</li>
                            <li><ImgComponent src={'arrow_right2_bk_16.svg'} /></li>
                            <li className="depth">Transfer Information</li>
                        </ul>
                        <div className="big_title_line gap_12">
                            <h1 className="big_title">Transfer Information</h1>
                            <p className="big_mark">
                                <ImgComponent className={'w20'} src={'big_bookmark_20.svg'} />
                            </p>
                        </div>
                    </article>

                    <section className="cont_tabline">
                        <div className="dflx_ac">
                            <Button onClick={()=>tabContent(1)} className={contentTab === 1? 'cont_tab_button on':'cont_tab_button'}>
                                Transfer Information
                            </Button>
                            <Button onClick={()=>tabContent(2)} className={contentTab === 2? 'cont_tab_button on':'cont_tab_button'}>
                                Transfer Information History
                            </Button>
                        </div>
                        <div className="dflx_ac gap_8">
                            <span className="fs_12 fc_black100">Search Time: 01/08/2024, 08:33:39</span>
                        </div>
                    </section>

                    <div className={contentTab === 1? "dflx_column flex1" : "dflx_column flex1 hide"}>
                        <section className={"cont_content"}>
                            <div className="grid_type1 flex1">
                                <Grid
                                    data={data}
                                    columns={columns}
                                    rowHeight={25}
                                    bodyHeight={"fitToParent"}
                                    selectionUnit={"row"}
                                    heightResizable={false}
                                    editable={true}
                                    rowHeaders={["rowNum"]}
                                />
                            </div>
                        </section>
                    </div>
                    
                    <div className={contentTab === 2? "dflx_column flex1" : "dflx_column flex1 hide"}>
                        <section className={"cont_content"}></section>
                    </div>
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

        </MainLayout>
    );
};

export default TransferInformation;
