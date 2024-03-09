import React from "react";
import { ErrorMessage } from "formik";

const TextInput = ({
  name,
  label,
  type,
  value,
  onChange,
  placeholder,
  errors,
  className,
}) => {
  return (
    <div className="flex flex-col gap-[6px] w-full">
      {label && (
        <label className="font-medium text-[14px] leading-[20px] text-gray700">
          {label}
        </label>
      )}
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${
          errors[name] && "focus:ring-[#EF4444] border-[#EF4444]"
        } py-[10px] px-[14px] rounded-[8px] text-black100 border border-[#D0D5DD] placeholder:text-[16px] placeholder:text-gray500 placeholder:leading-[24px] ${className}`}
      />
      <ErrorMessage name={name}>
        {(errorMessage) => (
          <span className="text-[#EF4444] text-[10px]">{errorMessage}</span>
        )}
      </ErrorMessage>
    </div>
  );
};

export default TextInput;
