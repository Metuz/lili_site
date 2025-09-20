"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#4ECDC4] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#8BC34A] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.2, ease: "easeOut" }}
          className="flex flex-col xl:flex-row gap-16 items-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative xl:w-2/5"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/logo.jpeg"
                  alt="Lilia Aguilar - Psicoterapeuta Psicoanalítica"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 40vw"
                  priority
                />
              </div>

              {/* Professional credentials overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, ease: "easeOut" }}
                className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-xl border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#4ECDC4]">8+</div>
                  <div className="text-sm text-gray-600 font-medium">Años de experiencia</div>
                </div>
              </motion.div>

              {/* Decorative background */}
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[#4ECDC4]/20 to-[#8BC34A]/20 rounded-2xl translate-x-6 translate-y-6" />
            </div>
          </motion.div>

          <div className="xl:w-3/5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, ease: "easeOut" }}
            >
              <div className="inline-block bg-[#4ECDC4]/10 text-[#4ECDC4] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Sobre mí
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Conoce a tu{" "}
                <span className="text-[#4ECDC4] relative">
                  terapeuta
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#4ECDC4] to-[#8BC34A] rounded-full" />
                </span>
              </h2>
            </motion.div>

            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, ease: "easeOut" }}
              >
                Mi nombre es <strong className="text-[#8E7A73] font-semibold">Lilia Aguilar</strong>, psicoterapeuta
                psicoanalítica con 8 años de experiencia acompañando a personas en su proceso de sanación emocional.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, ease: "easeOut" }}
              >
                Mi enfoque se basa en una comprensión profunda de la subjetividad humana, lo que me permite ofrecer un
                espacio seguro, reflexivo y respetuoso para cada persona que decida emprender este viaje de
                autoconocimiento.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, ease: "easeOut" }}
              >
                A lo largo de mi trayectoria, he trabajado con niños, adultos y parejas, ayudándoles a enfrentar sus
                dificultades emocionales, superar momentos difíciles y transformar su bienestar psicológico.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, ease: "easeOut" }}
                className="relative bg-gradient-to-r from-[#4ECDC4]/5 to-[#8BC34A]/5 p-6 rounded-xl border-l-4 border-[#4ECDC4]"
              >
                <div className="absolute top-4 left-4 text-[#4ECDC4] text-4xl font-serif">&ldquo;</div>
                <p className="text-lg font-medium italic text-[#8E7A73] pl-8">
                  Mi objetivo es ofrecerte un acompañamiento único, basado en el respeto por tu proceso y tu tiempo,
                  para que puedas encontrar las herramientas internas que te permitan crecer y sanar.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.0, ease: "easeOut" }}
              className="pt-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Especialidades</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-r from-[#4ECDC4] to-[#4ECDC4]/80 text-white px-4 py-3 rounded-xl text-sm font-medium shadow-lg">
                  <div className="font-semibold">Psicoterapia</div>
                  <div className="text-xs opacity-90">Enfoque psicoanalítico</div>
                </div>
                <div className="bg-gradient-to-r from-[#8BC34A] to-[#8BC34A]/80 text-white px-4 py-3 rounded-xl text-sm font-medium shadow-lg">
                  <div className="font-semibold">Experiencia</div>
                  <div className="text-xs opacity-90">8+ años profesionales</div>
                </div>
                <div className="bg-gradient-to-r from-[#81C7D4] to-[#81C7D4]/80 text-white px-4 py-3 rounded-xl text-sm font-medium shadow-lg">
                  <div className="font-semibold">Atención integral</div>
                  <div className="text-xs opacity-90">Niños y adultos</div>
                </div>
                <div className="bg-gradient-to-r from-[#A8D5A8] to-[#A8D5A8]/80 text-white px-4 py-3 rounded-xl text-sm font-medium shadow-lg">
                  <div className="font-semibold">Terapia de pareja</div>
                  <div className="text-xs opacity-90">Relaciones saludables</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="relative mt-24">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-px bg-gradient-to-r from-transparent via-[#4ECDC4]/30 to-transparent w-full"
        />
      </div>
    </motion.section>
  )
}
