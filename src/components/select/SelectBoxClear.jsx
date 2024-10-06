import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import ImgComponent from "../../components/common/ImgComponent";


const SelectBoxClear = ({ selectClass, txt }) => {

    // toggle 이벤트
    const [toggle, setAccordion] = useState(false);
    const toggleSelectBox = () => {
        setAccordion(!toggle);
    }

    return (
        <div className={"selectbox " + selectClass}> 
            <div className={toggle ? "selectbox_toggle dflx_ac_jcent gap_8 bg_clear on" : "selectbox_toggle dflx_ac_jcent gap_8 bg_clear"} onClick={toggleSelectBox}>
                <span className="selectbox_text fc_black100">{txt}</span>
                <ImgComponent src="arrow_down_bk_16.svg" className="selectbox_arrow" alt="" />
            </div>
            <div className={toggle ? "selectbox_options show" : "selectbox_options"}>
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

export default SelectBoxClear;
