import React from "react";
import { motion } from "framer-motion";

function ExperienceCard({ experience }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0px 8px 24px rgba(0, 255, 255, 0.25)",
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.6,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative bg-gray-900/80 backdrop-blur-lg border border-gray-700 p-4 rounded-xl shadow-lg cursor-pointer w-full md:w-[87%] hover:border-cyan-400"
    >
      {/* Title */}
      <div className="flex justify-between">
        <h3 className="text-md md:text-2xl text-left font-bold text-cyan-300 mb-2">
          {experience.role}{" "}
          <span className="text-gray-400">@{experience.company}</span>
        </h3>

        {/* Duration */}
        <p className="text-sm text-right text-gray-400 italic">
          {experience.duration}
          <br />
          {experience.place}
        </p>
      </div>

      {/* Description */}
      <p className="text-justify text-gray-300 text-base mt-1">
        {experience.description}
      </p>
    </motion.div>
  );
}

export default ExperienceCard;
