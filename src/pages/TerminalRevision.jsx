import React from "react";
import { useState, useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import Button from "../components/atom/Button";
import ImgComponent from "../components/common/ImgComponent";
import MenuTab from "../components/atom/MenuTab";
import BottomLine from "../components/atom/BottomLine";

import 'tui-grid/dist/tui-grid.css';
import Grid from '@toast-ui/react-grid';
import {termiData, termiTrans, termiColumns} from "../components/data/column.js";


const TerminalRevision = () => {

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
                    <article className="m-b-8">
                        <ul className="depth_line">
                            <li className="depth">Operation Information</li>
                            <li><ImgComponent src={'arrow_right2_bk_16.svg'} /></li>
                            <li className="depth">Device Revision Instructions</li>
                        </ul>
                        <div className="big_title_line gap_12">
                            <h1 className="big_title">Device Revision Instructions</h1>
                            <p className="big_mark">
                                <ImgComponent className={'w20'} src={'big_bookmark_20.svg'} />
                            </p>
                            <div className="dflx_ac gap_8 m-l-a m-t-a">
                                <span className="fs_12 fc_black100">Search Time: 01/08/2024, 08:33:39</span>
                                <p className="mark_question">
                                    <ImgComponent className={'w20'} src={'help_fill_bk_16.svg'} />
                                </p>
                            </div>
                        </div>
                    </article>

                    <div className={"dflx_column flex1"}>
                        <section className={"cont_content"}>
                            <div className="gray_box external">
                                <h3 className="gray_title m-b-12 tac">
                                    OBS (Terminal)
                                </h3>
                                <div className="tac fc_black100">
                                    <p className="fs_14">A screen to transmit files from the AFCS Server to OBS. After selecting the file to be transmitted, </p>
                                    <p className="fs_14">
                                        click the Revision Instructions or Immediate Revision Instructions button according to the application date and time to apply the update to the terminal.
                                    </p>
                                </div>
                            </div>
                            <div className="grid_type1 flex1 grid_red">
                                <Grid
                                    data={termiData}
                                    columns={termiColumns}
                                    header={termiTrans}
                                    rowHeight={25}
                                    bodyHeight={"fitToParent"}
                                    selectionUnit={"row"}
                                    scrollX={true}
                                    scrollY={true}
                                    editable={true}
                                    rowHeaders={["checkbox"]}
                                />
                            </div>
                        </section>
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

export default TerminalRevision;
