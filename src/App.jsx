import React from 'react';
import Navbar from './assets/components/Navbar';
import LandingPage from './assets/components/LandingPage';
import Marquee from './assets/components/Marquee';
import LocomotiveScroll from 'locomotive-scroll';
import Search from './assets/components/Search';
import Collections from './assets/components/Collections';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="bg-white w-full min-h-screen font-metropolis">
      <Navbar />
      <LandingPage />
      <Marquee />
      <Search />
      <Collections />
    </div>
  )
}

export default App