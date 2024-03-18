import React, { useState } from "react";
import { Form, Formik } from "formik";
import { ReactComponent as CheckMark } from "../../../assets/icons/check-icon.svg";
import { TextInput } from "../../inputs";
import { ValidationSchema } from "./ValidationSchema";
import Button from "../../button";
import { useLocation, useNavigate } from "react-router-dom";
import { useResetPasswordMutation } from "../../../api/userSlice";
import toast from "react-hot-toast";

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log("state", state);
  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  return (
    <div>
      <Formik
        initialValues={{ password: "", confirmPassword: "" }}
        validationSchema={ValidationSchema}
        onSubmit={async (values, actions) => {
          const payload = { ...state, password: values.password };
          resetPassword(payload)
            .unwrap()
            .then(() => navigate("/reset-password-success"))
            .catch((error) => toast.error(error.data.message));
        }}
      >
        {({ handleChange, errors, values, submitForm }) => (
          <Form className="flex flex-col gap-[20px]">
            <TextInput
              type="password"
              name="password"
              label="Password"
              placeholder="........."
              onChange={handleChange}
              errors={errors}
            />
            <TextInput
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              placeholder="........."
              onChange={handleChange}
              errors={errors}
            />
            <div className="flex flex-col gap-[12px]">
              <div className="flex items-center gap-[8px]">
                <CheckMark
                  fill={
                    values.confirmPassword?.length >= 8 &&
                    values?.password?.length >= 8
                      ? "#023E8A"
                      : "#D0D5DD"
                  }
                />
                <span className="text-[14px] font-normal leading-[20px] text-gray600">
                  Must be at least 8 characters
                </span>
              </div>
              <div className="flex items-center gap-[8px]">
                <CheckMark
                  fill={
                    /[A-Z]/.test(values.confirmPassword && values.password)
                      ? "#023E8A"
                      : "#D0D5DD"
                  }
                />
                <span className="text-[14px] font-normal leading-[20px] text-gray600">
                  Must contain one special character
                </span>
              </div>
            </div>
            <Button
              loading={isLoading}
              disabled={isLoading}
              onClick={submitForm}
              type="submit"
              btnText="Reset password"
              containerClass="border-primary bg-[#023E8A] text-[16px] text-white leading-[24px] font-medium"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ResetPasswordForm;
