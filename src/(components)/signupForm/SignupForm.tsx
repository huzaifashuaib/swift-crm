"use client";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Input from '@/(components)/input/Input';
import { validationSignUpSchema } from '@/utils/axiosInstance/validation/signupValidation';
import useSignupForm from './useSignupForm';

const SignupForm = () => {
  const { handleSubmitRegister, FaSpinner, loading } = useSignupForm();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSignUpSchema}
      onSubmit={handleSubmitRegister}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field
              as={Input}
              type="text"
              name="name"
              label="Name"
              placeholder="Enter Your Name"
            />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <Field
              as={Input}
              type="email"
              name="email"
              label="Email"
              placeholder="Enter Your Email"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <Field
              as={Input}
              type="password"
              name="password"
              label="Password"
              placeholder="Enter Your Password"
            />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
          </div>
          <button
            disabled={isSubmitting || loading}
            type="submit"
            className={`w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors ${
              isSubmitting || loading ? "cursor-no-drop" : "cursor-pointer"
            }`}
          >
            <div className="flex justify-center items-center gap-1">
              {(isSubmitting || loading) && <FaSpinner className="animate-spin mr-2" />}
              <h1>Sign Up</h1>
            </div>
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
