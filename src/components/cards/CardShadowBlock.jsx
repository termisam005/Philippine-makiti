import React from 'react';
import { useState } from 'react';
import ButtonWithComponent from '../../components/common/ButtonWithComponent'
import ImgComponent from '../../components/common/ImgComponent';

const CardShadowBlock = ({  className, title, titleButton, children, boolean }) => {

    //accordion 이벤트
    const [accordion, setAccordion] = useState(boolean);
    const toggleAccord = () => {
        setAccordion(!accordion);
    }
    
  return (
    <div className={className + ' card_shadow'}>
        <div className='popover_title'>
            <p className='fs_16_bold'>
                {title}
            </p>
            {
                titleButton === true 
                ? 
                <ButtonWithComponent onClick={toggleAccord} className={accordion ? 'toggle h20 on' : 'toggle h20'}>
                    <ImgComponent className='accordion_up w20' src={'arrow_up_fff_20.svg'} alt={''} />
                    <ImgComponent className='accordion_down w20' src={'arrow_down_fff_20.svg'} alt={''} />
                </ButtonWithComponent>
                : null
            }
        </div>
        <div className={accordion ? 'popover_contents' : 'popover_contents hide'}>
            {children}
        </div>
    </div>
  );
};

export default CardShadowBlock;