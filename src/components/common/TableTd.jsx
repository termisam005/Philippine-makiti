import React from 'react';


const TableTd = ({ className, children }) => {

  return (
    <tbody>
        <tr className={className}>
            {children}
        </tr>
    </tbody>
  );
};

export default TableTd;