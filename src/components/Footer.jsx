// import React from "react";
import logo from "../images/logo.svg";
import { logos } from "./Logo";
import NavLinks from "./NavLinks";

const Logo = ({ src, alt }) => {
  return (
    <a
      href="#"
      className="relative p-2 pt-0 before:absolute before:content-[''] before:h-[2px] before:w-0 before:transition-all before:duration-150 hover:before:w-5 before:bg-white before:mx-auto before:bottom-0 before:right-0 before:left-0"
    >
      <img src={src} alt={alt} />
    </a>
  );
};

function Footer() {
  return (
    <footer className="flex justify-center w-full px-4 py-16 bg-black">
      <div className="flex flex-col w-full gap-12 md:flex-row md:justify-between max-w-7xl">
        <section className="flex flex-col items-center gap-10 md:gap-8 md:items-start">
          <picture>
            <img src={logo} alt="logo" className="w-3/4 mx-auto md:mx-0" />
          </picture>
          <NavLinks fontSize={"text-sm"} fontType={"font-alata"} />
        </section>
        <section className="flex flex-col items-center gap-4 md:gap-6 md:items-end">
          <div className="flex items-center gap-0">
            {logos.map((logo) => (
              <Logo src={logo.src} alt={logo.alt} key={logo.alt} />
            ))}
          </div>
          <div>
            <span className="text-sm font-alata text-dark-gray">
              &#169; 2021 Loopstudios. All rights reserved.
            </span>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
