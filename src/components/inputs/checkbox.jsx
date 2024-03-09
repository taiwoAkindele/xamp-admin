import React from "react";

const Checkbox = ({
  onChange,
  className,
  id,
  value,
  disabled,
  props,
  checked,
  label,
  labelClassName,
}) => {
  return (
    <div className={className || "ml-6"} onClick={onChange}>
      <div
        className="relative flex gap-[1.81rem] items-center"
        onClick={onChange}
      >
        <input
          type="checkbox"
          id={id}
          name={id}
          value={value}
          className="opacity-0 absolute h-[20px] w-[20px] cursor-pointer"
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
        <div
          className={`${
            checked
              ? "bg-[#F9F5FF] border-primary"
              : "border-[#D0D5DD] bg-[#fff]"
          }  rounded-[6px] w-[20px] border h-[20px] flex flex-shrink-0 justify-center items-center mr-2`}
        >
          {checked && (
            <svg
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6654 1.5L4.2487 7.91667L1.33203 5"
                stroke="#023E8A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </div>
        <label
          htmlFor={id}
          className={labelClassName || "select-none mb-0"}
          onClick={onChange}
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
