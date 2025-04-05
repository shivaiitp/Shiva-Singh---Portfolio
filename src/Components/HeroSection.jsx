import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import bgImage from '../assets/bgImage.jpg';

function HeroSection() {
  const [background, setBackground] = useState(localStorage.getItem('bgImage') || bgImage);

  useEffect(() => {
    localStorage.setItem('bgImage', background);
  }, [background]);

  return (
    <div className="relative w-full min-h-screen bg-cover bg-center">
      <div 
        className="absolute inset-0 bg-cover bg-center filter blur-[1px]" 
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative z-10">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default HeroSection;
