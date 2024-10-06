import React from 'react';


const LabelComponent = ({ onClick, className, children }) => {

  return (
    <p className={className} onClick={onClick}>
        {children}
    </p>
  );
};

export default LabelComponent;