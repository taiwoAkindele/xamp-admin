import React from "react";
import { Button, TextInput } from "../../../../components";
import { Form, Formik } from "formik";

const TransactionSettings = () => {
  return (
    <Formik
      initialValues={{
        propertyPayment: "",
        withdrawal: "",
        privateProperty: "",
        renovatedProperty: "",
        xampProperty: "",
      }}
      // validationSchema={ValidationSchema}
      onSubmit={async (values, actions) => {
        console.log(values);
      }}
    >
      {({ handleChange, errors }) => (
        <Form className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[40px]">
            <div className="flex items-center justify-between">
              <h1 className="text-[24px] font-semibold leading-[28px] text-black300">
                Transaction Settings
              </h1>

              <Button
                type="submit"
                btnText="Save changes"
                width="max"
                className="border-primary bg-[#023E8A] w-max text-[16px] text-white leading-[24px] font-medium"
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
                    name="propertyPayment"
                    label="Payment for property"
                    placeholder="0"
                    onChange={handleChange}
                    errors={errors}
                  />
                  <TextInput
                    type="text"
                    name="withdrawal"
                    label="Withdrawal"
                    placeholder="0"
                    onChange={handleChange}
                    errors={errors}
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
                    name="privatePtoperty"
                    label="Listing a private property"
                    placeholder="0%"
                    onChange={handleChange}
                    errors={errors}
                  />
                  <TextInput
                    type="text"
                    name="xampProperty"
                    label="Property under Xamp"
                    placeholder="0%"
                    onChange={handleChange}
                    errors={errors}
                  />
                  <TextInput
                    type="text"
                    name="renovatedProperty"
                    label="Renovated Property under Xamp"
                    placeholder="0%"
                    onChange={handleChange}
                    errors={errors}
                  />
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default TransactionSettings;
