import React from 'react';


const TooltipLabel = ({ className, children }) => {

  return (
    <div className="tooltip_parents">                            
        <div className={className}>
            {children}
        </div>
    </div>
  );
};

export default TooltipLabel;