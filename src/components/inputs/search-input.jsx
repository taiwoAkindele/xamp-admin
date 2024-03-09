import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

const SearchInput = ({
  value,
  onChange,
  className,
  containerClass,
  placeholder,
}) => {
  return (
    <div
      className={`border border-[#D0D5DD] shadow-container rounded-[8px] py-[10px] px-[14px] flex items-center gap-[8px] ${containerClass}`}
    >
      <SearchIcon />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Search"}
        className={`border-none text-gray500 outline-none placeholder:text-[16px] placeholder:text-gray500 placeholder:leading-[24px] ${className}`}
      />
    </div>
  );
};

export default SearchInput;
