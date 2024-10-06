import React, { Fragment } from "react";
import { useState } from "react";
import ImgComponent from "../common/ImgComponent";


const BookMarker = ({ className }) => {

    // bookmark 없애기
    const [markState, setMarkState] = useState(true);
    const deleteMark = () => {
        setMarkState(false);
    }

    return (
        <button type={'button'} onClick={deleteMark} className={markState? className + "" : className + " hide"}>
            <ImgComponent src={'menu_bookmark_16.svg'} />
        </button>
    );
};

export default BookMarker;
