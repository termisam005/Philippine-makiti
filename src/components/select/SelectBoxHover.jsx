import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import ImgComponent from "../../components/common/ImgComponent";
import InputComponent from "../../components/inputfield/InputComponent";


const SelectBoxHover = ({ selectClass }) => {

    // toggle 이벤트
    const [toggle, setAccordion] = useState(false);
    const toggleSelectBox = () => {
        setAccordion(!toggle);
    }

    return (
        <div className={"selectbox " + selectClass}> 
            <div onClick={toggleSelectBox} className={toggle? "selectbox_toggle gap_8 on hover" : "selectbox_toggle gap_8 hover"}>
                <InputComponent className="flex1 selectbox_text" placeholder="Hover" value="Hover" readOnly="readOnly" />
                <ImgComponent src="arrow_down_bk_16.svg" className="selectbox_arrow" alt="" />
            </div>
            <div className={toggle? "selectbox_options show" : "selectbox_options"}>
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

export default SelectBoxHover;
