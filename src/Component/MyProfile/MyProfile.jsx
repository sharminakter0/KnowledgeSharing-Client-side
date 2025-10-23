import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    photoURL: user?.photoURL || "",
    bio: user?.bio || "", // if you’re storing this extra field
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUserProfile(formData.displayName, formData.photoURL, formData.bio);
    setIsModalOpen(false);
  };

  return (
    <div className="w-9/12 mx-auto mt-15 p-6 bg-base-100 shadow-lg border rounded-lg items-center flex flex-col text-center">
      <img
        src={user.photoURL}
        alt="User"
        className="w-32 h-32 rounded-full border items-center"
      />
      <h2 className="text-2xl font-bold mt-5">{user.displayName}</h2>
      <p>{user.email}</p>

      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-6 btn btn-primary"
      >
        Edit Profile
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-xl font-semibold mb-4">Edit Profile</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
                placeholder="Full Name"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="photoURL"
                value={formData.photoURL}
                onChange={handleChange}
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Short bio"
                className="textarea textarea-bordered w-full"
              />
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn btn-ghost"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;