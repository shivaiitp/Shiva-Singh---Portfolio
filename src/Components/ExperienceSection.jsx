import React from "react";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    company: "TRDDC (Upcoming)",
    role: "Research Intern",
    duration: "May 2025 - July 2025 (Tentatively)",
    place: "Onsite",
    description: ".....",
  },
  {
    company: "Fact App",
    role: "Growth Intern",
    duration: "June 2023 - July 2023",
    place: "Remote",
    description:
      "Worked as a Growth Intern focusing on Marketing and Mentoring. Mentored 2000+ JEE aspirants, helping them secure admission into IITs. Established school partnerships through seminars to promote the Fact App and enhance awareness. Successfully secured a spot in the transformative category (TOP) on the final leaderboard.",
  },
];

const pors = [
  {
    company: "Syahi - The Literary Club of IIT Patna",
    role: "Sub-Coordinator",
    duration: "March 2023 - March 2024",
    description: "Managed various literary events with the team.",
  },
  {
    company: "Celesta - Techno-Management Fest of IIT Patna",
    role: "Coordinator",
    duration: "March 2024 - March 2025",
    description:
      "Worked in the sponsorship and marketing committee. Communicated with multiple firms for sponsorships and efficiently managed financial aspects during the fest.",
  },
];

export default function Experience() {
  return (
    <div
      id="Experience"
      className="min-h-screen flex flex-col items-center justify-center bg-black px-6 py-16 text-center font-webflow"
    >
      {/* Experience Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-blue-400 mb-6 relative inline-block">
        Experience
        <span className="absolute left-1/2 bottom-[-6px] h-[4px] w-full bg-gradient-to-r from-blue-500 to-cyan-400 transform -translate-x-1/2 rounded-full"></span>
      </h2>

      {/* Experience Cards */}
      <h3 className="text-2xl  border-b-2 w-full md:w-[87%] md:text-left md:text-3xl font-semibold text-white mb-8">
        Internships
      </h3>
      <div className="w-full flex flex-col gap-6 items-center">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>

      {/* Position of Responsibilities Section */}
      <h3 className="text-2xl mt-12 border-b-2 w-full md:w-[87%] md:text-left md:text-3xl font-semibold text-white mb-8">
        Positions of Responsibility
      </h3>

      {/* PoRs Cards */}
      <div className="w-full flex flex-col gap-6 items-center">
        {pors.map((por, index) => (
          <ExperienceCard key={index} experience={por} />
        ))}
      </div>
    </div>
  );
}
