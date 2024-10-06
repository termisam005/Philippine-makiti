import React from "react";


const Button = ({type, id, className, onClick, children, disabled}) => {
    return (
        <button type={type} id={id} className={className} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
