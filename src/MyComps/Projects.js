import React from "react";

const projects = [
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
        {projects.map((p) => (
          <div key={p.heading} className="project-item">
            <div className="project-header">
              <h3 className="project-title">
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  {p.heading}
                </a>
              </h3>
              <span className="project-date">{p.date}</span>
            </div>
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
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
