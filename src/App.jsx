import React from 'react';
import Navbar from './components/Navbar';
import "../src/assets/fonts.css"
import { Container } from '@mui/material';
import Hero from './components/Hero';
import Cravings from './components/Cravings';
import Search from './components/Search';

function App() {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Hero/>
      <Cravings/>
      <Search/>
    </Container>
   
  )
}

export default App