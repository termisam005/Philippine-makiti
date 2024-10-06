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


const ExternalTransmission = () => {

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
        {   name: "TransmissionReceptionDate", 
            header: "Transmission/Reception Date" 
        },
        {   name: "ExternalInstitution", 
            header: "External Institution" 
        },
        {   name: "FileName", 
            header: "File Name" 
        },
        {   name: "TransmissionReceptionType", 
            header: "Transmission/Reception Type" 
        },
        {   name: "TransmissionReceptionResult", 
            header: "Transmission/Reception Result" 
        },
        {   name: "ReturnProcessing", 
            header: "Return Processing" 
        },
    ];
    const data = [
        {   id: 1, 
            TransmissionReceptionDate: "Row", 
            ExternalInstitution: "Row",
            FileName: "Row",
            TransmissionReceptionType: "Row",
            TransmissionReceptionResult: "Row",
            ReturnProcessing: "Row", 
        },
        {   id: 2, 
            TransmissionReceptionDate: "Row", 
            ExternalInstitution: "Row",
            FileName: "Row",
            TransmissionReceptionType: "Row",
            TransmissionReceptionResult: "Row",
            ReturnProcessing: "Row", 
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
                            <li className="depth">Transmission/Reception</li>
                            <li><ImgComponent src={'arrow_right2_bk_16.svg'} /></li>
                            <li className="depth">External Transmission/Reception</li>
                        </ul>
                    </article>

                    <div className="cont_tabline m-b-8">
                        <div className="big_title_line gap_12">
                            <h1 className="big_title">
                            External Transmission/Reception
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
                                cont2={'When a row is selected in the Claim Information Grid on the left, the settlement results information for the selected row will be automatically displayed in the Grid on the right. '}
                            />
                        </div>
                    </div>

                    <div className={contentTab === 1? "dflx_column flex1" : "dflx_column flex1 hide"}>
                        <section className={"cont_content"}>
                            <div className="gray_box external">
                                <h3 className="m-b-12 fs_20_bold dflx_ac_jcent gap_12 fc_black100">
                                    <p>AFCS</p>
                                    <p className="dflx_ac_jcent">
                                        <ImgComponent className={'w20'} src={'array_both_20.svg'} />
                                     </p>
                                    <p>Card Company</p>
                                </h3>
                                <div className="tac fc_black100">
                                    <p className="fs_14">Transmission and reception are performed automatically. If the transmission/reception result is displayed </p>
                                    <p className="fs_14">as a failure due to communication issues, buttons for manual re-transmission and re-reception requests are activated.</p>
                                </div>
                            </div>
                            <div className="grid_type1 flex1">
                                <Grid
                                    data={data}
                                    columns={columns}
                                    rowHeight={25}
                                    bodyHeight={"fitToParent"}
                                    selectionUnit={"row"}
                                    heightResizable={false}
                                    scrollX={true}
                                    scrollY={true}
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
                        <Button type={'button'} className={'btn_primary bottom btn_m'}>
                            <span className="bottom_word">Revision Instructions</span>
                        </Button>
                    </div>
                </BottomLine>
            </div>

        </MainLayout>
    );
};

export default ExternalTransmission;
