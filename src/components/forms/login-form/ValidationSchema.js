import * as Yup from "yup";

import { emailRegExp } from "../../../regex";

export const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegExp, "Email address is not valid")
    .nullable()
    .required("Required"),
  password: Yup.string()
    .min(8, "Password needs to be a minimum of 8 numbers")
    .nullable()
    .required("Required"),
});
