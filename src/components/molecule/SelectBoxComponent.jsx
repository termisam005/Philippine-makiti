import React from 'react';
import { useState, useEffect, useRef } from "react";
import ImgComponent from "../common/ImgComponent";
import InputComponent from "../inputfield/InputComponent";


const SelectBoxComponent = ({ selectClass, placeholder, value, disabled, children }) => {

    // toggle 이벤트
    const [toggle, setAccordion] = useState(false);
    const toggleSelectBox = () => {
        setAccordion(!toggle);
    }
    const closeSelectBox = () => {
        setAccordion(false);
    }

    // select 바깥클릭
    const popRef = useRef();
    useEffect(() => {
        document.addEventListener('mousedown', clickPopOutside);
        return () => {
            document.removeEventListener('mousedown', clickPopOutside);
        };
    });
    const clickPopOutside = (e) => {
        if (!popRef.current.contains(e.target)) {
            closeSelectBox();
        }
    }

    return (
        <div className={"selectbox " + selectClass} ref={popRef}>
            <div onClick={toggleSelectBox} className={toggle? "selectbox_toggle gap_8 on" : "selectbox_toggle gap_8"}>
                <InputComponent className="flex1 selectbox_text" placeholder={placeholder} value={value} disabled={disabled} />
                <ImgComponent src="arrow_down_bk_16.svg" className="selectbox_arrow" />
            </div>
            <div className={toggle? "selectbox_options show" : "selectbox_options"}>
                <div className="scroll">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default SelectBoxComponent;
