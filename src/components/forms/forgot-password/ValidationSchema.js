import * as Yup from "yup";

import { emailRegExp } from "../../../regex";

export const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegExp, "Email address is not valid")
    .nullable()
    .required("Required"),
});
