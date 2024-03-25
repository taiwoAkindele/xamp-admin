import React, { useState } from "react";
import {
  Box,
  Button,
  ConfirmAction,
  ModalComponent,
  TextInput,
} from "../../../../components";
import { Form, Formik } from "formik";
import {
  useChangePasswordMutation,
  useSendOtpMutation,
} from "../../../../api/authSlice";
import toast from "react-hot-toast";
import { ValidationSchema } from "./ValidationSchema";

const Password = ({ user }) => {
  const [isConfirmActionOpen, setIsConfirmActionOpen] = useState(false);
  const [sendOtpToEmail, { isLoading }] = useSendOtpMutation();
  const [newPassword, setNewPassword] = useState(null);
  const [changePasswordRequest] = useChangePasswordMutation();

  const handleChangePassword = () => {
    const payload = {
      password: newPassword?.password,
      oldPassword: newPassword?.oldPassword,
      otp: localStorage.getItem("otp"),
    };
    changePasswordRequest(payload)
      .unwrap()
      .then(() => {
        localStorage.removeItem("otp");
        setIsConfirmActionOpen(false);
      })
      .catch((error) => {
        toast.error(error?.data?.message || "An error occurred, try again!");
      });
  };

  return (
    <div className="flex flex-col gap-[32px]">
      <h1 className="text-[20px] leading-[23px] font-semibold text-black100">
        Password Settings
      </h1>
      <Box className="py-[32px] px-[24px]">
        <Formik
          initialValues={{
            oldPassword: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={ValidationSchema}
          onSubmit={async (values, actions) => {
            if (!user?.email) return toast.error("Email is not available");
            const payload = { email: user?.email };
            sendOtpToEmail(payload)
              .unwrap()
              .then(() => {
                delete values?.confirmPassword;
                setNewPassword(values);
                setIsConfirmActionOpen(true);
              })
              .catch((error) => {
                toast.error(
                  error?.data?.message || "An error occurred, try again!"
                );
              });
          }}
        >
          {({ values, handleChange, errors }) => (
            <Form className="w-[512px] flex flex-col gap-[16px]">
              <TextInput
                type="password"
                name="oldPassword"
                label="Old Password"
                placeholder="enter old password"
                onChange={handleChange}
                errors={errors}
              />
              <TextInput
                type="password"
                name="password"
                label="New Password"
                placeholder="enter new password"
                onChange={handleChange}
                errors={errors}
              />
              <TextInput
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                placeholder="confirm password"
                onChange={handleChange}
                errors={errors}
              />
              <Button
                loading={isLoading}
                disabled={isLoading}
                width={190}
                btnText="Change Password"
                containerClass="border border-[#023E8A] bg-[#023E8A] font-medium"
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
          <ConfirmAction
            email={user?.email}
            nextAction={handleChangePassword}
          />
        </ModalComponent>
      )}
    </div>
  );
};

export default Password;
