import React from "react";

const CheckBox = ({
  checkClass,
  type,
  name,
  defaultType,
  disabled,
  checkId,
  labelClass,
  txt,
  checked,
  onChange,
}) => {
  return (
    <div className={checkClass}>
      <input
        type={type}
        id={checkId}
        name={name}
        checked={checked}
        defaultChecked={defaultType}
        disabled={disabled}
        onChange={onChange}
        hidden
      />
      <label htmlFor={checkId} className={labelClass}>
        {txt}
      </label>
    </div>
  );
};

export default CheckBox;
