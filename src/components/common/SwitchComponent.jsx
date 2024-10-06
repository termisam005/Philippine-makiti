import React from 'react';
import { useState } from 'react';


const SwitchComponent = ({ boolean, labelClass, spanClass }) => {

    const [onSwitch, setSwitch] = useState(boolean);
    const ToggleSwitch = () => {
        setSwitch(!onSwitch);
    }

    return (
        <div onClick={ToggleSwitch} className={onSwitch? 'switch_room on' : 'switch_room'}>
            <input className="switch_checkbox" type="checkbox" />
            <label className={labelClass}>
                <span className={spanClass}></span>
            </label>
        </div>
    );
};

export default SwitchComponent;
