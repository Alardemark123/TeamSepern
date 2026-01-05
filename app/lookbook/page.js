'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { lookbookItems } from '@/data/lookbook';
import { ScrollReveal } from '@/components/AnimatedText';

function LookbookItem({ item, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`relative min-h-[80vh] flex items-center ${isEven ? '' : 'justify-end'}`}
      style={{ opacity }}
    >
      {/* Background Image */}
      <motion.div
        className={`absolute inset-0 ${
          isEven ? 'right-1/4' : 'left-1/4'
        } overflow-hidden`}
        style={{ scale }}
      >
        <motion.img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          style={{ y }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Content */}
      <motion.div
        className={`relative z-10 p-12 md:p-20 max-w-lg ${
          isEven ? 'ml-auto mr-[10%] text-right' : 'mr-auto ml-[10%] text-left'
        }`}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
      >
        <span className="text-sm tracking-[0.3em] text-white/60 mb-4 block">
          0{index + 1}
        </span>
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-[0.1em] mb-6">
          {item.title}
        </h2>
        <p className="text-white/70 text-lg tracking-wide">
          {item.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function LookbookPage() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1920&q=80)'
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <div className="relative z-10 text-center text-white">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm tracking-[0.4em] text-white/60 mb-6"
          >
            SS25 EDITORIAL
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-[0.2em]"
          >
            LOOKBOOK
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-white/40"
            >
              SCROLL
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Lookbook Items */}
      <section className="relative">
        {lookbookItems.map((item, index) => (
          <LookbookItem key={item.id} item={item} index={index} />
        ))}
      </section>

      {/* End Section */}
      <section className="py-32 text-center">
        <ScrollReveal>
          <p className="text-sm tracking-[0.3em] text-white/60 mb-6">TM SEPERN</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-[0.15em]">
            SS25
          </h2>
        </ScrollReveal>
      </section>
    </div>
  );
}
