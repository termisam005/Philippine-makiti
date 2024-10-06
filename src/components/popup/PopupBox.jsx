import React from 'react';
import { useState } from "react";

import ButtonComponent from '../../components/common/ButtonComponent';
import ButtonWithComponent from '../../components/common/ButtonWithComponent';
import ImgComponent from "../../components/common/ImgComponent";


const PopupBox = ({ className, title, line, description, descText, children }) => {
    
  return (
    <div className="popup_shadow popup_box">
        {
        line === true 
        ? 
        <div className="popup_title line">
            <div>
                <p className="fs_20 fs_bold">{title}</p>
                {
                description === true 
                ? 
                <p className="fs_14 fc_black60 m-t-4">{descText}</p>
                : null
                }
            </div>
            <ButtonWithComponent type="button" className="m-l-a">
                <ImgComponent src="close_line_bk_24.svg" alt="" />
            </ButtonWithComponent>
        </div>
        : 
        <div className="popup_title">
            <div>
                <p className="fs_20 fs_bold">{title}</p>
            </div>
            <ButtonWithComponent type="button" className="m-l-a">
                <ImgComponent src="close_line_bk_24.svg" alt="" />
            </ButtonWithComponent>
        </div>
        }
        <div className="popup_contents">
            {children}
        </div>                                
    </div>
  );
};

export default PopupBox;