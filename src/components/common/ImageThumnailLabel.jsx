import React from 'react';
import ImgComponent from "../../components/common/ImgComponent";

const ImageThumnailLabel = ({ imgUrl, label }) => {
  return (
    <div className={'thumnbnail_image'}>
        <ImgComponent src={imgUrl} alt={''} />
        <span className="label_tag fs_12_medium grade_color10">
            {label}
        </span>
    </div>
  );
};

export default ImageThumnailLabel;