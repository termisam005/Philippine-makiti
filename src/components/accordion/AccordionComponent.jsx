import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import ButtonWithComponent from '../common/ButtonWithComponent';


const AccordionComponent = ({ children, accordClass, accordTitle, normal, scroll }) => {

    //accordion 이벤트
    const [accordion, setAccordion] = useState(false);
    const toggleAccord = () => {
        setAccordion(!accordion);
    }

    return (
        <div className={accordClass}>
            <div onClick={toggleAccord} className={accordion? 'accordion_title dflx_ac_jbet on': 'accordion_title dflx_ac_jbet'}>
                <div className='fs_14'>{accordTitle}</div>
                <ButtonWithComponent className={'accordion_toggle h20'}>
                    <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                    <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                </ButtonWithComponent>
            </div>
            {
                normal === true 
                ? 
                <div className={accordion? 'accordion_contents show': 'accordion_contents'}>
                    {children}
                </div>
                : null
            }
            {
                scroll === true 
                ? 
                <div className={accordion? 'accordion_contents show p-r-6': 'accordion_contents p-r-6'}>
                    {children}
                </div>
                : null
            }
        </div>
    );
};

export default AccordionComponent;
