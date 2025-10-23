import React, { useContext } from "react";
import { Outlet, NavLink, Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import Lottie from "lottie-react";
import logo from "../../assets/lottie/cENfIyCPDD.json";

const DashboardLayout = () => {
  const { user, role, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => console.log("Logged out"))
      .catch((err) => console.error(err));
  };

  // Sidebar Menus by Role
  const userMenu = (
    <>
      <li><NavLink to="/dashboard/my-profile">My Profile</NavLink></li>
      <li><NavLink to="/dashboard/my-articles">My Articles</NavLink></li>
      <li><NavLink to="/dashboard/post-articles">Post Articles</NavLink></li>
    </>
  );

  const verifiedMenu = (
    <>
      <li><NavLink to="/dashboard/my-profile">My Profile</NavLink></li>
      <li><NavLink to="/dashboard/my-articles">My Articles</NavLink></li>
      <li><NavLink to="/dashboard/post-articles">Post Articles</NavLink></li>
      <li><NavLink to="/dashboard/review-articles">Review Articles</NavLink></li>
    </>
  );

  const adminMenu = (
    <>
    <li><NavLink to="/dashboard/my-profile">My Profile</NavLink></li>
      <li><NavLink to="/dashboard/manage-users">Manage Users</NavLink></li>
      <li><NavLink to="/dashboard/manage-articles">Manage Articles</NavLink></li>
      <li><NavLink to="/dashboard/site-stats">Site Statistics</NavLink></li>
    </>
  );

  return (
    <div className="drawer lg:drawer-open min-h-screen">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* Page Content */}
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-blue-950 text-white px-4 lg:px-8 shadow">
          <div className="flex-none lg:hidden">
            <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
          </div>

          {/* Logo */}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Lottie animationData={logo} loop={true} className="w-8 md:w-8" />
              <h2 className="font-bold text-xl md:text-2xl">ThinkTrove</h2>
            </div>
          </div>

          {/* User Menu */}
          <div className="flex-none">
            {user && (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full border-2 border-green-400">
                    <img src={user.photoURL} alt="user" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 text-black rounded-box w-52"
                >
                  <li><span>{user.displayName}</span></li>
                  <li><span className="capitalize text-gray-500">{role}</span></li>
                  <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Dashboard Page Content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side bg-blue-950 text-white">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <div>
          <h2 className="text-2xl ml-7 mt-6">Dashboard</h2>
          <ul className="menu p-4 w-60 mt-4">
            <li><NavLink to="/">Home</NavLink></li>
            {role === "admin" && adminMenu}
            {role === "verified" && verifiedMenu}
            {role === "user" && userMenu}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;