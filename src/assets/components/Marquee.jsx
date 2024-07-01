import React from 'react'

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
    <div data-scroll data-scroll-section data-scroll-speed="-0.001" className="marquee p-8 bg-[#E23744] flex gap-8 rounded-t-3xl">
        {foodItems.map((item, index) => (
          <div key={index} className="food-card px-4 pt-4 border-2 border-solid border-white rounded-3xl flex flex-col items-center justify-center">
            <img className="w-[16vw] rounded-full" src={item.src} alt={item.name} />
            <h1 className="text-white">{item.name}</h1>
          </div>
        ))}
    </div>
  )
}

export default Marquee