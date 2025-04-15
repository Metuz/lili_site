'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-[#95dcc6] to-[#b1e6b3] z-0"
      />
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text content - animated */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#66332f]"
            >
              Your Journey to <span className="whitespace-nowrap">Mental Wellness</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl mb-8 text-[#66332f] max-w-lg mx-auto md:mx-0"
            >
              Compassionate care tailored to your unique needs
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: '#4a2522'
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#66332f] text-white font-bold py-3 px-8 rounded-full shadow-lg"
              >
                Book a Session
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image - animated */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:w-1/2"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <Image
                src="/love-yourself.png" // Replace with your image path
                alt="Professional therapist in a calming environment"
                fill
                className="object-cover rounded-xl shadow-2xl border-4 border-white"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Decorative elements */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute -z-10 inset-0 bg-[#95dcc6] rounded-xl translate-x-6 translate-y-6"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated decorative elements */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-[#66332f] opacity-10 skew-y-3 origin-bottom"
      />
    </section>
  );
}
