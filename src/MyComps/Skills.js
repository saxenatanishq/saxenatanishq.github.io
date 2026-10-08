import React from "react";

const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "C / C++", "JavaScript", "HTML / CSS", "SQL", "Bash"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["React.js", "Django", "Node.js", "Express.js", "NumPy", "PyTorch"],
  },
  {
    label: "Tools & Platforms",
    items: ["Git & GitHub", "Docker", "Linux", "Postman", "REST APIs", "ROS / ROS2"],
  },
  {
    label: "Databases",
    items: ["SQLite", "PostgreSQL"],
  },
  {
    label: "Security & CTF",
    items: [
      "Web Exploitation",
      "XSS / SQLi / CSRF",
      "HTTP & Session Security",
      "Burp Suite",
    ],
  },
  {
    label: "Competitive Programming",
    items: ["Codeforces Specialist (noobhacker123)"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section fade-in">
      <p className="section-label">Skills</p>
      <div className="skills-grid">
        {skillGroups.map((g) => (
          <div key={g.label}>
            <p className="skill-category-label">{g.label}</p>
            <div className="skill-items">{g.items.join(", ")}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
