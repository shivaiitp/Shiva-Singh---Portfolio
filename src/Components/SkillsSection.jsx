import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { motion } from "framer-motion";
import "react-circular-progressbar/dist/styles.css";

const images = import.meta.glob("../assets/skills/*.{png,svg}", { eager: true });
const getImage = (imageName) => images[`../assets/skills/${imageName}`]?.default || images[`../assets/skills/${imageName}`];

const TechSkills = [
    { name: "C++", logo: getImage("Cpp.svg"), level: 90 },
    { name: "HTML5", logo: getImage("HTML5.svg"), level: 95 },
    { name: "CSS3", logo: getImage("CSS3.svg"), level: 80 },
    { name: "JavaScript", logo: getImage("JavaScript.svg"), level: 80 },
    { name: "React", logo: getImage("React.svg"), level: 80 },
    { name: "Tailwind CSS", logo: getImage("Tailwind_CSS.svg"), level: 85 },
    { name: "Node.js", logo: getImage("Node_js.svg"), level: 50 },
    { name: "Express.js", logo: getImage("Express.svg"), level: 50 },
    { name: "MongoDB", logo: getImage("MongoDB.svg"), level: 70 },
    { name: "MySQL", logo: getImage("MySQL.svg"), level: 80 },
    { name: "Python", logo: getImage("Python.svg"), level: 70 },
    { name: "Git", logo: getImage("Git.svg"), level: 80 },
    { name: "GitHub", logo: getImage("GitHub.svg"), level: 80 },
    { name: "VsCode", logo: getImage("VScode.svg"), level: 95 },
];

const SoftSkills = [
    { name: "Communication", logo: getImage("Com.png"), level: 95 },
    { name: "Teamwork", logo: getImage("TeamWork.png"), level: 85 },
    { name: "Creativity", logo: getImage("Creativity.png"), level: 90 },
    { name: "Creative Thinking", logo: getImage("CreThi.png"), level: 85 },
    { name: "Problem Solving", logo: getImage("ProSol.png"), level: 95 },
];

export default function Skills() {
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (hoveredSkill) {
            let currentProgress = 0;
            const interval = setInterval(() => {
                currentProgress += 20;
                if (currentProgress >= hoveredSkill.level) {
                    clearInterval(interval);
                    currentProgress = hoveredSkill.level;
                }
                setProgress(currentProgress);
            }, 30);
            return () => clearInterval(interval);
        } else {
            setProgress(0);
        }
    }, [hoveredSkill]);

    return (
        <div id="Skills" className="min-h-screen flex flex-col items-center justify-center bg-black px-6 py-16 text-center font-webflow">

            <h2 className="text-3xl md:text-5xl font-bold text-blue-400 mb-6 relative inline-block">
                Skills
                <span className="absolute left-1/2 bottom-[-6px] h-[4px] w-full bg-gradient-to-r from-blue-500 to-cyan-400 transform -translate-x-1/2 rounded-full"></span>
            </h2>

            <p className="text-justify max-w-7xl text-lg text-gray-300 leading-relaxed mb-8">
                I am a highly skilled and adaptable developer with a strong technical foundation and excellent interpersonal abilities, enabling me to collaborate effectively, solve complex challenges, and continuously innovate in the ever-evolving tech landscape. I am proficient in
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text font-bold"> Data Structures and Algorithms</span> in C++, Object-Oriented Programming, and Database Management Systems (DBMS).
            </p>

            {/* Technical Skills Section */}
            <h3 className="text-2xl border-b-2 w-full md:max-w-7xl md:text-left md:text-3xl font-semibold text-white mb-8">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-12">
                {TechSkills.map((skill, index) => (
                    <motion.div
                        key={index}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="relative flex items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg cursor-pointer w-32 h-32 overflow-hidden"
                    >
                        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${hoveredSkill?.name === skill.name ? 'opacity-0' : 'opacity-100'}`}>
                            <img src={skill.logo} alt={skill.name} className="w-16 h-16 object-contain" />
                            <p className="text-white text-sm font-medium mt-2">{skill.name}</p>
                        </div>
                        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${hoveredSkill?.name === skill.name ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="w-20 h-20">
                                <CircularProgressbar
                                    value={hoveredSkill?.name === skill.name ? progress : 0}
                                    text={`${hoveredSkill?.name === skill.name ? progress : 0}%`}
                                    styles={buildStyles({
                                        textColor: "#fff",
                                        pathColor: "#4ade80",
                                        trailColor: "#374151",
                                    })}
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Soft Skills Section */}
            <h3 className="text-2xl mt-12 border-b-2 w-full md:max-w-7xl md:text-left md:text-3xl font-semibold text-white mb-8">Soft Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
                {SoftSkills.map((skill, index) => (
                    <motion.div
                        key={index}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="relative flex items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg cursor-pointer w-32 h-32 overflow-hidden"
                    >
                        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${hoveredSkill?.name === skill.name ? 'opacity-0' : 'opacity-100'}`}>
                            <img src={skill.logo} alt={skill.name} className="w-16 h-16 object-contain" />
                            <p className="text-white text-sm font-medium mt-2">{skill.name}</p>
                        </div>
                        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${hoveredSkill?.name === skill.name ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="w-20 h-20">
                                <CircularProgressbar
                                    value={hoveredSkill?.name === skill.name ? progress : 0}
                                    text={`${hoveredSkill?.name === skill.name ? progress : 0}%`}
                                    styles={buildStyles({
                                        textColor: "#fff",
                                        pathColor: "#facc15",
                                        trailColor: "#374151",
                                    })}
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
