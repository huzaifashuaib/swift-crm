"use client";
import Image from "next/image";
import { useProfileShow } from "./useProfileShow";
import Link from "next/link";

const Profile = () => {
  const { userImage, userName, userEmail, handleEditProfile } =
    useProfileShow();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent">
      <div className="bg-white shadow-lg border-l-4 border-l-btnColor border-r-4 border-r-btnColor rounded-lg p-8 max-w-sm w-full">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-semibold text-btnColor my-6">
            My Profile
          </h1>
          <div className="relative w-24 h-24">
            <Image
              src={userImage}
              alt="Profile Picture"
              layout="fill"
              className="rounded-full border-4 border-btnColor shadow-sm"
            />
          </div>
          <h2 className="mt-6 text-2xl font-bold text-btnColor">{userName}</h2>
          <p className="text-btnColor mt-1">{userEmail}</p>
          <div className="my-3">
            <Link href={"/setting/editUserPassword"}>
              <h3 className="text-btnColor font-semibold">Change Password ?</h3>
            </Link>
          </div>
          <button
            onClick={handleEditProfile}
            className="mt-8 bg-btnColor text-white px-6 py-2 rounded-full shadow-md hover:bg-activeLink hover:text-btnColor hover:font-bold focus:outline-none focus:ring-2 focus:ring-activeLink focus:ring-opacity-75"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
