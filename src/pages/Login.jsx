import React from "react";
import { useNavigate } from 'react-router-dom';
import Content from "../components/atom/Content";
import SelectBoxComponent from "../components/molecule/SelectBoxComponent";
import Input from "../components/atom/Input";
import Button from "../components/atom/Button";
import CheckBox from "../components/atom/CheckBox";
import ImgComponent from "../components/common/ImgComponent";


const Login = () => {

    const navigator = useNavigate();
    
    return (
        <article className="login_back">
            <div className={"login_box"}>
                <Content>
                    <div className={"tac w-100"}>
                        <ImgComponent src={"logo_makati_large.png"} alt={"makati afcs software"} />
                    </div>
                    <div className={"login_form m-t-20 gap_20"}>
                        <SelectBoxComponent selectClass={"xlarge transp"} value={'Operating Company'}>
                            <p className="option">Operating Company</p>
                            <p className="option">Transport Company</p>
                            <p className="option">Administrator</p>
                        </SelectBoxComponent>
                        <Input
                            type={"text"}
                            placeholder={"ID"}
                            className={"wrput line xlarge transp"}
                        />
                        <Input
                            type={"password"}
                            placeholder={"Password"}
                            className={"wrput line xlarge transp"}
                        />
                        <div className={"w-100 dflx_jbet"}>
                            <CheckBox
                                checkClass={"checkbox_type"}
                                type={"checkBox"}
                                checkId={"login"}
                                labelClass={"fs_14 fc_gray87"}
                                txt={"Save ID"}
                            />
                        </div>
                        <Button
                            className={"btn_primary btn_l w-100"}
                            children={"Login"}
                            onClick={()=>navigator('/dashboard1')}
                        />
                        <div className={"w-100 tac"}>
                            <span className={"fs_11 fc_gray87"}>
                                If you have forgotten your password,
                                <br /> please contact the administrator.
                            </span>
                        </div>
                    </div>
                </Content>
            </div> 
        </article>
    );
};

export default Login;
