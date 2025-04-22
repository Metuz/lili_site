// Updated Contact Component with Divider
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFormStatus } from 'react-dom';
import { useActionState } from "react";
import { FaPaperPlane, FaCheckCircle, FaPhone, FaEnvelope } from 'react-icons/fa';
import { sendEmail } from '../api/action';

const initialState = {
  success: "",
  errors: {
    name: "",
    email: "",
    phone: "",
    message: "",
  }
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <motion.button
      type="submit"
      disabled={pending}
      initial={{ scale: 1 }}
      whileHover={{ 
        scale: 1.03,
        backgroundColor: "#8E7A73"
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-full bg-[#8E7A73] text-white font-bold py-3 px-6 rounded shadow-md flex items-center justify-center gap-2"
    >
      {pending ? (
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="inline-block"
        >
          <FaPaperPlane />
        </motion.span>
      ) : (
        <>
          <FaPaperPlane />
          Enviar
        </>
      )}
    </motion.button>
  );
}

export default function Contact() {
  const [state, formAction] = useActionState(sendEmail, initialState);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    message: false
  });

  const errorVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { type: 'spring', stiffness: 300, ease: "easeOut" }
    },
    exit: { opacity: 0, height: 0, transition: { ease: "easeIn" } }
  };

  const successVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 200, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-16 px-4 bg-[#98DDC4] text-[#3F3F46]"
    >
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-8"
          whileInView={{ 
            scale: [1, 1.02, 1],
            transition: { duration: 1.5, ease: "easeOut" } 
          }}
        >
          <h2 className="text-2xl font-bold mb-2 text-[#8E7A73]">Contáctanos</h2>
          <p className="max-w-lg mx-auto text-lg">
            Estamos aquí para escucharte. Completa el formulario y nos pondremos en contacto contigo 
            en un plazo máximo de 24 horas.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence>
            {state?.success && (
              <motion.div
                variants={successVariants}
                initial="hidden"
                animate="visible"
                className="mb-6 p-4 bg-[#8E7A73] text-white rounded-lg text-center"
              >
                <FaCheckCircle className="inline-block mr-2" />
                {state.success}
              </motion.div>
            )}
          </AnimatePresence>

          <form action={formAction} className="space-y-6">
            <motion.div
              animate={{
                borderColor: state.errors.name && touched.name ? '#ef4444' : '#8E7A73'
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <label htmlFor="name" className="block mb-1 font-medium">Nombre*</label>
              <input 
                type="text" 
                name="name" 
                id="name"
                required
                onBlur={() => setTouched({...touched, name: true})}
                className="w-full p-3 rounded bg-white/80 border focus:outline-none focus:ring-2 focus:ring-[#8E7A73]"
              />
              <AnimatePresence>
                {state.errors.name && touched.name && (
                  <motion.p
                    variants={errorVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-red-500 text-sm mt-1"
                  >
                    {state.errors.name}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              animate={{
                borderColor: state.errors.email && touched.email ? '#ef4444' : '#8E7A73'
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <label htmlFor="email" className="block mb-1 font-medium">Email*</label>
              <input 
                type="email" 
                name="email" 
                id="email"
                required
                onBlur={() => setTouched({...touched, email: true})}
                className="w-full p-3 rounded bg-white/80 border focus:outline-none focus:ring-2 focus:ring-[#8E7A73]"
                placeholder="tu.email@example.com"
              />
              <AnimatePresence>
                {state.errors.email && touched.email && (
                  <motion.p
                    variants={errorVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-red-500 text-sm mt-1"
                  >
                    {state.errors.email}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              animate={{
                borderColor: state.errors.phone && touched.phone ? '#ef4444' : '#8E7A73'
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <label htmlFor="phone" className="block mb-1 font-medium">
                Teléfono <span className="text-sm text-[#3F3F46]/70">(opcional)</span>
              </label>
              <div className="relative">
                <input 
                  type="tel" 
                  name="phone" 
                  id="phone"
                  onBlur={() => setTouched({...touched, phone: true})}
                  className="w-full p-3 rounded bg-white/80 border focus:outline-none focus:ring-2 focus:ring-[#8E7A73] pl-10"
                  placeholder="+55 123 456 789"
                />
                <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8E7A73]/70" />
              </div>
              <AnimatePresence>
                {state.errors.phone && touched.phone && (
                  <motion.p
                    variants={errorVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-red-500 text-sm mt-1"
                  >
                    {state.errors.phone}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              animate={{
                borderColor: state.errors.message && touched.message ? '#ef4444' : '#8E7A73'
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <label htmlFor="message" className="block mb-1 font-medium">Mensaje*</label>
              <textarea 
                name="message" 
                id="message"
                rows={4}
                required
                onBlur={() => setTouched({...touched, message: true})}
                className="w-full p-3 rounded bg-white/80 border focus:outline-none focus:ring-2 focus:ring-[#8E7A73]"
                placeholder="Como podemos ayudarte?"
              ></textarea>
              <AnimatePresence>
                {state.errors.message && touched.message && (
                  <motion.p
                    variants={errorVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-red-500 text-sm mt-1"
                  >
                    {state.errors.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <SubmitButton />
          </form>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, ease: "easeOut" }}
            className="mt-12 text-center bg-white/30 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-3 text-[#8E7A73]">También puedes escribirme directamente a:</h3>
            <div className="space-y-2">
              <p className="flex items-center justify-center gap-2">
                <FaEnvelope className="text-[#8E7A73]" />
                <a href="mailto:contacto@terapiaelfin.com" className="hover:underline hover:text-[#BBA8A0]">
                  contacto@terapiaelfin.com
                </a>
              </p>
              <p className="flex items-center justify-center gap-2">
                <FaPhone className="text-[#8E7A73]" />
                <a href="tel:+525512345678" className="hover:underline hover:text-[#BBA8A0]">
                  +52 55 1234 5678
                </a>
              </p>
            </div>
            <p className="mt-4 italic">
              Horario de atención: Lunes a Viernes de 9:00 a 18:00 hrs
            </p>
          </motion.div>
        </div>
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
