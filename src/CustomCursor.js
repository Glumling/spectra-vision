import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addHoverListeners = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };

    document.addEventListener("mousemove", onMouseMove);
    addHoverListeners();
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <motion.div 
      className="custom-cursor"
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        pointerEvents: 'none',
        width: hovered ? 30 : 15,
        height: hovered ? 30 : 15,
        borderRadius: '50%',
        background: hovered ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.5)',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
      }}
      animate={{
        width: hovered ? 30 : 15,
        height: hovered ? 30 : 15,
        background: hovered ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.5)'
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    />
  );
};

export default CustomCursor;
