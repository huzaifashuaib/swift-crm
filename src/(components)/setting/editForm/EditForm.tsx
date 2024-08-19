"use client";

import Input from "@/(components)/input/Input";
import useEditForm from "./useEditForm";

import Image from "next/image";


const EditForm = () => {
  const {
    userName,
    setUserName,
    email,
    setEmail,
    loading,
    FaSpinner,
    handleupdatePassword,
    imgUrl,
    handleUpload,
    CldUploadButton,
    FaPlus,
  } = useEditForm();

  return (
    <div>
      <div className="flex justify-center items-center my-4 ">
        <CldUploadButton
          uploadPreset={process.env.NEXT_PUBLIC_UPLOAD_PRESET_KEY}
          className={`bg-gray-100 h-28 w-28  border-4 border-btnColor shadow-sm rounded-full relative ${
            imgUrl && "pointer-events-none"
          }`}
          onSuccess={handleUpload}
        >
          <div className="flex justify-center items-center">
            <FaPlus className="text-cardHead" />
          </div>
          <div>
            {imgUrl && (
              <Image
                src={imgUrl}
                alt=""
                fill
                className="absolute object-cover inset-0 h-24 w-24 rounded-full"
              />
            )}
          </div>
        </CldUploadButton>
      </div>

      <div>
        <Input
          type="text"
          disable={false}
          value={userName}
          label="User Name"
          placeholder="Enter Your Name"
          onchange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div>
        <Input
          type="email"
          disable={false}
          value={email}
          label="Email"
          placeholder="Enter Your Email"
          onchange={(e) => setEmail(e.target.value)}
        />
      </div>


      <button
        type="submit"
        onClick={handleupdatePassword}
        className="w-full bg-btnColor text-white font-bold py-2 rounded-lg hover:bg-activeLink hover:text-btnColor transition-colors flex items-center justify-center"
      >
        <div className="flex justify-center items-center gap-1">
          {loading && <FaSpinner className="animate-spin mr-2" />}
          <h1>Change Profile</h1>
        </div>
      </button>
    </div>
  );
};

export default EditForm;
