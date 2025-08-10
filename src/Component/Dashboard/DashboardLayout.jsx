import React, { useContext } from 'react';
import { Outlet, NavLink, Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import Lottie from 'lottie-react';
import logo from "../../assets/lottie/cENfIyCPDD.json"

const DashboardLayout = () => {

    const {user}=useContext(AuthContext)
  return (
    <div className="drawer lg:drawer-open min-h-screen">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle " />

      {/* Page Content */}
      <div className="drawer-content    flex flex-col">
        {/* Dashboard Navbar */}
        <div className="w-full navbar bg-blue-950 text-white px-4 lg:px-8 shadow">
          <div className="flex-none  lg:hidden">
            <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost text-white ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
          </div>

          {/* Navbar Center Text */}
          <div className="flex-1 ">
          <div className='flex'>
                <Lottie
     animationData={logo}
     loop={true}
     className="w-8 md:w-8   gap-0"> 
     </Lottie> 
     <h2 className="font-bold text-xl md:text-2xl">ThinkTrove</h2>
       </div>     
          </div>

          {/* User Profile */}
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full border-2 border-green-400">
                  <img src={user.photoURL} alt="user" />
                </div>
              </label>
              <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 text-black rounded-box w-52">
                <li><a>Profile</a></li>
                <li> <Link to="">Logout</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dashboard Page Content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      {/* Side Drawer */}
      <div className="drawer-side bg-blue-950 text-white ">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <div className=''>
        <h2 className='text-2xl ml-7 mt-6 '>Dashboard</h2>
        <ul className="menu p-4 w-60 mt-4">
             <li><NavLink to="/">Home</NavLink></li>
             <li><NavLink to="/dashboard/my-profile">My Profile</NavLink></li>
          <li><NavLink to="/dashboard/my-articles">My Articles</NavLink></li>
          <li><NavLink to="/dashboard/post-articles">Post Articles</NavLink></li>
         
        </ul></div>
      </div>
    </div>
  );
};

export default DashboardLayout;
