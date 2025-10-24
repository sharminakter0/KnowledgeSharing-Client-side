import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { ThemeToggle } from "./ThemeToggle";
import KnowledgeLogo from "./KnowledgeLogo/KnowledgeLogo";
import NotificationBell from "./NotificationBell";
import RecentlyViewed from "./RecentlyViewed";
import { useDispatch } from "react-redux";
import { addNotification } from "../redux/features/notificationSlice";

// 🧩 Lucide Icons
import { Home, FileText, BookOpen, History, LayoutDashboard, LogOut, LogIn } from "lucide-react";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      const hasSeenTest = sessionStorage.getItem("seenTestNotification");
      if (!hasSeenTest) {
        dispatch(
          addNotification({
            id: `test-${Date.now()}`,
            title: "Welcome back!",
            timestamp: new Date().toISOString(),
            read: false,
          })
        );
        sessionStorage.setItem("seenTestNotification", "1");
      }
    }
  }, [user, dispatch]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-base-100 dark:bg-gray-900 dark:text-white text-blue-500 shadow-sm px-4 sm:px-6 md:px-12">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div className="hidden lg:flex">
            <KnowledgeLogo />
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6 text-sm items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-1 ${isActive ? "text-blue-700 underline" : "hover:text-blue-800"}`
            }
          >
            <Home size={14} /> Home
          </NavLink>

          <NavLink
            to="/all-articles"
            className={({ isActive }) =>
              `flex items-center gap-1 ${isActive ? "text-blue-700 underline" : "hover:text-blue-800"}`
            }
          >
            <FileText size={14} /> All Articles
          </NavLink>

          <NavLink
            to="/quiz"
            className={({ isActive }) =>
              `flex items-center gap-1 ${isActive ? "text-blue-700 underline" : "hover:text-blue-800"}`
            }
          >
            <BookOpen size={14} /> Quiz
          </NavLink>

          <NavLink
            to="/history"
            className={({ isActive }) =>
              `flex items-center gap-1 ${isActive ? "text-blue-700 underline" : "hover:text-blue-800"}`
            }
          >
            <History size={14} /> History
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-1 ${isActive ? "text-blue-600 underline" : "hover:text-blue-800"}`
            }
          >
            <LayoutDashboard size={14} /> Dashboard
          </NavLink>
        </nav>

        {/* Right Side: Theme + User */}
        <div className="flex items-center gap-4">
          {user && <NotificationBell />}
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
                className="flex items-center gap-1 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
              >
                <LogOut size={14} /> Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/auth/sign-in"
              className="flex items-center gap-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              <LogIn size={18} /> Sign In
            </NavLink>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 space-y-3">
          <NavLink to="/" className="flex items-center gap-2 hover:text-blue-600">
            <Home size={18} /> Home
          </NavLink>
          <NavLink to="/all-articles" className="flex items-center gap-2 hover:text-blue-600">
            <FileText size={18} /> All Articles
          </NavLink>
          <NavLink to="/quiz" className="flex items-center gap-2 hover:text-blue-600">
            <BookOpen size={18} /> Quiz
          </NavLink>
          <NavLink to="/history" className="flex items-center gap-2 hover:text-blue-600">
            <History size={18} /> History
          </NavLink>
          {user && (
            <NavLink to="/dashboard" className="flex items-center gap-2 hover:text-blue-600">
              <LayoutDashboard size={18} /> Dashboard
            </NavLink>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
