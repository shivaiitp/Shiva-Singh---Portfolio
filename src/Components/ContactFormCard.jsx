import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaCheckCircle } from "react-icons/fa";

const ContactForm = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs
            .send(
                "service_nj60h7f",
                "template_efn3eju",
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                "c4VhjZHCQNQF7aDRx"
            )
            .then(() => {
                setIsLoading(false);
                setFormData({ name: "", email: "", message: "" });
                setShowSuccess(true); // Show success first
                onClose();
                setTimeout(() => {
                    setShowSuccess(false);
                }, 3000); // Hide success message after 3 seconds
            })
            .catch((error) => {
                console.error("Email send error:", error);
                alert("Failed to send email. Please try again later.");
                setIsLoading(false);
            });
    };

    return (
        <>
            {/* Contact Form Modal */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={onClose}>
                    <div
                        className="bg-white p-6 rounded-xl shadow-lg text-black w-[90%] max-w-md relative"
                        onClick={(e) => e.stopPropagation()} // Prevent close on inside click
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
                        >
                            ×
                        </button>
                        <h2 className="text-xl font-bold mb-4 text-center">Contact Me</h2>
                        <form onSubmit={sendEmail} className="flex flex-col gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="p-2 rounded border"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="p-2 rounded border"
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="p-2 rounded border"
                                rows="4"
                            ></textarea>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="bg-[#465697] flex justify-center items-center gap-2 text-white py-2 px-4 rounded hover:bg-[#374785] transition-all"
                            >
                                {isLoading ? (
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    "Send"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Success Message */}
            {showSuccess && (
                <div className="fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 text-white z-50">
                    <FaCheckCircle className="text-green-400 text-6xl mb-4" />
                    <h2 className="text-2xl font-semibold mb-2">Thanks for your time!</h2>
                    <p className="text-lg">We will reach out to you soon.</p>
                </div>
            )}
        </>
    );
};

export default ContactForm;
