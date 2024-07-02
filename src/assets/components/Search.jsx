import React, { useState, useEffect, useMemo } from 'react';

function Search() {
  const [placeholder, setPlaceholder] = useState('');

  useEffect(() => {
    const placeholderTexts = [
        "Discover Delicious Destinations: Your Perfect Meal Awaits on Zomato.",
        "Savor Every Bite: Your Culinary Journey Begins on Zomato.",
        "From Hunger to Happiness: Find It All on Zomato.",
        "Craving Satisfaction? Explore Top Eats Only on Zomato.",
        "Taste the Best: Your Dining Adventure Starts on Zomato.",
        "Epic Eats Await: Find Your Flavors on Zomato Today.",
        "Gourmet Delights: Your Next Favorite Restaurant is on Zomato.",
        "Dine, Delight, Discover: The Zomato Experience Awaits You.",
        "Indulge in Flavor: Your Next Meal is on Zomato.",
        "Feed Your Curiosity: Explore New Tastes with Zomato.",
        "Culinary Bliss: Discover and Dine on Zomato Now.",
        "Craving Satisfaction? Your Dining Adventure Starts on Zomato.",
        "Craving Satisfaction? Find the Best Eats on Zomato.",
        "Right Place for Your Cravings: Zomato.",
        "Satisfy Your Cravings: Zomato Delivers.",
        "Find Your Flavor: Zomato Makes Dining Easy.",
        "Explore Local Eats: Zomato Knows the Best Spots.",
        "From Street Food to Fine Dining: Zomato Has It All.",
        "Your Foodie Journey Starts Here: Zomato.",
        "Taste the Difference: Zomato's Top Picks Await.",
        "Eat Well, Live Well: Zomato Helps You Choose.",
        "Discover New Food Trends: Zomato Guides You.",
        "Hungry? Zomato Finds the Perfect Spot for You.",
        "Local Flavors, Global Tastes: Zomato Connects.",
        "Every Bite Counts: Zomato's Recommendations.",
        "Zomato: Where Food Lovers Meet.",
        "Dining Made Simple: Zomato Leads the Way.",
        "Crave. Discover. Zomato.",
        "Your Food Adventure Starts Here: Zomato.",
        "Zomato: Your Guide to Great Eats."
      ];
      

    const changePlaceholder = () => {
      const randomIndex = Math.floor(Math.random() * placeholderTexts.length);
      setPlaceholder(placeholderTexts[randomIndex]);
    };

    // Set an initial placeholder
    changePlaceholder();

    // Change placeholder every 3 seconds
    const intervalId = setInterval(changePlaceholder,3800);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.001" className="search w-full">
      <div className="backgroundimage w-full lg:h-[100vh] md:h-[80vh] sm:h-[60vh] h-[50vh] bg-cover bg-[url('/images/CITY.jpeg')] flex items-center justify-center">
        <form className="search-bar py-2 px-6 w-[80%] flex items-center justify-start bg-[#D9D9D9] rounded-full">
          <img className="lg:w-8 md:w-6 w-4" src="/images/serach-bar.png" alt="" />
          <input
            className="w-full ml-2 border-none outline-none text-[2vw] bg-[#D9D9D9] p-2 font-metropolis font-bold"
            type="text"
            placeholder={placeholder}
          />
        </form>
      </div>
    </div>
  );
}

export default Search;
