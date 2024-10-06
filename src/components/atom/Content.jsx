import React from "react";


const Content = ({ className, children, style }) => {

    return (
        <div className={className} style={style}>
            {children}
        </div>
    );
};

export default Content;
