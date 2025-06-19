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
      ],
    },
    {
      category: "Frameworks/Libraries",
      items: [
        { icon: "fas fa-leaf text-green-700", name: "Django" },
        { icon: "fab fa-node-js text-green-500", name: "Node.js" },
        { icon: "fas fa-server text-gray-500", name: "Express" },
        { icon: "fab fa-bootstrap text-purple-600", name: "Bootstrap" },
        { icon: "fab fa-react text-violet-600", name: "React.js"},
      ],
    },
    {
      category: "Tools and Databases",
      items: [
        { icon: "fas fa-database text-blue-400", name: "SQLite" },
        { icon: "fab fa-git-alt text-orange-600", name: "Git & GitHub" },
        { icon: "fas fa-code text-blue-500", name: "VS Code" },
        { icon: "fas fa-share-alt text-red-500", name: "Postman" },
        { icon: "fab fa-linux text-gray-700", name: "Linux" },
      ],
    },
  ];

  return (
    <section id="skills" className="mb-16 py-12 border-b border-gray-800 section-hidden">
      <h2 className="text-4xl font-semibold text-gray-900 mb-8 text-center">Technical Skills</h2>
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 border border-gray-200">
        {skillCategories.map((category, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-2xl font-medium text-gray-800 mb-4">{category.category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.items.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <i className={`${item.icon} text-3xl`}></i>
                  <span className="text-lg font-medium text-gray-700">{item.name}</span>
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