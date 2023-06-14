// import React from 'react'
import logo from "../images/logo.svg";
import close from "../images/icon-close.svg";
import NavLinks from "./NavLinks";
import { motion, AnimatePresence } from "framer-motion";

function Menu({ open, setOpen }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          id="menu"
          className="fixed bottom-0 left-0 right-0 z-20 flex items-center justify-start h-screen overflow-hidden bg-black "
          initial={{ height: 0 }}
          animate={{ height: "100vh", transition: { duration: 0.5 } }}
          exit={{ height: 0, transition: { delay: 1, duration: 0.5 } }}
        >
          <motion.section
            id="header"
            className="absolute flex justify-between w-full px-6 top-10"
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.5 },
            }}
            exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
          >
            <picture>
              <img src={logo} alt="logo" className="w-3/4" />
            </picture>
            <img
              src={close}
              alt="menu-close"
              className="cursor-pointer"
              onClick={setOpen}
            />
          </motion.section>
          <div className="px-6">
            <NavLinks fontSize={"text-3xl"} textAlign={"text-left"} />
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

export default Menu;
