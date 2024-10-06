import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';


const HelpboxComponent = ({ title, cont_title1, cont_title2, cont1, cont2 }) => {

    const [help, setHelp] = useState(false);

    return (
      <div className={'help_box'} 
      onMouseOver={()=>setHelp(true)} onMouseOut={()=>setHelp(false)}
      >
          <p className="mark_question">
              <ImgComponent className={'w20'} src={'help_fill_bk_16.svg'} />
          </p>
          {help && (
              <div className="help_content">
                  <h4 className="title m-b-16">{title}</h4>
                  <div className="m-b-16">
                      <h5 className="title sec m-b-8">{cont_title1}</h5>
                      <p className="conts p-l-20">{cont1}</p>
                  </div>
                  <div>
                      <h5 className="title sec m-b-8">{cont_title2}</h5>
                      <p className="conts p-l-20">{cont2}</p>
                  </div>
              </div>
          )}
      </div>
    );
  
};

export default HelpboxComponent;