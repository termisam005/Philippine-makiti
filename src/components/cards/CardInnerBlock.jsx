import React from 'react';

const CardBlock = ({  className, children }) => {
  return (
    <div className={className + ' card_inner_noline'}>
        {children}
    </div>
  );
};

export default CardBlock;