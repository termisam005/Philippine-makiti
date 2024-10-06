import React from "react";
import { useState } from "react";
import Gnb from "../components/header/Gnb";

import ImgComponent from "../components/common/ImgComponent";
import ImageThumnailLabel from "../components/common/ImageThumnailLabel";
import LabelComponent from "../components/common/LabelComponent";
import TooltipComponent from "../components/common/TooltipComponent";
import TooltipLabel from "../components/common/TooltipLabel";


const Label = () => {
    
  return (
    <div className="guide_back">
        <Gnb></Gnb>
        <div className="guide_wrap">
            <div className="guide_center">
                <div className="guide_top">
                    <h1>Etc</h1>
                </div>

                <div className="Gr_contents">
                    <div className="comp_top">
                        <h2>Label</h2>
                    </div>
                    <section>                    
                        <div className="dflx_ac m-t-60">
                            <p className="fs_12 w80 fc_black60">Line</p>
                            <div className="m-l-80">
                                <p className="fs_12 fc_black60 tac transform_0-20">Default</p>
                                <LabelComponent className='card_label line medium'>Label</LabelComponent>
                            </div>
                            <div className=" m-l-80">
                                <p className="fs_12 fc_black60 tac transform_0-20">Selected</p>
                                <LabelComponent className='card_label line on medium'>Selected</LabelComponent>
                            </div>
                        </div>    
                        <div className="dflx_ac m-t-40">
                            <p className="fs_12 w80 fc_black60">Fill</p>
                            <p className="fs_12 w80 fc_black60">28px</p>      
                            <LabelComponent className='card_label fill large blue'>Label</LabelComponent>
                        </div>    
                        <div className="dflx_ac m-t-20">
                            <p className="fs_12 w80 fc_black60 m-l-80">24px</p>      
                            <LabelComponent className='card_label fill medium gray'>Label</LabelComponent>                      
                        </div>    
                        <div className="dflx_ac m-t-20">
                            <p className="fs_12 w80 fc_black60 m-l-80">20px</p>           
                            <LabelComponent className='card_label fill small darkgray'>Label</LabelComponent>                                           
                        </div>    
                    </section>
                </div>         
                
                <div className="Gr_contents m-t-100">
                    <div className="comp_top">
                        <h2>Tooltip</h2>
                    </div>
                    <section>                    
                        <div className="dflx m-t-60">
                            <div>
                                <p className="fs_12 fc_black60 transform_0-20">Basic</p>
                                <div className="dflx_as gap_40">
                                    <TooltipComponent>
                                        <p className="fs_12_bold">Tooltip</p>
                                    </TooltipComponent>
                                    <TooltipComponent>
                                        <p className="fs_13_medium tooltip_time">2023-01-01 22:22</p>
                                        <div className="display_grid gap_8 m-t-12">
                                            <div className="dflx_ac gap_8 fs_12">               
                                                <p className="w14 h14 grade_color08"></p>
                                                <p className="">Label</p>
                                                <p className="m-l-a">99</p>
                                            </div>
                                            <div className="dflx_ac gap_8 fs_12">
                                                <p className="w14 h14 grade_color09"></p>
                                                <p className="">Label</p>
                                                <p className="m-l-a">99</p>
                                            </div>
                                        </div>
                                    </TooltipComponent>                           
                                </div>
                            </div>
                            <div className="m-l-80">
                                <p className="fs_12 fc_black60 transform_0-20">Point</p>
                                <div className="dflx">
                                    <TooltipLabel className='tooltip_label bubble bb_bottom bb_black on'>
                                        Tooltip
                                    </TooltipLabel>
                                    <TooltipLabel className='tooltip_label bubble bb_top bb_black on'>
                                        Tooltip
                                    </TooltipLabel>
                                    <TooltipLabel className='tooltip_label bubble bb_right bb_black on'>
                                        Tooltip
                                    </TooltipLabel>
                                    <TooltipLabel className='tooltip_label bubble bb_left bb_black on'>
                                        Tooltip
                                    </TooltipLabel>
                                </div>
                                <div className="dflx m-t-40">
                                    <TooltipLabel className='tooltip_label bubble bb_bottom bb_blue on'>
                                        Tooltip
                                    </TooltipLabel>
                                    <TooltipLabel className='tooltip_label bubble bb_top bb_blue on'>
                                        Tooltip
                                    </TooltipLabel>
                                    <TooltipLabel className='tooltip_label bubble bb_right bb_blue on'>
                                        Tooltip
                                    </TooltipLabel>
                                    <TooltipLabel className='tooltip_label bubble bb_left bb_blue on'>
                                        Tooltip
                                    </TooltipLabel>
                                </div>
                                <div className="dflx m-t-40">
                                    <TooltipLabel className='tooltip_label bubble bb_bottom bb_gray on'>
                                        Tooltip
                                    </TooltipLabel>
                                    <TooltipLabel className='tooltip_label bubble bb_top bb_gray on'>
                                        Tooltip
                                    </TooltipLabel>
                                    <TooltipLabel className='tooltip_label bubble bb_right bb_gray on'>
                                        Tooltip
                                    </TooltipLabel>
                                    <TooltipLabel className='tooltip_label bubble bb_left bb_gray on'>
                                        Tooltip
                                    </TooltipLabel>
                                </div>
                            </div>
                        </div>    
                    </section>
                </div>      

                <div className="Gr_contents m-t-100">
                    <div className="comp_top">
                        <h2>Scroll</h2>
                    </div>
                    <section>                    
                        <div className="dflx_ac">
                            <div>
                                <p className="fs_bold">8px</p>
                                <p className="fs_12 fc_black60 m-t-8">전체 페이지</p>
                                <div className="dflx_ac m-t-40">
                                    <div className="w1 h128 scroll_line m-r-8"></div>
                                    <div className="w1 h128 scroll_line"></div>
                                    <div className="border_radius4 w8 h120 bg_8A8E99"></div>
                                    <div className="w1 h128 scroll_line m-r-8"></div>
                                    <div className="w1 h128 scroll_line"></div>
                                </div>
                                <p className="fs_13 fc_pink m-t-20">8px</p>
                            </div>
                            <div className="m-l-80">
                                <p className="fs_bold">4px</p>
                                <p className="fs_12 fc_black60 m-t-8">Card 안에서 사용</p>
                                <div className="dflx m-t-40">
                                    <div>
                                        <div className="dflx_ac">
                                            <div className="w1 h128 scroll_line m-r-4"></div>
                                            <div className="w1 h128 scroll_line"></div>
                                            <div className="border_radius4 w4 h120 bg_8A8E99"></div>
                                            <div className="w1 h128 scroll_line m-r-4"></div>
                                            <div className="w1 h128 scroll_line"></div>
                                        </div>
                                        <p className="fs_13 fc_pink m-t-20">4px</p>
                                    </div>
                                    <div className="m-l-40 dflx">
                                        <div>
                                            <div className="w128 h1 scroll_line m-b-4"></div>
                                            <div className="w128 h1 scroll_line"></div>
                                            <div className="border_radius4  w120 h4 m-a bg_8A8E99"></div> 
                                            <div className="w128 h1 scroll_line m-b-4"></div>
                                            <div className="w128 h1 scroll_line"></div>
                                        </div>                                        
                                        <p className="fs_13 fc_pink m-l-10">4px</p>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </section>
                </div>      

                <div className="Gr_contents m-t-100">
                    <div className="comp_top">
                        <h2>Image thumbnail</h2>
                    </div>
                    <section>                    
                        <div className="w394">
                            <ImageThumnailLabel  imgUrl='lmage_bk_24.svg' label='Label' />
                        </div>
                    </section>
                </div>      
            </div>
        </div>
    </div>
  );
};

export default Label;
