import React from 'react'

function Navbar() {
  return (
    <div className="Navbar pl-3 pr-6 py-2 flex items-center justify-between">
      <div href="#" className="logo hover:cursor-pointer">
        <img className="h-11" src="/images/logo-transformed.png" alt="" />
      </div>
      <div className="links flex gap-5">
        {["Add Restaurant","Login","Sign Up","Contact Us"].map((item, index) => {
          return (
            <a 
              href="#" 
              className={`font-normal text-[1.8vw] leading-none text-black no-underline ${index === 3 && "ml-48"}`}
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
  );
}

export default Navbar