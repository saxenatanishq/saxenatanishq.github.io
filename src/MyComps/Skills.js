import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      items: [
        { icon: "fab fa-python text-blue-700", name: "Python" },
        { icon: "fab fa-js-square text-yellow-500", name: "JavaScript" },
        { icon: "fas fa-code text-blue-600", name: "C / C++" },
        { icon: "fab fa-html5 text-orange-500", name: "HTML" },
        { icon: "fab fa-css3-alt text-blue-500", name: "CSS" },
        { icon: "fas fa-database text-gray-600", name: "SQL" },
        { icon: "fas fa-project-diagram text-indigo-600", name: "Prolog" },
        { icon: "fas fa-terminal text-gray-700", name: "Bash / Shell Scripting" },
      ],
    },
    {
      category: "Frameworks / Libraries",
      items: [
        { icon: "fas fa-leaf text-green-700", name: "Django" },
        { icon: "fab fa-node-js text-green-500", name: "Node.js" },
        { icon: "fas fa-server text-gray-500", name: "Express.js" },
        { icon: "fas fa-robot text-gray-700", name: "ROS / ROS2" },
        { icon: "fas fa-cubes text-green-600", name: "NumPy" },
        { icon: "fas fa-wind text-indigo-500", name: "Bootstrap" },
      ],
    },
    {
      category: "Tools, Platforms & Technologies",
      items: [
        { icon: "fab fa-git-alt text-orange-600", name: "Git & GitHub" },
        { icon: "fab fa-docker text-blue-500", name: "Docker" },
        { icon: "fab fa-linux text-gray-700", name: "Linux" },
        { icon: "fas fa-share-alt text-red-500", name: "Postman" },
        { icon: "fas fa-network-wired text-gray-600", name: "REST APIs" },
      ],
    },
    {
      category: "Databases",
      items: [
        { icon: "fas fa-database text-blue-400", name: "SQLite" },
        { icon: "fas fa-database text-indigo-500", name: "PostgreSQL" },
      ],
    },
    {
      category: "Security & CTF Skills",
      items: [
        { icon: "fas fa-bug text-red-600", name: "Web Exploitation" },
        { icon: "fas fa-shield-alt text-indigo-600", name: "XSS, SQL Injection, CSRF" },
        { icon: "fas fa-cookie-bite text-yellow-600", name: "HTTP & Session Security" },
        { icon: "fas fa-user-secret text-gray-700", name: "Burp Suite" },
      ],
    },
    {
      category: "Competitive Programming",
      items: [
        {
          icon: "fas fa-code text-purple-600",
          name: "Codeforces Specialist (noobhacker123)",
        },
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
                  <i className={`${item.icon} text-3xl`} />
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
