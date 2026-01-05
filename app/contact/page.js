'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/AnimatedText';
import { Send, Check, Instagram, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // UI-only submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };

  const inputClasses = (field) => `
    w-full bg-transparent border-b-2 py-4 text-lg tracking-wide outline-none transition-all duration-300
    ${focusedField === field || formState[field] 
      ? 'border-black' 
      : 'border-gray-300'
    }
  `;

  return (
    <div className="pt-24 pb-32 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <p className="text-sm tracking-[0.3em] text-gray-500 mb-4">GET IN TOUCH</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-[0.15em]">
              CONTACT
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div>
              <ScrollReveal>
                <h2 className="text-3xl font-bold tracking-[0.1em] mb-8">REACH OUT</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-gray-600 leading-relaxed mb-12 max-w-md">
                  We'd love to hear from you. Whether you have a question about our 
                  collection, sizing, or anything else, our team is ready to help.
                </p>
              </ScrollReveal>

              <div className="space-y-8">
                <ScrollReveal delay={0.2}>
                  <motion.div 
                    className="flex items-center gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Mail size={20} className="text-gray-400" />
                    <span className="tracking-wide">hello@tmsepern.com</span>
                  </motion.div>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <motion.div 
                    className="flex items-center gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Instagram size={20} className="text-gray-400" />
                    <span className="tracking-wide">@tmsepern</span>
                  </motion.div>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <motion.div 
                    className="flex items-center gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MapPin size={20} className="text-gray-400" />
                    <span className="tracking-wide">New York, NY</span>
                  </motion.div>
                </ScrollReveal>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ScrollReveal delay={0.2}>
                <form onSubmit={handleSubmit} className="space-y-10">
                  {/* Name Field */}
                  <div className="relative">
                    <motion.label
                      className={`absolute left-0 transition-all duration-300 tracking-[0.15em] text-sm ${
                        focusedField === 'name' || formState.name
                          ? '-top-6 text-xs text-gray-500'
                          : 'top-4 text-gray-400'
                      }`}
                    >
                      YOUR NAME
                    </motion.label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={inputClasses('name')}
                      required
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] bg-black"
                      initial={{ width: 0 }}
                      animate={{ width: focusedField === 'name' ? '100%' : '0%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <motion.label
                      className={`absolute left-0 transition-all duration-300 tracking-[0.15em] text-sm ${
                        focusedField === 'email' || formState.email
                          ? '-top-6 text-xs text-gray-500'
                          : 'top-4 text-gray-400'
                      }`}
                    >
                      YOUR EMAIL
                    </motion.label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={inputClasses('email')}
                      required
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] bg-black"
                      initial={{ width: 0 }}
                      animate={{ width: focusedField === 'email' ? '100%' : '0%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <motion.label
                      className={`absolute left-0 transition-all duration-300 tracking-[0.15em] text-sm ${
                        focusedField === 'message' || formState.message
                          ? '-top-6 text-xs text-gray-500'
                          : 'top-4 text-gray-400'
                      }`}
                    >
                      YOUR MESSAGE
                    </motion.label>
                    <textarea
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className={`${inputClasses('message')} resize-none min-h-[120px]`}
                      required
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] bg-black"
                      initial={{ width: 0 }}
                      animate={{ width: focusedField === 'message' ? '100%' : '0%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className="w-full py-5 bg-black text-white text-sm tracking-[0.2em] relative overflow-hidden group"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    disabled={isSubmitted}
                  >
                    <motion.span
                      className="absolute inset-0 bg-white"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative flex items-center justify-center gap-3">
                      {isSubmitted ? (
                        <>
                          <Check size={18} /> MESSAGE SENT
                        </>
                      ) : (
                        <>
                          <Send size={18} /> SEND MESSAGE
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
