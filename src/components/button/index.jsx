import React from "react";
import BtnLoader from "../loader/btnLoader";

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
      onClick={onClick}
      className={`flex items-center justify-center gap-[8px] py-[12px] px-[20px] w-full border rounded-[6px] cursor-pointer ${
        width ? `w-[${width}px]` : "w-[100%]"
      } ${containerClass}`}
    >
      <button
        type={type}
        disabled={disabled}
        className={`outline-none border-none focus:border-none focus:outline-none ${className}`}
      >
        {startIcon && startIcon}
        {btnText}
        {endIcon && endIcon}
      </button>
      {loading && <BtnLoader />}
    </div>
  );
};

export default Button;
