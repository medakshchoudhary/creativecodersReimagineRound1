import React from 'react';

function Footer() {
  return (
    <div className="footer p-4 md:p-[5vw]">
      <h1 className="text-[6vw] md:text-[3vw] leading-none text-center md:text-left">
        This is Re-Imagined Zomato, made for Submission 1 under the hackathon Re-Imagine by SHERYIANS CODING SCHOOL. All rights are reserved to Zomato.
      </h1>
      <div className="links flex flex-col md:flex-row items-center md:items-start justify-center mt-6 md:mt-10">
        <h2 className="text-[6vw] md:text-[2vw] mr-0 md:mr-2 mb-2 md:mb-0 text-center md:text-left">Made by:</h2>
        <div className="socials flex flex-col gap-3">
          <div className="daksh flex flex-row items-center justify-center gap-2 text-[4vw] md:text-[2vw]">
            <a href="https://linktr.ee/dakshchoudhary" target="_blank" rel="noopener noreferrer" className="text-center md:text-left">Daksh Chouhary</a>
            <img className="w-16 md:w-24 rounded-md px-2 border-solid border-2 border-black" src="/images/linktree.png" alt="Linktree" />
          </div>
          <div className="ankijit flex flex-row items-center justify-center gap-2 text-[4vw] md:text-[2vw]">
            <a href="https://www.linkedin.com/in/ankijit-roy-642409263/" target="_blank" rel="noopener noreferrer" className="text-center md:text-left">Anikijit</a>
            <img className="w-6 md:w-6" src="/images/linkedin.png" alt="LinkedIn" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;