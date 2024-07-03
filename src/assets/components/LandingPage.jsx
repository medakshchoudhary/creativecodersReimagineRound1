import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Page1() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Set initial value
    setIsMobile(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const widthValue = isMobile ? '31vw' : '17vw';

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.7" className="relative LandingPage w-full h-[90vh]">
      <div className="banner">
        <img href="#" className="w-12 absolute z-10 right-0 hover:cursor-pointer" src="/images/side_logo-transformed.png" alt="" />
        <div className="absolute textstructure z-10 text-white px-3 md:px-7 py-[21vh] md:py-[12vh]">
          <div className="masker">
            <div className="w-fit flex items-end overflow-hidden">
              <h1 className="m-0 leading-none text-[12vw] md:text-[6.7vw] uppercase">
                HUNGRY?
              </h1>
            </div>
          </div>
          <div className="masker flex">
            <motion.div
              className="flex items-end overflow-hidden"
              initial={{ width: 0}}
              animate={{ width: widthValue }}
              transition={{
                duration: 2,
                delay: 0.2,
                ease: [0.87, 0, 0.13, 1],
              }}
            >
              <img
                className="ml-[0.5vw] h-[9vw] md:h-[4.8vw] rounded-md relative bottom-[2.4vw] md:bottom-[1.3vw]"
                src="/images/zomato-red.png"
                alt=""
              />
            </motion.div>
            <h1 className="m-0 leading-none text-[12vw] md:text-[6.7vw] uppercase">
              IS HERE
            </h1>
          </div>
          <div className="masker">
            <div className="w-fit flex items-end overflow-hidden">
              <h1 className="m-0 leading-none text-[12vw] md:text-[6.7vw] uppercase">
                DELIVERING AT <span className="text-[#DA3842]">DOORSTEP</span>
              </h1>
            </div>
          </div>
        </div>
        <img className="h-[65vh] w-full object-cover opacity-90" src="/images/banner.jpg" alt="" />
        <div className="flex justify-center mt-[9vw] md:mt-[2vw]">
          <motion.a
            className="orderNow leading-none font-bold rounded-full border-4 border-solid border-[#E6656F] bg-black text-white z-10 px-3 py-2.5 text-[8vw] md:text-3xl no-underline"
            whileHover={{ color: "black", backgroundColor: "white" }}
            whileTap={{ scale: 0.9 }}
          >
            Order Now
          </motion.a>
        </div>
      </div>
      <div className="absolute mt-[7vw] md:mt-[2vw] one-liner flex items-center justify-center w-full gap-1">
        <h1 className="text-[5vw] ml-[6vw] md:ml-0 md:text-2xl leading-none">End Your Cravings Here</h1>
        <motion.img src="/images/down-arrow.png" className="down-arrow w-[8vw] md:w-6"
          initial={{ y: 0 }}
          animate={{ y: [5, -5] }}
          transition={{
            y: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.7,
              ease: "easeIn",
            }
          }}
        />
      </div>
    </div>
  );
}

export default Page1;
