import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

const PagingComponent = ({ }) => {
    const [active, setActive] = useState(0);

    const pagerList = [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5}
    ];

    const selectedIdx = (index) => {
        setActive(index);
    };

    return (
        <ul className="dflx_ac gap_6">
            {pagerList.map((item, index) => (
                <Link key={item.id} role="presentation" onClick={() => selectedIdx(index)} className={index === active ? "btn_number on" : "btn_number"}>
                    <span>{index + 1}</span>
                </Link>
            ))}
        </ul>
    );
};

export default PagingComponent;
