import React from "react";
import { useState } from "react";

import CheckComponent from "../../components/common/CheckComponent";

const CheckBoxTree = ({checkAll, checkAllChild}) => {
    const [isAllChecked, setAllChecked] = useState(false);
    const [checkedState, setCheckedState] = useState(new Array(2).fill(false));

    const handleAllCheck = () => {
        setAllChecked((prev) => !prev);
        let array = new Array(2).fill(!isAllChecked);
        setCheckedState(array);
    };

    const handleMonoCheck = (position) => {
        const updatedCheckedState = checkedState.map((item, index) => (index === position ? !item : item));
        setCheckedState(updatedCheckedState);
        const checkedLength = updatedCheckedState.reduce((sum, currentState) => {
            if (currentState === true) {
                return sum + 1;
            }
            return sum;
        }, 0);
        setAllChecked(checkedLength === updatedCheckedState.length);
    };

    return (
        <>
            <div className="dflx_ac gap_8 h32">
                <CheckComponent checkClass="checkbox_type part" type="checkbox" name="tree_listAll" labelClass="fs_14" checkId="tree_checkAll" txt="Lv.1 Selected(part)" checked={isAllChecked} onChange={() => handleAllCheck()}></CheckComponent>
            </div>           
            <div className="display_grid p-l-24 auto_row32">
                <CheckComponent checkClass="checkbox_type as_center" type="checkbox" name="tree_list1" labelClass="fs_14" checkId="tree_option01" txt="Lv.2 Default" checked={checkedState[0]} onChange={() => handleMonoCheck(0)}></CheckComponent>
                <CheckComponent checkClass="checkbox_type as_center" type="checkbox" name="tree_list1" labelClass="fs_14" checkId="tree_option02" txt="Lv.2 Default" checked={checkedState[1]} onChange={() => handleMonoCheck(1)}></CheckComponent>
                <CheckComponent checkClass="checkbox_type as_center" type="checkbox" name="tree_list1" labelClass="fs_14" checkId="tree_option03" txt="Lv.2 Disabled" disabled></CheckComponent>
            </div>
        </>
    );
};

export default CheckBoxTree;
