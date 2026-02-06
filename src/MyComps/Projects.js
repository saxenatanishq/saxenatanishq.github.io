import React from "react";

const Projects = () => {
  const projects = [
    {
      heading: "Local INN: Localization using Invertible Neural Networks",
      date: "Dec 2025",
      desc: "Research project on high-speed robot localization using invertible neural networks to estimate full pose distributions with uncertainty.",
      listdesc: [
        "Achieved localization accuracy comparable to particle filters while maintaining stability at high speeds (5 m/s).",
        "Reduced localization latency from 45 Hz to 270 Hz using a VAE-based INN pipeline.",
      ],
      techstack: ["Python", "PyTorch", "Robotics", "Probabilistic Models"],
      link: "https://github.com/AGV-RG/Local_Inn",
    },
    {
      heading: "Civix (Smart India Hackathon)",
      date: "Aug 2025 – Sept 2025",
      desc: "Full-stack civic issue reporting platform with scalable backend services and role-based workflows.",
      listdesc: [
        "Implemented JWT authentication and role-based access control.",
        "Designed PostgreSQL-backed issue lifecycle (Open → In Progress → Resolved) with REST APIs.",
      ],
      techstack: ["React.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
      link: "https://github.com/swrno/civix",
    },
    {
      heading: "Target-Biased Obstacle Avoidance",
      date: "Mar 2025",
      desc: "Autonomous navigation algorithm for obstacle avoidance toward specified waypoints using LIDAR data.",
      listdesc: [
        "Extended Follow-the-Gap approach using a custom potential function.",
        "Improved robustness in dynamic environments with efficient sensor preprocessing.",
      ],
      techstack: ["Python", "NumPy", "Robotics"],
      link: "https://github.com/saxenatanishq/Vehicle-obstacle-avoidance",
    },
    {
      heading: "Sparse Optical Flow",
      date: "Mar 2025",
      desc: "Implementation of pyramidal Lucas–Kanade optical flow for sparse motion tracking.",
      listdesc: [
        "Built image pyramids and tracking pipelines.",
        "Focused on numerical stability and validation of motion vectors.",
      ],
      techstack: ["Python", "Computer Vision"],
      link: "https://github.com/saxenatanishq/Sparse-Optical-Flow",
    },
    {
      heading: "PaperShare",
      date: "Dec 2024",
      desc: "Web platform to digitize post-exam answer sheet review between professors and students.",
      listdesc: [
        "Implemented role-based access and structured query workflows.",
        "Designed scalable backend data models for academic usage.",
      ],
      techstack: ["Django", "HTML", "CSS", "JavaScript", "SQLite"],
      link: "https://github.com/saxenatanishq/PaperShare",
    },
  ];

  const colors = [
    "bg-green-100 text-green-800",
    "bg-orange-100 text-orange-800",
    "bg-red-100 text-red-800",
    "bg-indigo-100 text-indigo-800",
    "bg-purple-100 text-purple-800",
    "bg-yellow-100 text-yellow-800",
    "bg-blue-100 text-blue-800",
  ];

  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  return (
    <section id="projects" className="mb-16 py-12 border-b border-gray-800">
      <h2 className="text-4xl font-semibold text-gray-900 mb-8 text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.heading}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
          >
            <div className="flex justify-between mb-2">
              <h3 className="text-xl font-medium text-indigo-600">
                {project.heading}
              </h3>
              <span className="text-sm text-gray-500">{project.date}</span>
            </div>

            <p className="text-gray-700 mb-4">{project.desc}</p>

            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              {project.listdesc.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.techstack.map((tech, idx) => (
                <span
                  key={idx}
                  className={`${getRandomColor()} text-xs font-semibold px-2 py-1 rounded-full`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline text-sm"
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
