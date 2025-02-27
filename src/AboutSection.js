import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section style={{ height: '100vh', padding: '50px', background: '#fafafa' }}>
      <motion.h2
         initial={{ x: -100, opacity: 0 }}
         whileInView={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.8 }}
      >
         About Us
      </motion.h2>
      <motion.p
         initial={{ x: 100, opacity: 0 }}
         whileInView={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.8, delay: 0.3 }}
      >
         At SpectraVision, we blend technology with art to create eyewear that not only enhances your vision but also makes a statement.
      </motion.p>
    </section>
  );
};

export default AboutSection;
