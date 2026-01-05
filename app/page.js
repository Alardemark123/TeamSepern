'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { AnimatedHeading, ScrollReveal } from '@/components/AnimatedText';
import { ArrowDown, ArrowRight } from 'lucide-react';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
      >
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ scale: heroScale, y: heroY }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80)',
            }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-10 text-center text-white px-6 md:px-8 lg:px-12 w-full"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <h1 className="text-[2.6rem] md:text-8xl lg:text-[9rem] font-bold tracking-[0.1em] md:tracking-[0.2em] mb-6 whitespace-nowrap">
              <AnimatedHeading type="letters" delay={0.5}>
                TEAM SEPERN
              </AnimatedHeading>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-sm md:text-xl tracking-[0.3em] text-gray-300 mb-12  mt-4 uppercase"
          >
            Modern Luxury Streetwear • Crafted with Precision • Worn with Confidence
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <Link href="/products">
              <motion.button
                className="px-10 py-4 border border-white text-sm tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                EXPLORE COLLECTION
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/60"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Products Section */}
      <section className="py-32 px-6 bg-white">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="text-sm tracking-[0.3em] text-gray-500 mb-3">COLLECTION</p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-[0.1em]">
                  FEATURED
                </h2>
              </div>
              <Link href="/products">
                <motion.span 
                  className="hidden md:flex items-center gap-2 text-sm tracking-[0.2em] hover:gap-4 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  VIEW ALL <ArrowRight size={16} />
                </motion.span>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Statement Section */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <p className="text-sm tracking-[0.4em] text-gray-500 mb-8">OUR PHILOSOPHY</p>
          </ScrollReveal>
          
          <div className="space-y-6">
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide">
                BOLD.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide">
                MINIMAL.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide">
                CONFIDENT.
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.5}>
            <p className="mt-12 text-gray-400 text-lg leading-relaxed tracking-wide max-w-2xl mx-auto">
              We craft garments that speak without shouting. Every piece is designed 
              with intention, made with precision, and worn with purpose.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <Link href="/lookbook">
              <motion.button
                className="mt-12 px-10 py-4 border border-white text-sm tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                VIEW LOOKBOOK
              </motion.button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Editorial Image Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&q=80)'
            }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <ScrollReveal>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-[0.2em]">
              SS25
            </h2>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
