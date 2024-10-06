import React from 'react';
import { useState, useEffect, useRef } from "react";
import { useNavigate} from 'react-router';
import ButtonComponent from "../../components/common/ButtonComponent";
import ImgComponent from "../../components/common/ImgComponent";


const Header = ({ children, boolean }) => {

    const [onToggle, setMember] = useState(boolean);
    const ToggleMember = () => {
        setMember(!onToggle);
    }
    const closeMember = () => {
        setMember(false);
    }

    const navigator = useNavigate();

    // profile 바깥클릭
    const popRef = useRef();
    useEffect(() => {
        document.addEventListener('mousedown', clickPopOutside);
        return () => {
            document.removeEventListener('mousedown', clickPopOutside);
        };
    });
    const clickPopOutside = (e) => {
        if (!popRef.current.contains(e.target)) {
            closeMember();
        }
    }

    return (
        <div className="hd_profile wauto" ref={popRef}>
            <div className={onToggle ? "profile_box on" : "profile_box"} onClick={ToggleMember}>
                <span className="profile20"></span>
                <p className='profile_name'>Name(Administrator)</p>
                <span className="comma_under8"></span>
            </div>
            <div className={onToggle ? "member_popover p-20 on" : "member_popover p-20"}>
                <div className="tac m-b-12">
                    <div className='member_circle'>
                        <ImgComponent className={'w-100'} src='member_icon_32.svg' alt={'프로필 사진'} />
                    </div>
                </div>
                <div className="member_text">
                    <span className="fs_12 fc_grey60">아이디</span>
                    <span className="fs_14_medium">abcdee123</span>
                </div>
                <div className="member_text">
                    <span className="fs_12 fc_grey60">이름</span>
                    <span className="fs_14_medium">홍길동</span>
                </div>
                <div className="m-t-32">
                    <ButtonComponent type='button' className='btn_secondary btn_s border_none w-100' txt='Change Password' />
                    <ButtonComponent type='button' onClick={()=>navigator('/login')} 
                    className='btn_secondary btn_s border_none w-100 m-t-8' txt='Logout' />
                </div>
            </div>
        </div>
    );
};

export default Header;