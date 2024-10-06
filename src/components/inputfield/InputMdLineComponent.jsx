import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';


const InputMdLineComponent = ({ zoneClass, type, placeholder, messClass, message, inputStyle, value, disabled }) => {

    const [id, setId] = useState('');
    const [idInput, setIdinput] = useState();
    const [deletor, setDeletor] = useState(false);

    const writePut = (e) => {
        setId(e.target.value);
        setIdinput(true);
        setDeletor(true);
    }
    const onDelete = (e) => {
        setId(e.target.value = '');
        setIdinput(false);
        setDeletor(false);
    }

    return (
        <div className={zoneClass}>
            <input type={type} className={'wrput line ' + inputStyle} placeholder={placeholder} defaultValue={value} id={id} onChange={writePut} disabled={disabled} />
            <span className={deletor? 'put_check put_delete dflx' : 'put_check put_delete'} onClick={onDelete}>
                <ImgComponent className={'w12 op06'} src={"close_fill_bk_12.svg"} />
            </span>
            <p className={messClass}>{message}</p>
        </div>
    );
};

export default InputMdLineComponent;
