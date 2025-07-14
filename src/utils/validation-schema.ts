import * as yup from "yup";

export const signinSchema = yup
  .object({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().label("Password"),
  })
  .required();

export const signupSchema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup.string().required("Password is required"),
    termsAccepted: yup
      .boolean()
      .oneOf([true], "You must accept the terms and conditions")
      .required(),
  })
  .required();