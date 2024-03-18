import React, { useEffect, useState } from "react";
import { TextInput } from "../../inputs";
import { Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../button";
import { ValidationSchema } from "./ValidationSchema";
import { useLoginUserMutation } from "../../../api/userSlice";
import toast from "react-hot-toast";

const LoginForm = () => {
  const navigate = useNavigate();
  const [loginUserRequest, { isLoading }] = useLoginUserMutation();

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={ValidationSchema}
        onSubmit={async (values, actions) => {
          loginUserRequest(values)
            .unwrap()
            .then(() => navigate("/users"))
            .catch((error) => toast.error(error.data.message));
        }}
      >
        {({ handleChange, errors, submitForm }) => (
          <Form className="flex flex-col gap-[20px]">
            <TextInput
              type="text"
              name="email"
              label="Email"
              placeholder="Enter your email"
              onChange={handleChange}
              errors={errors}
            />
            <TextInput
              type="password"
              name="password"
              label="Password"
              placeholder="........."
              onChange={handleChange}
              errors={errors}
            />
            <Link
              style={{ textDecoration: "none" }}
              to="/forgot-password"
              className="text-[#023E8A] font-medium text-[14px] leading-[20px] ml-auto"
            >
              Forgot password?
            </Link>
            <Button
              onClick={submitForm}
              loading={isLoading}
              disabled={isLoading}
              type="submit"
              btnText="Login"
              containerClass="border-primary bg-[#023E8A] text-[16px] text-white leading-[24px] font-medium"
            />
          </Form>
        )}
      </Formik>
      <div className="flex items-center justify-center pt-[20px]">
        <span className="font-normal text-[14px] leading-[20px] text-gray600">
          Don’t have an account?
        </span>
        <Link
          style={{ textDecoration: "none" }}
          className="text-[#023E8A] font-medium text-[14px] leading-[20px]"
        >
          Contact Admin
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
