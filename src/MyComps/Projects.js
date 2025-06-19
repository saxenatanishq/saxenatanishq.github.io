import React from "react";

const Projects = () => {
  // Add any new project if there is here in the JS (not in HTML)
  const projects = [
    {
      heading: "PaperShare Django Web Application",
      desc: "Developed a comprehensive academic paper review platform using Django backend and JavaScript with role-based authentication, enabling professors to upload answer sheets and students to submit queries on specific question parts.",
      listdesc: [
        "Implemented complex hierarchical question structures with JSON encoding and tree traversal algorithms.",
      ],
      techstack: ["Django", "JavaScript", "JSON"],
      link: "https://github.com/saxenatanishq/papershare",
    },
    {
      heading: "Winter Internship - India Space Lab",
      desc: "Completed a comprehensive technical training program in Space Science and Technology, gaining specialized knowledge in Advanced Drone Technology, CanSat and CubeSat Satellite Programs.",
      listdesc: ["Developed expertise in Advanced Drone Technology."],
      techstack: ["Drone Tech", "CanSat", "CubeSat"],
    },
    {
      heading: "Undergraduate Researcher - AGV",
      desc: "Selected for Software/AI team at IIT Kharagpur through rigorous evaluation. Developing intelligent navigation algorithms and solutions using ROS for autonomous ground vehicle applications.",
      listdesc: [
        "Projects in autonomous path planning, sparse optical flow, and 3D image reconstruction.",
      ],
      techstack: ["ROS", "Path Planning", "3D Image Rec."],
      link: "https://github.com/saxenatanishq",
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
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-medium text-indigo-600 mb-3">
                {project.heading}
              </h3>
              <p className="text-gray-700 mb-4">{project.desc}</p>
              <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
                {project.listdesc && project.listdesc.length > 0 && (
                  <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
                    {project.listdesc.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </ul>
              {project.techstack && project.techstack.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techstack.map((item) => {
                      const randomColor = getRandomColor();
                      return (
                          <span className={`${randomColor} text-xs font-semibold px-2.5 py-0.5 rounded-full`}>
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
                  <i className="fas fa-external-link-alt ml-1 text-sm"></i>
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
