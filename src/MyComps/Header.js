import React, { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.remove("light", "dark");
    htmlElement.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const icon = document.getElementById("theme-icon");
    icon.classList.remove("animate-spin-fast");

    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm py-4 px-6 md:px-8 lg:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-end items-center">
        <nav className="flex items-center space-x-4 md:space-x-6">
          <div className="hidden md:flex items-center space-x-4 ml-4">
            <a
              href="#"
              target="_blank"
              className="btn-header bg-blue-700 text-white hover:bg-blue-900 text-sm"
            >
              <i className="fas fa-file-alt mr-2"></i> Resume
            </a>
            <a
              href="https://github.com/saxenatanishq"
              target="_blank"
              className="btn-header bg-gray-800 text-white hover:bg-gray-900 text-sm"
            >
              <i className="fab fa-github mr-2"></i> GitHub
            </a>
            <a
              href="https://linkedin.com/in/tanishq-saxena"
              target="_blank"
              className="btn-header bg-blue-700 text-white hover:bg-blue-900 text-sm"
            >
              <i className="fab fa-linkedin mr-2"></i> LinkedIn
            </a>
          </div>

          <button
            id="theme-toggle"
            className="p-2 rounded-full bg-transparent text-gray-700 transition-colors duration-200 focus:outline-none"
            onClick={toggleTheme}
          >
            <i
              className={`fas ${
                    theme === "light" ? "fa-moon" : "fa-sun animate-spin-fast"
                } text-lg`}

              id="theme-icon"
            ></i>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;