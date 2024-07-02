import React from "react";
import { motion,AnimatePresence } from "framer-motion";
import { useState } from "react";
const menuitems = ["Add Restaurant", "Login", "Sign Up"];
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="Navbar pl-3 pr-6 py-2 flex items-center fixed w-full top-0 z-10 bg-white">
      <div className="w-full links flex items-center justify-between">
        <img
          className="md:h-11 h-9 logo hover:cursor-pointer"
          src="/images/logo-transformed.png"
          alt=""
        />
       <motion.div
        className="w-[60vw]  md:pt-0 pt-9 md:flex md:justify-between justify-normal md:flex-row md:static   bottom-0 top-14 md:z-10 fixed flex-col bg-white"
        id="navbar"
        initial={{ right: "-60vw" }}
        animate={{ right: isOpen ? "0vw" : "-60vw" }}
        transition={{ duration: 0.3 }}
      >
          <div className="center-links flex md:flex-row flex-col gap-10 md:gap-5">
            {menuitems.map((item, index) => {
              return (
                <button
                  className={
                    "font-normal text-xl leading-none text-black  items relative "
                  }
                  key={index}
                >
                  {item}
                </button>
              );
            })}
          </div>
         
            <button
              className={
                "font-normal text-xl  leading-none text-black items relative md:mt-0 mt-10 md:w-auto w-full"
              }
            >
              Contact Us
            </button>
      
        </motion.div>

        <div className="md:hidden ">
          <motion.button className="hamburger-menu" whileTap={{ backgroundColor: "grey" }} onClick={toggleMenu}>
            <motion.div
              className="line"
              animate={isOpen ? { rotate: 45, y: 13 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="line"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="line"
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
