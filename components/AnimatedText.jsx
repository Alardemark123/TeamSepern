'use client';

import { motion } from 'framer-motion';

export function AnimatedHeading({ 
  children, 
  className = '', 
  delay = 0,
  type = 'words' // 'words' | 'letters' | 'lines'
}) {
  const text = children;
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: type === 'letters' ? 0.03 : 0.1,
        delayChildren: delay,
      },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  if (type === 'letters') {
    return (
      <motion.span
        className={`inline-block ${className}`}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={child}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  if (type === 'words') {
    return (
      <motion.span
        className={`inline-block ${className}`}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            key={index}
            variants={child}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.6, 0.05, 0.01, 0.9] 
      }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up' // 'up' | 'down' | 'left' | 'right'
}) {
  const directions = {
    up: { y: 60 },
    down: { y: -60 },
    left: { x: 60 },
    right: { x: -60 },
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.6, 0.05, 0.01, 0.9] 
      }}
    >
      {children}
    </motion.div>
  );
}
