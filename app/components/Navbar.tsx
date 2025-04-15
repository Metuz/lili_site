'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Terapias', id: 'therapy' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contacto', id: 'contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#95dcc6] text-[#66332f] p-4 sticky top-0 z-50 shadow-sm"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand with animation */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold cursor-pointer"
        >
          Terapia El fin
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              whileHover={{
                y: -3,
                color: '#4a2522',
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-2 font-medium rounded-md transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <motion.div
            animate={menuOpen ? "open" : "closed"}
            variants={{
              open: { rotate: 90 },
              closed: { rotate: 0 }
            }}
            transition={{ duration: 0.3 }}
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

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: { duration: 0.3 }
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.3 }
            }}
            className="md:hidden overflow-hidden"
          >
            <motion.div 
              className="pt-4 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }}
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ 
                    x: 0, 
                    opacity: 1,
                    transition: { type: 'spring', stiffness: 300 }
                  }}
                  whileHover={{ 
                    backgroundColor: 'rgba(106, 51, 47, 0.1)',
                    x: 5
                  }}
                  className="block py-3 px-4 font-medium rounded-md"
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
