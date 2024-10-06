import React from 'react';
import ImgComponent from '../common/ImgComponent';


const PhotoComponent = ({ imgName, children }) => {

  return (
    <article className='profile_photo'>
        <div className='photo_circle user'>
            <ImgComponent className={'img_prof'} src={imgName} />
        </div>
        {children}
    </article>
  );
};

export default PhotoComponent;