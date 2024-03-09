import React, { useState } from "react";
import { Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import OTPInput from "react-otp-input";

import Button from "../../button";
import { ValidationSchema } from "./ValidationSchema";

const VerifyOtpForm = ({ showResend = true }) => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <Formik
        initialValues={{ otp: otp }}
        // validationSchema={ValidationSchema}
        onSubmit={async (values, actions) => {
          console.log(otp);
          navigate("/reset-password");
        }}
      >
        {({ handleChange, errors }) => (
          <Form className="flex flex-col gap-[20px]">
            <div className="px-[24px]">
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                skipDefaultStyles={true}
                containerStyle="flex items-center justify-center gap-[12px]"
                renderInput={(props) => (
                  <input
                    {...props}
                    className="py-[10px] px-[14px] w-[48px] text-black100 h-[48px] rounded-[8px] border border-[#D0D5DD] placeholder:text-[16px] placeholder:text-gray500 placeholder:leading-[24px] ${className}"
                  />
                )}
              />
            </div>
            <Button
              type="submit"
              btnText="Reset Password"
              className="border-primary bg-[#023E8A] text-[16px] text-white outline-none leading-[24px] font-medium"
            />
          </Form>
        )}
      </Formik>
      {showResend && (
        <div className="flex items-center justify-center gap-[4px] pt-[20px]">
          <span className="font-normal text-[14px] leading-[20px] text-gray600">
            Didn’t receive the code?
          </span>
          <Link
            style={{ textDecoration: "none" }}
            className="text-[#023E8A] font-medium text-[14px] leading-[20px]"
          >
            Resend Code
          </Link>
        </div>
      )}
    </div>
  );
};

export default VerifyOtpForm;
