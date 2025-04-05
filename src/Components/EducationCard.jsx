import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaBook, FaCodeBranch, FaPercent, FaCalendarAlt } from "react-icons/fa";

const AboutCard = ({
    title = "Title",
    College = "Not Available",
    Course = "Not Available",
    Branch = "Not Available",
    Marks = "Not Available",
    Year = "Not Available",
}) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05, filter: "brightness(1.15)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-2xl shadow-xl border border-gray-700 hover:border-blue-500 hover:shadow-cyan-400/30   p-6 max-w-md w-full text-white"
        >
            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400 text-center mb-5 underline decoration-cyan-400/60 underline-offset-4">
                {title}
            </h3>

            {/* Details */}
            <ul className="space-y-4 text-left text-sm md:text-base">
                <li className="flex items-center gap-3">
                    <FaUniversity className="text-cyan-400" />
                    <span className="text-gray-300">{College}</span>
                </li>
                <li className="flex items-center gap-3">
                    <FaBook className="text-cyan-400" />
                    <span className="text-gray-300">{Course}</span>
                </li>
                <li className="flex items-center gap-3">
                    <FaCodeBranch className="text-cyan-400" />
                    <span className="text-gray-300">{Branch}</span>
                </li>
                <li className="flex items-center gap-3">
                    <FaPercent className="text-cyan-400" />
                    <span className="text-gray-300">{Marks}</span>
                </li>
                <li className="flex items-center gap-3">
                    <FaCalendarAlt className="text-cyan-400" />
                    <span className="text-gray-300">{Year}</span>
                </li>
            </ul>
        </motion.div>
    );
};

export default AboutCard;
