"use client"
import { motion } from "framer-motion"
import { FaUser, FaUsers, FaBrain, FaHeart } from "react-icons/fa"
import Image from "next/image"

export default function Therapy() {
  const therapies = [
    {
      title: "Terapia individual",
      description: `Un espacio terapéutico individual donde podrás explorar tu mundo interno con libertad,
      comprender tu historia personal y trabajar en los desafíos emocionales que enfrentas.
      Cada sesión está pensada para acompañarte en tus procesos vitales, con respeto, escucha
      profunda y sin juicios.`,
      icon: <FaUser className="text-xl" />,
      gradient: "from-[#4ECDC4] to-[#4ECDC4]/80",
      borderColor: "border-[#4ECDC4]",
    },
    {
      title: "Terapia de pareja",
      description: `Acompañamiento profesional para parejas que desean mejorar su comunicación,
      comprender sus dinámicas relacionales y fortalecer su vínculo.
      Se trabaja en un espacio seguro donde ambos pueden expresar sus experiencias,
      emociones y necesidades.`,
      icon: <FaUsers className="text-xl" />,
      gradient: "from-[#8BC34A] to-[#8BC34A]/80",
      borderColor: "border-[#8BC34A]",
    },
    {
      title: "Tratamiento para la ansiedad",
      description: `Espacio terapéutico dirigido a quienes experimentan ansiedad en sus distintas formas:
      preocupaciones constantes, pensamientos intrusivos, malestar físico o emocional.
      Desde un enfoque psicoanalítico, se busca comprender las raíces emocionales de la
      ansiedad.`,
      icon: <FaBrain className="text-xl" />,
      gradient: "from-[#81C7D4] to-[#81C7D4]/80",
      borderColor: "border-[#81C7D4]",
    },
    {
      title: "Apoyo para la depresión",
      description: `Atención terapéutica cálida y respetuosa para personas que atraviesan sentimientos de
      tristeza profunda, desánimo, vacío o desesperanza.
      A través de la escucha empática, se acompaña la experiencia subjetiva de cada persona,
      facilitando la resignificación del malestar.`,
      icon: <FaHeart className="text-xl" />,
      gradient: "from-[#A8D5A8] to-[#A8D5A8]/80",
      borderColor: "border-[#A8D5A8]",
    },
  ]

  return (
    <section id="therapy" className="py-24 px-6 bg-[#f8f5f2] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#4ECDC4] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-[#8BC34A] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#4ECDC4]/10 text-[#4ECDC4] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Servicios especializados
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros servicios de{" "}
            <span className="text-[#4ECDC4] relative">
              terapia
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#4ECDC4] to-[#8BC34A] rounded-full" />
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos acompañamiento terapéutico personalizado con enfoques especializados para diferentes necesidades
            emocionales y relacionales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {therapies.map((therapy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 10,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(78, 205, 196, 0.15)",
              }}
              className={`bg-[#f8f5f2] p-8 rounded-2xl shadow-lg border-l-4 ${therapy.borderColor} hover:shadow-2xl transition-all duration-300 group`}
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${therapy.gradient} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
              >
                {therapy.icon}
              </motion.div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#4ECDC4] transition-colors duration-300">
                {therapy.title}
              </h3>

              <motion.p
                className="text-gray-600 leading-relaxed text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, ease: "easeOut" }}
              >
                {therapy.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, ease: "easeOut" }}
                className="mt-6"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-[#4ECDC4] font-semibold hover:text-[#8BC34A] transition-colors duration-300"
                >
                  Más información
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#4ECDC4]/10 to-[#8BC34A]/10 p-8 pb-32 md:pb-20 rounded-2xl border border-[#4ECDC4]/20 relative overflow-visible md:overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Listo para comenzar tu proceso de sanación?</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Agenda una consulta y descubre cómo podemos acompañarte en tu camino hacia el bienestar.
              </p>
              <motion.a
                href="https://calendly.com/lic-lilia-psicologa/30min"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-[#4ECDC4] to-[#8BC34A] text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Agenda tu consulta
              </motion.a>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-4 bottom-0 md:-bottom-8 w-40 h-40 md:w-56 md:h-56">
              <Image src="/rene02.png" alt="Brain characters" fill className="object-contain" />
            </div>
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
    </section>
  )
}
