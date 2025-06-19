import React, { useEffect } from "react";
import NameAnimation from "../MyComps/NameAnimation";
import About from "../MyComps/About";
import Projects from "../MyComps/Projects";
import Skills from "../MyComps/Skills";
import Interests from "../MyComps/Interests";

const Body = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section.section-hidden");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("section-hidden");
          entry.target.classList.add("section-visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <main class="max-w-7xl mx-auto py-8 px-6 md:px-8 lg:px-12">
      <NameAnimation />
      <About />
      <Projects />
      <Skills />
      <Interests />
    </main>
  );
};

export default Body;
