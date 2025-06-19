import React from "react";

const Interests = () => {
  // Define the list of interests
  const interests = [
    {
      icon: "fas fa-brain text-indigo-500",
      name: "Artificial Intelligence & Machine Learning",
    },
    {
      icon: "fas fa-link text-indigo-500",
      name: "Blockchain & Crypto",
    },
    {
      icon: "fas fa-chart-line text-indigo-500",
      name: "Finance & Stock Market",
    },
    {
      icon: "fas fa-tv text-indigo-500",
      name: "Bingewatching Netflix",
    },
    {
      icon: "fas fa-futbol text-indigo-500",
      name: "Playing football",
    },
    {
      icon: "fas fa-dumbbell text-indigo-500",
      name: "Hitting the gym",
    },
  ];

  return (
    <section id="interests" className="mb-16 py-12 section-hidden">
      <h2 className="text-4xl font-semibold text-gray-900 mb-8 text-center">
        My Interests
      </h2>
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 border border-gray-200">
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
          {interests.map((interest, index) => (
            <li key={index} className="flex items-center">
              <i className={`${interest.icon} mr-2`}></i>
              {interest.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Interests;