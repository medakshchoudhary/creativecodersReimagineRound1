import React from 'react';
import { motion } from 'framer-motion';

function Collections() {
    const cards = [
        { src: "/images/top-trending.jpg", name: "Top Trending Spots" },
        { src: "/images/ig-stories.jpg", name: "For Instagram Stories" },
        { src: "/images/live-screenings.jpg", name: "Best of Live Screenings" },
        { src: "/images/newly-opened.jpeg", name: "Newly Opened Places" },
    ];

    return (
        <div className="collections w-full min-h-screen">
            <h1 className="m-0 lg:pl-16 md:pl-10 sm:pl-8 pl-4 lg:py-16 md:py-14 sm:py-12 py-10 lg:text-7xl md:text-5xl text-3xl ">Collections</h1>
            <div className="cards-container grid md:grid-cols-4 grid-cols-2 xl:gap-20 lg:gap-18 md:gap-10 gap-14  lg:px-10 px-8">
                {cards.map((card, index) => {
                    return (
                        <motion.div
                            key={index}
                            className="relative h-80 md:h-96 card flex flex-col items-center cursor-pointer"
                            whileHover={{ scale: 1.1, transition: { ease: "easeInOut" } }}
                        >
                            <img className="w-full h-full object-cover rounded-3xl" src={card.src} alt="" />
                            <h1 className="absolute bottom-6 m-0 text-lg text-white">{card.name}</h1>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

export default Collections;