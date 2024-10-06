import React from 'react';

const TextareaComponent = ({ className, placeholder, children }) => {

    return (
        <div className={"temrs_text_wrap " + className}>
            <textarea className="textarea" placeholder={placeholder}></textarea>
            {children}
        </div>
    );
};

export default TextareaComponent;