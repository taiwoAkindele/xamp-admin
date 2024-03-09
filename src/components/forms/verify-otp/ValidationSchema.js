import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
  otp: Yup.string().nullable().required("Required"),
});
