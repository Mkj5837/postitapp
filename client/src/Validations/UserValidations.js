import * as yup from "yup";
export const userSchemaValidation = yup.object().shape({
  name: yup.string().required("Name is required."),
  email: yup.string().email("Email is invlid.").required("Email is required."),
  password: yup.string().min(4).max(20).required("Password is required."),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password does not match.")
    .required("Confirm Password is required."),
});
