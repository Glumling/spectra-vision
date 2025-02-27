import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  // Track overall page scroll from 0 to 1
  const { scrollYProgress } = useScroll();

  // Scale the hero image from 1.1 to 1.0 between 0% and 30% of page scroll
  const imageScale = useTransform(scrollYProgress, [0, 0.3], [1.1, 1.0]);

  // Move big heading upward slightly
  const headingY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  // We'll animate the boxes from the bottom up. For example, box1Y from 100% to 0% over 30%-60% scroll
  const box1Y = useTransform(scrollYProgress, [0.3, 0.6], [100, 0]);
  const box2Y = useTransform(scrollYProgress, [0.4, 0.7], [100, 0]);
  const box3Y = useTransform(scrollYProgress, [0.5, 0.8], [100, 0]);

  return (
    <section className="hero-section">
      {/* The hero is pinned so we can scroll through 200vh total */}
      <div className="hero-scroll-container">
        <motion.div className="hero-sticky">
          {/* Hero image */}
          <motion.img
            src="/hero.jpg"
            alt="Hero"
            className="hero-image"
            style={{ scale: imageScale }}
          />

          {/* Large heading text */}
          <motion.h1
            className="hero-title"
            style={{ y: headingY }}
          >
            Clivelle<span className="red-asterisk">*</span>
          </motion.h1>

          {/* A short subheading */}
          <motion.p
            className="hero-subheading"
            style={{ y: headingY }}
          >
            Hi, I’m Clive. I’m a digital designer and highly talented 3D renderer 
            with over a decade of experience in the field.
          </motion.p>

          {/* Boxes that rise from the bottom as you scroll */}
          <motion.div className="box box1" style={{ y: box1Y }} />
          <motion.div className="box box2" style={{ y: box2Y }} />
          <motion.div className="box box3" style={{ y: box3Y }} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
