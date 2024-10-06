import React from 'react';

const CardBlock = ({  className, children }) => {
  return (
    <div className={className + ' p-20 card_block'}>
        {children}
    </div>
  );
};

export default CardBlock;