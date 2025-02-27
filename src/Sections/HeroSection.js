import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  // We'll track scroll progress across the entire page (0 to 1)
  const { scrollYProgress } = useScroll();

  // IMAGE SCALE: from 1.1 at the top to 1.0 around 50% scroll
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1.0]);

  // HEADING Y: moves the big "Clivelle*" text up slightly as we scroll
  const headingY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  // BLOCK/BLACK PANEL RISING: moves from 100% to 0% of its height
  const panelY = useTransform(scrollYProgress, [0.2, 0.8], [100, 0]);

  // OPACITY for the subtext: fade in around 0.2 scroll
  const subtextOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <section className="hero-section">
      {/* NAVBAR */}
      <div className="navbar">
        <div className="navbar-left">
          <span className="logo">
            VIPER<span className="red-asterisk">*</span>
          </span>
        </div>
        <div className="navbar-right">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
          <button className="contact-btn">Get in touch</button>
        </div>
      </div>
      {/* RED TOP BAR */}
      <div className="top-red-bar"></div>

      {/* SCROLL CONTAINER: pinned for the hero effect */}
      <div className="hero-scroll-container">
        <motion.div className="hero-sticky">

          {/* The hero image pinned behind everything */}
          <motion.img
            src="/hero.jpg"
            alt="Hero"
            className="hero-image"
            style={{ scale: imageScale }}
          />

          {/* Big heading text that slides upward */}
          <motion.h1
            className="hero-title"
            style={{ y: headingY }}
          >
            Clivelle<span className="red-asterisk">*</span>
          </motion.h1>

          {/* Copyright and short line */}
          <motion.div
            className="hero-copyright"
            style={{ y: headingY }}
          >
            ©2025
          </motion.div>

          {/* Subheading on the right side, fades in */}
          <motion.div
            className="hero-subheading"
            style={{ opacity: subtextOpacity }}
          >
            <p>
              Hi, I am Clive. I’m a digital designer and highly talented 3D
              renderer with over a decade of experience in the field.
            </p>
          </motion.div>

          {/* Black panel (or shapes) rising from the bottom */}
          <motion.div
            className="bottom-panel"
            style={{ y: panelY }}
          >
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
