import React from 'react';
import { useState } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DatepickerLine = ({ wrapClass, inputClass, open, inputDate, disabled }) => {

    const [datebox, setDatebox] = useState(false);
    const handleFocus = () => {
        setDatebox(!datebox);
    }
    const closeBox = () => {
        setDatebox(false);
    }

    const [startDate, setStartDate] = useState(null);

    return (
        <div className={wrapClass}>
            <DatePicker 
                onFocus={handleFocus} 
                onBlur={closeBox}
                dateFormat="yyyy/MM/dd" 
                selected={startDate} 
                placeholderText="yyyy/MM/dd"
                onChange={(date) => setStartDate(date)} 
                className={inputClass}
                open={open}
                value={inputDate}
                disabled={disabled}
            />
        </div>
    );
};

export default DatepickerLine;