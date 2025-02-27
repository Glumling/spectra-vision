import React from 'react';
import { motion } from 'framer-motion';

const ImageSection = () => {
  const imageVariants = {
    initial: { scale: 1.5, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <section style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <motion.img 
         src="https://via.placeholder.com/800x600?text=Glasses+Design" 
         alt="Glasses Design"
         variants={imageVariants}
         initial="initial"
         whileInView="animate"
         viewport={{ once: true }}
         style={{ width: '80%', height: 'auto', margin: 'auto', display: 'block' }}
      />
    </section>
  );
};

export default ImageSection;
