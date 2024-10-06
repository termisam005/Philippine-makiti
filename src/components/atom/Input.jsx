import React from "react";

const Input = ({
  type,
  className,
  placeholder,
  value,
  disabled,
  id,
  hidden,
  readOnly,
  onKeyDown,
  onChange,
  autoComplete,
  accept
}) => {
  return (
    <input
      id={id}
      type={type}
      className={className}
      placeholder={placeholder}
      defaultValue={value}
      disabled={disabled}
      hidden={hidden}
      readOnly={readOnly}
      onKeyDown={onKeyDown}
      onChange={onChange}
      autoComplete={autoComplete}
      accept={accept}
    />
  );
};

export default Input;
