import React from "react";
import { useState } from "react";

const TabType = ({ tabClass }) => {
    const [active, setActive] = useState(0);

    const tabList = [
        {
            id: 1,
            tabTitle: "Selected",
        },
        {
            id: 2,
            tabTitle: "Default"
        },
        {
            id: 3,
            tabTitle: "Default"
        },
        {
            id: 4,
            tabTitle: "Default"
        },
        {
            id: 5,
            tabTitle: "Default"
        },
        {
            id: 6,
            tabTitle: "Default"
        }
    ];

    const navigate = (index) => {
        setActive(index);
    };

    return (
        <ul className={tabClass}>
            {tabList.map((item, index) => (
                <li key={item.id} role="presentation" onClick={() => navigate(index)} className={index === active ? "tab_item on" : "tab_item"}>
                    {item.tabTitle}
                </li>
            ))}
        </ul>
    );
};

export default TabType;
