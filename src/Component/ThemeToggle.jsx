// import { useTheme } from '../hooks/use-theme';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from './useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}className="p-2 rounded-full hover:bg-base-200 transition-colors"aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
      {theme === 'light' ? (
        <FiMoon className="w-5 h-5  bg-amber-50 rounded-full " />) : (
        <FiSun className="w-5 h-5 bg-amber-50 rounded-full text-black" />)}
    </button>);
}
export default ThemeToggle;