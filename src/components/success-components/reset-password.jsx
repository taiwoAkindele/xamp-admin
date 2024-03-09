import React from "react";
import { ReactComponent as Success } from "../../assets/images/password-reset-success.svg";
import Button from "../button";
import { useNavigate } from "react-router-dom";

const ResetPasswordSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center bg-white w-[480px] rounded-[8px] border p-[24px] shadow-100 border-[#F2F4F7] gap-[32px]">
      <Success />
      <div className="flex flex-col gap-[6px]">
        <h6 className="font-semibold text-[24px] leading-[28px] text-black100">
          Password reset complete
        </h6>
        <p className="font-normal text-[16px] leading-[24px] text-gray600">
          You can now log in with your new password
        </p>
      </div>
      <Button
        btnText="Login"
        type="button"
        onClick={() => navigate("/login")}
        className="border-primary bg-[#023E8A] text-[16px] text-white leading-[24px] font-medium"
      />
    </div>
  );
};

export default ResetPasswordSuccess;
