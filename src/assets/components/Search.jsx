import React, { useState, useEffect } from 'react';

function Search() {
  const placeholderTexts = [
    "Search for your favorite food...",
    "What are you craving today?",
    "Find delicious dishes...",
    "Enter a dish name...",
    "Discover new flavors...",
  ];

  const [placeholder, setPlaceholder] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * placeholderTexts.length);
    setPlaceholder(placeholderTexts[randomIndex]);
  }, []);

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.001" className="search w-full">
      <div className="backgroundimage w-full h-[123vh] bg-cover bg-[url('/images/CITY.jpeg')] flex items-center justify-center">
        <form className="search-bar py-2 px-6 w-[80%] flex items-center justify-start bg-[#D9D9D9] rounded-full">
          <img className="w-8" src="/images/serach-bar.png" alt="" />
          <input
            className="w-full ml-4 border-none outline-none text-[2vw] bg-[#D9D9D9] p-2 font-metropolis font-bold"
            type="text"
            placeholder={placeholder}
          />
        </form>
      </div>
    </div>
  );
}

export default Search;
