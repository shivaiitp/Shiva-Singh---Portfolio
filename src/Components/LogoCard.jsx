import React from "react";
import Tilt from "react-parallax-tilt";
import { Link } from "react-scroll";

const LogoCard = () => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.35}
      scale={1.05}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      className="w-fit"
    >
      <Link
        to="Home"
        smooth={true}
        duration={500}
        className="inline-block px-3 py-1 rounded-lg bg-gradient-to-br from-[#3e43df] to-[#21a5d4] shadow-xl text-white font-semibold text-base sm:text-lg lg:text-xl tracking-wide cursor-pointer"
      >
        SHIVA
      </Link>
    </Tilt>
  );
};

export default LogoCard;
