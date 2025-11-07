import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      items: [
        { icon: "fab fa-python text-blue-700", name: "Python" },
        { icon: "fab fa-js-square text-yellow-500", name: "JavaScript" },
        { icon: "fas fa-code text-blue-600", name: "C/C++" },
        { icon: "fab fa-html5 text-orange-500", name: "HTML" },
        { icon: "fab fa-css3-alt text-blue-500", name: "CSS" },
        { icon: "fas fa-database text-gray-600", name: "SQL" },
        { icon: "fas fa-terminal text-gray-700", name: "Shell Scripting" },
      ],
    },
    {
      category: "Frameworks / Libraries",
      items: [
        { icon: "fas fa-leaf text-green-700", name: "Django" },
        { icon: "fab fa-node-js text-green-500", name: "Node.js" },
        { icon: "fas fa-server text-gray-500", name: "Express.js" },
        { icon: "fab fa-react text-cyan-500", name: "React.js" },
        { icon: "fas fa-cubes text-green-600", name: "NumPy" },
        { icon: "fas fa-table text-blue-600", name: "Pandas" },
        { icon: "fas fa-wind text-indigo-500", name: "Tailwind CSS" },
        { icon: "fas fa-map-marked-alt text-green-600", name: "Leaflet.js" },
      ],
    },
    {
      category: "Tools, Frameworks & Platforms",
      items: [
        { icon: "fas fa-robot text-gray-700", name: "ROS / ROS2" },
        { icon: "fab fa-docker text-blue-500", name: "Docker" },
        { icon: "fas fa-cube text-blue-700", name: "Gazebo & RViz2" },
        { icon: "fas fa-vr-cardboard text-indigo-700", name: "OpenCV / Vision" },
        { icon: "fab fa-git-alt text-orange-600", name: "Git & GitHub" },
        { icon: "fab fa-linux text-gray-700", name: "Linux / Ubuntu" },
        { icon: "fas fa-share-alt text-red-500", name: "Postman" },
      ],
    },
    {
      category: "Databases & Cloud",
      items: [
        { icon: "fas fa-database text-blue-400", name: "SQLite" },
        { icon: "fas fa-leaf text-green-600", name: "MongoDB" },
        { icon: "fas fa-database text-indigo-500", name: "PostgreSQL" },
      ],
    },
    {
      category: "Other Technical Skills",
      items: [
        { icon: "fas fa-network-wired text-gray-600", name: "Networking & APIs" },
        { icon: "fas fa-brain text-purple-600", name: "Computer Vision" },
        { icon: "fas fa-route text-teal-600", name: "Path Planning" },
        { icon: "fas fa-project-diagram text-yellow-600", name: "SLAM & Localization" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="mb-16 py-12 border-b border-gray-800 section-hidden"
    >
      <h2 className="text-4xl font-semibold text-gray-900 mb-8 text-center">
        Technical Skills
      </h2>
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 border border-gray-200">
        {skillCategories.map((category, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-2xl font-medium text-gray-800 mb-4">
              {category.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.items.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <i className={`${item.icon} text-3xl`}></i>
                  <span className="text-lg font-medium text-gray-700">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
