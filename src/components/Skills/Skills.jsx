// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[7vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        The toolkit I use to build reliable, high-throughput backend systems
      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900/80 backdrop-blur-md px-6 py-6 rounded-2xl border border-gray-700 shadow-[0_0_20px_1px_rgba(130,69,236,0.2)] hover:border-[#8245ec] transition-colors duration-300"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-5">
            <span className="text-[#8245ec]">#</span> {category.title}
          </h3>

          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 border border-gray-700 bg-[#151321] rounded-full py-1.5 px-3 hover:border-[#8245ec] hover:-translate-y-0.5 transition duration-200"
                >
                  {skill.logo && (
                    <img
                      src={skill.logo}
                      alt=""
                      className="w-5 h-5 object-contain"
                    />
                  )}
                  {Icon && <Icon className="w-4 h-4 text-[#c4a5ff]" />}
                  <span className="text-xs sm:text-sm text-gray-300">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
