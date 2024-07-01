import React from 'react'

function Collections() {
    const cards = [
        { src: "/images/top-trending.jpg", name: "Top Trending Spots" },
        { src: "/images/ig-stories.jpg", name: "For Instagram Stories" },
        { src: "/images/live-screenings.jpg", name: "Best of Live Screenings" },
        { src: "/images/newly-opened.jpeg", name: "Newly Opened Places" },
      ];
  return (
    <div className="collections w-full min-h-screen">
        <h1 className="m-0 pl-16 pt-16 text-[6vw]">Collections</h1>
        <div className="cards-container flex gap-14 p-16">
            {cards.map((card, index) => {
                return(
                    <div key={index} className="relative w-1/4 h-[24vw] card flex flex-col items-center">
                        <img className="w-full h-full object-cover rounded-3xl" src={card.src} alt="" />
                        <h1 className="absolute bottom-6 m-0 text-lg text-white">{card.name}</h1>
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default Collections