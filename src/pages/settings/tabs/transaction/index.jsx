import React, { useState } from "react";
import {
  Button,
  ConfirmAction,
  ModalComponent,
  TextInput,
} from "../../../../components";
import { Form, Formik } from "formik";
import {
  useGetTransactionSettingsQuery,
  useUpdateTransactionSettingsMutation,
} from "../../../../api/settingsSlice";
import { ValidationSchema } from "./ValidationSchema";
import toast from "react-hot-toast";
import { useSendOtpMutation } from "../../../../api/authSlice";

const TransactionSettings = () => {
  const [showConfirmAction, setShowConfirmAction] = useState(false);
  const [formValues, setFormValues] = useState(null);
  const { data } = useGetTransactionSettingsQuery();
  const { data: transactionSettings } = data || {};

  const [modifyTransactionSettings, { isLoading: modifyingSettings }] =
    useUpdateTransactionSettingsMutation();

  const [sendOtpToUser, { isLoading: sendingOtp }] = useSendOtpMutation();

  const userEmail = localStorage.getItem("user");

  const handleModifyTransactionSettings = () => {
    const otp = localStorage.getItem("otp");
    const payload = { ...formValues, otp: otp };
    modifyTransactionSettings(payload)
      .unwrap()
      .then((response) => setShowConfirmAction(false))
      .catch((error) =>
        toast.error(error?.data?.message || "An error occurred, try again!")
      );
  };

  return (
    <Formik
      enableReinitialize
      initialValues={
        transactionSettings || {
          privatePropertyPercentage: "",
          propertyFee: "",
          propertyUnderXampPercentage: "",
          renovatedPropertyPercentage: "",
          withdrawalFee: "",
        }
      }
      validationSchema={ValidationSchema}
      onSubmit={async (values, actions) => {
        setFormValues(values);
        const payload = { email: userEmail };
        sendOtpToUser(payload)
          .unwrap()
          .then(() => setShowConfirmAction(true))
          .catch((error) =>
            toast.error(error?.data?.message || "An error occurred, try again!")
          );
      }}
    >
      {({ handleChange, errors, values }) => (
        <Form className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[40px]">
            <div className="flex items-center justify-between">
              <h1 className="text-[24px] font-semibold leading-[28px] text-black300">
                Transaction Settings
              </h1>

              <Button
                type="submit"
                btnText="Save changes"
                loading={sendingOtp}
                disabled={sendingOtp}
                width="max"
                containerClass="border-primary bg-[#023E8A] w-max text-[16px] text-white leading-[24px] font-medium"
              />
            </div>
            <div className="border-t border-t-[#EAECF0] pt-[20px] flex flex-col gap-[20px]">
              <div className="grid grid-cols-3">
                <span className="font-semibold text-[14px] leading-[20px] text-black100">
                  Transaction Fees
                </span>
                <div className="flex flex-col gap-[16px] w-[512px]">
                  <TextInput
                    type="text"
                    name="propertyFee"
                    label="Payment for property"
                    placeholder="0"
                    onChange={handleChange}
                    errors={errors}
                    value={values?.propertyFee}
                  />
                  <TextInput
                    type="text"
                    name="withdrawalFee"
                    label="Withdrawal"
                    placeholder="0"
                    onChange={handleChange}
                    errors={errors}
                    value={values?.withdrawalFee}
                  />
                </div>
              </div>
              <div className="grid grid-cols-3">
                <span className="font-semibold text-[14px] leading-[20px] text-black100">
                  Percentages
                </span>
                <div className="flex flex-col gap-[16px] w-[512px]">
                  <TextInput
                    type="text"
                    name="privatePropertyPercentage"
                    label="Listing a private property"
                    placeholder="0%"
                    onChange={handleChange}
                    errors={errors}
                    value={values?.privatePropertyPercentage}
                  />
                  <TextInput
                    type="text"
                    name="propertyUnderXampPercentage"
                    label="Property under Xamp"
                    placeholder="0%"
                    onChange={handleChange}
                    errors={errors}
                    value={values?.propertyUnderXampPercentage}
                  />
                  <TextInput
                    type="text"
                    name="renovatedPropertyPercentage"
                    label="Renovated Property under Xamp"
                    placeholder="0%"
                    onChange={handleChange}
                    errors={errors}
                    value={values?.renovatedPropertyPercentage}
                  />
                </div>
              </div>
            </div>
          </div>
          <ModalComponent
            show={showConfirmAction}
            onClose={() => setShowConfirmAction(false)}
          >
            <ConfirmAction
              email={userEmail}
              nextAction={handleModifyTransactionSettings}
              isLoading={modifyingSettings}
            />
          </ModalComponent>
        </Form>
      )}
    </Formik>
  );
};

export default TransactionSettings;
