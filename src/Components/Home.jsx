import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import ContactForm from "./ContactFormCard";

function Home() {
    const [showForm, setShowForm] = useState(false);

    // 👉 Replace with your actual resume URL
    const resumeLink = "https://drive.google.com/file/d/1zYtreZeegeAV3wtFSpErIj_dj63JDwyH/view?usp=drive_link";

    return (
        <div
            id="Home"
            className="text-white flex w-screen flex-col min-h-screen md:flex-row justify-center items-center md:justify-between p-10 md:p-20"
        >
            <div className="w-full md:w-full lg:w-2/4 text-center md:text-left md:pt-10">
                <h1 className="text-2xl md:text-6xl font-bold leading-normal tracking-tighter whitespace-nowrap">
                    Hello,
                    <span className="relative left-2 md:left-0 font-semibold text-blue-400">
                        <Typewriter
                            options={{
                                strings: [
                                    "I am Shiva Singh.",
                                    "I am a Programmer.",
                                    "I am a Developer.",
                                    "I am a Software Engineer.",
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                            }}
                        />
                    </span>
                </h1>

                <p className="text-justify w-full text-sm md:text-2xl tracking-tight mt-4">
                    Welcome to my portfolio! I'm thrilled to have you here. Whether you're here to learn more about my work, collaborate, or get inspired, let’s connect and build something incredible together!
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
                    <button
                        onClick={() => setShowForm(true)}
                        className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg shadow-md transition-transform transform hover:scale-105 active:scale-95"
                    >
                        Send Message
                    </button>

                    <a
                        href={resumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg shadow-md transition-transform transform hover:scale-105 active:scale-95 text-center"
                    >
                        Resume
                    </a>
                </div>

                {/* Contact Form Modal */}
                <ContactForm isOpen={showForm} onClose={() => setShowForm(false)} />
            </div>
        </div>
    );
}

export default Home;
