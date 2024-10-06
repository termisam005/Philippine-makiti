import React from 'react';
import { useNavigate } from 'react-router';
import ImgComponent from "../../components/common/ImgComponent";


const HeaderLogo = ({ src, alt }) => {

  const navigator = useNavigate();

  return (
    <div className="header_logo">
        <a onClick={() => navigator('/dashboard1')}>
            <ImgComponent src={src} alt={alt} />
        </a>
    </div>
  );
};

export default HeaderLogo;