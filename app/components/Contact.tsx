"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useFormStatus } from "react-dom"
import { useActionState } from "react"
import { FaPaperPlane, FaCheckCircle, FaPhone, FaEnvelope, FaClock } from "react-icons/fa"
import { sendEmail } from "../api/action"
import Image from "next/image"

const initialState = {
  success: "",
  errors: {
    name: "",
    email: "",
    phone: "",
    message: "",
  },
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <motion.button
      type="submit"
      disabled={pending}
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 8px 25px rgba(78, 205, 196, 0.3)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-full bg-gradient-to-r from-[#4ECDC4] to-[#81C7D4] text-white font-semibold py-4 px-8 rounded-xl shadow-lg flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300"
    >
      {pending ? (
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="inline-block"
        >
          <FaPaperPlane className="text-lg" />
        </motion.span>
      ) : (
        <>
          <FaPaperPlane className="text-lg" />
          Enviar Mensaje
        </>
      )}
    </motion.button>
  )
}

export default function Contact() {
  const [state, formAction] = useActionState(sendEmail, initialState)
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  })

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 px-4 bg-gradient-to-br from-[#A8D5A8]/20 via-white to-[#81C7D4]/10 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#4ECDC4]/10 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-[#8BC34A]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-[#81C7D4]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-1/3 w-28 h-28 bg-[#A8D5A8]/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          whileInView={{
            scale: [1, 1.02, 1],
            transition: { duration: 1.5, ease: "easeOut" },
          }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#4ECDC4] to-[#8BC34A] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Contáctanos
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Estamos aquí para escucharte. Completa el formulario y nos pondremos en contacto contigo en un plazo máximo
            de 24 horas.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#f8f5f2]/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-[#4ECDC4]/10"
          >
            <AnimatePresence>
              {state?.success && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="mb-6 p-4 bg-gradient-to-r from-[#8BC34A] to-[#A8D5A8] text-white rounded-xl text-center shadow-lg"
                >
                  <FaCheckCircle className="inline-block mr-2 text-xl" />
                  {state.success}
                </motion.div>
              )}
            </AnimatePresence>

            <form action={formAction} className="space-y-6">
              <motion.div className="relative">
                <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">
                  Nombre*
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  onBlur={() => setTouched({ ...touched, name: true })}
                  className="w-full p-4 rounded-xl bg-gray-50 border-2 border-gray-200 focus:outline-none focus:border-[#4ECDC4] focus:bg-[#f8f5f2] transition-all duration-300 text-gray-700"
                  placeholder="Tu nombre completo"
                />
                <AnimatePresence>
                  {state.errors.name && touched.name && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {state.errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div className="relative">
                <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
                  Email*
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    onBlur={() => setTouched({ ...touched, email: true })}
                    className="w-full p-4 pl-12 rounded-xl bg-gray-50 border-2 border-gray-200 focus:outline-none focus:border-[#4ECDC4] focus:bg-[#f8f5f2] transition-all duration-300 text-gray-700"
                    placeholder="tu.email@example.com"
                  />
                  <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#4ECDC4]" />
                </div>
                <AnimatePresence>
                  {state.errors.email && touched.email && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {state.errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div className="relative">
                <label htmlFor="phone" className="block mb-2 font-semibold text-gray-700">
                  Teléfono <span className="text-sm text-gray-500 font-normal">(opcional)</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    onBlur={() => setTouched({ ...touched, phone: true })}
                    className="w-full p-4 pl-12 rounded-xl bg-gray-50 border-2 border-gray-200 focus:outline-none focus:border-[#4ECDC4] focus:bg-[#f8f5f2] transition-all duration-300 text-gray-700"
                    placeholder="+55 123 456 789"
                  />
                  <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#4ECDC4]" />
                </div>
                <AnimatePresence>
                  {state.errors.phone && touched.phone && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {state.errors.phone}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div className="relative">
                <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">
                  Mensaje*
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  onBlur={() => setTouched({ ...touched, message: true })}
                  className="w-full p-4 rounded-xl bg-gray-50 border-2 border-gray-200 focus:outline-none focus:border-[#4ECDC4] focus:bg-[#f8f5f2] transition-all duration-300 text-gray-700 resize-none"
                  placeholder="¿Cómo podemos ayudarte?"
                ></textarea>
                <AnimatePresence>
                  {state.errors.message && touched.message && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {state.errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              <SubmitButton />
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-[#4ECDC4]/10 to-[#A8D5A8]/10 p-8 rounded-2xl border border-[#4ECDC4]/20">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Información de Contacto</h3>

              <div className="space-y-6">
                <motion.div
                  className="flex items-start gap-4 p-4 bg-[#f8f5f2]/60 rounded-xl"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.8)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-[#4ECDC4] p-3 rounded-full">
                    <FaEnvelope className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <a
                      href="mailto:contacto@terapiaelfin.com"
                      className="text-[#4ECDC4] hover:text-[#8BC34A] transition-colors"
                    >
                      contacto@terapiaelfin.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 p-4 bg-[#f8f5f2]/60 rounded-xl"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.8)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-[#8BC34A] p-3 rounded-full">
                    <FaPhone className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Teléfono</h4>
                    <a href="tel:+525512345678" className="text-[#4ECDC4] hover:text-[#8BC34A] transition-colors">
                      +52 55 2324 0253
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 p-4 bg-[#f8f5f2]/60 rounded-xl"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.8)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-[#81C7D4] p-3 rounded-full">
                    <FaClock className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Horarios</h4>
                    <p className="text-gray-600">Lunes a Sábado</p>
                    <p className="text-gray-600">24 horas del día</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-[#A8D5A8]/20 to-[#4ECDC4]/20 p-8 rounded-2xl text-center border border-[#4ECDC4]/20"
            >
              <blockquote className="text-lg italic text-gray-700 mb-4">
                &ldquo;Este no es el final. Ni siquiera es el principio del fin. Pero, quizás, el final del
                principio&rdquo;
              </blockquote>
              <cite className="text-[#4ECDC4] font-semibold">— Winston Churchill</cite>
            </motion.div>
          </motion.div>

          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 -mb-20 z-20">
            <Image
              src="/rene03.png"
              alt="Rene character"
              width={200}
              height={200}
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </motion.section>
  )
}
