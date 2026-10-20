import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import { FiDownload, FiMail, FiMapPin } from "react-icons/fi";
import profileImage from "../../assets/ChiragGargImage.jpg";
import { impactStats, RESUME_URL } from "../../constants";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[16vw] font-sans mt-16 md:mt-24 lg:mt-28"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
        {/* Left Side */}
        <div className="md:w-3/5 text-center md:text-left">
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-green-500/40 bg-green-500/10 px-4 py-1 text-sm text-green-300 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
            </span>
            Open to Backend / SDE opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 leading-tight">
            Hi, I&apos;m <span className="text-[#a970ff]">Chirag Garg</span>
          </h1>

          {/* Role with Typing Effect */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight min-h-[2.5rem]">
            <ReactTypingEffect
              text={[
                "Backend Software Engineer",
                "Golang Developer",
                "Distributed Systems Engineer",
              ]}
              speed={80}
              eraseSpeed={40}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h2>

          <p className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-400">
            <FiMapPin /> Gurugram, India · Software Engineer @ Shiprocket
          </p>

          {/* Pitch */}
          <p className="text-base sm:text-lg text-gray-400 mt-6 leading-relaxed">
            I build <span className="text-white font-semibold">event-driven Golang microservices</span>{" "}
            that run at production scale. At Shiprocket I migrated legacy PHP
            systems to <span className="text-white font-semibold">Go + Apache Kafka</span>,
            now handling <span className="text-white font-semibold">225K+ orders a day</span> for
            150+ enterprise sellers, with zero-downtime rollouts, idempotent
            pipelines and fault tolerance baked in. B.Tech IT from{" "}
            <span className="text-white font-semibold">NIT Kurukshetra</span>, and a
            competitive programmer (LeetCode top 10%).
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white py-3 px-7 rounded-full text-base font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 30px #8245ec",
              }}
            >
              <FiDownload /> Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-gray-200 py-3 px-7 rounded-full text-base font-bold border border-[#8245ec] hover:bg-[#8245ec]/20 transition duration-300"
            >
              <FiMail /> Get in touch
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-2/5 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[22rem] md:h-[22rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Chirag Garg"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>

      {/* Impact stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
        {impactStats.map((stat) => (
          <div
            key={stat.value}
            className="rounded-2xl border border-gray-700 bg-gray-900/70 backdrop-blur-md p-5 text-center shadow-[0_0_20px_1px_rgba(130,69,236,0.15)] hover:border-[#8245ec] transition-colors duration-300"
          >
            <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#a970ff] to-pink-400 bg-clip-text text-transparent">
              {stat.value}
            </p>
            <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-snug">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
