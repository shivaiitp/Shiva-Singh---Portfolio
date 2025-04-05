import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, tech, link, sourceCode }) => {
    const handleMissingLink = (type) => {
        alert(`Sorry, ${type} link is not available`);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03}}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.05] hover:ring-1 hover:ring-cyan-400 ease-in-out cursor-pointer flex flex-col justify-between h-full"
        >
            <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-sm md:text-base text-justify mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((t, i) => (
                        <span
                            key={i}
                            className="text-xs bg-gray-800 px-2 py-1 rounded-full"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex justify-between items-end mt-auto pt-4">
                {link ? (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 text-sm hover:underline"
                    >
                        View Project →
                    </a>
                ) : (
                    <button
                        onClick={() => handleMissingLink("project")}
                        className="text-red-400 text-sm hover:underline"
                    >
                        View Project →
                    </button>
                )}

                {sourceCode ? (
                    <a
                        href={sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 text-sm hover:underline"
                    >
                        Source Code →
                    </a>
                ) : (
                    <button
                        onClick={() => handleMissingLink("source code")}
                        className="text-red-400 text-sm hover:underline"
                    >
                        Source Code →
                    </button>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
