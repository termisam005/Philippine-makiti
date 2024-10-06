import React from 'react';


const TooltipComponent = ({ children }) => {

  return (
    <div className={'tooltip_shadow tooltip_box'}>
        {children}
    </div>
  );
};

export default TooltipComponent;