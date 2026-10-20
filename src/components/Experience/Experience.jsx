import React from "react";
import { FiMapPin, FiCalendar } from "react-icons/fi";
import { experiences } from "../../constants"; // Import your data
import Highlight from "../Highlight";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[7vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Shipping backend systems that run in production, at scale
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative border-l-2 border-[#8245ec]/50 ml-2 sm:ml-4">
        {experiences.map((experience) => (
          <div key={experience.id} className="relative pl-6 sm:pl-10 mb-14 last:mb-0">
            {/* Timeline dot */}
            <span className="absolute -left-[9px] top-6 h-4 w-4 rounded-full bg-[#8245ec] ring-4 ring-[#8245ec]/30"></span>

            <div className="p-5 sm:p-8 rounded-2xl border border-gray-700 bg-gray-900/80 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.25)] hover:border-[#8245ec] transition-colors duration-300">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-base text-[#a970ff] font-medium">
                    {experience.company}
                  </h4>
                </div>
                <div className="flex sm:flex-col gap-x-4 gap-y-1 text-sm text-gray-400 sm:text-right">
                  <span className="inline-flex items-center gap-1 sm:justify-end">
                    <FiCalendar /> {experience.date}
                  </span>
                  <span className="inline-flex items-center gap-1 sm:justify-end">
                    <FiMapPin /> {experience.location}
                  </span>
                </div>
              </div>

              {/* Impact bullets */}
              <ul className="space-y-3">
                {experience.bullets.map((bullet, index) => (
                  <li key={index} className="flex gap-3 text-gray-400 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#8245ec]"></span>
                    <span>
                      <Highlight text={bullet} />
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tech used */}
              <ul className="flex flex-wrap gap-2 mt-6">
                {experience.skills.map((skill) => (
                  <li
                    key={skill}
                    className="bg-[#251f38] text-[#c4a5ff] px-3 py-1 text-xs sm:text-sm rounded-full border border-[#8245ec]/40"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
