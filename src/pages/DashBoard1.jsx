import React from "react";
import { Link } from 'react-router-dom';
import MainLayout from "../components/layouts/MainLayout";
import Button from "../components/atom/Button";
import ImgComponent from "../components/common/ImgComponent";
import CardBlockRd from "../components/molecule/CardBlockRd";
import SummaryBox from "../components/molecule/SummaryBox";

import 'tui-grid/dist/tui-grid.css';
import Grid from '@toast-ui/react-grid';
import {dashData, dashTrans, dashColumns} from "../components/data/column.js";
import DonutChart1 from "../components/chart/DonutChart1.jsx";
import BarChart1 from "../components/chart/BarChart1.jsx";
import BarLineChart1 from "../components/chart/BarLineChart1.jsx";


const DashBoard1 = () => {

    return (
        <MainLayout>

            <div className="wrap_tabline">
                <div className="tabline">
                    <Button type="button" className={'btn_tab home on'}>
                        <ImgComponent className={'w16'} src={'home_fff_16.svg'} />
                    </Button>
                </div>
            </div>

            <div className="home_dashboard">
                <article className="dashline_01">
                    <CardBlockRd
                        BigCount={true}
                        divClass={"dashbox_total tac p-b-12"}
                        titleClass={"fc_white"}
                        title={"Total Income(PHP)"}
                        contentClass={"fc_white"}
                        content={"₱ 28,600"}
                        miniClass={'fc_white'}
                        miniTxt={'From 00:00 to current time'}
                    />
                    <CardBlockRd
                        BigCount={true}
                        divClass={"tac p-b-12"}
                        titleClass={"fc_black100"}
                        title={"Makati Zen"}
                        contentClass={"fc_black100"}
                        content={"₱ 10,120"}
                        miniClass={'fc_black40'}
                        miniTxt={'From 00:00 to current time'}
                    />
                    <CardBlockRd
                        BigCount={true}
                        divClass={"tac p-b-12"}
                        titleClass={"fc_black100"}
                        title={"Beep Card"}
                        contentClass={"fc_black100"}
                        content={"₱ 18,480"}
                        miniClass={'fc_black40'}
                        miniTxt={'From 00:00 to current time'}
                    />
                    <CardBlockRd
                        titleClass={"fc_black100"}
                        title={"Operation Information"}
                    >
                        <div className="dashbox_in dflx gap_4 p-t-20">
                            <div className="summary_mark">
                                <ImgComponent className={'w36'} src={'bus_fill_fff_36.svg'} />
                            </div>
                            <div className="dflx gap_4 flex1">
                                <SummaryBox title={'Routes Operted'} total={'27'} />
                                <SummaryBox title={'Vehicles Operated'} total={'199'} />
                            </div>
                        </div>
                    </CardBlockRd>
                    <CardBlockRd 
                        titleClass={"fc_black100"}
                        title={"Terminal"}
                    >
                        <div className="dashbox_in dflx gap_4 p-t-20">
                            <div className="summary_mark">
                                <ImgComponent className={'w36'} src={'bus_monitoring_36.svg'} />
                            </div>
                            <div className="dflx gap_4 flex1">
                                <SummaryBox divClass={'normal'} title={'Normal'} total={'6'} />
                                <SummaryBox divClass={'error'} title={'Error'} total={'3'} />
                            </div>
                        </div>
                    </CardBlockRd>
                </article>

                <article className="dashline_02">
                    <CardBlockRd
                        titleClass={"fc_black100"}
                        title={"Income by Transport Company"}
                    >
                        <span className="fs_11 fc_black40 lh_1">Based on the previous day</span>
                        <div className="dashbox_in twoline dflx_ac_jcent">
                            {/* <ImgComponent className={'w-100 h-100'} src={'chart_main01.svg'} /> */}
                            <DonutChart1 />
                        </div>
                    </CardBlockRd>
                    <CardBlockRd
                        titleClass={"fc_black100"}
                        title={"Top 4 Income by Route"}
                    >
                        <span className="fs_11 fc_black40 lh_1">Based on the previous day</span>
                        <div className="dashbox_in twoline dflx_ac_jcent p-t-8">
                            {/* <ImgComponent className={'w-100 h-100'} src={'chart_main02.svg'} /> */}
                            <BarChart1 />
                        </div>
                    </CardBlockRd>
                    <CardBlockRd
                        titleClass={"fc_black100"}
                        title={"Income by Time Slot"}
                    >
                        <span className="fs_11 fc_black40 lh_1">Based on the previous day</span>
                        <div className="dashbox_in twoline dflx_ac_jcent p-t-8">
                            {/* <ImgComponent className={'w-100 h-100'} src={'chart_main03.svg'} /> */}
                            <BarLineChart1 />
                        </div>
                    </CardBlockRd>
                </article>

                <article className="dashline_03">
                    <CardBlockRd
                        titleClass={"fc_black100"}
                        title={"AFCS Operation Information Application Status"}
                    >
                        <div className="dashbox_in p-t-6">
                            <section className="dash_info_group gap_4">
                                <div className="dash_info_line">
                                    <p></p>
                                    <p className="fs_14 fc_black80 tac">Version</p>
                                    <p className="fs_14 fc_black80 tac">Application Date</p>
                                </div>
                                <div className="dash_info_line gray">
                                    <p className="fs_14_bold fc_black100">PUV Fare File</p>
                                    <div className="tac">
                                        <p className="fs_14_bold fc_black100">1.9</p>
                                    </div>
                                    <div className="tac">
                                        <p className="fs_13 fc_black100">2024-07-30</p>
                                        <p className="fs_13 fc_black100">13:25:53</p>
                                    </div>
                                </div>
                                <div className="dash_info_line gray">
                                    <p className="fs_14_bold fc_black100">BL Fixed File</p>
                                    <div className="tac">
                                        <p className="fs_14_bold fc_black100">1.9</p>
                                    </div>
                                    <div className="tac">
                                        <p className="fs_13 fc_black100">2024-07-30</p>
                                        <p className="fs_13 fc_black100">13:25:53</p>
                                    </div>
                                </div>
                                <div className="dash_info_line gray">
                                    <p className="fs_14_bold fc_black100">BL Variable File</p>
                                    <div className="tac">
                                        <p className="fs_14_bold fc_black100">1.9</p>
                                    </div>
                                    <div className="tac">
                                        <p className="fs_13 fc_black100">2024-07-30</p>
                                        <p className="fs_13 fc_black100">13:25:53</p>
                                    </div>
                                </div>
                                <div className="dash_info_line gray">
                                    <p className="fs_14_bold fc_black100">Transfer File</p>
                                    <div className="tac">
                                        <p className="fs_14_bold fc_black100">1.9</p>
                                    </div>
                                    <div className="tac">
                                        <p className="fs_13 fc_black100">2024-07-30</p>
                                        <p className="fs_13 fc_black100">13:25:53</p>
                                    </div>
                                </div>
                                <div className="dash_info_line gray">
                                    <p className="fs_14_bold fc_black100">Transfer Group File</p>
                                    <div className="tac">
                                        <p className="fs_14_bold fc_black100">1.9</p>
                                    </div>
                                    <div className="tac">
                                        <p className="fs_13 fc_black100">2024-07-30</p>
                                        <p className="fs_13 fc_black100">13:25:53</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </CardBlockRd>
                    <CardBlockRd
                        titleClass={"fc_black100"}
                        title={"Upper Transmission/Reception Status"}
                        moreClass={'fc_blue2 btn_file p-r-12'}
                        moreTxt={'More'}
                        more={true}
                    >
                        <div className="dashbox_in dflx_column p-t-16">
                            <div className="grid_type3 flex1">
                                <Grid
                                    data={dashData}
                                    columns={dashColumns}
                                    header={dashTrans}
                                    bodyHeight={'fitToParent'}
                                    scrollX={true}
                                    scrollY={false}
                                    rowHeaders={["rowNum"]}
                                />
                            </div>
                        </div>
                    </CardBlockRd>
                    <CardBlockRd
                        titleClass={"fc_black100"}
                        title={"Program and DB Status"}
                    >
                        <div className="dashbox_in p-t-16">
                            <div className="grid_column2 gap_4 h-100">
                                <section className={"prdb_box"}>
                                    <div className="prdb_top">
                                        <span className="fs_14_bold fc_black100">API</span>
                                    </div>
                                    <div className="prdb_cont">
                                        <ImgComponent className={'w24'} src={'success_fill_24.svg'} />
                                    </div>
                                </section>
                                <section className={"prdb_box"}>
                                    <div className="prdb_top">
                                        <span className="fs_14_bold fc_black100">
                                            Interconnected Server 1
                                        </span>
                                    </div>
                                    <div className="prdb_cont">
                                        <ImgComponent className={'w24'} src={'error_fill_24.svg'} />
                                    </div>
                                </section>
                                <section className={"prdb_box"}>
                                    <div className="prdb_top">
                                        <span className="fs_14_bold fc_black100">API DB Server</span>
                                    </div>
                                    <div className="prdb_cont">
                                        <ImgComponent className={'w24'} src={'success_fill_24.svg'} />
                                    </div>
                                </section>
                                <section className={"prdb_box"}>
                                    <div className="prdb_top">
                                        <span className="fs_14_bold fc_black100">
                                            Interconnected Server 2
                                        </span>
                                    </div>
                                    <div className="prdb_cont">
                                        <ImgComponent className={'w24'} src={'error_fill_24.svg'} />
                                    </div>
                                </section>
                                <section className={"prdb_box"}>
                                    <div className="prdb_top">
                                        <span className="fs_14_bold fc_black100">5</span>
                                    </div>
                                    <div className="prdb_cont">
                                        <ImgComponent className={'w24'} src={'success_fill_24.svg'} />
                                    </div>
                                </section>
                                <section className={"prdb_box"}>
                                    <div className="prdb_top">
                                        <span className="fs_14_bold fc_black100">6</span>
                                    </div>
                                    <div className="prdb_cont">
                                        <ImgComponent className={'w24'} src={'success_fill_24.svg'} />
                                    </div>
                                </section>
                            </div>
                        </div>
                    </CardBlockRd>
                </article>
            </div>

        </MainLayout>
    );
};

export default DashBoard1;
