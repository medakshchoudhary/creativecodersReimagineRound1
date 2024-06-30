import React from 'react'

function Navbar() {
  return (
    <div className="Navbar pl-3 pr-6 py-2 flex items-center justify-between">
      <div className="logo">
        <img className="h-9" src="/images/logo-transformed.png" alt="" />
      </div>
      <div className="links flex gap-5">
        {["Add Restaurant","Login","Sign Up","Contact Us"].map((item, index) => {
          return (
            <a href="#" className={`font-normal text-[1.5vw] text-black no-underline ${index === 3 && "ml-48"}`} key={index}>{item}</a>
          );
        })}
      </div>
      
    </div>
  )
}

export default Navbar