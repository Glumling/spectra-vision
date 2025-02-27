import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  // useScroll gives us a scrollYProgress value between 0 and 1
  const { scrollYProgress } = useScroll();

  // We can transform the scrollYProgress into different animation outputs
  // Example: scale the image from 1.2 to 1.0 as we scroll from top to bottom
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1.0]);

  // Move the large heading up slightly as we scroll
  const headingY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  // Fade in shapes from bottom
  const shapesY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);
  const shapesOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section className="hero-section">
      {/* 
        The outer container is extra tall so we can scroll through it.
        The .sticky-container is pinned using position: sticky and top: 0,
        so it stays fixed while we scroll through this section’s height.
      */}
      <div className="hero-scroll-container">
        <motion.div className="sticky-container">
          {/* Hero image */}
          <motion.img
            src="/hero.jpg"
            alt="Hero"
            className="hero-image"
            style={{ scale: imageScale }}
          />

          {/* Large heading that sits behind the image visually (z-index) */}
          <motion.h1
            className="hero-title"
            style={{ y: headingY }}
          >
            Clivelle
          </motion.h1>

          {/* Shapes that come from the bottom */}
          <motion.div
            className="hero-shapes"
            style={{ y: shapesY, opacity: shapesOpacity }}
          >
            <div className="hero-shape shape-1"></div>
            <div className="hero-shape shape-2"></div>
            <div className="hero-shape shape-3"></div>
          </motion.div>

          {/* Small subheading or tagline */}
          <motion.p
            className="hero-tagline"
            style={{ y: headingY }}
          >
            I’m a digital designer and 3D renderer with over a decade of experience in the field.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
