import * as yup from "yup";

let validateSchema = yup.object().shape({
  email: yup
    .string()
    .email("It must be e-mail format")
    .required("Email area is required"),
  password: yup
    .string()
    .min(8, "Password is too short - should be 8 chars minimum")
    .matches(/(?=.*[0-9])/, "Password must contain a number.")
    .required("Password area is required"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords doesn't match")
    .required(),
});

export default validateSchema;
