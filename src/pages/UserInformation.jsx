import React from "react";
import { useState, useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import Button from "../components/atom/Button";
import ImgComponent from "../components/common/ImgComponent";
import MenuTab from "../components/atom/MenuTab";
import BottomLine from "../components/atom/BottomLine";
import SelectBoxComponent from "../components/molecule/SelectBoxComponent";
import Input from "../components/atom/Input";
import PersonContainer from "../components/molecule/PersonContainer";
import HelpboxComponent from "../components/molecule/HelpboxComponent";

import 'tui-grid/dist/tui-grid.css';
import Grid from '@toast-ui/react-grid';


const UserInformation = () => {

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
                    <MenuTab tabClass={'btn_tab on'} title={'Transfer Information Group'} />
                    <MenuTab tabClass={'btn_tab'} title={'Work History'} />
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
                            <li className="depth">System</li>
                            <li><ImgComponent src={'arrow_right2_bk_16.svg'} /></li>
                            <li className="depth">User Information</li>
                        </ul>
                        <div className="dflx_ac_jbet">
                            <div className="big_title_line gap_12">
                                <h1 className="big_title">User Information</h1>
                                <p className="big_mark">
                                    <ImgComponent className={'w20'} src={'big_bookmark_20.svg'} />
                                </p>
                            </div>
                            <div className="dflx_ac gap_8 m-l-a m-t-a">
                                <span className="fs_12 fc_black100">Search Time: 01/08/2024, 08:33:39</span>
                                <HelpboxComponent 
                                    cont_title1={'User Resistration'} 
                                    cont1={'1. The Claim Information Grid on the left displays a list of claims by date or month.'}
                                />
                            </div>
                        </div>
                    </article>

                    <div className={"dflx flex1"}>
                        <section className={"cont_content"}>
                            <div className="gray_box m-t-2">
                                <div className="grid_column4 gap_32 m-t-10">
                                    <div className="dflx_ac gap_16">
                                        <p className="forms_word">User Name/ID</p>
                                        <Input type={"text"} placeholder={"User Name or ID"} className={"wrput line medium flex1 tac"}/>
                                    </div>
                                    <div className="dflx_ac gap_16">
                                        <p className="forms_word">Employment status</p>
                                        <SelectBoxComponent selectClass={"line medium maxw_none"} value={'ALL'}>
                                            <p className="option">ALL</p>
                                            <p className="option">Employed</p>
                                            <p className="option">Unemployed</p>
                                        </SelectBoxComponent>
                                    </div>
                                    <div className="dflx_ac gap_16">
                                        <p className="forms_word">Affiliation code</p>
                                        <SelectBoxComponent selectClass={"line medium flex1 maxw_none"} value={'All'}>
                                            <p className="option">Operating</p>
                                            <p className="option">Transport</p>
                                            <p className="option">Administrator</p>
                                        </SelectBoxComponent>
                                    </div>
                                    <div className="dflx_ac gap_16">
                                        <p className="forms_word">Email</p>
                                        <Input type={"text"} placeholder={"Email"} className={"wrput line medium tac w200"}/>
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
                            <div className="grid_type1 flex1 bd_grid1">
                                    <Grid
                                        data={data}
                                        columns={columns}
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
                        <section className="edit_user m-l-20">
                            <div>
                                <h5 className='edit_tlt lh_20'>Edit User Information</h5>
                            </div>
                            <PersonContainer />
                        </section>
                    </div>
                </div>

                <BottomLine className={'bottom_btnline'}>
                    <div className="dflx_ac gap_12">
                        <Button type={'button'} className={'btn_primary bottom btn_m'}>
                            <span className="bottom_word">Password Reset</span>
                        </Button>
                    </div>
                    <div className="dflx_ac gap_12">
                        <Button type={'button'} className={'btn_primary bottom btn_m'}>
                            <ImgComponent className={'m-r-10'} src={'plus_line_wh_16.svg'} />
                            <span className="bottom_word">Add</span>
                        </Button>
                        <Button type={'button'} className={'btn_primary bottom btn_m'}>
                            <ImgComponent className={'m-r-10'} src={'save_wh_16.svg'} />
                            <span className="bottom_word">Save</span>
                        </Button>
                        <Button type={'button'} className={'btn_primary bottom btn_m disabled'} disabled={true}>
                            <ImgComponent className={'m-r-8'} src={'trash_bk_16.svg'} />
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

export default UserInformation;
