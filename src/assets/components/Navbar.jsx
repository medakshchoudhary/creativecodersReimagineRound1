import React from 'react'

function Navbar() {
  return (
    <div className="Navbar pl-3 pr-6 py-2 flex items-center justify-between">
      <div className="w-full links flex items-center justify-between">
        <img className="h-11 logo hover:cursor-pointer" src="/images/logo-transformed.png" alt="" />
        <div className="center-links flex gap-5">
        {["Add Restaurant","Login","Sign Up"].map((item, index) => {
          return (
            <a 
            href="#" 
            className={"font-normal text-[1.5vw] leading-none text-black no-underline"}
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
          );
        })}
        </div>
        <div className="end-link">
        {["Contact Us"].map((item, index) => {
          return (
            <a 
            href="#" 
            className={"font-normal text-[1.5vw] leading-none text-black no-underline"}
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
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default Navbar