import React from "react";
import { ReactComponent as Illustration } from "../../assets/images/noInformation.svg";

const NoInformation = () => {
  return (
    <div className="border rounded-[12px] w-full h-[400px] border-gray800 shadow-auth-container flex flex-col gap-[24px] items-center justify-center">
      <Illustration />
      <div className="">
        <h6 className="font-medium text-[18px] leading-[24px] text-center text-black200">
          No information found
        </h6>
        <span className="font-normal text-[14px] leading-[20px] text-center text-gray400">
          Please add a teacher or try again.
        </span>
      </div>
    </div>
  );
};

export default NoInformation;
