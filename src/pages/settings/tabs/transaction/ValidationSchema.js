import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
  privatePropertyPercentage: Yup.string().nullable().required("Required"),
  propertyFee: Yup.string().nullable().required("Required"),
  propertyUnderXampPercentage: Yup.string().nullable().required("Required"),
  renovatedPropertyPercentage: Yup.string().nullable().required("Required"),
  withdrawalFee: Yup.string().nullable().required("Required"),
});
