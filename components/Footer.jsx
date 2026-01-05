'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const footerLinks = [
  { href: '/products', label: 'SHOP' },
  { href: '/lookbook', label: 'LOOKBOOK' },
  { href: '/contact', label: 'CONTACT' },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-black text-white py-20 border-t border-white/10"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold tracking-[0.3em] mb-4">TM SEPERN</h3>
            <p className="text-gray-400 text-sm leading-relaxed tracking-wide">
              Modern luxury streetwear for the bold and minimal.
              Crafted with precision, worn with confidence.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:text-center"
          >
            <h4 className="text-sm tracking-[0.2em] mb-6 text-gray-500">NAVIGATION</h4>
            <nav className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <motion.span
                    className="text-sm tracking-[0.15em] text-gray-300 hover:text-white transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.span>
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:text-right"
          >
            <h4 className="text-sm tracking-[0.2em] mb-6 text-gray-500">FOLLOW US</h4>
            <div className="flex gap-6 md:justify-end">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-xs tracking-[0.2em] text-gray-500">
            © {new Date().getFullYear()} TM SEPERN. ALL RIGHTS RESERVED.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
