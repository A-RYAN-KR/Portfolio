import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface Props {
  scrollToSection: (section: string) => void;
}

function Navbar({ scrollToSection }: Props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 
            bg-white/80 dark:bg-gray-800/50 
            backdrop-blur-sm 
            z-50 
            border-b border-gray-100 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
            Portfolio
          </span>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="text-gray-700 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-gray-700 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            >
              Contact
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
          {/* Mobile Menu Icon */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button onClick={toggleMobileMenu} aria-label="Toggle menu">
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Side Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 z-40 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <span className="text-lg font-bold text-gray-700 dark:text-gray-300">
            Menu
          </span>
          <button
            className="text-gray-700 dark:text-gray-300"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4 space-y-4 bg-white dark:bg-gray-900">
          <button
            onClick={() => {
              scrollToSection("about");
              toggleMobileMenu();
            }}
            className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            About
          </button>
          <button
            onClick={() => {
              scrollToSection("work");
              toggleMobileMenu();
            }}
            className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            Work
          </button>
          <button
            onClick={() => {
              scrollToSection("projects");
              toggleMobileMenu();
            }}
            className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            Projects
          </button>
        </div>
      </div>
      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;
