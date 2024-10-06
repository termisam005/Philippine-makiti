import React from 'react';
import { useState } from 'react';
import ButtonWithComponent from '../../components/common/ButtonWithComponent'
import ImgComponent from '../../components/common/ImgComponent';

const CardPopupBg = ({  className, children }) => {

    // card toggle 이벤트
    const [accordion, setAccordion] = useState(true);
    const toggleAccord = () => {
        setAccordion(!accordion);
    }
    
  return (
    <div className={className + ' card_popup_bg'}>
        {children}
    </div>
  );
};

export default CardPopupBg;