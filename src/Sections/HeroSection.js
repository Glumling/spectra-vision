import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <motion.div 
         className="background-elements"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1 }}
      >
        {/* Random decorative elements */}
        <div className="line" style={{ top: '20%', left: '10%' }}></div>
        <div className="square" style={{ top: '50%', left: '80%' }}></div>
        <div className="line" style={{ top: '70%', left: '30%' }}></div>
        <div className="square" style={{ top: '10%', left: '60%' }}></div>
      </motion.div>
      <motion.h1
         initial={{ y: -50, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.8 }}
      >
         SpectraVision
      </motion.h1>
      <motion.p 
         initial={{ y: 50, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.8, delay: 0.3 }}
      >
         Redefining eyewear with futuristic design.
      </motion.p>
      <motion.button 
         className="hero-button"
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
      >
         Explore Collection
      </motion.button>
    </section>
  );
};

export default HeroSection;
