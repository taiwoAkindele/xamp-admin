import React, { useState } from "react";
import {
  AuthContainer,
  Box,
  Button,
  ConfirmAction,
  ModalComponent,
  TextInput,
  VerifyOtpForm,
} from "../../../../components";
import { Form, Formik } from "formik";

const Password = () => {
  const [isConfirmActionOpen, setIsConfirmActionOpen] = useState(false);
  return (
    <div className="flex flex-col gap-[32px]">
      <h1 className="text-[20px] leading-[23px] font-semibold text-black100">
        Password Settings
      </h1>
      <Box className="py-[32px] px-[24px]">
        <Formik
          initialValues={{
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
          }}
          onSubmit={async (values, actions) => {
            console.log(values);
            setIsConfirmActionOpen(true);
          }}
        >
          {({ values, handleChange, errors }) => (
            <Form className="w-[512px] flex flex-col gap-[16px]">
              <TextInput
                type="text"
                name="oldPassword"
                label="Old Password"
                placeholder="enter old password"
                onChange={handleChange}
                errors={errors}
              />
              <TextInput
                type="text"
                name="newPassword"
                label="New Password"
                placeholder="enter new password"
                onChange={handleChange}
                errors={errors}
              />
              <TextInput
                type="text"
                name="confirmPassword"
                label="Confirm Password"
                placeholder="confirm password"
                onChange={handleChange}
                errors={errors}
              />
              <Button
                btnText="Change Password"
                className="border border-[#023E8A] bg-[#023E8A] w-[172px] font-medium"
              />
            </Form>
          )}
        </Formik>
      </Box>
      {isConfirmActionOpen && (
        <ModalComponent
          show={isConfirmActionOpen}
          onClose={() => setIsConfirmActionOpen(false)}
        >
          <ConfirmAction />
        </ModalComponent>
      )}
    </div>
  );
};

export default Password;
