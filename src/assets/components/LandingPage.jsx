import React from "react";
import { motion } from "framer-motion";

function Page1() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.7"
      className="relative w-full md:h-[90vh]  sm:h-[70vh] h-[60vh]"
    >
      <div className="banner relative mt-[60px] h-[40vh] sm:h-[50vh] md:h-[60vh] lg:[70vh]">
        <img
          className="w-12 absolute z-10 right-0 hover:cursor-pointer"
          src="/images/side_logo-transformed.png"
          alt=""
        />
        <div className="absolute textstructure z-10 text-white px-7 py-[12vh]">
          <div className="masker">
            <div className="w-fit flex items-end overflow-hidden">
              <h1 className="m-0 lg:leading-none xl:text-7xl lg:text-6xl md:text-4xl text-2xl uppercase">
                HUNGRY?
              </h1>
            </div>
          </div>
          <div className="masker flex">
            <motion.div
              className="flex  items-end"
              initial={{ width: 0 }}
              animate={{ width: "17vw" }}
              transition={{
                duration: 2,
                delay: 0.2,
                ease: [0.87, 0, 0.13, 1],
              }}
            >
              <img
                className="md:ml-1 h-[4.8vw] rounded-md relative bottom-1 md:bottom-0"
                src="/images/zomato-red.png"
                alt=""
              />
            </motion.div>
            <h1 className="m-0 lg:leading-none xl:text-7xl lg:text-6xl md:text-4xl text-2xl uppercase">IS HERE</h1>
          </div>
          <div className="masker">
            <div className="w-fit flex items-end overflow-hidden">
              <h1 className="m-0 lg:leading-none xl:text-7xl lg:text-6xl md:text-4xl text-2xl uppercase">
                DELIVERING AT <span className="text-[#DA3842]">DOORSTEP</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[2vw]">
        <motion.button
          className="orderNow lg:leading-none font-bold rounded-full border-4 border-solid border-[#E6656F] bg-black  text-white z-10 px-3 md:py-2.5 py-2 lg:text-2xl md:text-xl text-lg  no-underline"
          whileHover={{ color: "black", backgroundColor: "white" }}
          whileTap={{ scale: 0.9 }}
        >
          Order Now
        </motion.button>
      </div>
      <div className="absolute mt-[2vw] one-liner flex items-center justify-center w-full gap-1">
        <h1 className="lg:text-2xl md:text-xl text-lg lg:leading-none">End Your Cravings Here</h1>
        <motion.img
          src="/images/down-arrow.png"
          className="down-arrow w-6"
          initial={{ y: 0 }}
          animate={{ y: [5, -5] }}
          transition={{
            y: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.7,
              ease: "easeIn",
            },
          }}
        />
      </div>
    </div>
  );
}

export default Page1;
