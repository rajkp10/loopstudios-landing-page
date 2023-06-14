// import React from "react";
import imgMobile from "../images/mobile/image-interactive.jpg";
import imgDesktop from "../images/desktop/image-interactive.jpg";
import { motion } from "framer-motion";

const vrImgVariant = {
  hidden: {
    opacity: 0,
    x: "-50%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const articleVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    tranition: {
      when: "beforeChildren",
      delay: 0.8,
      duration: 0.8,
    },
  },
};

const textVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    tranition: {
      delay: 0.8,
      duration: 0.8,
    },
  },
};

function VR() {
  return (
    <div className="flex w-full px-4 py-20 md:py-40 place-content-center">
      <section className="relative flex flex-col w-full gap-10 max-w-7xl">
        <motion.picture
          initial="hidden"
          whileInView="visible"
          variants={vrImgVariant}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img src={imgMobile} alt="vr" className="md:hidden" />
          <img src={imgDesktop} alt="vr" className="hidden md:block" />
        </motion.picture>
        {/* <div className=""></div> */}
        <motion.article
          initial="hidden"
          whileInView="visible"
          variants={articleVariant}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center bg-white md:bottom-0 md:right-0 md:w-1/2 md:p-24 md:pb-0 md:text-left md:absolute"
        >
          <motion.span
            initial="hidden"
            whileInView="visible"
            variants={textVariant}
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl uppercase md:text-5xl"
          >
            The leader in interactive VR
          </motion.span>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={textVariant}
            viewport={{ once: true, amount: 0.5 }}
            className="mt-6 text-sm leading-6 font-alata text-dark-gray"
          >
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </motion.p>
        </motion.article>
      </section>
    </div>
  );
}

export default VR;
