import React from 'react';
import {Link} from 'react-router-dom';

const Menulist = () => {

  return (
    <>
        <div className="dflx_ac_jcent h-100vh gap_60">
            <div className="display_grid gap_8">
                <Link to='button' className="anchor_default">버튼</Link>
                <Link to='cards' className="anchor_default">카드</Link>
                <Link to='inputfield' className="anchor_default">인풋필드</Link>
                <Link to='label' className="anchor_default">라벨/툴팁</Link>
                <Link to='menu' className="anchor_default">메뉴</Link>
                <Link to='popup' className="anchor_default">팝업</Link>
                <Link to='selector' className="anchor_default">셀렉터</Link>
                <Link to='tab' className="anchor_default">탭</Link>
                <Link to='table' className="anchor_default">테이블</Link>                
            </div>
            <div className="display_grid gap_8">
                <Link to='login' className="anchor_default">템플릿 로그인</Link>
                <Link to='404' className="anchor_default">템플릿 404</Link>
                <Link to='dashboard1' className="anchor_default">템플릿 대시보드 타입 1</Link>
                <Link to='dashboard2' className="anchor_default">템플릿 대시보드 타입 2</Link>
                <Link to='templatetable' className="anchor_default">템플릿 테이블</Link>
                <Link to='templatepopup' className="anchor_default">템플릿 팝업</Link>
                <Link to='cardgrid' className="anchor_default">템플릿 카드 그리드</Link>
                <Link to='templatemap' className="anchor_default">템플릿 지도타입</Link>
            </div>
        </div>
    </>
  );
};

export default Menulist;
