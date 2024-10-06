import React from 'react';
import { useLocation, useNavigate } from 'react-router';


const SideMenuInComponent = ({ path, title }) => {

    const navigator = useNavigate();

    const pathname = useLocation().pathname;

    const onClick = () => {
        if (path != null) {
            navigator(path);
        }
    };

    return (
        <li>
            <div className={(pathname.includes(path) ? 'side_menu on' : 'side_menu')} onClick={onClick}>
                <span className="menu_title">{title}</span>
            </div>
        </li>
    );
};

export default SideMenuInComponent;