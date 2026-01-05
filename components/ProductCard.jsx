'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.6, 0.05, 0.01, 0.9]
      }}
    >
      <Link href={`/products/${product.id}`}>
        <motion.div 
          className="group relative cursor-pointer"
          whileHover="hover"
        >
          {/* Image Container */}
          <div className="relative overflow-hidden bg-gray-100 aspect-[3/4]">
            <motion.img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
              variants={{
                hover: { 
                  scale: 1.08,
                  y: -10,
                }
              }}
              transition={{ duration: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
            />
            
            {/* Overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-black/0"
              variants={{
                hover: { backgroundColor: 'rgba(0,0,0,0.1)' }
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Status Badge */}
            {product.status === 'limited' && (
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute top-4 right-4 text-xs tracking-[0.2em] bg-white text-black px-3 py-1"
              >
                LIMITED
              </motion.span>
            )}
          </div>

          {/* Product Info */}
          <div className="mt-5 space-y-2">
            <motion.h3
              className="text-sm tracking-[0.15em] font-medium"
              variants={{
                hover: { y: -3 }
              }}
              transition={{ duration: 0.3 }}
            >
              {product.name}
            </motion.h3>
            <motion.p
              className="text-sm text-gray-600"
              initial={{ opacity: 0.8 }}
              variants={{
                hover: { opacity: 1 }
              }}
              transition={{ duration: 0.3 }}
            >
              ${product.price}
            </motion.p>
          </div>

          {/* Shadow effect on hover */}
          <motion.div
            className="absolute -inset-4 -z-10 rounded-lg opacity-0"
            style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
            variants={{
              hover: { opacity: 1 }
            }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}
