import React from "react";
import { AuthContainer, ForgotPasswordForm } from "../../components";

const ForgotPassword = () => {
  return (
    <div className="bg-[#F8FBFF] flex items-center justify-center h-[100vh] w-full">
      <AuthContainer
        formHeading="Forgot Password?"
        formSubheading="Enter your email address below to get verification code"
      >
        <ForgotPasswordForm />
      </AuthContainer>
    </div>
  );
};

export default ForgotPassword;
