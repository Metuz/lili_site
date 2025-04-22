// Updated About Component with Divider
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import profilePhoto from '@/public/logo.jpeg';

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-20 px-4 bg-[#F8F5F2] text-[#3F3F46]"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.2, ease: "easeOut" }}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative w-full lg:w-1/3 h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={profilePhoto}
              alt="Lilia Aguilar - Psicoterapeuta Psicoanalítica"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority
            />
          </motion.div>

          <div className="w-full lg:w-2/3 space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, ease: "easeOut" }}
              className="text-3xl font-bold border-b-2 border-[#98DDC4] pb-2 text-[#8E7A73]"
            >
              Sobre mí
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, ease: "easeOut" }}
              className="text-lg leading-relaxed"
            >
              Mi nombre es <strong className="text-[#8E7A73]">Lilia Aguilar</strong>, psicoterapeuta psicoanalítica con 8 años de experiencia acompañando a personas en su proceso de sanación emocional.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, ease: "easeOut" }}
              className="text-lg leading-relaxed"
            >
             Mi enfoque se basa en una comprensión profunda de la subjetividad humana, lo que me permite ofrecer un espacio seguro, reflexivo y respetuoso para cada persona que decida emprender este viaje de autoconocimiento.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, ease: "easeOut" }}
              className="text-lg leading-relaxed"
            >
              A lo largo de mi trayectoria, he trabajado con niños, adultos y parejas, ayudándoles a enfrentar sus dificultades emocionales, superar momentos difíciles y transformar su bienestar psicológico. 
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, ease: "easeOut" }}
              className="text-lg leading-relaxed font-medium italic border-l-4 border-[#98DDC4] pl-4 py-2 text-[#8E7A73]"
            >
              Mi objetivo es ofrecerte un acompañamiento único, basado en el respeto por tu proceso y tu tiempo, para que puedas encontrar las herramientas internas que te permitan crecer y sanar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.0, ease: "easeOut" }}
              className="pt-4"
            >
              <div className="flex flex-wrap gap-4">
                <span className="bg-[#98DDC4] text-[#3F3F46] px-3 py-1 rounded-full text-sm font-medium">
                  Psicoterapia psicoanalítica
                </span>
                <span className="bg-[#98DDC4] text-[#3F3F46] px-3 py-1 rounded-full text-sm font-medium">
                  8+ años de experiencia
                </span>
                <span className="bg-[#98DDC4] text-[#3F3F46] px-3 py-1 rounded-full text-sm font-medium">
                  Atención a niños y adultos
                </span>
                <span className="bg-[#98DDC4] text-[#3F3F46] px-3 py-1 rounded-full text-sm font-medium">
                  Terapia de pareja
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-px bg-[#8E7A73]/20 w-full"
      />
    </motion.section>
  );
}
