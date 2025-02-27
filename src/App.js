import logo from './logo.svg';
import './App.css';
import React from 'react';
import { motion } from 'framer-motion';
import CustomCursor from './CustomCursor';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ImageSection from './ImageSection';
import PricingSection from './PricingSection';
import NavBar from './NavBar';
import NextSection from './NextSection';

function App() {
  return (
    <div>
      <CustomCursor />
      <motion.div initial="initial" animate="animate" exit="exit">
        <NavBar />
        <HeroSection />
        <NextSection />
        <AboutSection />
        <ImageSection />
        <PricingSection />
      </motion.div>
    </div>
  );
}

export default App;
