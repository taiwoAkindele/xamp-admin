import { Form, Formik } from "formik";
import React, { useState } from "react";
import Button from "../../../../components/button";
import { FormControlLabel, Switch } from "@mui/material";

const AdvancedSettings = () => {
  const [restrictFunding, setRestrictFunding] = useState(false);
  const [restrictWithdrawal, setRestrictWithdrawal] = useState(false);
  const [restrictLandlord, setRestrictLandlord] = useState(false);
  const [restrictAgent, setRestrictAgent] = useState(false);
  const [restrictTenant, setRestrictTenant] = useState(false);
  return (
    <Formik
      initialValues={
        {
          // approval: "",
          // termination: "",
          // rentIncrement: "",
          // verification: "",
        }
      }
      // validationSchema={ValidationSchema}
      onSubmit={async (values, actions) => {
        console.log(values);
      }}
    >
      {({ handleChange, errors, setFieldValue }) => (
        <Form className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[40px]">
            <div className="flex items-center justify-between">
              <h1 className="text-[24px] font-semibold leading-[28px] text-black300">
                Advanced Setting
              </h1>

              <Button
                type="submit"
                btnText="Save changes"
                width="max"
                className="border-primary bg-[#023E8A] w-max text-[16px] text-white leading-[24px] font-medium"
              />
            </div>
            <div className="flex items-center gap-[64px] border-b border-gray800 py-[20px]">
              <div className="w-[280px] flex flex-col">
                <span className="font-medium text-[14px] leading-[20px] text-gray700">
                  Restrict funding account
                </span>
                <span className="font-normal text-[14px] leading-[20px] text-gray400">
                  Restrict users from funding their account
                </span>
              </div>
              <Switch
                checked={restrictFunding}
                value={restrictFunding}
                onChange={(e) => {
                  setRestrictFunding(e.target.checked);
                  setFieldValue("restrictFunding", e.target.checked);
                }}
                inputProps={{ "aria-label": "controlled" }}
              />
            </div>
            <div className="flex items-center gap-[64px] border-b border-gray800 py-[20px]">
              <div className="w-[280px] flex flex-col">
                <span className="font-medium text-[14px] leading-[20px] text-gray700">
                  Restrict Withdrawal
                </span>
                <span className="font-normal text-[14px] leading-[20px] text-gray400">
                  This will prevent all users from withdrawing from their
                  account
                </span>
              </div>
              <Switch
                checked={restrictWithdrawal}
                value={restrictWithdrawal}
                onChange={(e) => {
                  setRestrictWithdrawal(e.target.checked);
                  setFieldValue("restrictWithdrawal", e.target.checked);
                }}
                inputProps={{ "aria-label": "controlled" }}
              />
            </div>
            <div className="">
              <div className="flex items-center gap-[64px] border-b border-gray800 py-[20px]">
                <div className="w-[280px] flex flex-col">
                  <span className="font-medium text-[14px] leading-[20px] text-gray700">
                    Restrict all listing
                  </span>
                  <span className="font-normal text-[14px] leading-[20px] text-gray400">
                    This will prevent users from listing a property
                  </span>
                </div>
                <div className="flex flex-col">
                  <FormControlLabel
                    control={
                      <Switch
                        checked={restrictLandlord}
                        value={restrictLandlord}
                        onChange={(e) => {
                          setRestrictLandlord(e.target.checked);
                          setFieldValue("restrictLandlord", e.target.checked);
                        }}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    }
                    label={
                      <label className="font-medium text-[14px] leading-[20px] text-gray700">
                        Landlord
                      </label>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={restrictAgent}
                        value={restrictAgent}
                        onChange={(e) => {
                          setRestrictAgent(e.target.checked);
                          setFieldValue("restrictAgent", e.target.checked);
                        }}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    }
                    label={
                      <label className="font-medium text-[14px] leading-[20px] text-gray700">
                        Agent
                      </label>
                    }
                  />
                </div>
              </div>
              <div className="flex items-center gap-[64px] border-b border-gray800 py-[20px]">
                <div className="w-[280px] flex flex-col">
                  <span className="font-medium text-[14px] leading-[20px] text-gray700">
                    Restrict tenants from renting or buying
                  </span>
                  <span className="font-normal text-[14px] leading-[20px] text-gray400">
                    This will prevent tenants from making payment for all
                    properties
                  </span>
                </div>
                <Switch
                  checked={restrictTenant}
                  value={restrictTenant}
                  onChange={(e) => {
                    setRestrictTenant(e.target.checked);
                    setFieldValue("restrictTenant", e.target.checked);
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AdvancedSettings;
