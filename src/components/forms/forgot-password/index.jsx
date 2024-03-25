import React from "react";
import { TextInput } from "../../inputs";
import { Form, Formik } from "formik";
import Button from "../../button";
import { ValidationSchema } from "./ValidationSchema";
import { useNavigate } from "react-router-dom";
import { useSendOtpMutation } from "../../../api/authSlice";
import toast from "react-hot-toast";

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const [sendOtp, { isLoading }] = useSendOtpMutation();

  return (
    <div>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={ValidationSchema}
        onSubmit={async (values, actions) => {
          sendOtp(values)
            .unwrap()
            .then(() => navigate("/verify-otp", { state: values }))
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

            <Button
              loading={isLoading}
              disabled={isLoading}
              onClick={submitForm}
              type="submit"
              btnText="Reset Password"
              containerClass="border-primary bg-[#023E8A] text-[16px] text-white leading-[24px] font-medium"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPasswordForm;
