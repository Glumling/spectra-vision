import logo from './logo.svg';
import './App.css';
import React from 'react';
import { motion } from 'framer-motion';
import CustomCursor from './CustomCursor';
import HeroSection from './Sections/HeroSection';
import AboutSection from './Sections/AboutSection';
import ImageSection from './Sections/ImageSection';
import PricingSection from './Sections/PricingSection';

function App() {
  return (
    <div>
      <CustomCursor />
      <motion.div initial="initial" animate="animate" exit="exit">
        <HeroSection />
        <AboutSection />
        <ImageSection />
        <PricingSection />
      </motion.div>
    </div>
  );
}

export default App;
