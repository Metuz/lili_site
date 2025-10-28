"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function EnviarRecomendacion() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    calificacion: "5",
    testimonio: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/submit-recommendation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ nombre: "", email: "", calificacion: "5", testimonio: "" })
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
    <div className="min-h-screen bg-[#f5f3f0]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#8b7b7b]">
            Terapia el fin
          </Link>
          <Link href="/" className="text-[#8b7b7b] hover:text-[#6b5b5b] transition-colors">
            Volver al inicio
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#8b7b7b] mb-4">Comparte tu experiencia</h1>
          <p className="text-gray-600 mb-8">
            Tu opinión es muy valiosa para nosotros y puede ayudar a otras personas que están considerando iniciar
            terapia. Comparte tu experiencia de forma anónima o con tu nombre.
          </p>

          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-[#a8d5ba] bg-opacity-20 border-l-4 border-[#a8d5ba] rounded">
              <p className="text-[#8b7b7b] font-medium">
                ¡Gracias por compartir tu experiencia! Tu recomendación será revisada y publicada pronto.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 rounded">
              <p className="text-red-700 font-medium">
                Hubo un error al enviar tu recomendación. Por favor, intenta nuevamente.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre */}
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-[#8b7b7b] mb-2">
                Nombre (opcional)
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Puedes usar solo tus iniciales o dejarlo en blanco"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a8d5ba] focus:border-transparent transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#8b7b7b] mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a8d5ba] focus:border-transparent transition-all"
              />
              <p className="text-sm text-gray-500 mt-1">
                Tu email no será publicado, solo lo usamos para contactarte si es necesario.
              </p>
            </div>

            {/* Calificación */}
            <div>
              <label htmlFor="calificacion" className="block text-sm font-medium text-[#8b7b7b] mb-2">
                Calificación <span className="text-red-500">*</span>
              </label>
              <select
                id="calificacion"
                name="calificacion"
                value={formData.calificacion}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a8d5ba] focus:border-transparent transition-all"
              >
                <option value="5">⭐⭐⭐⭐⭐ (5 estrellas)</option>
                <option value="4">⭐⭐⭐⭐ (4 estrellas)</option>
                <option value="3">⭐⭐⭐ (3 estrellas)</option>
                <option value="2">⭐⭐ (2 estrellas)</option>
                <option value="1">⭐ (1 estrella)</option>
              </select>
            </div>

            {/* Testimonio */}
            <div>
              <label htmlFor="testimonio" className="block text-sm font-medium text-[#8b7b7b] mb-2">
                Tu experiencia <span className="text-red-500">*</span>
              </label>
              <textarea
                id="testimonio"
                name="testimonio"
                value={formData.testimonio}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Cuéntanos sobre tu experiencia con la terapia..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a8d5ba] focus:border-transparent transition-all resize-none"
              />
              <p className="text-sm text-gray-500 mt-1">Mínimo 50 caracteres</p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || formData.testimonio.length < 50}
              className="w-full bg-[#8b7b7b] text-white py-4 rounded-lg font-medium hover:bg-[#6b5b5b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "Enviar recomendación"}
            </button>
          </form>
        </div>

        {/* Privacy Note */}
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
