import React from "react";

const Loader = () => {
  return (
    <div className="w-[100%] h-screen bg-white z-[60] flex flex-col gap-[1rem] justify-normal items-center">
      <div className="w-[30px] h-[30px] rounded-[50%] border-[6px] border-[#E5E7EB] border-t-[6px] border-t-[#6366F1] animate-spin"></div>
    </div>
  );
};

export default Loader;
