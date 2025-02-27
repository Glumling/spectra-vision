import React from 'react';
import { motion } from 'framer-motion';
import './NavBar.css';

const links = ['Home', 'About', 'Work', 'Blog'];

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <span className="logo">
          VIPER<span className="red-asterisk">*</span>
        </span>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          {links.map((link) => (
            <motion.li
              key={link}
              className="nav-item"
              // "whileHover" triggers on hover
              whileHover="hover"
              initial="rest"
              animate="rest"
              variants={{
                rest: {},
                hover: {},
              }}
            >
              {/* Container with two spans: topSpan & bottomSpan */}
              <div className="nav-text-wrapper">
                <motion.span
                  className="nav-text topSpan"
                  variants={{
                    rest: { y: '0%' },
                    hover: { y: '-100%' },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {link}
                </motion.span>
                <motion.span
                  className="nav-text bottomSpan"
                  variants={{
                    rest: { y: '100%' },
                    hover: { y: '0%' },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {link}
                </motion.span>
              </div>
            </motion.li>
          ))}
        </ul>

        {/* A special CTA button with a circle that slides in from the left on hover */}
        <motion.button
          className="contact-btn"
          initial="rest"
          animate="rest"
          whileHover="hover"
        >
          <motion.div
            className="circle-fill"
            variants={{
              rest: { x: '-100%', opacity: 0 },
              hover: { x: 0, opacity: 1 },
            }}
            transition={{ duration: 0.3 }}
          />
          <span className="btn-text">Get in touch</span>
        </motion.button>
      </div>
    </div>
  );
};

export default NavBar;
