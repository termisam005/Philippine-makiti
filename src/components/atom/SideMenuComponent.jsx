import React from 'react';
import { useLocation, useNavigate } from 'react-router';


const SideMenuComponent = ({ path, title, sideIn }) => {

    const navigator = useNavigate();

    const pathname = useLocation().pathname;

    const onClick = () => {
        if (path != null) {
            navigator(path);
        }
    };

    return (
        <li>
            { sideIn === true?
                <div className={(pathname.includes(path) ? 'side_menu_in on' : 'side_menu_in')} onClick={onClick}>
                    <span className="menu_title">{title}</span>
                </div>
                : 
                <div className={(pathname.includes(path) ? 'side_menu on' : 'side_menu')} onClick={onClick}>
                    <span className="menu_title">{title}</span>
                </div>
            }
        </li>
    );
};

export default SideMenuComponent;