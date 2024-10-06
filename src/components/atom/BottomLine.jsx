import React from "react";


const BottomLine = ({ className, children}) => {

    return (
        <article className={className}>
            {children}
        </article>
    );
};

export default BottomLine;
