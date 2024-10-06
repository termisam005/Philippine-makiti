import React from 'react';
import { Link } from "react-router-dom";
import ImgComponent from "../../components/common/ImgComponent";


const TemplateNav = ({ children }) => {

  return (
    <div className="template_nav dflx_ac_jcent gap_20">
        <Link to='/login' className="anchor_default">로그인</Link>       
        <Link to='/404' className="anchor_default">404 페이지</Link>     
        <Link to='/dashboard1' className="anchor_default">대시보드 1</Link>
        <Link to='/dashboard2' className="anchor_default">대시보드 2</Link>
        <Link to='/templatetable' className="anchor_default">테이블</Link>
        <Link to='/templatepopup' className="anchor_default">팝업</Link>
        <Link to='/cardgrid' className="anchor_default">카드 그리드</Link>
        <Link to='/templatemap' className="anchor_default">지도</Link>
    </div>
  );
};

export default TemplateNav;