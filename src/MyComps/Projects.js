import React from "react";

const projects = [
  {
    heading: "Nova Shell",
    date: "Oct 2026",
    cat: "Low-Level • Systems",
    desc:
      "High-performance, POSIX-compliant command-line interpreter in C++23 with zero-copy parsing and raw-mode terminal line editing.",
    bullets: [
      "Built recursive multi-stage IPC pipelines (|), file-descriptor redirection, asynchronous background job control (&), and programmable TAB completion.",
      "Achieved sub-microsecond lexical parsing and O(1) LCP candidate resolution using std::string_view, std::span, and <charconv>.",
    ],
    tech: ["C++23", "Linux / POSIX", "Systems Programming"],
    link: "",
    benchmarks: [
      { label: "lcp match (p50)", pct: 15, value: "116ns" },
      { label: "span split (p50)", pct: 29, value: "331ns" },
      { label: "var parser (p50)", pct: 50, value: "822ns" },
      { label: "builtin exec (p50)", pct: 71, value: "1.51µs" },
    ],
  },
  {
    heading: "Local INN: Localization using Invertible Neural Networks",
    date: "Dec 2025",
    desc:
      "Research project on high-speed robot localization using invertible neural networks to estimate full pose distributions with uncertainty.",
    bullets: [
      "Achieved localization accuracy comparable to particle filters while maintaining stability at high speeds (5 m/s).",
      "Reduced localization latency from 45 Hz to 270 Hz using a VAE-based INN pipeline.",
    ],
    tech: ["Python", "PyTorch", "Robotics", "Probabilistic Models"],
    link: "https://github.com/AGV-RG/Local_Inn",
  },
  {
    heading: "Civix (Smart India Hackathon)",
    date: "Aug – Sept 2025",
    desc:
      "Full-stack civic issue reporting platform with scalable backend services and role-based workflows.",
    bullets: [
      "Implemented JWT authentication and role-based access control.",
      "Designed PostgreSQL-backed issue lifecycle with REST APIs.",
    ],
    tech: ["React.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
    link: "https://github.com/swrno/civix",
  },
  {
    heading: "Target-Biased Obstacle Avoidance",
    date: "Mar 2025",
    desc:
      "Autonomous navigation algorithm for obstacle avoidance toward specified waypoints using LIDAR data.",
    bullets: [
      "Extended Follow-the-Gap approach using a custom potential function.",
      "Improved robustness in dynamic environments with efficient sensor preprocessing.",
    ],
    tech: ["Python", "NumPy", "Robotics"],
    link: "https://github.com/saxenatanishq/Vehicle-obstacle-avoidance",
  },
  {
    heading: "Sparse Optical Flow",
    date: "Mar 2025",
    desc:
      "Implementation of pyramidal Lucas–Kanade optical flow for sparse motion tracking.",
    bullets: [
      "Built image pyramids and tracking pipelines.",
      "Focused on numerical stability and validation of motion vectors.",
    ],
    tech: ["Python", "Computer Vision"],
    link: "https://github.com/saxenatanishq/Sparse-Optical-Flow",
  },
  {
    heading: "PaperShare",
    date: "Dec 2024",
    desc:
      "Web platform to digitize post-exam answer sheet review between professors and students.",
    bullets: [
      "Implemented role-based access and structured query workflows.",
      "Designed scalable backend data models for academic usage.",
    ],
    tech: ["Django", "HTML", "CSS", "JavaScript", "SQLite"],
    link: "https://github.com/saxenatanishq/PaperShare",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section fade-in">
      <p className="section-label">Projects</p>
      <div className="projects-list">
        {projects.map((p) => {
          const content = (
            <>
              <p className="project-desc">{p.desc}</p>
              <ul className="project-bullets">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="project-tags">
                {p.tech.map((t) => (
                  <span key={t} className="project-tag">
                    {t}
                  </span>
                ))}
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View on GitHub →
                </a>
              )}
            </>
          );

          return (
            <div
              key={p.heading}
              className={
                p.benchmarks ? "project-item project-item--bench" : "project-item"
              }
            >
              {p.cat && <p className="project-cat">{p.cat}</p>}
              <div className="project-header">
                <h3 className="project-title">
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                      {p.heading}
                    </a>
                  ) : (
                    p.heading
                  )}
                </h3>
                <span className="project-date">{p.date}</span>
              </div>
              {p.benchmarks ? (
                <div className="project-body">
                  <div className="project-main">{content}</div>
                  <aside className="project-bench" aria-label="Benchmarks">
                    <p className="project-bench-title">Benchmarks</p>
                    {p.benchmarks.map((b) => (
                      <div key={b.label} className="bench-row">
                        <span className="bench-label">{b.label}</span>
                        <span className="bench-track">
                          <span
                            className="bench-fill"
                            style={{ width: b.pct + "%" }}
                          />
                        </span>
                        <span className="bench-value">{b.value}</span>
                      </div>
                    ))}
                  </aside>
                </div>
              ) : (
                content
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
