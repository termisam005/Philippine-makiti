import React from 'react';
import { Link } from "react-router-dom";
import ImgComponent from "../../components/common/ImgComponent";


const Header = ({ headerClass, children }) => {

  return (
    <header className={headerClass}>
        <article className='header_in'>
            <div className="header_left">
                <Link className="header_logo">
                    <ImgComponent src={'logo_bk.svg'} alt={'UI networks logo'} className='logo_hd_uniplus' />
                </Link>
            </div>
            <div className="dflx_ac_jcent gap_20 flex1">
                <Link to='/Button' className="anchor_default">버튼</Link>
                <Link to='/Cards' className="anchor_default">카드</Link>
                <Link to='/Inputfield' className="anchor_default">인풋필드</Link>
                <Link to='/Label' className="anchor_default">라벨/툴팁</Link>
                <Link to='/Menu' className="anchor_default">메뉴</Link>
                <Link to='/Popup' className="anchor_default">팝업</Link>
                <Link to='/Selector' className="anchor_default">셀렉터</Link>
                <Link to='/Tab' className="anchor_default">탭</Link>
                <Link to='/Table' className="anchor_default">테이블</Link>                
            </div>
        </article>
    </header>
  );
};

export default Header;