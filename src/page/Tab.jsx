import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import Gnb from "../components/header/Gnb";

import TabType from "../components/common/TabType";
import PagingComponent from "../components/common/PagingComponent";


const Tab = () => {

  return (
    <div className="guide_back">
        <Gnb></Gnb>
        <div className="guide_wrap">
            <div className="guide_center">
                <div className="guide_top">
                    <h1>Tab</h1>
                </div>

                <div className="Gr_contents">
                    <div className="comp_top">
                        <h2>Tab</h2>
                    </div>
                    <section>                    
                        <div className="dflx_ac m-t-20">
                            <p className="fs_bold">Text type</p>
                            <p className="fs_12 w80 m-l-40 fc_black60">Basic</p>
                            <TabType tabClass="tab text"></TabType>
                        </div>    
                        <div className="dflx m-t-40 p-l-190">
                            <TabType tabClass="tab bg"></TabType>
                        </div>   
                        <div className="dflx_ac m-t-60 p-l-110">
                            <p className="fs_12 w80 fc_black60">Box</p>
                            <TabType tabClass="tab box"></TabType>
                        </div>   
                        <div className="dflx_ac m-t-60">
                            <p className="fs_bold">Number</p>
                            <div className="m-l-120">
                                <PagingComponent></PagingComponent>
                            </div>
                        </div>    
                    </section>
                </div>                
            </div>
        </div>
    </div>
  );
};

export default Tab;
