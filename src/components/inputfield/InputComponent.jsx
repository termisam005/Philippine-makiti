import React from 'react';

const InputComponent = ({ type, className, placeholder, value, disabled, id, hidden, readOnly }) => {

    return (
        <input id={id} type={type} className={className} placeholder={placeholder} defaultValue={value} disabled={disabled} hidden={hidden} readOnly={readOnly} />
    );
};

export default InputComponent;