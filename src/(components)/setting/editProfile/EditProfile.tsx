import EditForm from "../editForm/EditForm";
import Profile from "../myProfile/MyProfile";

const EditProfile = () => {
  return (
    <div>      
      <div className="bg-white p-8 rounded-lg shadow-lg w-full border border-btnColor">
        <h1 className="text-2xl text-btnColor font-bold text-center my-4">
          Change Profile
        </h1>
        <EditForm />
      </div>
    </div>
  );
};

export default EditProfile;
