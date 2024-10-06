import React from "react";
import { useState, useEffect } from "react";
import Content from "../components/atom/Content";
import Button from "../components/atom/Button";
import ImgComponent from "../components/common/ImgComponent";
import MenuTab from "../components/atom/MenuTab";
import SelectBoxComponent from "../components/molecule/SelectBoxComponent";
import BottomLine from "../components/atom/BottomLine";
import Grid from "@toast-ui/react-grid";
import MainLayout from "../components/layouts/MainLayout";

import CheckBox from "../components/atom/CheckBox";
import HelpboxComponent from "../components/molecule/HelpboxComponent";
import TableComponent from "../components/common/TableComponent";
import TableTh from "../components/common/TableTh";
import TableTd from "../components/common/TableTd";

// grid data
const columns = [
    {   name: "Afflication", 
        header: "Afflication" 
    },
    {   name: "UpdateTime", 
        header: "Update Time" 
    },
];
const data = [
    {   id: 1, 
        Afflication: "Row",
        UpdateTime: "Row",
    },
    {   id: 2, 
        Afflication: "Row",
        UpdateTime: "Row",
    },
];

const MenuInformation = () => {

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
                        <MenuTab tabClass={'btn_tab on'} title={'Menu Information'} />
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
                                <li className="depth">Menu Information</li>
                            </ul>
                            <div className="big_title_line gap_12">
                                <h1 className="big_title">Menu Information</h1>
                                <p className="big_mark">
                                    <ImgComponent className={'w20'} src={'big_bookmark_20.svg'} />
                                </p>
                                <div className="dflx_ac gap_8 m-l-a m-t-a">
                                    <span className="fs_12 fc_black100">Search Time: 01/08/2024, 08:33:39</span>
                                    <HelpboxComponent 
                                        title={'View Settlement Results Information When Selecting Claim Information on the Left'} 
                                        cont_title1={'1. Select a Row in the Claim Information Grid on the Left'} 
                                        cont1={'The Claim Information Grid on the left displays a list of claims by date or month, transport company, and card company, including the number of claims and the amounts. Select a row from this list.'} 
                                    />
                                </div>
                            </div>
                        </article>
                        
                        <section className="cont_content">
                            <div className="gray_box">
                                <div className="dflx_ac_jbet gap_40">
                                    <div className="grid_column3 gap_40 w-85">
                                        <div className="dflx_ac gap_20">
                                            <p className="forms_word">Afflication Code</p>
                                            <SelectBoxComponent selectClass={"line medium flex1"} value={'All'}>
                                                <p className="option">Operating</p>
                                                <p className="option">Transport</p>
                                                <p className="option">Administrator</p>
                                            </SelectBoxComponent>
                                        </div>
                                    </div>
                                    <Button type={'button'} className={'btn_primary search btn_32'}>
                                        Search
                                    </Button>
                                </div>
                            </div>
                            <div className="fare_line">
                                <section className={"cont_content"}>
                                    <h5 className="tlt">Afflication List</h5>
                                    <div className="grid_type1 flex1 bd_grid1">
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
                                <section className={"cont_content"}>
                                    <h5 className="tlt">Menu List</h5>
                                    <div className="grid_type1 flex1 bd_grid1">
                                        <TableComponent tableClass="table_box menu">                     
                                            <TableTh>
                                                <tr>
                                                    <th className="w48">
                                                        No.
                                                    </th>
                                                    <th>
                                                        Menu Name
                                                    </th>
                                                    <th className="w76">
                                                        Inquiry
                                                    </th>
                                                    <th className="w76">
                                                        Input
                                                    </th>
                                                    <th className="w76">
                                                        Edit
                                                    </th>
                                                    <th className="w76">
                                                        Delete
                                                    </th>
                                                    <th className="w76">
                                                        Excel
                                                    </th>
                                                    <th>
                                                        Path
                                                    </th>
                                                </tr>
                                            </TableTh>
                                            <TableTd>
                                                <td className="tac">
                                                    1
                                                </td>
                                                <td className="tal">
                                                    Row
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14" disabled></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14" checked></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14" disabled></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14" disabled></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14" disabled></CheckBox>
                                                </td>
                                                <td className="tal">
                                                    Row
                                                </td>
                                            </TableTd>
                                            <TableTd>
                                                <td className="tac">
                                                    2
                                                </td>
                                                <td className="tal">
                                                    Row
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tal">
                                                    Row
                                                </td>
                                            </TableTd>
                                            <TableTd>
                                                <td className="tac">
                                                    3
                                                </td>
                                                <td className="tal">
                                                    Row
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tal">
                                                    Row
                                                </td>
                                            </TableTd>
                                            <TableTd>
                                                <td className="tac">
                                                    4
                                                </td>
                                                <td className="tal">
                                                    Row
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tal">
                                                    Row
                                                </td>
                                            </TableTd>
                                            <TableTd>
                                                <td className="tac">
                                                    5
                                                </td>
                                                <td className="tal">
                                                    Row
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tal">
                                                    Row
                                                </td>
                                            </TableTd>
                                            <TableTd>
                                                <td className="tac">
                                                    6
                                                </td>
                                                <td className="tal">
                                                    Row
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tal">
                                                    Row
                                                </td>
                                            </TableTd>
                                            <TableTd>
                                                <td className="tac">
                                                    7
                                                </td>
                                                <td className="tal">
                                                    Row
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tal">
                                                    Row
                                                </td>
                                            </TableTd>
                                            <TableTd>
                                                <td className="tac">
                                                    8
                                                </td>
                                                <td className="tal">
                                                    Row
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tal">
                                                    Row
                                                </td>
                                            </TableTd>
                                            <TableTd>
                                                <td className="tac">
                                                    9
                                                </td>
                                                <td className="tal">
                                                    Row
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tal">
                                                    Row
                                                </td>
                                            </TableTd>
                                            <TableTd>
                                                <td className="tac">
                                                    10
                                                </td>
                                                <td className="tal">
                                                    Row
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tal">
                                                    Row
                                                </td>
                                            </TableTd>
                                            <TableTd>
                                                <td className="tac">
                                                    11
                                                </td>
                                                <td className="tal">
                                                    Row
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tal">
                                                    Row
                                                </td>
                                            </TableTd>
                                            <TableTd>
                                                <td className="tac">
                                                    12
                                                </td>
                                                <td className="tal">
                                                    Row
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tac">
                                                    <CheckBox checkClass="checkbox_type simply_one table" type="checkbox" name="checkbox_list" checkId="table_check01" labelClass="fs_14"></CheckBox>
                                                </td>
                                                <td className="tal">
                                                    Row
                                                </td>
                                            </TableTd>
                                        </TableComponent>
                                    </div>
                                </section>
                            </div>
                        </section>
                    </div>

                    <BottomLine className={'bottom_btnline'}>
                        <div className="dflx_ac gap_12"></div>
                        <div className="dflx_ac gap_12">
                            <Button type={'button'} className={'btn_primary bottom btn_m disabled'}>
                                <ImgComponent className={'m-r-10 op02'} src={'plus_line_bk_16.svg'} />
                                <span className="bottom_word">Add</span>
                            </Button>
                            <Button type={'button'} className={'btn_primary bottom btn_m'}>
                                <ImgComponent className={'m-r-10'} src={'save_wh_16.svg'} />
                                <span className="bottom_word">Save</span>
                            </Button>
                            <Button type={'button'} className={'btn_primary bottom btn_m disabled'}>
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
            </Content>
        </MainLayout>
    );
};

export default MenuInformation;
