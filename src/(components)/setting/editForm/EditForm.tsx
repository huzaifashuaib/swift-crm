"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import Input from "@/(components)/input/Input";
import useEditForm from "./useEditForm";
import Image from "next/image";
import { FaSpinner, FaPlus } from "react-icons/fa";
import { validationUpdateProfileSchema } from "@/utils/axiosInstance/validation/updateProfileValidation";

const EditForm = () => {
  const {
    formData,
    loading,
    handleupdateProfile,
    handleUpload,
    CldUploadButton,
  } = useEditForm();

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationUpdateProfileSchema}
      onSubmit={handleupdateProfile}
      enableReinitialize
    >
      {() => (
        <Form>
          <div className="flex justify-center items-center my-4">
            <CldUploadButton
              uploadPreset={process.env.NEXT_PUBLIC_UPLOAD_PRESET_KEY}
              className={`bg-gray-100 h-28 w-28 border-4 border-btnColor shadow-sm rounded-full relative ${
                formData.imgUrl && "pointer-events-none"
              }`}
              onSuccess={handleUpload}
            >
              <div className="flex justify-center items-center">
                <FaPlus className="text-cardHead" />
              </div>
              <div>
                {formData.imgUrl && (
                  <Image
                    src={formData.imgUrl}
                    alt="user"
                    fill
                    className="absolute object-cover inset-0 h-24 w-24 rounded-full"
                  />
                )}
              </div>
            </CldUploadButton>
          </div>

          <div>
            <Field
              type="text"
              name="userName"
              as={Input}
              disable={false}
              label="User Name"
              placeholder="Enter Your Name"
            />
            <ErrorMessage
              name="userName"
              component="div"
              className="text-red-500"
            />
          </div>

          <div>
            <Field
              type="email"
              name="email"
              as={Input}
              disable={false}
              label="Email"
              placeholder="Enter Your Email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-btnColor text-white font-bold py-2 rounded-lg hover:bg-activeLink hover:text-btnColor transition-colors flex items-center justify-center"
          >
            <div className="flex justify-center items-center gap-1">
              {loading && <FaSpinner className="animate-spin mr-2" />}
              <h1>Change Profile</h1>
            </div>
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default EditForm;
