import React from 'react'


const navbaritems = ["Add Restaurant","Login","Sign Up"]
function Navbar() {
  return (
    <div className="Navbar flex items-center justify-between">
      <div className="logo">
        <img className="h-11" src="/src/assets/images/logo-transformed.png" alt="" />
      </div>
      <div className="links flex gap-4">
        {navbaritems.map((item, index) => (
          <h1 className="font-normal text-[1.5vw]" key={index}>{item}</h1>
          ))}
      </div>
      <div className="links flex gap-4">
        {["Contact Us"].map((item, index) => (
          <h1 className="font-normal text-[1.5vw]" key={index}>{item}</h1>
          ))}
      </div>
    </div>
  )
}

export default Navbar