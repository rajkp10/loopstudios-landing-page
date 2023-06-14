// import React from 'react'
import NavLinks from "./NavLinks";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import Menu from "./Menu";
import { motion, useCycle } from "framer-motion";

const logoVariant = {
  hidden: {
    y: -200,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

function Navbar() {
  const [open, setOpen] = useCycle(false, true);
  return (
    <motion.nav className="absolute w-full pt-4 top-5 md:top-10">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={logoVariant}
        className="flex justify-between"
      >
        <picture>
          <img src={logo} alt="logo" className="w-3/4" />
        </picture>
        <div className="hidden md:block">
          <NavLinks fontSize={"text-sm"} />
        </div>
        <div className="md:hidden">
          <img
            src={hamburger}
            alt="menu-open"
            className="cursor-pointer"
            onClick={setOpen}
          />
        </div>
      </motion.div>
      <Menu open={open} setOpen={setOpen} />
    </motion.nav>
  );
}

export default Navbar;
