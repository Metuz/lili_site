"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#f8f5f2] relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="lg:w-2/5 w-full max-w-sm mx-auto lg:mx-0 flex flex-col items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-80 h-80 mb-8">
              {/* Gradient border wrapper */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4ECDC4] via-[#81C7D4] to-[#8BC34A] p-2">
                {/* Image container directly inside gradient border */}
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/lili.png"
                    alt="Lilia Aguilar - Psicoterapeuta"
                    fill
                    className="object-cover grayscale"
                    style={{ objectPosition: "center 20%" }}
                    sizes="(max-width: 640px) 90vw, 320px"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Profile card */}
            <motion.div
              className="bg-[#f8f5f2] rounded-2xl shadow-lg p-6 w-64"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#A8D5A8] flex items-center justify-center text-white font-bold text-lg">
                  L
                </div>
                <div>
                  <div className="font-bold text-gray-900">Lilia Aguilar</div>
                  <div className="text-sm text-gray-600">Psicoterapeuta</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-6 h-6 rounded-full bg-[#8BC34A]" />
                  <div className="w-6 h-6 rounded-full bg-[#8BC34A]" />
                  <div className="w-6 h-6 rounded-full bg-[#8BC34A]" />
                  <div className="w-6 h-6 rounded-full bg-[#8BC34A]" />
                  <div className="w-6 h-6 rounded-full bg-[#8BC34A]" />
                </div>
                <span className="text-sm text-gray-600 ml-2">8+ años</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-3/5 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Badge and heading */}
            <div>
              <motion.div
                className="inline-block bg-[#81C7D4]/20 text-[#81C7D4] px-4 py-2 rounded-full text-sm font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Sobre mí
              </motion.div>
              <motion.h2
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
              >
                Conoce a tu{" "}
                <span className="text-[#4ECDC4] relative inline-block">
                  terapeuta
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#4ECDC4]" />
                </span>
              </motion.h2>
            </div>

            {/* Body text */}
            <div className="space-y-4 text-base lg:text-lg leading-relaxed text-gray-700">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Mi nombre es Lilia Aguilar, psicoterapeuta psicoanalítica con 8 años de experiencia acompañando a
                personas en su proceso de sanación emocional.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
              >
                Mi enfoque se basa en una comprensión profunda de la subjetividad humana, lo que me permite ofrecer un
                espacio seguro, reflexivo y respetuoso para cada persona que decida emprender este viaje de
                autoconocimiento.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
              >
                A lo largo de mi trayectoria, he trabajado con niños, adultos y parejas, ayudándoles a enfrentar sus
                dificultades emocionales, superar momentos difíciles y transformar su bienestar psicológico.
              </motion.p>

              {/* Quote box */}
              <motion.div
                className="border-l-4 border-[#81C7D4] pl-6 py-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                viewport={{ once: true }}
              >
                <p className="text-base lg:text-lg italic text-gray-600">
                  &ldquo;Mi objetivo es ofrecerte un acompañamiento único, basado en el respeto por tu proceso y tu
                  tiempo, para que puedas encontrar las herramientas internas que te permitan crecer y sanar.&rdquo;
                </p>
              </motion.div>
            </div>

            {/* Specialties section */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Especialidades</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#4ECDC4] text-white px-6 py-4 rounded-2xl">
                  <div className="font-semibold text-lg mb-1">Psicoterapia</div>
                  <div className="text-sm opacity-90">Enfoque psicoanalítico</div>
                </div>
                <div className="bg-[#A8D5A8] text-white px-6 py-4 rounded-2xl">
                  <div className="font-semibold text-lg mb-1">Experiencia</div>
                  <div className="text-sm opacity-90">8+ años profesionales</div>
                </div>
                <div className="bg-[#81C7D4] text-white px-6 py-4 rounded-2xl">
                  <div className="font-semibold text-lg mb-1">Atención integral</div>
                  <div className="text-sm opacity-90">Niños y adultos</div>
                </div>
                <div className="bg-[#A8D5A8] text-white px-6 py-4 rounded-2xl">
                  <div className="font-semibold text-lg mb-1">Terapia de pareja</div>
                  <div className="text-sm opacity-90">Relaciones saludables</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
