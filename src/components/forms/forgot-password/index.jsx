import React from "react";
import { TextInput } from "../../inputs";
import { Form, Formik } from "formik";
import Button from "../../button";
import { ValidationSchema } from "./ValidationSchema";
import { useNavigate } from "react-router-dom";

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={ValidationSchema}
        onSubmit={async (values, actions) => {
          console.log(values);
          navigate("/verify-otp");
        }}
      >
        {({ handleChange, errors }) => (
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
              type="submit"
              btnText="Reset Password"
              className="border-primary bg-[#023E8A] text-[16px] text-white leading-[24px] font-medium"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPasswordForm;
