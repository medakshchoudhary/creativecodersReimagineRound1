import React from 'react';

function Page1() {
  return (
    <div className="banner w-full overflow-hidden">
      <div className="masker relative">
        <img className="h-11 absolute z-10 right-0 " src="/images/side_logo-transformed.png" alt="" />
      </div>
      <img className="h-96 w-full object-cover opacity-90" src="/images/banner.jpg" alt="" />
      
    </div>
  );
}

export default Page1;
