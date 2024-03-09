import React from "react";
import { AuthContainer, VerifyOtpForm } from "../../components";

const OtpPage = ({ formHeading, formSubheading }) => {
  return (
    <div className="bg-[#F8FBFF] flex items-center justify-center h-[100vh] w-full">
      <AuthContainer
        formHeading={formHeading || "Verify email"}
        formSubheading={
          formSubheading || "We sent an OTP to onyeisi@gmail.com."
        }
      >
        <VerifyOtpForm />
      </AuthContainer>
    </div>
  );
};

export default OtpPage;
