import React from "react";
import { FiAward } from "react-icons/fi";
import { education, achievements } from "../../constants";
import Highlight from "../Highlight";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[7vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION & ACHIEVEMENTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Strong CS fundamentals, sharpened by competitive programming
        </p>
      </div>

      {/* Education Entries */}
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row sm:items-center gap-5 rounded-2xl border bg-gray-900/80 backdrop-blur-md p-5 sm:p-6 hover:border-[#8245ec] transition-colors duration-300 ${
              index === 0
                ? "border-[#8245ec]/60 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
                : "border-gray-700"
            }`}
          >
            <div className="w-20 h-14 flex-shrink-0 bg-white rounded-md overflow-hidden">
              <img src={edu.img} alt={edu.school} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold text-white">{edu.degree}</h3>
              <h4 className="text-sm text-[#a970ff]">{edu.school}</h4>
              <p className="mt-2 text-sm text-gray-400">{edu.desc}</p>
            </div>

            <div className="sm:text-right flex-shrink-0">
              <p className="text-lg font-bold text-white">{edu.grade}</p>
              <p className="text-sm text-gray-500">{edu.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
        {achievements.map((item) => (
          <a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-gray-700 bg-gray-900/80 p-6 text-center hover:border-[#8245ec] hover:-translate-y-1 transition duration-300"
          >
            <FiAward className="mx-auto text-2xl text-[#c4a5ff]" />
            <p className="mt-3 text-3xl font-bold bg-gradient-to-r from-[#a970ff] to-pink-400 bg-clip-text text-transparent">
              {item.value}
            </p>
            <p className="mt-1 font-semibold text-white">{item.title}</p>
            <p className="mt-1 text-sm text-gray-400">
              <Highlight text={item.desc} />
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Education;
