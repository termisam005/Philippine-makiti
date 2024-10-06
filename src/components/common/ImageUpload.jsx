import React from 'react';
import { useState } from "react";

const PopupBox = ({ btnTxt, value, id  }) => {
    
  return (
    <>
        <div className="gap_16 card_blank_row">
            <label htmlFor={id} className="btn_secondary btn_s" type="button">
                {btnTxt}
            </label>
            <input type="text" defaultValue={value} id={id} />
        </div>
    </>    
  );
};

export default PopupBox;