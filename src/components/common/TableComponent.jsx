import React from 'react';



const TableComponent = ({ tableClass, children }) => {

  return (
    <table className={tableClass}>       
        {children}
    </table>
  );
};

export default TableComponent;