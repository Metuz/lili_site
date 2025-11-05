"use client"

import type React from "react"

import { useState, useEffect } from "react"

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
    }, 5000)

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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#8b7b7b] mb-12">Cargando testimonios...</h2>
        </div>
      </section>
    )
  }

  if (recommendations.length === 0) {
    return (
      <></>
      // <section className="py-16 px-4 bg-white">
      //   <div className="max-w-6xl mx-auto text-center">
      //     <h2 className="text-3xl font-bold text-[#8b7b7b] mb-12">Testimonios de Nuestros Pacientes</h2>
      //     <p className="text-[#8b7b7b]">No hay testimonios disponibles aún.</p>
      //   </div>
      // </section>
    )
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#8b7b7b] mb-12">Testimonios de Nuestros Pacientes</h2>

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
              {recommendations.map((recommendation) => (
                <div key={recommendation.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white border-l-4 border-[#a8d5ba] rounded-lg p-8 shadow-sm max-w-2xl mx-auto">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#a8d5ba] flex items-center justify-center text-white font-semibold">
                        {recommendation.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#8b7b7b]">{recommendation.name}</h3>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < recommendation.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-[#8b7b7b] leading-relaxed">{recommendation.testimonial}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {recommendations.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6 text-[#8b7b7b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6 text-[#8b7b7b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {recommendations.length > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {recommendations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-[#a8d5ba] w-8" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
