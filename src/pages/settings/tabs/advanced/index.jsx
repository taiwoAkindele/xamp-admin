import { Form, Formik } from "formik";
import React, { useState } from "react";
import Button from "../../../../components/button";
import { FormControlLabel, Switch } from "@mui/material";
import {
  useGetAdvancedSettingsQuery,
  useUpdateAdvancedSettingsMutation,
} from "../../../../api/settingsSlice";
import toast from "react-hot-toast";

const AdvancedSettings = () => {
  const { data } = useGetAdvancedSettingsQuery();
  const { data: advancedSettings } = data || {};

  const [modifyAdvancedSettings, { isLoading }] =
    useUpdateAdvancedSettingsMutation();

  return (
    <Formik
      initialValues={
        advancedSettings || {
          restrictFunding: false,
          restrictGuestsFromListing: false,
          restrictLandlordsFromListing: false,
          restrictTenantsFromRentingOrBuying: false,
          restrictWithdrawal: false,
        }
      }
      onSubmit={async (values, actions) => {
        modifyAdvancedSettings(values)
          .unwrap()
          .then((response) => console.log(response))
          .catch((error) =>
            toast.error(error?.data?.message || "An error occurred, try again!")
          );
      }}
    >
      {({ handleChange, errors, setFieldValue, values }) => (
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
                containerClass="border-primary bg-[#023E8A] w-max text-[16px] text-white leading-[24px] font-medium"
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
                checked={values?.restrictFunding}
                name="restrictFunding"
                value={values?.restrictFunding}
                onChange={(e) => {
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
                checked={values?.restrictWithdrawal}
                value={values?.restrictWithdrawal}
                onChange={(e) => {
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
                        checked={values?.restrictLandlordsFromListing}
                        value={values?.restrictLandlordsFromListing}
                        name="restrictLandlordsFromListing"
                        onChange={(e) => {
                          setFieldValue(
                            "restrictLandlordsFromListing",
                            e.target.checked
                          );
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
                        checked={values?.restrictGuestsFromListing}
                        name="restrictGuestsFromListing"
                        value={values?.restrictGuestsFromListing}
                        onChange={(e) => {
                          setFieldValue(
                            "restrictGuestsFromListing",
                            e.target.checked
                          );
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
                  checked={values?.restrictTenantsFromRentingOrBuying}
                  value={values?.restrictTenantsFromRentingOrBuying}
                  name="restrictTenantsFromRentingOrBuying"
                  onChange={(e) => {
                    setFieldValue(
                      "restrictTenantsFromRentingOrBuying",
                      e.target.checked
                    );
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
