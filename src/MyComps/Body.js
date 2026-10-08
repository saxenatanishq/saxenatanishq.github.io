import React, { useEffect } from "react";
import NameAnimation from "./NameAnimation";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";

const Body = () => {
  // Intersection observer for fade-in sections
  useEffect(() => {
    const els = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => observer.observe(el));
    return () => els.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <main className="main">
      <NameAnimation />
      <div className="container">
        <About />
        <Projects />
        <Skills />
      </div>
    </main>
  );
};

export default Body;
