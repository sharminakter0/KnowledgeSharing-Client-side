// src/components/ThemeToggle.jsx
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "./useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-5 right-10 bg-blue-500 border-2 border-blue-300 text-white p-3 rounded-full shadow-lg  transition z-50"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <FiMoon className="w-5 h-5  rounded-full" />
      ) : (
        <FiSun className="w-5 h-5 rounded-full text-black" />
      )}
    </button>
  );
}

export default ThemeToggle;
