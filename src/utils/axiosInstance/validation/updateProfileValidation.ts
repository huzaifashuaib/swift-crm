import * as Yup from "yup";

export const validationUpdateProfileSchema = Yup.object({
  userName: Yup.string().required("User Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});
