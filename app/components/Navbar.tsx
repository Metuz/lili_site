// Updated Navbar Component
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import logo from '@/public/logo.jpeg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Acerca de mí', id: 'about' },
    { name: 'Terapias', id: 'therapy' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contacto', id: 'contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-[#98DDC4] text-[#3F3F46] p-4 sticky top-0 z-50 shadow-sm"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.a
          href="#home"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Image
            src={logo}
            alt="Terapia El fin - Salud Mental"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-semibold hidden sm:block text-[#8E7A73]">
            Terapia el fin
          </span>
        </motion.a>

        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              whileHover={{
                scale: 1.05,
                color: '#8E7A73',
                backgroundColor: '#F8F5F2',
                transition: { duration: 0.2, ease: "easeInOut" }
              }}
              whileTap={{ scale: 0.98 }}
              className="px-3 py-2 font-medium rounded-md transition-all"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <motion.div
            animate={menuOpen ? "open" : "closed"}
            variants={{
              open: { rotate: 90 },
              closed: { rotate: 0 }
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.div>
        </motion.button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeIn" }
            }}
            className="md:hidden bg-[#F8F5F2] rounded-lg mt-2 overflow-hidden"
          >
            <motion.div 
              className="py-2 space-y-1"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { staggerChildren: 0.1, ease: "easeOut" }
              }}
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ 
                    x: 0, 
                    opacity: 1,
                    transition: { type: 'spring', stiffness: 300, damping: 10 }
                  }}
                  whileHover={{ 
                    backgroundColor: 'rgba(187, 168, 160, 0.1)',
                    paddingLeft: '1rem',
                    color: '#8E7A73'
                  }}
                  className="block py-3 px-4 font-medium rounded-md text-[#3F3F46]"
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
