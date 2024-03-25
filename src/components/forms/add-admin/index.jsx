import { Form, Formik } from "formik";
import React, { useState } from "react";
import { TextInput } from "../../inputs";
import { FormControl, MenuItem, Select } from "@mui/material";
import Button from "../../button";
import { useCreateAdminMutation } from "../../../api/settingsSlice";
import toast from "react-hot-toast";
import { ValidationSchema } from "./ValidationSchema";

const AddAdmin = () => {
  const [level, setLevel] = useState("");
  const [createNewAdmin, { isLoading }] = useCreateAdminMutation();
  return (
    <div>
      <Formik
        initialValues={{ email: "", firstName: "", lastName: "", level: "" }}
        validationSchema={ValidationSchema}
        onSubmit={async (values, actions) => {
          createNewAdmin(values)
            .unwrap()
            .then(() => {
              close();
            })
            .catch((error) => {
              toast.error(
                error?.data?.message || "An error occurred, please try again!"
              );
            });
        }}
      >
        {({ handleChange, errors, setFieldValue }) => (
          <Form className="flex flex-col gap-[20px]">
            <div className="flex items-center gap-[16px]">
              <TextInput
                type="text"
                name="firstName"
                label="First Name*"
                placeholder="First Name"
                onChange={handleChange}
                errors={errors}
              />
              <TextInput
                type="text"
                name="lastName"
                label="Last Name*"
                placeholder="Last Name"
                onChange={handleChange}
                errors={errors}
              />
            </div>
            <TextInput
              type="text"
              name="email"
              label="Email*"
              placeholder="Enter your email"
              onChange={handleChange}
              errors={errors}
            />
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <label className="font-medium text-[14px] leading-[20px] text-gray700">
                Select Level
              </label>
              <Select
                value={level}
                onChange={(e) => {
                  setLevel(e.target.value);
                  setFieldValue("level", e.target.value);
                }}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                name="level"
                renderValue={(selected) => {
                  if (selected?.length === 0) {
                    return <em>Select Level</em>;
                  } else {
                    return selected;
                  }
                }}
              >
                <MenuItem value="1">Level 1</MenuItem>
                <MenuItem value="2">Level 2</MenuItem>
                <MenuItem value="3">Level 3</MenuItem>
              </Select>
            </FormControl>
            <Button
              type="submit"
              loading={isLoading}
              disabled={isLoading}
              btnText="Add Admin"
              containerClass="border-primary bg-[#023E8A] text-[16px] text-white leading-[24px] font-medium"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddAdmin;
