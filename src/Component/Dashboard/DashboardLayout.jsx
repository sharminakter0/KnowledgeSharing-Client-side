import React, { useContext } from "react";
import { Outlet, NavLink, Link } from "react-router"; // ✅ use react-router-dom
import { AuthContext } from "../../Provider/AuthProvider";


import {
  Home,
  User,
  FileText,
  PlusCircle,
  CheckSquare,
  Users,
  BarChart,
  LogOut,
} from "lucide-react";

const DashboardLayout = () => {
  const { user, role, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => console.log("Logged out"))
      .catch((err) => console.error(err));
  };

  // A reusable link style
  const linkStyle = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 
    ${
      isActive
        ? "bg-blue-600 text-white"
        : "hover:bg-blue-100 hover:text-blue-600 text-blue-600"
    }`;

  // Sidebar Menus by Role
  const userMenu = (
    <>
      <li>
        <NavLink to="/dashboard/my-profile" className={linkStyle}>
          <User className="w-5 h-5" /> My Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/my-articles" className={linkStyle}>
          <FileText className="w-5 h-5" /> My Articles
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/post-articles" className={linkStyle}>
          <PlusCircle className="w-5 h-5" /> Post Articles
        </NavLink>
      </li>
    </>
  );

  const verifiedMenu = (
    <>
      <li>
        <NavLink to="/dashboard/my-profile" className={linkStyle}>
          <User className="w-5 h-5" /> My Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/my-articles" className={linkStyle}>
          <FileText className="w-5 h-5" /> My Articles
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/post-articles" className={linkStyle}>
          <PlusCircle className="w-5 h-5" /> Post Articles
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/review-articles" className={linkStyle}>
          <CheckSquare className="w-5 h-5" /> Review Articles
        </NavLink>
      </li>
    </>
  );

  const adminMenu = (
    <>
      <li>
        <NavLink to="/dashboard/my-profile" className={linkStyle}>
          <User className="w-5 h-5" /> My Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/manage-users" className={linkStyle}>
          <Users className="w-5 h-5" /> Manage Users
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/manage-articles" className={linkStyle}>
          <FileText className="w-5 h-5" /> Manage Articles
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/site-stats" className={linkStyle}>
          <BarChart className="w-5 h-5" /> Site Statistics
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="drawer lg:drawer-open min-h-screen bg-base-200">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* Page Content */}
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-100 text-blue-600 px-4 lg:px-8 shadow">
          <div className="flex-none lg:hidden">
            <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
          </div>

          {/* Logo */}
          {/* <div className="flex-1 flex items-center gap-2">
            <Lottie animationData={logo} loop={true} className="w-12 h-12" />
            <h2 className="text-xl font-bold text-blue-600">ThinkTrove Dashboard</h2>
          </div> */}

          {/* User Menu */}
          <div className="flex-none">
            {user && (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full border-2 border-blue-300">
                    <img src={user.photoURL} alt="user" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 text-black rounded-box w-52"
                >
                  <li><span>{user.displayName}</span></li>
                  <li><span className="capitalize text-gray-500">{role}</span></li>
                  <li>
                    <button onClick={handleLogout} className="flex items-center gap-2 text-red-500">
                      <LogOut className="w-4 h-4" /> Logout
                    </button>
                  </li>
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
      <div className="drawer-side bg-base-100 font-semibold border-r border-gray-200">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <div>
          <h2 className="text-2xl font-bold ml-7 mt-6 text-blue-600">ThinkTrove</h2>
          <ul className="menu p-4 w-60 mt-4 space-y-1">
            <li>
              <NavLink to="/" className={linkStyle}>
                <Home className="w-5 h-5" /> Home
              </NavLink>
            </li>

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
