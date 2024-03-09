import React from "react";
import { ReactComponent as XAMPLogo } from "../../assets/images/xamp.svg";

const AuthContainer = ({
  children,
  formHeading,
  formSubheading,
  logo = true,
}) => {
  return (
    <div className="bg-white w-[480px] rounded-[8px] border p-[24px] shadow-100 border-[#F2F4F7] flex flex-col gap-[32px]">
      <div className="flex flex-col items-center justify-center gap-[32px]">
        {logo && <XAMPLogo />}
        <div className="flex flex-col gap-[6px]">
          <h6 className="font-semibold text-[24px] leading-[28px] text-center text-black100 capitalize">
            {formHeading}
          </h6>
          <p className="font-normal text-[16px] leading-[24px] text-center text-gray600">
            {formSubheading}
          </p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default AuthContainer;
