import React from "react";

const Badge = ({ status, check }) => {
  return (
    <div
      className={`${
        status === check
          ? "text-danger bg-danger-light border-red100"
          : "text-success bg-success-light border-green100"
      } border py-[2px] px-[10px] text-[14px] font-medium w-max text-center rounded-[16px]`}
    >
      {status}
    </div>
  );
};

export default Badge;
