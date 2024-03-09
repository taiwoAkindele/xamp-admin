import React, { useState } from "react";
import OTPInput from "react-otp-input";
import Button from "../button";
import { Form, Formik } from "formik";

const ConfirmAction = ({ nextAction }) => {
  const [otp, setOtp] = useState("");
  return (
    <div className="flex flex-col gap-[20px]">
      {" "}
      <div className="">
        <h6 className="text-black100 text-center font-semibold text-[24px] leading-[28px]">
          Confirm your action
        </h6>
        <p className="text-subtext text-center font-normal text-[16px] leading-[24px]">
          We sent an OTP to onyeisi@gmail.com
        </p>
      </div>
      <Formik
        initialValues={{ otp: otp }}
        // validationSchema={ValidationSchema}
        onSubmit={async (values, actions) => {
          console.log(otp);
          nextAction();
        }}
      >
        {({ handleChange, errors }) => (
          <Form className="flex flex-col gap-[20px]">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              skipDefaultStyles={true}
              containerStyle="flex items-center justify-center gap-[12px]"
              renderInput={(props) => (
                <input
                  {...props}
                  className="py-[10px] px-[14px] text-black w-[48px] h-[48px] rounded-[8px] border border-[#D0D5DD] placeholder:text-[16px] placeholder:text-gray500 placeholder:leading-[24px] ${className}"
                />
              )}
            />
            <Button
              type="submit"
              btnText="Submit"
              className="border-primary bg-[#023E8A] text-[16px] text-white leading-[24px] font-medium"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ConfirmAction;
