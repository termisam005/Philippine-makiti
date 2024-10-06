import React from 'react';
import { useState } from 'react';
import ButtonWithComponent from '../../components/common/ButtonWithComponent'
import ImgComponent from '../../components/common/ImgComponent';

const CardLabelAccordion = ({  className, label, labelHidden, labelTitle, labelName, children, boolean }) => {

    // card toggle 이벤트
    const [accordion, setAccordion] = useState(boolean);
    const toggleAccord = () => {
        setAccordion(!accordion);
    }
    
  return (
    <>
        <div className="dflx_ac">
            {
                label === true
                ?
                <p className="fs_bold">{labelTitle}</p>
                :                
                <p className="fs_bold">Label</p>
            }
            {
                labelHidden === true
                ? null
                : ( labelName === '선택안함'
                    ? <p className={accordion ? "card_label line medium hide m-l-25" : "card_label line medium m-l-25"}>{labelName}</p>
                    : <p className={accordion ? "card_label line medium hide m-l-25" : "card_label line medium on m-l-25"}>{labelName}</p>
                )
            }
            <ButtonWithComponent onClick={toggleAccord} className={accordion ? 'm-l-a card_toggle toggle on' : 'm-l-a card_toggle toggle'}>
                <ImgComponent className='accordion_up' src={'arrow_up_bk_12.svg'} alt={''} />
                <ImgComponent className='accordion_down' src={'arrow_down_bk_12.svg'} alt={''} />
            </ButtonWithComponent>
        </div>
        <div className={accordion ? "card_popup_contents" : "card_popup_contents hide"}>
            {children}
        </div>
    </>
  );
};

export default CardLabelAccordion;