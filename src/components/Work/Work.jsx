import React from "react";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiServer } from "react-icons/fi";
import { projects } from "../../constants";
import Highlight from "../Highlight";

const Tags = ({ tags }) => (
  <div className="flex flex-wrap gap-2">
    {tags.map((tag) => (
      <span
        key={tag}
        className="bg-[#251f38] text-xs font-semibold text-[#c4a5ff] rounded-full px-3 py-1"
      >
        {tag}
      </span>
    ))}
  </div>
);

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Work = () => {
  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[7vw] md:px-[7vw] lg:px-[16vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Backend systems built to stay correct under heavy concurrency
        </p>
      </div>

      {/* Featured Projects */}
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
        {featured.map((project) => (
          <article
            key={project.id}
            className="flex flex-col rounded-2xl border border-gray-700 bg-gray-900/80 backdrop-blur-md p-6 sm:p-8 shadow-[0_0_20px_1px_rgba(130,69,236,0.25)] hover:border-[#8245ec] hover:-translate-y-1 transition duration-300"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#8245ec]/20 text-[#c4a5ff] text-2xl">
                <FiServer />
              </div>
              <span className="text-sm text-gray-500">{project.date}</span>
            </div>

            <h3 className="mt-5 text-2xl font-bold text-white">{project.title}</h3>
            <p className="mt-2 text-gray-400">{project.description}</p>

            <ul className="mt-5 space-y-3 flex-1">
              {project.highlights.map((point, index) => (
                <li key={index} className="flex gap-3 text-sm sm:text-base text-gray-400 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#8245ec]"></span>
                  <span>
                    <Highlight text={point} />
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Tags tags={project.tags} />
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#8245ec] px-5 py-2 text-sm font-semibold text-white hover:bg-[#6d33d6] transition"
            >
              <FaGithub /> View Code <FiArrowUpRight />
            </a>
          </article>
        ))}
      </div>

      {/* Other Projects */}
      {others.length > 0 && (
        <>
          <h3 className="mt-20 mb-8 text-2xl font-semibold text-white text-center">
            Other things I&apos;ve built
          </h3>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {others.map((project) => (
              <a
                key={project.id}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-gray-700 bg-gray-900/80 overflow-hidden hover:border-[#8245ec] hover:-translate-y-1 transition duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
                <div className="flex flex-col flex-1 p-5">
                  <h4 className="flex items-center justify-between gap-2 text-lg font-bold text-white">
                    {project.title}
                    <FiArrowUpRight className="flex-shrink-0 text-gray-500 group-hover:text-[#c4a5ff]" />
                  </h4>
                  <p className="mt-2 mb-4 flex-1 text-sm text-gray-400">
                    {project.description}
                  </p>
                  <Tags tags={project.tags} />
                </div>
              </a>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Work;
