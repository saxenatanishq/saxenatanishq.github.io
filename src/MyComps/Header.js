import React, { useEffect, useRef, useState } from "react";

const readTheme = () =>
  document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";

const Header = () => {
  const [theme, setTheme] = useState(readTheme);
  const transitionTimer = useRef(null);

  useEffect(
    () => () => {
      window.clearTimeout(transitionTimer.current);
    },
    []
  );

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;

    setTheme(next);
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* private mode — theme still applies for this session */
    }

    // Brief, subtle color fade while the theme switches.
    root.classList.add("theme-transition");
    window.clearTimeout(transitionTimer.current);
    transitionTimer.current = window.setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 300);
  };

  const isDark = theme === "dark";

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <span className="header-name">Tanishq Saxena</span>
          <nav className="header-nav">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#/blogs">Blogs</a>
            <a
              href="https://saxenatanishq.github.io/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-resume"
            >
              Resume
            </a>
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              <i
                className={isDark ? "fa-solid fa-moon" : "fa-solid fa-sun"}
                aria-hidden="true"
              />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
