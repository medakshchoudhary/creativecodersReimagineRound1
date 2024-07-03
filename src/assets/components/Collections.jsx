import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Collections() {
    const headingRef = useRef(null);

    useEffect(() => {
        const heading = headingRef.current;
        const letters = heading.querySelectorAll('span');

        gsap.fromTo(letters, 
            { y: '100%', opacity: 0 }, 
            { 
                y: '0%', 
                opacity: 1, 
                duration: 1, 
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: heading,
                    start: 'top 80%',
                    onEnter: () => gsap.to(letters, { y: '0%', opacity: 1, stagger: 0.1, duration: 1, ease: 'power2.out' }),
                    onLeaveBack: () => gsap.to(letters, { y: '100%', opacity: 0, stagger: 0.1, duration: 1, ease: 'power2.out' }),
                    toggleActions: 'play none none reverse',
                }
            }
        );
    }, []);

    const cards = [
        { src: "/images/top-trending.jpg", name: "Top Trending Spots" },
        { src: "/images/ig-stories.jpg", name: "For Instagram Stories" },
        { src: "/images/live-screenings.jpg", name: "Best of Live Screenings" },
        { src: "/images/newly-opened.jpeg", name: "Newly Opened Places" },
    ];

    const renderSpans = (text) => {
        return text.split('').map((char, index) => (
            <span key={index} className="inline-block">{char}</span>
        ));
    };

    return (
        <div className="collections w-full min-h-screen">
            <div className="collection">
                <h1 ref={headingRef} className="md:m-0 pl-14 md:pl-16 pt-8 md:pt-16 text-[13vw] md:text-[6vw] overflow-hidden whitespace-nowrap">
                    {renderSpans('Collections')}
                </h1>
                <div className="cards-container flex flex-wrap md:flex-nowrap gap-6 md:gap-14 p-4 md:p-16">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            className="relative w-full md:w-1/4 h-[80vw] md:h-[24vw] card flex flex-col items-center cursor-pointer"
                            whileHover={{ scale: 1.1, transition: { ease: "easeInOut" } }}
                        >
                            <img className="w-full h-full object-cover rounded-3xl" src={card.src} alt={card.name} />
                            <h1 className="absolute bottom-6 m-0 text-lg text-white">{card.name}</h1>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="collage flex flex-col md:flex-row items-center justify-between px-4 md:px-36 mt-8 md:mt-0">
                <h1 className="w-full md:w-[30vw] leading-none text-[6vw] md:text-[3.5vw] text-center md:text-left mb-8 md:mb-0">
                    Share the moment of tastiest food you had and tag us on your stories for a surprise.....
                </h1>
                <img className="w-full md:w-[40vw]" src="/images/collage.png" alt="Collage" />
            </div>
        </div>
    );
}

export default Collections;