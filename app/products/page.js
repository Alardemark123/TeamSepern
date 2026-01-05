'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { ScrollReveal } from '@/components/AnimatedText';

const categories = [
  { value: 'all', label: 'ALL' },
  { value: 't-shirts', label: 'T-SHIRTS' },
  { value: 'hoodies', label: 'HOODIES' },
  { value: 'sweatshirts', label: 'SWEATSHIRTS' },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 pb-32">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <p className="text-sm tracking-[0.3em] text-gray-500 mb-4">COLLECTION</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-[0.15em]">
              PRODUCTS
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-10 px-6 border-b border-gray-200">
        <div className="container mx-auto">
          <motion.div 
            className="flex flex-wrap gap-6 md:gap-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`relative text-sm tracking-[0.2em] pb-2 transition-colors duration-300 ${
                  activeCategory === category.value 
                    ? 'text-black' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
                whileTap={{ scale: 0.98 }}
              >
                {category.label}
                {activeCategory === category.value && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-8"
            >
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-500 tracking-wide">No products found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
