import React from "react";
import { AuthContainer, LoginForm } from "../../components";

const LoginPage = () => {
  return (
    <div className="bg-[#F8FBFF] flex items-center justify-center h-[100vh] w-full">
      <AuthContainer formHeading="Welcome Back!">
        <LoginForm />
      </AuthContainer>
    </div>
  );
};

export default LoginPage;
