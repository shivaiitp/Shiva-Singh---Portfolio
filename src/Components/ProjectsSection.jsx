import React from "react";
import ProjectCard from "./ProjectCard"; // Adjust path if needed

const projects = [
    {
        title: "Job Portal",
        description: (
            <>
                Job Portal is a <span className="text-cyan-400">full-stack web application</span> that connects employers and job seekers in a seamless and efficient way. Built using the <span className="text-cyan-400">MERN stack</span> (MongoDB, Express.js, React, Node.js), it allows employers to post and manage job listings while enabling job seekers to explore, filter, and apply to relevant opportunities. The platform supports <span className="text-cyan-400">authentication</span>, role-based access, and a modern, responsive user interface powered by Tailwind CSS and Redux Toolkit for state management.
            </>
        ),
        tech: ["React", "Express", "MongoDB", "Tailwind CSS", "Redux Toolkit", "JWT", "Mongoose"],
        sourceCode: "https://github.com/shivaiitp/Job-Portal",
        link: "https://job-portal-oc1k.onrender.com/",
    },
    {
        title: "Blaze Posts",
        description: (
            <>
                Blaze Posts is a <span className="text-cyan-400">social media web application</span> that allows users to seamlessly register, authenticate, and interact through visually appealing posts. The platform supports features such as <span className="text-cyan-400">rich text editing</span>, image uploads, and post management (create, edit, delete). It includes user authentication, real-time UI updates, and optimized performance. Built with React and Redux for smooth front-end state management, Tailwind CSS for sleek styling, and powered by <span className="text-cyan-400">Appwrite</span> for robust backend services.
            </>
        ),
        tech: ["React", "Redux", "Appwrite", "Tailwind CSS", "Vite", "React Router"],
        sourceCode: "https://github.com/shivaiitp/Blaze-Posts-Project",
    },
    {
        title: "Flight Ticket Booking System",
        description: (
            <>
                A comprehensive <span className="text-cyan-400">console-based airline reservation system</span> developed in <span className="text-cyan-400">C</span>. This project allows users to book flight tickets, manage passenger records, and view flight schedules through a user-friendly text interface. It demonstrates the use of key programming concepts like <span className="text-cyan-400">file handling</span>, dynamic memory allocation, sorting algorithms for schedule organization, and structured data management, making it a robust learning project for system-level programming.
            </>
        ),
        tech: ["C", "File Handling", "Dynamic Memory Allocation", "Data Structures", "Sorting Algorithms"],
        sourceCode: "https://github.com/shivaiitp/Flight-TIcket-Booking-system",
    }
];

function Projects() {
    return (
        <section
            id="Projects"
            className="min-h-screen w-full flex flex-col items-center justify-center px-10 pt-4  bg-black text-white font-webflow"
        >
            <h2 className="text-3xl md:text-5xl font-bold text-blue-400 mb-6 relative inline-block">
                Projects
                <span className="absolute left-1/2 bottom-[-6px] h-[4px] w-full bg-gradient-to-r from-blue-500 to-cyan-400 transform -translate-x-1/2 rounded-full"></span>
            </h2>

            <h3 className="text-2xl border-b-2 w-full md:max-w-7xl md:text-left md:text-3xl font-semibold text-white mb-8">
                Technical Projects
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
