"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function SubmitRecommendation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "5",
    testimonial: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/submit_recommendation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", rating: "5", testimonial: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting recommendation:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-[#4ECDC4] to-[#8BC34A] bg-clip-text text-transparent"
          >
            Terapia el fin
          </Link>
          <Link href="/" className="text-gray-700 hover:text-[#4ECDC4] transition-colors flex items-center gap-2">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex justify-center mb-6">
            <span className="inline-block px-6 py-2 bg-[#4ECDC4]/10 text-[#4ECDC4] rounded-full text-sm font-medium">
              Testimonios
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Comparte tu{" "}
            <span className="relative inline-block">
              <span className="relative z-10">experiencia</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-[#4ECDC4] to-[#8BC34A] opacity-30 -z-10" />
            </span>
          </h1>

          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Tu opinión es muy valiosa para nosotros y puede ayudar a otras personas que están considerando iniciar
            terapia. Comparte tu experiencia de forma anónima o con tu nombre.
          </p>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4ECDC4] to-[#8BC34A] rounded-3xl opacity-10" />
            <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12">
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-[#8BC34A]/10 border-l-4 border-[#8BC34A] rounded-lg"
                >
                  <p className="text-gray-800 font-medium">
                    ¡Gracias por compartir tu experiencia! Tu recomendación será publicada pronto.
                  </p>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg"
                >
                  <p className="text-red-700 font-medium">
                    Hubo un error al enviar tu recomendación. Por favor, intenta nuevamente.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre (opcional)
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Puedes usar solo tus iniciales o dejarlo en blanco"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-[#4ECDC4]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent transition-all"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Tu email no será publicado, solo lo usamos para contactarte si es necesario.
                  </p>
                </div>

                <div>
                  <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-2">
                    Calificación <span className="text-[#4ECDC4]">*</span>
                  </label>
                  <select
                    id="rating"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent transition-all"
                  >
                    <option value="5">⭐⭐⭐⭐⭐ (5 estrellas)</option>
                    <option value="4">⭐⭐⭐⭐ (4 estrellas)</option>
                    <option value="3">⭐⭐⭐ (3 estrellas)</option>
                    <option value="2">⭐⭐ (2 estrellas)</option>
                    <option value="1">⭐ (1 estrella)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-2">
                    Tu experiencia <span className="text-[#4ECDC4]">*</span>
                  </label>
                  <textarea
                    id="testimonial"
                    name="testimonial"
                    value={formData.testimonial}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Cuéntanos sobre tu experiencia con la terapia..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent transition-all resize-none"
                  />
                  <p className="text-sm text-gray-500 mt-1">Mínimo 50 caracteres</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || formData.testimonial.length < 50}
                  className="w-full bg-gradient-to-r from-[#4ECDC4] to-[#8BC34A] text-white py-4 rounded-xl font-medium hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? "Enviando..." : "Enviar recomendación"}
                </button>
              </form>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Al enviar tu recomendación, aceptas que podamos publicarla en nuestro sitio web.
            <br />
            Tu información personal será tratada de forma confidencial.
          </p>
        </div>
      </main>
    </div>
  )
}
