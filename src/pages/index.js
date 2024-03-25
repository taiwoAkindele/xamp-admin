import React from "react";

const LoginPage = React.lazy(() => import("./login"));
const ForgotPasswordPage = React.lazy(() => import("./forgot-password"));
const OtpPage = React.lazy(() => import("./otp-page"));
const ResetPasswordPage = React.lazy(() => import("./reset-password"));
const ResetPasswordSuccessPage = React.lazy(() =>
  import("./reset-password-success")
);

export {
  LoginPage,
  ForgotPasswordPage,
  OtpPage,
  ResetPasswordPage,
  ResetPasswordSuccessPage,
};
