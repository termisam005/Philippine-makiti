import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import ImgComponent from "../../components/common/ImgComponent";
import InputComponent from "../../components/inputfield/InputComponent";


const SelectBoxClearShow = ({ selectClass, txt }) => {

    return (
        <div className={"selectbox " + selectClass}> 
            <div className="selectbox_toggle gap_8 always bg_clear">
                <InputComponent className="flex1 selectbox_text selected" placeholder="Active" value={txt} readOnly="readOnly" />
                <ImgComponent src="arrow_down_bk_16.svg" className="selectbox_arrow" alt="" />
            </div>
            <div className="selectbox_options show">
                <div className="scroll h120">
                    <Link to="#" className="selected option">label 1</Link>
                    <Link to="#" className="option">label 2</Link>
                    <Link to="#" className="option">label 3</Link>
                    <Link to="#" className="option">label 4</Link>
                    <Link to="#" className="option">label 5</Link>
                </div>
            </div>
        </div>
    );
};

export default SelectBoxClearShow;
