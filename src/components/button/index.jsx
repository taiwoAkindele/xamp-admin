import React from "react";
import Loader from "../loader";

const Button = ({
  loading,
  type,
  disabled,
  className,
  btnText,
  width,
  startIcon,
  endIcon,
  onClick,
  containerClass,
}) => {
  return (
    <div
      className={`flex items-center gap-[8px] ${
        width ? `w-[${width}px]` : "w-[100%]"
      } ${containerClass}`}
    >
      {loading && <Loader />}
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={`py-[12px] px-[20px] w-full border rounded-[6px] ${className}`}
      >
        {startIcon && startIcon}
        {btnText}
        {endIcon && endIcon}
      </button>
    </div>
  );
};

export default Button;
