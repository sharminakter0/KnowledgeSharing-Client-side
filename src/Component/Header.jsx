import React, { useContext, useState } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { ThemeToggle } from "./ThemeToggle";
import KnowledgeLogo from "./KnowledgeLogo/KnowledgeLogo";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 dark:text-white text-gray-800 shadow-sm px-4 sm:px-6 md:px-12">
      <div className="flex items-center justify-between h-16">
        
        {/* Logo + Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <KnowledgeLogo />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6 text-sm">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600 underline" : "hover:text-purple-500"}>Home</NavLink>
          <NavLink to="/all-articles" className={({ isActive }) => isActive ? "text-blue-600 underline" : "hover:text-purple-500"}>All Articles</NavLink>
          {user && (
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-blue-600 underline" : "hover:text-purple-500"}>
              Dashboard
            </NavLink>
          )}
          <NavLink to="/about-us" className={({ isActive }) => isActive ? "text-blue-600 underline" : "hover:text-purple-500"}>About Us</NavLink>
          <NavLink to="/term-use" className={({ isActive }) => isActive ? "text-blue-600 underline" : "hover:text-purple-500"}>Terms of Use</NavLink>
        </nav>

        {/* Right Side: Theme + User */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {user ? (
            <div className="flex items-center gap-3">
              <img
                src={user.photoURL}
                alt="user"
                className="w-10 h-10 rounded-full border-2 border-blue-500 hidden lg:block"
                title={user.displayName || "User"}
              />
              <button
                onClick={logout}
                className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/auth/sign-in"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Sign In
            </NavLink>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 space-y-3">
          <NavLink to="/" className="block hover:text-purple-500">Home</NavLink>
          <NavLink to="/all-articles" className="block hover:text-purple-500">All Articles</NavLink>
          <NavLink to="/about-us" className="block hover:text-purple-500">About Us</NavLink>
          <NavLink to="/term-use" className="block hover:text-purple-500">Terms of Use</NavLink>
          {user && <NavLink to="/dashboard" className="block hover:text-purple-500">Dashboard</NavLink>}
        </div>
      )}
    </header>
  );
};

export default Header;
