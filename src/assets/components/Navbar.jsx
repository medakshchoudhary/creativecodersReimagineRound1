import React, { useState, useEffect } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen]);

  return (
    <div className="Navbar pl-3 pr-6 py-2 flex items-center justify-between">
      <div className="flex items-center justify-between w-full">
        <img className="h-11 logo hover:cursor-pointer" src="/images/logo-transformed.png" alt="logo" />

        {/* Hamburger menu for mobile */}
        <div className="md:hidden z-40">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Navigation links for desktop */}
        <div className="center-links hidden md:flex gap-5">
          {["Add Restaurant", "Login", "Sign Up"].map((item, index) => (
            <a
              href="#"
              className="font-normal text-base md:text-[1.5vw] leading-none text-black no-underline"
              style={{ position: "relative" }}
              onMouseEnter={(e) => {
                e.target.style.setProperty("background-image", "linear-gradient(to right, #000000, #000000)");
                e.target.style.setProperty("background-size", "0% 2px");
                e.target.style.setProperty("transition", "background-size 0.3s");
                e.target.style.setProperty("background-position", "0 100%");
                e.target.style.setProperty("background-repeat", "no-repeat");
                setTimeout(() => {
                  e.target.style.setProperty("background-size", "100% 2px");
                }, 0);
              }}
              onMouseLeave={(e) => {
                e.target.style.setProperty("background-size", "0% 2px");
                e.target.style.setProperty("transition", "background-size 0.6s");
              }}
              key={index}
            >
              {item}
            </a>
          ))}
        </div>

        {/* End link for desktop */}
        <div className="end-link hidden md:flex">
          {["Contact Us"].map((item, index) => (
            <a
              href="#"
              className="font-normal text-base md:text-[1.5vw] leading-none text-black no-underline"
              style={{ position: "relative" }}
              onMouseEnter={(e) => {
                e.target.style.setProperty("background-image", "linear-gradient(to right, #000000, #000000)");
                e.target.style.setProperty("background-size", "0% 2px");
                e.target.style.setProperty("transition", "background-size 0.3s");
                e.target.style.setProperty("background-position", "0 100%");
                e.target.style.setProperty("background-repeat", "no-repeat");
                setTimeout(() => {
                  e.target.style.setProperty("background-size", "100% 2px");
                }, 0);
              }}
              onMouseLeave={(e) => {
                e.target.style.setProperty("background-size", "0% 2px");
                e.target.style.setProperty("transition", "background-size 0.6s");
              }}
              key={index}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-[#E23744] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-black z-50"
          onClick={() => setMenuOpen(false)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col items-start px-10 py-20 gap-3 space-y-4">
          {["Add Restaurant", "Login", "Sign Up", "Contact Us"].map((item, index) => (
            <a
              href="#"
              className="font-normal text-2xl leading-none text-black no-underline"
              style={{ position: "relative" }}
              onMouseEnter={(e) => {
                e.target.style.setProperty("background-image", "linear-gradient(to right, #000000, #000000)");
                e.target.style.setProperty("background-size", "0% 2px");
                e.target.style.setProperty("transition", "background-size 0.3s");
                e.target.style.setProperty("background-position", "0 100%");
                e.target.style.setProperty("background-repeat", "no-repeat");
                setTimeout(() => {
                  e.target.style.setProperty("background-size", "100% 2px");
                }, 0);
              }}
              onMouseLeave={(e) => {
                e.target.style.setProperty("background-size", "0% 2px");
                e.target.style.setProperty("transition", "background-size 0.6s");
              }}
              key={index}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
