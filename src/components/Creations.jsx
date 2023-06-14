// import React from "react";
import { CreationDetails } from "./CreationDetails";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const Card = ({ cardName, imgMobile, imgDesktop }) => {
  return (
    <motion.article variants={cardVariant} className="relative cursor-pointer">
      <div className="aspect-w-9 aspect-h-4 md:aspect-w-6 md:aspect-h-10">
        <img
          src={imgMobile}
          alt={cardName}
          className="object-cover object-center w-full h-full md:hidden"
        />
        <img
          src={imgDesktop}
          alt={cardName}
          className="hidden object-cover object-center w-full h-full md:block"
        />
      </div>
      <div className="absolute inset-0 flex items-end bg-gradient-to-l md:bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.5)] hover:bg-[hsla(0,0%,100%,0.7)] transition duration-300 group">
        <span className="w-[55%] p-4 text-2xl text-white uppercase transition duration-300 md:text-4xl md:p-10 group-hover:text-black">
          {cardName}
        </span>
      </div>
    </motion.article>
  );
};

function Creations() {
  return (
    <div className="flex justify-center w-full px-4 pb-20">
      <section className="flex flex-col w-full gap-12 md:gap-16 max-w-7xl">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <span className="text-3xl uppercase md:text-5xl">our creations</span>
          <button className="hidden md:block px-10 py-2 text-sm tracking-[0.3rem] text-black uppercase border-2 border-dark-gray font-alata ring-offset-1 hover:bg-black hover:text-white hover:border-black transition duration-300">
            see all
          </button>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariant}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-4"
        >
          {CreationDetails.map((card) => {
            return (
              <Card
                key={card.name}
                cardName={card.name}
                imgMobile={card.mobile}
                imgDesktop={card.desktop}
              />
            );
          })}
        </motion.div>
        <div className="text-center">
          <button className="md:hidden py-2 px-10 -translate-y-2 text-sm tracking-[0.3rem] text-black uppercase border-2 border-dark-gray font-alata ring-offset-1 hover:bg-black hover:text-white hover:border-black transition duration-300">
            see all
          </button>
        </div>
      </section>
    </div>
  );
}

export default Creations;
