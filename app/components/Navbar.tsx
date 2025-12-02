"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { name: "Acerca de mí", id: "about" },
    { name: "Terapias", id: "therapy" },
    { name: "Contacto", id: "contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white/95 backdrop-blur-md text-gray-900 p-4 sticky top-0 z-50 shadow-lg border-b border-[#4ECDC4]/20"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.a
          href="#home"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="relative">
            <Image
              src="/logo.jpeg"
              alt="Terapia El fin - Salud Mental"
              width={45}
              height={45}
              className="rounded-full border-2 border-[#4ECDC4]/30"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#8BC34A] rounded-full border-2 border-white" />
          </div>
          <div className="hidden sm:block">
            <span className="text-xl font-bold text-gray-900">Terapia el fin</span>
            <div className="text-xs text-[#4ECDC4] font-medium">Psicoterapia profesional</div>
          </div>
        </motion.a>

        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#4ECDC4",
                color: "#ffffff",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-4 py-2 font-medium rounded-full transition-all duration-200 text-gray-700 hover:shadow-md"
            >
              {item.name}
            </motion.a>
          ))}

          <motion.a
            href="https://calendly.com/lic-lilia-psicologa/30min"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 bg-gradient-to-r from-[#4ECDC4] to-[#8BC34A] text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Agenda cita
          </motion.a>
        </div>

        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="md:hidden p-2 rounded-full hover:bg-[#4ECDC4]/10 focus:outline-none"
          aria-label="Toggle menu"
        >
          <motion.div
            animate={menuOpen ? "open" : "closed"}
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              height: "auto",
              opacity: 1,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
            className="md:hidden bg-white/95 backdrop-blur-md rounded-xl mt-4 overflow-hidden shadow-xl border border-[#4ECDC4]/20"
          >
            <motion.div
              className="py-4 space-y-2"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { staggerChildren: 0.1, ease: "easeOut" },
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
                    transition: { type: "spring", stiffness: 300, damping: 10 },
                  }}
                  whileHover={{
                    backgroundColor: "#4ECDC4",
                    color: "#ffffff",
                    paddingLeft: "1.5rem",
                  }}
                  className="block py-3 px-6 font-medium text-gray-700 transition-all duration-200"
                >
                  {item.name}
                </motion.a>
              ))}

              <motion.div className="px-6 pt-2">
                <motion.a
                  href="https://calendly.com/lic-lilia-psicologa/30min"
                  onClick={() => setMenuOpen(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full text-center bg-gradient-to-r from-[#4ECDC4] to-[#8BC34A] text-white font-semibold py-3 px-6 rounded-full shadow-lg"
                >
                  Agenda una cita
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
