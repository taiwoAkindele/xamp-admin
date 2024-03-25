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
      // ref={ref}
      onClick={onClick}
      className={`flex items-center justify-center cursor-pointer gap-[8px] py-[12px] px-[20px] border-[1px] rounded-[6px] disabled:opacity-[0.5] ${
        width ? `w-[${width}px]` : "w-full"
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
