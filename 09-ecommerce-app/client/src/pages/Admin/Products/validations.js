import * as yup from "yup";

const editScheme = yup.object().shape({
  title: yup.string().required(),
  description: yup
    .string()
    .min(5, "You must enter at least 5 characters")
    .required(),
  price: yup.string().required(),
});

export default editScheme;
