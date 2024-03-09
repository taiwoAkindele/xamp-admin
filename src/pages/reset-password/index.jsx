import React from "react";
import { AuthContainer, ResetPasswordForm } from "../../components";

const ResetPassword = () => {
  return (
    <div className="bg-[#F8FBFF] flex items-center justify-center h-[100vh] w-full">
      <AuthContainer
        formHeading="Set New Password"
        formSubheading="Please enter your new password below"
      >
        <ResetPasswordForm />
      </AuthContainer>
    </div>
  );
};

export default ResetPassword;
