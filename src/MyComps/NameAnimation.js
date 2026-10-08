import React, { useEffect, useRef } from "react";
import TVA from "./TVA";

const NameAnimation = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const phrases = [
      "Tanishq Saxena.",
      "a CS undergrad."
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer;

    function tick() {
      const el = textRef.current;
      if (!el) return;

      const current = phrases[phraseIndex];

      if (isDeleting) {
        charIndex--;
        el.textContent = current.substring(0, charIndex);
      } else {
        charIndex++;
        el.textContent = current.substring(0, charIndex);
      }

      let delay = isDeleting ? 60 : 120;

      if (!isDeleting && charIndex === current.length) {
        delay = 1800;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = 400;
      }

      timer = setTimeout(tick, delay);
    }

    tick();
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">
            <span ref={textRef}></span>
            <span className="cursor" />
          </h1>
        </div>
        <TVA />
      </div>
    </section>
  );
};

export default NameAnimation;
