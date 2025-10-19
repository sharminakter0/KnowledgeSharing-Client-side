import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all users
  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Handle role update
  const handleMakeAdmin = async (id) => {
    try {
      const res = await axios.patch(`http://localhost:5000/users/${id}`, {
        role: "admin",
      });
      if (res.data.modifiedCount > 0) {
        setUsers((prev) =>
          prev.map((user) =>
            user._id === id ? { ...user, role: "admin" } : user
          )
        );
        Swal.fire("Updated!", "User promoted to Admin!", "success");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error!", "Failed to update user role.", "error");
    }
  };

  // Handle delete user
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This user will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await axios.delete(`http://localhost:5000/users/${id}`);
        if (res.data.deletedCount > 0) {
          setUsers(users.filter((user) => user._id !== id));
          Swal.fire("Deleted!", "User has been deleted.", "success");
        }
      } catch (err) {
        console.error(err);
        Swal.fire("Error!", "Failed to delete user.", "error");
      }
    }
  };

  if (loading) return <p className="text-center mt-10">Loading users...</p>;

  return (
    <div className="max-w-5xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Manage Users</h2>

      <div className="overflow-x-auto bg-base-100 shadow-md rounded-lg">
        <table className="min-w-full border">
          <thead className="bg-base-300">
            <tr>
              <th className="py-3 px-4 text-left border">#</th>
              <th className="py-3 px-4 text-left border">Name</th>
              <th className="py-3 px-4 text-left border">Email</th>
              <th className="py-3 px-4 text-left border">Role</th>
              <th className="py-3 px-4 text-center border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="py-3 px-4 border">{index + 1}</td>
                <td className="py-3 px-4 border">{user.name}</td>
                <td className="py-3 px-4 border">{user.email}</td>
                <td className="py-3 px-4 border capitalize">{user.role}</td>
                <td className="py-3 px-4 border text-center space-x-2">
                  {user.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    >
                      Make Admin
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-5 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
