'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { getProduct, products } from '@/data/products';
import { ScrollReveal } from '@/components/AnimatedText';
import { ArrowLeft, Check, Minus, Plus } from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const product = getProduct(params.id);
  const imageRef = useRef(null);
  
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start start", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-[0.1em] mb-4">PRODUCT NOT FOUND</h1>
          <Link href="/products">
            <motion.span 
              className="text-sm tracking-[0.2em] underline"
              whileHover={{ opacity: 0.7 }}
            >
              BACK TO PRODUCTS
            </motion.span>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  return (
    <div className="pt-24 pb-32">
      {/* Back Button */}
      <div className="container mx-auto px-6 py-6">
        <Link href="/products">
          <motion.span 
            className="inline-flex items-center gap-2 text-sm tracking-[0.2em] text-gray-600 hover:text-black transition-colors"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft size={16} /> BACK
          </motion.span>
        </Link>
      </div>

      {/* Product Section */}
      <section className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Section */}
          <div ref={imageRef} className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
              className="overflow-hidden bg-gray-100"
            >
              <motion.img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full aspect-[3/4] object-cover"
                style={{ y: imageY }}
              />
            </motion.div>

            {/* Thumbnail Navigation */}
            {product.images.length > 1 && (
              <div className="flex gap-4 mt-6">
                {product.images.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-24 overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-black' : 'border-transparent'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="py-4">
            <ScrollReveal>
              <p className="text-sm tracking-[0.3em] text-gray-500 mb-3">
                {product.category.toUpperCase()}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold tracking-[0.1em] mb-4">
                {product.name}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-2xl tracking-wide mb-8">${product.price}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-gray-600 leading-relaxed mb-10 max-w-lg">
                {product.description}
              </p>
            </ScrollReveal>

            {/* Size Selector */}
            <ScrollReveal delay={0.4}>
              <div className="mb-8">
                <p className="text-sm tracking-[0.2em] mb-4">SELECT SIZE</p>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <motion.button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-14 h-14 border-2 text-sm tracking-wider transition-all ${
                        selectedSize === size
                          ? 'border-black bg-black text-white'
                          : 'border-gray-300 hover:border-black'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {size}
                    </motion.button>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Quantity Selector */}
            <ScrollReveal delay={0.5}>
              <div className="mb-10">
                <p className="text-sm tracking-[0.2em] mb-4">QUANTITY</p>
                <div className="flex items-center gap-4">
                  <motion.button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:border-black transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    <Minus size={16} />
                  </motion.button>
                  <span className="w-12 text-center text-lg">{quantity}</span>
                  <motion.button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:border-black transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    <Plus size={16} />
                  </motion.button>
                </div>
              </div>
            </ScrollReveal>

            {/* Add to Cart Button */}
            <ScrollReveal delay={0.6}>
              <motion.button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={`w-full py-5 text-sm tracking-[0.2em] transition-all duration-500 relative overflow-hidden ${
                  selectedSize
                    ? 'bg-black text-white hover:bg-gray-900'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
                whileHover={selectedSize ? { scale: 1.01 } : {}}
                whileTap={selectedSize ? { scale: 0.99 } : {}}
              >
                {/* Ripple Effect */}
                <motion.span
                  className="absolute inset-0 bg-white"
                  initial={{ scale: 0, opacity: 0.3 }}
                  animate={isAddedToCart ? { scale: 4, opacity: 0 } : { scale: 0, opacity: 0.3 }}
                  transition={{ duration: 0.6 }}
                />
                
                <span className="relative flex items-center justify-center gap-2">
                  {isAddedToCart ? (
                    <>
                      <Check size={18} /> ADDED TO CART
                    </>
                  ) : selectedSize ? (
                    'ADD TO CART'
                  ) : (
                    'SELECT A SIZE'
                  )}
                </span>
              </motion.button>
            </ScrollReveal>

            {/* Product Status */}
            {product.status === 'limited' && (
              <ScrollReveal delay={0.7}>
                <p className="mt-6 text-sm tracking-[0.2em] text-gray-500">
                  ★ LIMITED EDITION
                </p>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="mt-32 px-6">
        <div className="container mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl font-bold tracking-[0.15em] mb-12">YOU MAY ALSO LIKE</h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products
              .filter(p => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link href={`/products/${relatedProduct.id}`}>
                    <motion.div 
                      className="group"
                      whileHover="hover"
                    >
                      <div className="overflow-hidden bg-gray-100 aspect-[3/4] mb-4">
                        <motion.img
                          src={relatedProduct.images[0]}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover"
                          variants={{
                            hover: { scale: 1.05 }
                          }}
                          transition={{ duration: 0.4 }}
                        />
                      </div>
                      <h3 className="text-sm tracking-[0.1em] mb-1">{relatedProduct.name}</h3>
                      <p className="text-sm text-gray-600">${relatedProduct.price}</p>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
