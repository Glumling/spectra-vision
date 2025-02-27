import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PricingSection = () => {
  const [billing, setBilling] = useState('monthly'); // "monthly" or "yearly"
  const [price, setPrice] = useState(29);

  const toggleBilling = () => {
    if (billing === 'monthly') {
      setBilling('yearly');
      setPrice(290); // example yearly price
    } else {
      setBilling('monthly');
      setPrice(29);
    }
  };

  return (
    <section style={{ height: '100vh', padding: '50px', background: '#fff' }}>
      <motion.h2
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 0.8 }}
      >
         Pricing Plan
      </motion.h2>
      <motion.div
         style={{
           border: '1px solid #ddd',
           padding: '20px',
           borderRadius: '10px',
           width: '300px',
           margin: '50px auto',
           textAlign: 'center'
         }}
         initial={{ scale: 0.8, opacity: 0 }}
         whileInView={{ scale: 1, opacity: 1 }}
         transition={{ duration: 0.8 }}
      >
         <AnimatePresence exitBeforeEnter>
           <motion.div
              key={billing}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
           >
              <h3>{billing === 'monthly' ? 'Monthly Plan' : 'Yearly Plan'}</h3>
              <p style={{ fontSize: '2rem' }}>${price}</p>
           </motion.div>
         </AnimatePresence>
         <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleBilling}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              fontSize: '1rem',
              border: 'none',
              borderRadius: '5px',
              background: '#000',
              color: '#fff',
              cursor: 'pointer'
            }}
         >
            Toggle Billing
         </motion.button>
      </motion.div>
    </section>
  );
};

export default PricingSection;
