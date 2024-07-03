import React from 'react';
import { motion } from 'framer-motion';

function Marquee() {
  const foodItems = [
    { src: "/images/burger.avif", name: "Burger" },
    { src: "/images/momos.avif", name: "Momos" },
    { src: "/images/north-indian.avif", name: "North Indian" },
    { src: "/images/dosa.avif", name: "Dosa" },
    { src: "/images/cake.avif", name: "Cake" },
    { src: "/images/chowmein.avif", name: "Chowmein" },
    { src: "/images/panner.avif", name: "Paneer" },
    { src: "/images/pizza.avif", name: "Pizza" },
    { src: "/images/rolls.avif", name: "Rolls" },
    { src: "/images/thali.avif", name: "Thali" }
  ];

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.001" className="marquee mt-2 p-9 bg-[#E23744] flex rounded-t-3xl">
      {foodItems.map((item, index) => (
        <div key={index} className="food-card-container pr-8">
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 5 }}
            className="food-card w-[42vw] h-[48vw] md:w-[20vw] md:h-[24vw] p-5 md:p-7 border-2 border-solid border-white rounded-3xl flex flex-col items-center justify-center"
          >
            <img className=" rounded-full object-cover" src={item.src} alt={item.name} />
            <h1 className="text-white leading-none mt-3 md:mt-6 text-[5vw] md:text-[2.2vw]">{item.name}</h1>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default Marquee;
