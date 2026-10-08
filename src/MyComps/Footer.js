import React, { useEffect, useRef } from "react";

/**
 * Footer — TVA CRT strip adapted from footer-reference.html.
 * Sacred-timeline canvas animation + flicker/scanline treatment, with the
 * site's real contact links. The reference's theme button is removed: the
 * only theme control is the header toggle.
 */
const BRANCHES = [
  { x: 0.1, dir: 1, offset: 0 },
  { x: 0.22, dir: -1, offset: 1.5 },
  { x: 0.35, dir: 1, offset: 3 },
  { x: 0.48, dir: 1, offset: 4.5 },
  { x: 0.6, dir: -1, offset: 2 },
  { x: 0.72, dir: 1, offset: 5 },
  { x: 0.85, dir: -1, offset: 1 },
  { x: 0.95, dir: 1, offset: 6 },
];

const Footer = () => {
  const timelineRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = timelineRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let rafId = 0;
    let time = 0;
    let observer = null;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const resize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width;
      canvas.height = height;
    };

    // Colors are read every frame so a theme switch recolors the
    // timeline immediately.
    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.04;

      const styles = getComputedStyle(container);
      const mainColor = styles.getPropertyValue("--ft-timeline-main").trim();
      const branchColor = styles
        .getPropertyValue("--ft-timeline-branch")
        .trim();

      const centerY = height / 2;
      const amplitude = 5;
      const frequency = 0.015;
      const branchLength = height * 0.45;

      ctx.lineCap = "round";
      ctx.shadowBlur = 2;
      ctx.shadowColor = branchColor;
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = branchColor;

      BRANCHES.forEach((b) => {
        const startX = b.x * width;
        const startY = centerY + Math.sin(startX * frequency + time) * amplitude;
        const swayX = Math.cos(time * 0.8 + b.offset) * 8;
        const swayY = Math.sin(time * 0.8 + b.offset) * 5;

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        const endX = startX + branchLength + swayX;
        const endY = startY + b.dir * branchLength * -1 + swayY;
        ctx.quadraticCurveTo(
          startX + branchLength * 0.5,
          startY + b.dir * branchLength * -0.2,
          endX,
          endY
        );
        ctx.stroke();
      });

      ctx.beginPath();
      for (let x = -10; x <= width + 10; x += 5) {
        const y = centerY + Math.sin(x * frequency + time) * amplitude;
        if (x === -10) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.shadowBlur = 4;
      ctx.shadowColor = mainColor;
      ctx.strokeStyle = mainColor;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const loop = () => {
      drawFrame();
      rafId = window.requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);

    if (reducedMotion) {
      // Static frame; redraw when the theme changes so colors stay right.
      drawFrame();
      observer = new MutationObserver(drawFrame);
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"],
      });
    } else {
      rafId = window.requestAnimationFrame(loop);
    }

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <footer className="ft-footer">
      <div className="ft-overlay" />

      <div className="ft-content">
        <div className="ft-timeline" ref={timelineRef}>
          <canvas ref={canvasRef} />
        </div>

        <svg
          className="ft-separator"
          viewBox="0 0 1000 5"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M 0,2 L 980,2 Q 1000,2 1000,0"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            vectorEffect="non-scaling-stroke"
            opacity="0.6"
          />
        </svg>

        <div className="ft-bar">
          <div className="ft-logo">
            <span>T</span>
            <span>V</span>
            <span>A</span>
          </div>

          <div className="ft-info">© 2026 Authorized by HWR</div>

          <div className="ft-links">
            <a href="mailto:tanishqsaxena.in@gmail.com">EMAIL</a>
            <a
              href="https://github.com/saxenatanishq"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>
            <a
              href="https://linkedin.com/in/tanishq-saxena"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>
            <a
              href="https://saxenatanishq.github.io/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              RESUME
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
