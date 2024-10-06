import React from "react";
import { useNavigate } from "react-router";
import ImgComponent from "../components/common/ImgComponent";
import Button from "../components/atom/Button";


const Page404 = () => {

    const navigate = useNavigate();

    return (
        <div className="wrap">
            <div className="modal">
                <div className="tac">
                    <ImgComponent src={"not_found_icon_bk.svg"} />
                </div>
                <p className="fs_24_bold m-t-20 tac">페이지를 찾을 수 없습니다.</p>
                <p className="fc_black80 tac m-t-16">
                    요청 페이지가 서버에 존재하지 않습니다.
                    <br />
                    호출 URL 주소가 정확한지 다시 한 번 확인해 주세요.
                </p>
                <Button className="btn_primary btn_l w-100 m-t-40" onClick={() => {navigate("/")}}>
                    이전 페이지로 돌아가기
                </Button>
            </div>
        </div>
    );
};

export default Page404;
