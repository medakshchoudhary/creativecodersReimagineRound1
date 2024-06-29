import React from 'react';
import { motion } from 'framer-motion';

function Page1() {
  return (
    <div className="relative banner w-full overflow-hidden">
      <img className="w-11 absolute z-10 right-0" src="/images/side_logo-transformed.png" alt="" />
      <div className="absolute textstructure z-10 text-white px-7 py-[14vh]">
        <div className="masker">
          <div className="w-fit flex items-end overflow-hidden">
            <h1 className="m-0 text-[100px] uppercase">
              HUNGRY?
            </h1>
          </div>
        </div>
        <div className="masker flex">
          <motion.div
            className="flex items-end overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{
              duration: 2,
              delay: 1,
              ease: "easeInOut"
            }}
          >
            <img
              className="mr-[1vw] ml-[0.5vw] h-[4.8vw] rounded-md relative bottom-[1.2vw]"
              src="/images/zomato-red.png"
              alt=""
            />
          </motion.div>
          <h1 className="m-0 text-[100px] uppercase">
            IS HERE
          </h1>
        </div>
        <div className="masker">
          <div className="w-fit flex items-end overflow-hidden">
            <h1 className="m-0 text-[100px] uppercase">
              DELIVERING AT <span className="text-[#DA3842]">DOORSTEP</span>
            </h1>
          </div>
        </div>
      </div>
      <img className="h-[70vh] w-full object-cover opacity-90" src="/images/banner.jpg" alt="" />
    </div>
  );
}

export default Page1;
