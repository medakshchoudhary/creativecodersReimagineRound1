import React from 'react';
import Navbar from './assets/components/Navbar';
import LandingPage from './assets/components/LandingPage';
import LocomotiveScroll from 'locomotive-scroll';
import Marquee from './assets/components/Marquee';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="bg-white w-full min-h-screen font-metropolis">
      <Navbar />
      <LandingPage />
      <Marquee />
    </div>
  )
}

export default App