import React from 'react'

function Footer() {
  return (
    <div className="footer p-[5vw]">
        <h1 className="text-[3vw] leading-none">This is Re-Imagined Zomato, made for Submission 1 under the hackathon Re-Imagine by SHERYIANS CODING SCHOOL.All rights are reserved to Zomato.</h1>
        <div className="links flex items-start justify-center mt-10">
            <h2 className="text-[2vw] mr-2">Made by :</h2>
            <div className="socials flex flex-col gap-3">
                <div className="daksh flex items-center justify-center gap-2 text-[2vw]">
                    <a href="https://linktr.ee/dakshchoudhary" target="_blank" rel="noopener noreferrer">Daksh Chouhary</a>
                    <img className="w-24 rounded-md px-2 border-solid border-2 border-black" src="/images/linktree.png" alt="" />
                </div>
                <div className="ankijit flex items-center justify-center gap-2 text-[2vw]">
                    <a href="https://www.linkedin.com/in/ankijit-roy-642409263/" target="_blank" rel="noopener noreferrer">Anikijit</a>
                    <img className="w-6" src="/images/linkedin.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer