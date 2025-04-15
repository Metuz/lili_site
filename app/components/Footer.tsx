'use client';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaRegCopyright } from 'react-icons/fa';
import { MdOutlineMail, MdPhone, MdLocationOn } from 'react-icons/md';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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
        damping: 10
      }
    }
  };

  const socialIconVariants = {
    hover: {
      y: -5,
      scale: 1.1,
      color: '#4a2522',
      transition: { type: 'spring', stiffness: 300 }
    }
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="bg-[#80a06e] text-white pt-12 pb-8 px-4"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-xl font-bold mb-4"
              whileHover={{ x: 5 }}
            >
              Mindful Therapy
            </motion.h3>
            <motion.p className="mb-4">
              Providing compassionate mental health care through evidence-based therapies tailored to your unique journey.
            </motion.p>
            <motion.div className="flex space-x-4">
              {[
                { icon: <FaFacebook />, label: 'Facebook' },
                { icon: <FaInstagram />, label: 'Instagram' },
                { icon: <FaLinkedin />, label: 'LinkedIn' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  variants={socialIconVariants}
                  whileHover="hover"
                  aria-label={social.label}
                  className="text-2xl"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-xl font-bold mb-4"
              whileHover={{ x: 5 }}
            >
              Contacto
            </motion.h3>
            <motion.ul className="space-y-3">
              <motion.li className="flex items-start">
                <MdLocationOn className="text-xl mr-3 mt-1 flex-shrink-0" />
                <span>123 Wellness Ave, Mental Health City, MH 12345</span>
              </motion.li>
              <motion.li className="flex items-center">
                <MdPhone className="text-xl mr-3" />
                <span>(123) 456-7890</span>
              </motion.li>
              <motion.li className="flex items-center">
                <MdOutlineMail className="text-xl mr-3" />
                <span>contacto@terapiaelfin.com</span>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-xl font-bold mb-4"
              whileHover={{ x: 5 }}
            >
              Enlaces Rápidos
            </motion.h3>
            <motion.ul className="space-y-2">
              {['Home', 'Terapias', 'Blog', 'Contacto'].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ 
                    x: 5,
                    color: '#f0f7f5'
                  }}
                >
                  <a href={`#${link.toLowerCase()}`} className="block py-1">
                    {link}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-white/30 my-8 w-full"
        />

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center mb-4 md:mb-0">
            <FaRegCopyright className="mr-2" />
            <span>{currentYear} Mindful Therapy. Todos los derechos reservados.</span>
          </div>
          <div className="flex space-x-6">
            <motion.a 
              href="#"
              whileHover={{ 
                y: -2,
                textDecoration: 'underline'
              }}
              className="text-sm"
            >
              Política de Privacidad
            </motion.a>
            <motion.a 
              href="#"
              whileHover={{ 
                y: -2,
                textDecoration: 'underline'
              }}
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
