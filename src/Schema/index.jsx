import * as yup from "yup";
export const basicSchema = yup.object().shape({
  firstname: yup
    .string()
    .matches(/^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9\s\-\/.]+$/, "Please enter valid name")
    .max(40)
    .required("Please fill up this field"),
  lastname: yup
    .string()
    .matches(/^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9\s\-\/.]+$/, "Please enter valid name")
    .max(40)
    .required("Please fill up this field"),
  email: yup
    .string()
    .email("please enter a valid email")
    .required("Please fill up this field"),
  message: yup
    .string()
    .matches(/^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9\s\-\/.]+$/, "Please your message")
    .required("Please fill up this field"),
});
