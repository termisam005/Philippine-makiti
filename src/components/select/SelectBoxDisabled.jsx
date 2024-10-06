import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import ImgComponent from "../../components/common/ImgComponent";
import InputComponent from "../../components/inputfield/InputComponent";


const SelectBoxDisabled = ({ selectClass }) => {

    return (
        <div className={"selectbox " + selectClass}> 
            <div className="selectbox_toggle gap_8 disabled">
                <InputComponent className="flex1 selectbox_text" placeholder="Disabled" value="Disabled" disabled="disabled" />
                <ImgComponent src="arrow_down_bk_16.svg" className="selectbox_arrow" alt="" />
            </div>
        </div>
    );
};

export default SelectBoxDisabled;
