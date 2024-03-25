import { FormControl, MenuItem, Select } from "@mui/material";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import Button from "../../../../components/button";

const ListingSettings = () => {
  const [approval, setApproval] = useState("");
  const [verification, setVerification] = useState("");
  const [rentIncrement, setRentIncrement] = useState("");
  const [termination, setTermination] = useState("");

  return (
    <Formik
      initialValues={{
        approval: "",
        termination: "",
        rentIncrement: "",
        verification: "",
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
                Listing Setting
              </h1>

              <Button
                type="submit"
                btnText="Save changes"
                width="max"
                containerClass="border-primary bg-[#023E8A] w-max text-[16px] text-white leading-[24px] font-medium"
              />
            </div>
            <div className="border-t border-t-[#EAECF0] pt-[20px] flex flex-col gap-[20px]">
              <div className="grid grid-cols-3">
                <span className="font-semibold text-[14px] leading-[20px] text-black100">
                  Time Frame
                </span>
                <div className="flex flex-col gap-[16px] w-[512px]">
                  <FormControl sx={{ minWidth: 120 }}>
                    <label className="font-medium text-[14px] leading-[20px] text-gray700">
                      Approval on listings
                    </label>
                    <Select
                      value={approval}
                      onChange={(e) => {
                        setApproval(e.target.value);
                        setFieldValue("approval", e.target.value);
                      }}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      name="approval"
                      renderValue={(selected) => {
                        if (selected?.length === 0) {
                          return (
                            <div className="flex items-center justify-between">
                              <span className="">0</span>
                              <div className="">Days</div>
                            </div>
                          );
                        } else {
                          return selected;
                        }
                      }}
                    >
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                      <MenuItem value="3">3</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={{ minWidth: 120 }}>
                    <label className="font-medium text-[14px] leading-[20px] text-gray700">
                      Verifications
                    </label>
                    <Select
                      value={verification}
                      onChange={(e) => {
                        setVerification(e.target.value);
                        setFieldValue("verification", e.target.value);
                      }}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      name="verification"
                      renderValue={(selected) => {
                        if (selected?.length === 0) {
                          return (
                            <div className="flex items-center justify-between">
                              <span className="">0</span>
                              <div className="">Days</div>
                            </div>
                          );
                        } else {
                          return selected;
                        }
                      }}
                    >
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                      <MenuItem value="3">3</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={{ minWidth: 120 }}>
                    <label className="font-medium text-[14px] leading-[20px] text-gray700">
                      Landlord rent increment
                    </label>
                    <Select
                      value={rentIncrement}
                      onChange={(e) => {
                        setRentIncrement(e.target.value);
                        setFieldValue("rentIncrement", e.target.value);
                      }}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      name="rentIncrement"
                      renderValue={(selected) => {
                        if (selected?.length === 0) {
                          return (
                            <div className="flex items-center justify-between">
                              <span className="">0</span>
                              <div className="">Days</div>
                            </div>
                          );
                        } else {
                          return selected;
                        }
                      }}
                    >
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                      <MenuItem value="3">3</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={{ minWidth: 120 }}>
                    <label className="font-medium text-[14px] leading-[20px] text-gray700">
                      Tenancy termination
                    </label>
                    <Select
                      value={termination}
                      onChange={(e) => {
                        setTermination(e.target.value);
                        setFieldValue("termination", e.target.value);
                      }}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      name="termination"
                      renderValue={(selected) => {
                        if (selected?.length === 0) {
                          return (
                            <div className="flex items-center justify-between">
                              <span className="">0</span>
                              <div className="">Days</div>
                            </div>
                          );
                        } else {
                          return selected;
                        }
                      }}
                    >
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                      <MenuItem value="3">3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ListingSettings;
