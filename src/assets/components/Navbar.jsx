import React from 'react'

function Navbar() {
  return (
    <div className="Navbar px-7 py-2 flex items-center justify-between">
      <div className="logo">
        <img className="h-9" src="/images/logo-transformed.png" alt="" />
      </div>
      <div className="links flex gap-5">
        {["Add Restaurant","Login","Sign Up"].map((item, index) => (
          <h1 className="font-semibold text-[1.3vw]" key={index}>{item}</h1>
          ))}
      </div>
      <div className="links flex gap-4">
        {["Contact Us"].map((item, index) => (
          <h1 className="font-semibold text-[1.3vw]" key={index}>{item}</h1>
          ))}
      </div>
    </div>
  )
}

export default Navbar