import React from 'react';
import Input from '../atom/Input';
import SelectBoxComponent from './SelectBoxComponent';


const InfoContainer = ({ containClass }) => {

    return (
        <div className={containClass}>
            <section className='user_info bd_bottom'>
                <div className='p-b-12'>
                    <h5 className='edit_tlt lh_20'>Basic Information</h5>
                </div>
                <div className='user_form display_grid m-b-16'>
                    <dl className="check_dl user">
                        <dt>Bus Type From</dt>
                        <dd>
                            <SelectBoxComponent selectClass={"line medium"} value={'Public light bus'} disabled={true}>
                                <p className="option">Public light bus</p>
                                <p className="option">Mainline bus</p>
                            </SelectBoxComponent>
                        </dd>
                    </dl>
                    <dl className="check_dl user">
                        <dt>Bus Type TO</dt>
                        <dd>
                            <SelectBoxComponent selectClass={"line medium"} value={'Mainline bus'} disabled={true}>
                                <p className="option">Public light bus</p>
                                <p className="option">Mainline bus</p>
                            </SelectBoxComponent>
                        </dd>
                    </dl>
                    <dl className="check_dl user">
                        <dt>Transport Card User</dt>
                        <dd>
                            <SelectBoxComponent selectClass={"line medium"} value={'Senior'} disabled={true}>
                                <p className="option">General</p>
                                <p className="option">Student</p>
                                <p className="option">PWD</p>
                            </SelectBoxComponent>
                        </dd>
                    </dl>
                </div>
            </section>
            <section className='user_info m-t-20'>
                <div className='p-b-12'>
                    <h5 className='edit_tlt lh_20'>Modify Transfer Information Group</h5>
                </div>
                <div className='user_form display_grid m-b-16'>
                    <dl className="check_dl user">
                        <dt>Transfer Discount Amount(PHP)</dt>
                        <dd>
                            <Input
                                type={"text"}
                                className={"wrput fc_black100"}
                                value={''}
                            />
                        </dd>
                    </dl>
                    <dl className="check_dl user">
                        <dt>Transfer Discount Rate(%)</dt>
                        <dd>
                            <Input
                                type={"text"}
                                className={"wrput fc_black100"}
                                value={''}
                            />
                        </dd>
                    </dl>
                </div>
            </section>
        </div>
    );
};

export default InfoContainer;