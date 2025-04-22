// Updated Hero Component with Divider
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-b from-[#98DDC4] to-[#B1E6B3] z-0"
      />
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="md:w-1/2 text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#8E7A73]"
            >
              Tu Camino hacia <span className="whitespace-nowrap">el Bienestar Emocional</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, ease: "easeOut" }}
              className="text-xl md:text-2xl mb-8 text-[#3F3F46] max-w-lg mx-auto md:mx-0"
            >
              Acompañamiento terapéutico personalizado para tu crecimiento personal
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, ease: "easeOut" }}
            >
              <motion.a
                href="#contact"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: '#8E7A73'
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-[#8E7A73] text-white font-bold py-3 px-8 rounded-full shadow-lg inline-block"
              >
                Agenda una cita
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="md:w-1/2"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <Image
                src="/love-yourself.png"
                alt="Professional therapist in a calming environment"
                fill
                className="object-cover rounded-xl shadow-2xl border-4 border-white"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, ease: "easeOut" }}
                className="absolute -z-10 inset-0 bg-[#98DDC4] rounded-xl translate-x-6 translate-y-6"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-px bg-[#8E7A73]/20 w-full"
      />
    </section>
  );
}
