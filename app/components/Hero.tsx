"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#4ECDC4]/10 via-white to-[#A8D5A8]/10" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#4ECDC4] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#8BC34A] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block bg-[#4ECDC4]/10 text-[#4ECDC4] px-4 py-2 rounded-full text-sm font-semibold mb-4 sm:mb-6 border border-[#4ECDC4]/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              ✨ Psicoterapia Profesional
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Tu camino hacia{" "}
              <span className="text-[#4ECDC4] relative">
                el bienestar
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#4ECDC4] to-[#8BC34A] rounded-full" />
              </span>{" "}
              emocional
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Acompañamiento terapéutico personalizado con{" "}
              <span className="font-semibold text-[#8E7A73]">8 años de experiencia</span> para tu crecimiento personal
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href="https://calendly.com/lic-lilia-psicologa/30min"
                className="bg-gradient-to-r from-[#4ECDC4] to-[#8BC34A] hover:from-[#8BC34A] hover:to-[#4ECDC4] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-xl inline-block transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:-translate-y-1 w-full sm:w-auto text-center"
              >
                Agenda una cita
              </a>

              <a
                href="#about"
                className="text-[#8E7A73] font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full border-2 border-[#8E7A73]/20 hover:border-[#8E7A73] transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center"
              >
                Conoce más sobre mí
              </a>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center justify-center lg:justify-start text-sm text-gray-500 mb-8 lg:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#8BC34A] rounded-full" />
                <span>Consultas presenciales y online</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative max-w-md lg:max-w-lg mx-auto">
              <div className="relative w-full aspect-[4/5]">
                <Image
                  src="/love-yourself.png"
                  alt="Professional therapist in a calming environment"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 40vw"
                />

                <motion.div
                  className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-white p-4 lg:p-6 rounded-xl shadow-xl border border-gray-100 max-w-[200px] lg:max-w-xs"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#4ECDC4] to-[#8BC34A] rounded-full flex items-center justify-center text-white font-bold text-base lg:text-lg">
                      L
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm lg:text-base">Lilia Aguilar</h3>
                      <p className="text-xs lg:text-sm text-gray-600">Psicoterapeuta</p>
                    </div>
                  </div>
                  <div className="mt-2 lg:mt-3 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-3 h-3 lg:w-4 lg:h-4 bg-[#8BC34A] rounded-full" />
                    ))}
                    <span className="ml-1 lg:ml-2 text-xs lg:text-sm text-gray-600">8+ años</span>
                  </div>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 lg:w-24 lg:h-24 bg-[#A8D5A8]/20 rounded-full blur-xl" />
              <div className="absolute -bottom-8 -right-8 w-20 h-20 lg:w-32 lg:h-32 bg-[#81C7D4]/20 rounded-full blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative">
        <div className="h-px bg-gradient-to-r from-transparent via-[#4ECDC4]/30 to-transparent w-full" />
      </div>
    </section>
  )
}
