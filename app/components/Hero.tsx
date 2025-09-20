"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#4ECDC4]/10 via-white to-[#A8D5A8]/10" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#4ECDC4] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#8BC34A] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, ease: "easeOut" }}
              className="inline-block bg-[#4ECDC4]/10 text-[#4ECDC4] px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#4ECDC4]/20"
            >
              ✨ Psicoterapia Profesional
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight"
            >
              Tu camino hacia{" "}
              <span className="text-[#4ECDC4] relative">
                el bienestar
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#4ECDC4] to-[#8BC34A] rounded-full" />
              </span>{" "}
              emocional
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, ease: "easeOut" }}
              className="text-xl md:text-2xl mb-8 text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Acompañamiento terapéutico personalizado con{" "}
              <span className="font-semibold text-[#8E7A73]">8 años de experiencia</span> para tu crecimiento personal
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
            >
              <motion.a
                href="https://calendly.com/lic-lilia-psicologa/30min"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gradient-to-r from-[#4ECDC4] to-[#8BC34A] hover:from-[#8BC34A] hover:to-[#4ECDC4] text-white font-bold py-4 px-8 rounded-full shadow-xl inline-block transition-all duration-300 text-lg"
              >
                Agenda una cita
              </motion.a>

              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-[#8E7A73] font-semibold py-4 px-8 rounded-full border-2 border-[#8E7A73]/20 hover:border-[#8E7A73] transition-all duration-300"
              >
                Conoce más sobre mí
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, ease: "easeOut" }}
              className="mt-12 flex flex-wrap gap-6 items-center justify-center lg:justify-start text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#8BC34A] rounded-full" />
                <span>Consultas presenciales y online</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="relative w-full aspect-[4/5] max-w-[500px] mx-auto">
                <Image
                  src="/love-yourself.jpg"
                  alt="Professional therapist in a calming environment"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Professional overlay card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, ease: "easeOut" }}
                  className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#4ECDC4] to-[#8BC34A] rounded-full flex items-center justify-center text-white font-bold text-lg">
                      L
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Lilia Aguilar</h3>
                      <p className="text-sm text-gray-600">Psicoterapeuta</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-[#8BC34A] rounded-full" />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">8+ años</span>
                  </div>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#A8D5A8]/20 rounded-full blur-xl" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#81C7D4]/20 rounded-full blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-px bg-gradient-to-r from-transparent via-[#4ECDC4]/30 to-transparent w-full"
        />
      </div>
    </section>
  )
}
