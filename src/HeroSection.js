import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  const { scrollYProgress } = useScroll();

  // Scale the hero image from 1.1 at the top to 1.0 by 30% scroll
  const imageScale = useTransform(scrollYProgress, [0, 0.3], [1.1, 1.0]);
  // Move the large headline upward slightly
  const headingY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  // Animate boxes rising from the bottom as you scroll
  const box1Y = useTransform(scrollYProgress, [0.3, 0.6], [100, 0]);
  const box2Y = useTransform(scrollYProgress, [0.4, 0.7], [100, 0]);
  const box3Y = useTransform(scrollYProgress, [0.5, 0.8], [100, 0]);

  return (
    <section className="hero-section">
      <div className="hero-scroll-container">
        <motion.div className="hero-sticky">
          <motion.img
            src="/hero.jpg"
            alt="Hero"
            className="hero-image"
            style={{ scale: imageScale }}
          />
          <motion.h1 className="hero-title" style={{ y: headingY }}>
            Clivelle<span className="red-asterisk">*</span>
          </motion.h1>
          <motion.p className="hero-subheading" style={{ y: headingY }}>
            Hi, I’m Clive. I’m a digital designer and 3D renderer with over a decade of experience.
          </motion.p>

          {/* Rising Boxes for scroll transition */}
          <motion.div className="box box1" style={{ y: box1Y }} />
          <motion.div className="box box2" style={{ y: box2Y }} />
          <motion.div className="box box3" style={{ y: box3Y }} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
