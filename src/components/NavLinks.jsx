// import React from 'react'
import { motion } from "framer-motion";
const links = ["About", "Careers", "Events", "Products", "Support"];

const linkVariant = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: { y: 0, opacity: 1 },
};

const listVariant = {
  hidden: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  visible: {
    x: 0,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
      when: "beforeChildren",
      delay: 1.5,
    },
  },
};

function NavLinks({ fontSize, textAlign, fontType }) {
  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={listVariant}
      className="flex flex-col gap-4 text-center md:gap-8 md:text-left md:flex-row"
    >
      {links.map((link) => {
        return (
          <motion.li
            variants={linkVariant}
            key={link}
            className={`${textAlign}`}
          >
            <motion.a
              href="#"
              className={`relative pb-2 text-white ${fontSize} ${fontType}
              } before:absolute before:content-[''] before:h-[2px] before:w-0 before:transition-all before:duration-150 hover:before:w-5 before:bg-white before:mx-auto before:bottom-0 before:right-0 before:left-0`}
            >
              {link}
            </motion.a>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}

export default NavLinks;
