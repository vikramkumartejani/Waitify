import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';  

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="p-1.5 md:p-3 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-300"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="text-gray-800" />
      ) : (
        <Sun className="text-yellow-500" />
      )}
    </button>
  );
};

export default ThemeToggle;