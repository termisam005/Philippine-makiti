import React from 'react';
import ImgComponent from "../common/ImgComponent";
import PhotoComponent from '../atom/PhotoComponent';
import Input from '../atom/Input';
import SelectBoxComponent from './SelectBoxComponent';


const PersonContainer = () => {

    return (
        <div className='vert_wrap'>
            <section className='user_info'>

                <label className='btn_file' htmlFor={"imageInput"}>
                    <div className='profile_cont'>
                        <PhotoComponent imgName={'profile_fff_40.svg'}>
                            <p className='circle_g32 user'>
                                <ImgComponent src={'edit_pencil_fff_20.svg'} />
                            </p>
                        </PhotoComponent>
                    </div>
                </label>
                <input type="file" id="imageInput" hidden />

                <div className='user_form'>
                    <dl className="check_dl user">
                        <dt>User ID*</dt>
                        <dd>
                            <Input
                                type={"text"}
                                className={"wrput fc_black100 readonly"}
                                value={'Readonly'}
                                readOnly={true}
                            />
                        </dd>
                    </dl>
                    <dl className="check_dl user">
                        <dt>User Name*</dt>
                        <dd>
                            <Input
                                type={"text"}
                                placeholder={"Name"}
                                className={"wrput fc_black100"}
                            />
                        </dd>
                    </dl>
                    <dl className="check_dl user">
                        <dt>Affiliated Group*</dt>
                        <dd>
                            <SelectBoxComponent selectClass={"line medium"} value={'All'}>
                                <p className="option">Operator</p>
                                <p className="option">Transport company</p>
                            </SelectBoxComponent>
                        </dd>
                    </dl>
                    <dl className="check_dl user">
                        <dt>Position</dt>
                        <dd>
                            <Input
                                type={"text"}
                                placeholder={""}
                                className={"wrput fc_black100"}
                            />
                        </dd>
                    </dl>
                    <dl className="check_dl user">
                        <dt>Employment Status*</dt>
                        <dd>
                            <SelectBoxComponent selectClass={"line medium"} value={'All'}>
                                <p className="option">Employed</p>
                                <p className="option">Unemployed</p>
                            </SelectBoxComponent>
                        </dd>
                    </dl>
                    <dl className="check_dl user">
                        <dt>Entry Date</dt>
                        <dd>
                            <Input
                                type={"text"}
                                placeholder={""}
                                className={"wrput fc_black100"}
                            />
                        </dd>
                    </dl>
                    <dl className="check_dl user">
                        <dt>Contact Number</dt>
                        <dd>
                            <Input
                                type={"phone"}
                                placeholder={""}
                                className={"wrput fc_black100"}
                            />
                        </dd>
                    </dl>
                    <dl className="check_dl user">
                        <dt>Email*</dt>
                        <dd>
                            <Input
                                type={"email"}
                                placeholder={""}
                                className={"wrput fc_black100"}
                            />
                        </dd>
                    </dl>
                </div>

            </section>
        </div>
    );
};

export default PersonContainer;