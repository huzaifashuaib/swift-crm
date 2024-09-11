import * as Yup from "yup";

export const validationUpdatePasswordSchema = Yup.object({
  password: Yup.string().required("Old Password is required"),
  newPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("New Password is required"),
});
