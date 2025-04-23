// Updated Footer Component
'use client';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaRegCopyright } from 'react-icons/fa';
import { MdOutlineMail, MdPhone } from 'react-icons/md';
import Image from 'next/image';
import logo from '@/public/logo.jpeg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        ease: "easeOut"
      }
    }
  };

  const socialIconVariants = {
    hover: {
      y: -5,
      scale: 1.1,
      color: '#F8F5F2',
      transition: { type: 'spring', stiffness: 300, ease: "easeOut" }
    }
  };

  const social_media = [
    { icon: <FaFacebook />, label: 'Facebook', link: 'https://www.facebook.com/ElFinDelPrincipio' },
    { icon: <FaInstagram />, label: 'Instagram', link: 'https://www.instagram.com/psic.finprincipio?igsh=MXRtZDZ0dmJ2ZWV6dg==' }
  ]

  const links = [
    { text: 'Sobre Mí', section: 'about'},
    { text: 'Terapias', section: 'therapy' },
    { text: 'Blog', section: 'blog' },
    { text: 'Contacto', section: 'contact' }
  ]

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="bg-[#8E7A73] text-[#F8F5F2] pt-12 pb-8 px-4"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div 
              className="flex items-center gap-3 mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={logo}
                alt="Terapia El Fin Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <h3 className="text-xl font-bold">Terapia el Fin</h3>
            </motion.div>
            <motion.p className="mb-4">
              Acompañamiento terapéutico profesional basado en el psicoanálisis para tu bienestar emocional.
            </motion.p>
            <motion.div className="flex space-x-4">
              {social_media.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  variants={socialIconVariants}
                  whileHover="hover"
                  aria-label={social.label}
                  className="text-2xl"
                  target="_blank"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-xl font-bold mb-4"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Contacto
            </motion.h3>
            <motion.ul className="space-y-3">
              <motion.li className="flex items-center">
                <MdPhone className="text-xl mr-3" />
                <span>(+52) 55 2324 0253</span>
              </motion.li>
              <motion.li className="flex items-center">
                <MdOutlineMail className="text-xl mr-3" />
                <span>contacto@terapiaelfin.com</span>
              </motion.li>
            </motion.ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-xl font-bold mb-4"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Enlaces Rápidos
            </motion.h3>
            <motion.ul className="space-y-2">
              {links.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ 
                    x: 5,
                    color: '#BBA8A0'
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href={`#${link.section}`} className="block py-1">
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
          className="h-px bg-[#F8F5F2]/30 my-8 w-full"
        />

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center mb-4 md:mb-0">
            <FaRegCopyright className="mr-2" />
            <span>{currentYear} Terapia el Fin. Todos los derechos reservados.</span>
          </div>
          <div className="flex space-x-6">
            <motion.a 
              href="#"
              whileHover={{ 
                y: -2,
                textDecoration: 'underline',
                color: '#BBA8A0'
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-sm"
            >
              Política de Privacidad
            </motion.a>
            <motion.a 
              href="#"
              whileHover={{ 
                y: -2,
                textDecoration: 'underline',
                color: '#BBA8A0'
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-sm"
            >
              Términos de Servicio
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
