"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden h-[95vh] sm:h-[95vh] md:h-[92vh] lg:h-[90vh] flex items-center"
    >
      {/* Background image */}
      <div className="absolute inset-0 bg-[#7BC5BC]">
        <Image src="/back.png" alt="Background" fill className="object-cover object-center" priority />
      </div>

      {/* First div: Text content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 relative z-10">
        <div className="flex flex-col items-start justify-center text-left gap-6 max-w-3xl">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Aquí estás,
            <br />y eso ya es un gran paso.
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/95 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A veces la vida pesa, duele o simplemente confunde... y nadie debería atravesarla en soledad. Este es un
            espacio seguro para pausar, respirar y reconstruirte a tu ritmo.
          </motion.p>
        </div>
      </div>

      {/* Second div: Bottom elements container (logo + rene) */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        {/* Logo - centered - hidden on mobile, visible from md breakpoint */}
        <motion.div
          className="hidden md:block absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative w-40 h-20 sm:w-48 sm:h-24 md:w-56 md:h-28 lg:w-64 lg:h-32">
            <Image
              src="/logo2.svg"
              alt="El Fin del Principio - Atención Psicológica"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Rene character - bottom right on desktop, centered on mobile */}
        <motion.div
          className="absolute -bottom-6 sm:-bottom-4 md:-bottom-2 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 lg:right-12 xl:right-16"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem]">
            <Image
              src="/rene01.png"
              alt="Brain heart character"
              fill
              className="object-contain"
              style={{ filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.4))" }}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
