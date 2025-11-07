import React from "react";

const Projects = () => {
  // Projects updated from CV (Tanishq_Saxena_CV). Source: uploaded CV. :contentReference[oaicite:1]{index=1}
  const projects = [
    {
      heading: "Target-Biased Obstacle Avoidance",
      date: "Mar 2025",
      desc: "Enhanced obstacle avoidance for AGV by extending Follow-The-Gap (FTG) to navigate toward specific waypoints using a custom potential function that weights gaps by width, distance and angular proximity to the target.",
      listdesc: [
        "Improved FTG to prefer gaps that move the vehicle toward a target waypoint (not just the largest gap).",
        "Designed a potential function combining gap width, distance and angle to compute optimal steering.",
      ],
      techstack: ["Python", "NumPy", "ROS"],
      link: "https://github.com/saxenatanishq/Vehicle-obstacle-avoidance",
    },
    {
      heading: "Civix (Smart India Hackathon)",
      date: "Mar 2025",
      desc: "Full-stack civic issue reporting web app enabling geotagged reports, image uploads, upvotes and role-based admin workflows; includes interactive maps and scalable backend APIs.",
      listdesc: [
        "Geotagged issue reporting with Leaflet.js map integration.",
        "Role-based JWT authentication and an admin dashboard for issue management (Open → In Progress → Resolved).",
      ],
      techstack: ["React", "Tailwind CSS", "Node.js", "PostgreSQL", "Leaflet.js"],
      link: "https://github.com/swrno/civix",
    },
    {
      heading: "SLAM Localization Pipeline for AutoDRIVE",
      date: "Sep 2025",
      desc: "Built a ROS2-based SLAM / localization pipeline for the AutoDRIVE ecosystem with Docker + NVIDIA GPU acceleration; implemented TF broadcasting and RViz2 visualization.",
      listdesc: [
        "Configured Docker containers with GPU passthrough and ydlidar driver integration.",
        "Wrote a C++ ROS2 node to broadcast the full TF tree (odom → base_link) for visualization and downstream modules.",
      ],
      techstack: ["C++", "ROS2", "Docker", "RViz2"],
    },
    {
      heading: "PaperShare — Django Web Application",
      date: "Ongoing",
      desc: "Django platform for professors to upload checked answer sheets and for students to submit structured queries on specific question parts, supporting hierarchical question structures.",
      listdesc: [
        "Implemented hierarchical/nested question support via JSON encoding and tree traversal algorithms.",
        "Role-based authentication and an interface for mapping student queries to specific question subparts.",
      ],
      techstack: ["Django", "JavaScript", "JSON"],
      link: "https://github.com/saxenatanishq/PaperShare",
    },
    {
      heading: "Undergraduate Researcher — Autonomous Ground Vehicles (AGV)",
      date: "Apr 2025 - Present",
      desc: "Selected to the software/AI team for AGV research at IIT Kharagpur; working on navigation, sparse optical flow and 3D reconstruction and contributing to SLAM and localization efforts.",
      listdesc: [
        "Projects: autonomous path planning, sparse optical flow, 3D image reconstruction and SLAM.",
        "Currently developing navigation solutions and ROS-based modules for AGV localization.",
      ],
      techstack: ["ROS", "Path Planning", "Python", "C++"],
      link: "https://github.com/saxenatanishq",
    },
    {
      heading: "Winter Internship — India Space Lab (certificate & project)",
      date: "Winter 2024",
      desc: "Completed technical training in Space Science & Technology with hands-on exposure to drone tech, CanSat and CubeSat concepts.",
      listdesc: ["Gained practical experience in advanced drone tech and small satellite concepts."],
      techstack: ["Drone Tech", "CanSat", "CubeSat"],
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
    "bg-pink-100 text-pink-800",
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <section
      id="projects"
      className="mb-16 py-12 border-b border-gray-800 section-hidden"
    >
      <h2 className="text-4xl font-semibold text-gray-900 mb-8 text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          return (
            <div
              key={project.heading}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-2xl font-medium text-indigo-600">
                  {project.heading}
                </h3>
                {project.date && (
                  <span className="text-sm text-gray-500 ml-3">{project.date}</span>
                )}
              </div>

              <p className="text-gray-700 mb-4">{project.desc}</p>

              {project.listdesc && project.listdesc.length > 0 && (
                <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
                  {project.listdesc.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}

              {project.techstack && project.techstack.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techstack.map((item, idx) => {
                    const randomColor = getRandomColor();
                    return (
                      <span
                        key={`${project.heading}-tech-${idx}`}
                        className={`${randomColor} text-xs font-semibold px-2.5 py-0.5 rounded-full`}
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>
              )}

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline font-medium"
                >
                  View more{" "}
                  <i className="fas fa-external-link-alt ml-1 text-sm" aria-hidden />
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
