"use client"
import { motion } from "framer-motion"
import { FaFacebook, FaInstagram, FaRegCopyright, FaHeart } from "react-icons/fa"
import { MdOutlineMail, MdPhone, MdLocationOn } from "react-icons/md"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        ease: "easeOut",
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  const socialIconVariants = {
    hover: {
      y: -3,
      scale: 1.1,
      transition: { type: "spring", stiffness: 300, ease: "easeOut" },
    },
  }

  const social_media = [
    {
      icon: <FaFacebook />,
      label: "Facebook",
      link: "https://www.facebook.com/ElFinDelPrincipio",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      link: "https://www.instagram.com/psic.finprincipio?igsh=MXRtZDZ0dmJ2ZWV6dg==",
      color: "hover:text-pink-400",
    },
  ]

  const links = [
    { text: "Sobre Mí", section: "about" },
    { text: "Terapias", section: "therapy" },
    { text: "Contacto", section: "contact" },
  ]

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#4ECDC4] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#8BC34A] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <motion.div variants={itemVariants} className="md:col-span-2 space-y-6">
            <motion.div
              className="flex items-center gap-4 mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative">
                <Image
                  src="/logo.jpeg"
                  alt="Terapia El Fin Logo"
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-[#4ECDC4]/30"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#8BC34A] rounded-full border-2 border-gray-900" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Terapia el Fin</h3>
                <p className="text-[#4ECDC4] text-sm font-medium">Psicoterapia profesional</p>
              </div>
            </motion.div>

            <motion.p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Acompañamiento terapéutico profesional basado en psicoanálisis para tu bienestar emocional. 8 años de 
              experiencia transformando vidas.
            </motion.p>

            <motion.div className="flex space-x-4">
              {social_media.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  variants={socialIconVariants}
                  whileHover="hover"
                  aria-label={social.label}
                  className={`text-2xl p-3 rounded-full bg-white/10 backdrop-blur-sm ${social.color} transition-all duration-300 hover:bg-white/20`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-xl font-bold mb-6 text-[#4ECDC4]"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Contacto
            </motion.h3>
            <motion.ul className="space-y-4">
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 bg-[#4ECDC4]/20 rounded-full flex items-center justify-center">
                  <MdPhone className="text-[#4ECDC4]" />
                </div>
                <span>(+52) 55 2324 0253</span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 bg-[#8BC34A]/20 rounded-full flex items-center justify-center">
                  <MdOutlineMail className="text-[#8BC34A]" />
                </div>
                <span>lic.lilia.psicologa@gmail.com</span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 bg-[#81C7D4]/20 rounded-full flex items-center justify-center">
                  <MdLocationOn className="text-[#81C7D4]" />
                </div>
                <span>Ciudad de México</span>
              </motion.li>
            </motion.ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-xl font-bold mb-6 text-[#8BC34A]"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Enlaces Rápidos
            </motion.h3>
            <motion.ul className="space-y-3">
              {links.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <a
                    href={`#${link.section}`}
                    className="block py-2 text-gray-300 hover:text-[#4ECDC4] transition-colors duration-300"
                  >
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8 w-full"
        />

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0 text-gray-300">
            <FaRegCopyright className="mr-2" />
            <span>{currentYear} Terapia el Fin. Todos los derechos reservados.</span>
          </div>

          <div className="flex items-center gap-2 text-gray-300">
            <span>Hecho con</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <FaHeart className="text-[#4ECDC4]" />
            </motion.div>
            <span>para tu bienestar</span>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
