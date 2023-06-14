// import React from "react";

import Navbar from "./Navbar";
import { motion } from "framer-motion";

const heroVariant = {
  hidden: {
    opacity: 0,
    scaleY: 0,
  },
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 0.8,
    },
  },
};

function Hero() {
  return (
    <section className="grid w-full h-screen p-4 overflow-hidden bg-fixed bg-center bg-no-repeat bg-cover bg-very-dark-gray place-content-center bg-bgHeroMobile md:bg-bgHeroDesktop">
      <div className="relative flex items-center w-full h-screen max-w-7xl">
        <Navbar />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroVariant}
          className="grid md:grid-cols-2"
        >
          <p className="p-6 text-4xl text-white uppercase border-2 border-white md:text-7xl">
            immersive experiences that deliver
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
