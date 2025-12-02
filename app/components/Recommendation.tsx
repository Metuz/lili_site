"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface Recommendation {
  id: string
  name: string
  email: string
  rating: number
  testimonial: string
  timestamp: string
}

export default function Recommendation() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch recommendations from API
  useEffect(() => {
    async function fetchRecommendations() {
      try {
        const response = await fetch("/api/get-recommendations")
        const data = await response.json()

        if (data.success && data.recommendations.length > 0) {
          setRecommendations(data.recommendations)
        } else {
          // Fallback to default recommendations if none exist
          setRecommendations([])
        }
      } catch (error) {
        console.error("Error loading recommendations:", error)
        // Use fallback recommendations on error
        setRecommendations([])
      } finally {
        setLoading(false)
      }
    }

    fetchRecommendations()
  }, [])

  // Auto-play carousel
  useEffect(() => {
    if (recommendations.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % recommendations.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [recommendations.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? recommendations.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % recommendations.length)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      goToNext()
    }
    if (touchStart - touchEnd < -75) {
      goToPrevious()
    }
  }

  if (loading) {
    return (
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-[#4ECDC4]/10 text-[#4ECDC4] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Testimonios
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Cargando testimonios...</h2>
        </div>
      </section>
    )
  }

  if (recommendations.length === 0) {
    return <></>
  }

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#4ECDC4] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-[#8BC34A] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#4ECDC4]/10 text-[#4ECDC4] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Lo que dicen nuestros pacientes
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Testimonios de{" "}
            <span className="text-[#4ECDC4] relative">
              nuestros pacientes
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#4ECDC4] to-[#8BC34A] rounded-full" />
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Historias reales de transformación y bienestar emocional
          </p>
        </motion.div>

        <div className="relative">
          {/* Carousel Container */}
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {recommendations.map((recommendation, index) => (
                <div key={recommendation.id} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      ease: "easeOut",
                    }}
                    className="bg-white border-l-4 border-[#4ECDC4] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 max-w-2xl mx-auto"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4ECDC4] to-[#8BC34A] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {recommendation.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{recommendation.name}</h3>
                        <div className="flex gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-5 h-5 ${
                                i < recommendation.rating ? "text-[#8BC34A] fill-current" : "text-gray-300"
                              }`}
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg italic">
                      &ldquo;{recommendation.testimonial}&rdquo;
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {recommendations.length > 1 && (
            <>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-[#4ECDC4] hover:text-white transition-all duration-300 group"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-[#4ECDC4] hover:text-white transition-all duration-300 group"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </>
          )}

          {/* Dots Indicator */}
          {recommendations.length > 1 && (
            <div className="flex justify-center gap-2 mt-10">
              {recommendations.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  whileHover={{ scale: 1.2 }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-[#4ECDC4] to-[#8BC34A] w-10"
                      : "bg-gray-300 w-2 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="relative mt-24">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-px bg-gradient-to-r from-transparent via-[#4ECDC4]/30 to-transparent w-full"
        />
      </div>
    </section>
  )
}
