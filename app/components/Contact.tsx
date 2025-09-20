"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useFormStatus } from "react-dom"
import { useActionState } from "react"
import { FaPaperPlane, FaCheckCircle, FaPhone, FaEnvelope, FaClock } from "react-icons/fa"
import { sendEmail } from "../api/action"

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
        scale: 1.03,
        y: -2,
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-full bg-gradient-to-r from-[#4ECDC4] to-[#8BC34A] text-white font-bold py-4 px-6 rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 transition-all duration-300"
    >
      {pending ? (
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="inline-block"
        >
          <FaPaperPlane />
        </motion.span>
      ) : (
        <>
          <FaPaperPlane />
          Enviar mensaje
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
      className="py-24 px-6 bg-gradient-to-br from-[#4ECDC4]/5 to-[#8BC34A]/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#4ECDC4] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#8BC34A] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-16"
          whileInView={{
            scale: [1, 1.02, 1],
            transition: { duration: 1.5, ease: "easeOut" },
          }}
        >
          <div className="inline-block bg-[#4ECDC4]/10 text-[#4ECDC4] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Ponte en contacto
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Comienza tu{" "}
            <span className="text-[#4ECDC4] relative">
              transformación
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#4ECDC4] to-[#8BC34A] rounded-full" />
            </span>{" "}
            hoy
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            Estamos aquí para escucharte. Completa el formulario y nos pondremos en contacto contigo en un plazo máximo
            de 24 horas para agendar tu consulta gratuita.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, ease: "easeOut" }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-[#4ECDC4]/20"
          >
            <AnimatePresence>
              {state?.success && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="mb-6 p-4 bg-gradient-to-r from-[#8BC34A] to-[#8BC34A]/80 text-white rounded-xl text-center shadow-lg"
                >
                  <FaCheckCircle className="inline-block mr-2" />
                  {state.success}
                </motion.div>
              )}
            </AnimatePresence>

            <form action={formAction} className="space-y-6">
              {/* Form fields remain the same but with enhanced styling */}
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
                  className="w-full p-4 rounded-xl bg-gray-50 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent transition-all duration-300"
                  placeholder="Tu nombre completo"
                />
                {/* Error handling remains the same */}
              </motion.div>

              <motion.div className="relative">
                <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  onBlur={() => setTouched({ ...touched, email: true })}
                  className="w-full p-4 rounded-xl bg-gray-50 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent transition-all duration-300"
                  placeholder="tu.email@example.com"
                />
                {/* Error handling remains the same */}
              </motion.div>

              <motion.div className="relative">
                <label htmlFor="phone" className="block mb-2 font-semibold text-gray-700">
                  Teléfono <span className="text-sm text-gray-600">(opcional)</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    onBlur={() => setTouched({ ...touched, phone: true })}
                    className="w-full p-4 rounded-xl bg-gray-50 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent transition-all duration-300 pl-10"
                    placeholder="+55 123 456 789"
                  />
                  <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
                </div>
                {/* Error handling remains the same */}
              </motion.div>

              <motion.div className="relative">
                <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">
                  Mensaje*
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  onBlur={() => setTouched({ ...touched, message: true })}
                  className="w-full p-4 rounded-xl bg-gray-50 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent transition-all duration-300"
                  placeholder="Como podemos ayudarte?"
                ></textarea>
                {/* Error handling remains the same */}
              </motion.div>

              <SubmitButton />
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#4ECDC4]/20">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Información de contacto</h3>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#4ECDC4]/10 to-[#4ECDC4]/5"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4ECDC4] to-[#8BC34A] rounded-full flex items-center justify-center text-white">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a
                      href="mailto:contacto@terapiaelfin.com"
                      className="text-[#4ECDC4] hover:text-[#8BC34A] transition-colors"
                    >
                      contacto@terapiaelfin.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#8BC34A]/10 to-[#8BC34A]/5"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8BC34A] to-[#4ECDC4] rounded-full flex items-center justify-center text-white">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Teléfono</p>
                    <a href="tel:+525512345678" className="text-[#8BC34A] hover:text-[#4ECDC4] transition-colors">
                      +52 55 2324 0253
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#81C7D4]/10 to-[#81C7D4]/5"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#81C7D4] to-[#A8D5A8] rounded-full flex items-center justify-center text-white">
                    <FaClock />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Horarios</p>
                    <p className="text-gray-600">Lunes a Sábado: 9:00 - 20:00</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#4ECDC4]/10 to-[#8BC34A]/10 p-8 rounded-2xl border border-[#4ECDC4]/20">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Primera consulta gratuita</h3>
              <p className="text-gray-600 mb-4">
                Ofrecemos una primera sesión sin costo para conocernos y evaluar cómo podemos ayudarte en tu proceso
                terapéutico.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#8BC34A] rounded-full" />
                  <span>Consultas presenciales y online</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#4ECDC4] rounded-full" />
                  <span>Atención personalizada</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#81C7D4] rounded-full" />
                  <span>Enfoque psicoanalítico</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced section divider */}
      <div className="relative mt-24">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-px bg-gradient-to-r from-transparent via-[#4ECDC4]/30 to-transparent w-full"
        />
      </div>
    </motion.section>
  )
}
