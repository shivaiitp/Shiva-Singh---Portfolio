import React, { useState } from "react";
import { Link } from "react-scroll";
import { RiCloseLine, RiMenu2Line, RiHome2Line, RiUser3Line, RiLightbulbLine, RiBriefcaseLine, RiStackLine, RiMailLine } from "@remixicon/react";
import LogoCard from "./LogoCard"; 

const menuItems = [
    { name: "Home", icon: <RiHome2Line size={20} /> },
    { name: "About", icon: <RiUser3Line size={20} /> },
    { name: "Skills", icon: <RiLightbulbLine size={20} /> },
    { name: "Experience", icon: <RiBriefcaseLine size={20} /> },
    { name: "Projects", icon: <RiStackLine size={20} /> },
    { name: "Contact", icon: <RiMailLine size={20} /> },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="bg-black border-b-2 fixed top-0 left-0 w-full text-white px-10 py-4 lg:px-20 z-50">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div  className="relative right-5 md:right-0">
                    <LogoCard/>
                    </div>
                    


                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex gap-1 relative left-0" >
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.name}
                                    smooth={true}
                                    duration={500}
                                    className="relative px-3 py-2 text-lg border-2 border-transparent rounded-lg transition-all duration-500 hover:text-white hover:bg-[#00c3ff] active:scale-95 active:text-gray-300 cursor-pointer"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden relative left-5">
                        {menuOpen ? (
                            <RiCloseLine size={30} onClick={() => setMenuOpen(false)} className="cursor-pointer" />
                        ) : (
                            <RiMenu2Line size={30} onClick={() => setMenuOpen(true)} className="cursor-pointer" />
                        )}
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <div
                    className={`fixed top-16 left-1/2 transform -translate-x-1/2 w-[75%] bg-black border border-gray-700 shadow-lg text-center py-4 rounded-lg lg:hidden transition-all duration-300 ease-in-out ${menuOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-5 pointer-events-none"
                        }`}
                >
                    <ul className="space-y-2 text-white left-20 relative">
                        {menuItems.map((item) => (
                            <li key={item.name} className="flex items-center justify-start space-x-2">
                                {item.icon}
                                <Link
                                    to={item.name}
                                    smooth={true}
                                    duration={500}
                                    className="block py-1 text-lg font-medium transition-all duration-300 hover:text-[#00c3ff] cursor-pointer"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
