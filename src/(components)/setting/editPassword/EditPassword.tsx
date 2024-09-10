"use client";

import { Formik, Form, Field, ErrorMessage } from 'formik';
import Input from "@/(components)/input/Input";
import useEditPassword from "./useEditPassword";
import { validationUpdatePasswordSchema } from '@/utils/axiosInstance/validation/updatePasswordValidation';


const EditPassword = () => {
  const {
    formData,
    loading,
    handleupdatePassword,
    FaSpinner,
  } = useEditPassword();

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationUpdatePasswordSchema}
      onSubmit={handleupdatePassword}
      enableReinitialize
    >
      {() => (
        <Form>
          <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full border border-btnColor">
              <h1 className="text-2xl text-btnColor font-bold text-center my-4">
                Update Password
              </h1>
              <div>
                <Field
                  type="password"
                  name="password"
                  as={Input}
                  disable={false}
                  label="Old Password"
                  placeholder="Enter Your Old Password"
                />
                <ErrorMessage name="password" component="div" className="text-red-500" />
              </div>
              <div>
                <Field
                  type="password"
                  name="newPassword"
                  as={Input}
                  disable={false}
                  label="New Password"
                  placeholder="Enter Your New Password"
                />
                <ErrorMessage name="newPassword" component="div" className="text-red-500" />
              </div>
              <button
                type="submit"
                className="w-full bg-btnColor text-white font-bold py-2 rounded-lg hover:bg-activeLink hover:text-btnColor transition-colors flex items-center justify-center"
              >
                <div className="flex justify-center items-center gap-1">
                  {loading && <FaSpinner className="animate-spin mr-2" />}
                  <h1>Update Password</h1>
                </div>
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EditPassword;
