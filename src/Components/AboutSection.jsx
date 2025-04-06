import React from "react";
import AboutCard from "./EducationCard";
import TechnicalProfileCard from "./TechnicalProfileCard";
import { motion } from "framer-motion";

const introText = `I'm a passionate developer who loves creating seamless and interactive web experiences. 
With expertise in React, Tailwind, and backend technologies, I build scalable and user-friendly 
applications that focus on performance and intuitive design. My goal is to craft digital solutions 
that not only meet user expectations but exceed them, ensuring smooth functionality and a visually appealing interface.

I thrive on tackling complex challenges and transforming ideas into reality through clean, efficient code. 
Beyond development, I enjoy collaborating with like-minded professionals, exchanging knowledge, and staying 
updated with the latest industry trends. My commitment to continuous learning drives me to explore 
emerging technologies, refine my skills, and push the boundaries of what's possible in modern web development.`;

const technicalProfiles = [
  {
    platform: "leetcode",
    username: "shivu_iitp",
    profileLink: "https://leetcode.com/shivu_iitp",
    fallbackStats: {
      totalSolved: 466,
      rating: 1934,
    },
  },
  {
    platform: "codeforces",
    username: "shiva_iitp22",
    profileLink: "https://codeforces.com/profile/shiva_iitp22",
    fallbackStats: {
      totalSolved: 212,
      rating: 1438,
    },
  },
  {
    platform: "geeksforgeeks",
    username: "shivaigz33",
    profileLink: "https://auth.geeksforgeeks.org/user/shivaigz33/",
    fallbackStats: {
      totalSolved: 222,
      rating: "652",
    },
  },
];

const educationData = [
  {
    title: "Graduation",
    College: "Indian Institute of Technology Patna",
    Course: "Bachelor's of Technology",
    Branch: "Electrical and Electronics Engineering",
    Marks: <span>CGPA: 7.61 (Till 5<sup>th</sup> Sem)</span>,
    Year: "Duration: 2022 - 2026",
  },
  {
    title: "Senior Secondary",
    College: "Rajasthan Board of Secondary Education",
    Course: "Physics, Chemistry and Mathematics",
    Branch: "Marks: 484/500",
    Marks: "Percentage: 96.80 %",
    Year: "Duration: 2020 - 2021",
  },
  {
    title: "Secondary Education",
    College: "Rajasthan Board of Secondary Education",
    Course: "Science and Mathematics",
    Branch: "Marks: 526/600",
    Marks: "Percentage: 87.67 %",
    Year: "Duration: 2019 - 2020",
  },
];

const languages = [
  { name: "English", level: "Full Proficiency" },
  { name: "Hindi", level: "Native" },
];

function About() {
  return (
    <section
      id="About"
      className="min-h-screen flex flex-col items-center justify-center bg-black px-6 py-16 text-center font-webflow"
    >
      {/* Section Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-blue-400 mb-6 relative inline-block">
        About Me
        <span className="absolute left-1/2 bottom-[-6px] h-[4px] w-full bg-gradient-to-r from-blue-500 to-cyan-400 transform -translate-x-1/2 rounded-full"></span>
      </h2>

      {/* Short Introduction */}
      <p className="text-justify max-w-7xl text-lg text-gray-300 leading-relaxed mb-8">
        {introText}
      </p>

      {/* Technical Profiles Section */}
      <h3 className="text-2xl border-b-2 w-full md:max-w-7xl md:text-left md:text-3xl font-semibold text-white mb-8">
        Technical Profiles
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {technicalProfiles.map((profile, index) => (
          <TechnicalProfileCard key={index} {...profile} />
        ))}
      </div>

      {/* Educational Background Section */}
      <h3 className="text-2xl mt-12 border-b-2 w-full md:max-w-7xl md:text-left md:text-3xl font-semibold text-white mb-8">
        Educational Background
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {educationData.map((edu, idx) => (
          <AboutCard key={idx} {...edu} />
        ))}
      </div>

      {/* Language Section */}
      <h3 className="text-2xl mt-12 border-b-2 w-full md:max-w-7xl md:text-left md:text-3xl font-semibold text-white mb-8">
        Languages
      </h3>

      <div className="w-full flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {languages.map((lang, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, filter: "brightness(1.15)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-700 hover:border-blue-500 hover:shadow-cyan-400/30 px-3 py-2 md:px-5 md:py-4 rounded-xl shadow-lg w-full max-w-sm text-white text-center"
            >
              <h4 className="text-xl md:text-2xl font-bold text-cyan-400">{lang.name}</h4>
              <p className="text-sm md:text-base text-gray-300 ">{lang.level}</p>
            </motion.div>
          ))}
        </div>
      </div>



    </section>
  );
}

export default About;
