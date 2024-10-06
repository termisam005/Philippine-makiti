import React from 'react';

const ImgComponent = ({ src, onClick, className, id, alt }) => {
  return (
    <img
      className={className}
      src={process.env.PUBLIC_URL + '/images/' + src}
      alt={alt}
      onClick={onClick}
      id={id}
    />
  );
};

export default ImgComponent;