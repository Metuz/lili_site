'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFormStatus, useFormState } from 'react-dom';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { sendEmail } from '../api/action';

const initialState = {
  success: "",
  errors: {
    name: "",
    email: "",
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
        backgroundColor: "#4a2522"
      }}
      whileTap={{ scale: 0.97 }}
      className="w-full bg-[#66332f] text-white font-bold py-3 px-6 rounded shadow-md flex items-center justify-center gap-2"
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
  const [state, formAction] = useFormState(sendEmail, initialState);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });

  // Animation variants
  const errorVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { type: 'spring', stiffness: 300 }
    },
    exit: { opacity: 0, height: 0 }
  };

  const successVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 200 }
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-16 px-4 bg-[#95dcc6] text-[#66332f]"
    >
      <div className="container mx-auto">
        <motion.h2 
          className="text-2xl font-bold mb-8 text-center"
          whileInView={{ 
            scale: [1, 1.02, 1],
            transition: { duration: 1.5 } 
          }}
        >
          Contactanos
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          {/* Success Message */}
          <AnimatePresence>
            {state?.success && (
              <motion.div
                variants={successVariants}
                initial="hidden"
                animate="visible"
                className="mb-6 p-4 bg-[#80a06e] text-white rounded-lg text-center"
              >
                <FaCheckCircle className="inline-block mr-2" />
                {state.success}
              </motion.div>
            )}
          </AnimatePresence>

          <form action={formAction} className="space-y-6">
            {/* Name Field */}
            <motion.div
              animate={{
                borderColor: state.errors.name && touched.name ? '#ef4444' : '#80a06e'
              }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <label htmlFor="name" className="block mb-1 font-medium">Nombre</label>
              <input 
                type="text" 
                name="name" 
                id="name"
                onBlur={() => setTouched({...touched, name: true})}
                className="w-full p-3 rounded bg-white/80 border focus:outline-none focus:ring-2 focus:ring-[#66332f]"
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

            {/* Email Field */}
            <motion.div
              animate={{
                borderColor: state.errors.email && touched.email ? '#ef4444' : '#80a06e'
              }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email"
                onBlur={() => setTouched({...touched, email: true})}
                className="w-full p-3 rounded bg-white/80 border focus:outline-none focus:ring-2 focus:ring-[#66332f]"
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

            {/* Message Field */}
            <motion.div
              animate={{
                borderColor: state.errors.message && touched.message ? '#ef4444' : '#80a06e'
              }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <label htmlFor="message" className="block mb-1 font-medium">Mensaje</label>
              <textarea 
                name="message" 
                id="message"
                rows={4}
                onBlur={() => setTouched({...touched, message: true})}
                className="w-full p-3 rounded bg-white/80 border focus:outline-none focus:ring-2 focus:ring-[#66332f]"
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

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <h3 className="text-xl font-semibold mb-4">Visita nuestro consultorio</h3>
            <p className="mb-2">123 Wellness Avenue</p>
            <p className="mb-2">Mental Health City, MH 12345</p>
            <p className="mb-4">Phone: (123) 456-7890</p>
            <div className="flex justify-center space-x-4">
              {['twitter', 'instagram', 'linkedin'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ y: -3, color: '#4a2522' }}
                  className="hover:text-[#66332f]"
                >
                  {/* Social icons remain the same */}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
