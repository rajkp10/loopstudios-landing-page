// import React from "react";
import { motion } from "framer-motion";

const childVariant = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    y: [0, -20, 0],
    transition: {
      repeat: Infinity,
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const containerVariant = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {
    height: 0,
    transition: {
      duration: 0.5,
      when: "afterChildren",
    },
  },
};

function Preloader() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariant}
      className="fixed inset-0 z-20 flex items-center justify-center gap-4 overflow-hidden bg-black"
    >
      {[1, 2, 3].map((ball) => {
        return (
          <motion.div
            key={ball}
            variants={childVariant}
            className="w-5 h-5 bg-white rounded-full"
          ></motion.div>
        );
      })}
    </motion.section>
  );
}

export default Preloader;
