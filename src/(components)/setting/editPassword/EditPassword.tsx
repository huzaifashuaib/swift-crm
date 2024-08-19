"use client";

import Input from "@/(components)/input/Input";
import useEditPassword from "./useEditPassword";

const EditPassword = () => {
  const {
    password,
    setPassword,
    newPassword,
    setNewPassword,
    loading,
    FaSpinner,
    handleupdatePassword,
  } = useEditPassword();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full border border-btnColor ">
        <h1 className="text-2xl text-btnColor font-bold text-center my-4">
          Update Password
        </h1>
        <div>
          <Input
            type="password"
            disable={false}
            value={password}
            label="Old Password"
            placeholder="Enter Your Old Password"
            onchange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <Input
            type="password"
            disable={false}
            value={newPassword}
            label="New Password"
            placeholder="Enter Your New Password"
            onchange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          onClick={handleupdatePassword}
          className="w-full bg-btnColor text-white font-bold py-2 rounded-lg hover:bg-activeLink hover:text-btnColor transition-colors flex items-center justify-center"
        >
          <div className="flex justify-center items-center gap-1">
            {loading && <FaSpinner className="animate-spin mr-2" />}
            <h1>Update Password</h1>
          </div>
        </button>
      </div>
    </div>
  );
};

export default EditPassword;
