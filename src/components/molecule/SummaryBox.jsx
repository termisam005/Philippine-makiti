import React from "react";

const SummaryBox = ({
    divClass,
    title,
    total
}) => {
    return (
        <section className={"summary_box ".concat(divClass)}>
            <div className="summary_top">
                <span className="title">{title}</span>
            </div>
            <div className="summary_cont">
                <p className="summary_total">{total}</p>
            </div>
        </section>
    );
};

export default SummaryBox;