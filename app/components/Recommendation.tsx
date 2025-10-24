// Updated About Component with Divider
'use client';
import { useState, useEffect } from "react"

export default function Recommendation() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Las sesiones me han ayudado enormemente a entender mis emociones y a desarrollar herramientas para manejar la ansiedad. Un espacio seguro y acogedor.",
      name: "Gabriel Vázquez",
      initials: "GV",
      subtitle: "Paciente desde 2023",
      color: "#a8d5ba",
    },
    {
      id: 2,
      rating: 5,
      text: "La terapia de pareja nos ayudó a reconectar y a comunicarnos mejor. Estamos muy agradecidos por el acompañamiento profesional y empático.",
      name: "Ana Karen Alpide",
      initials: "AKA",
      subtitle: "Terapia de pareja",
      color: "#9b8b8b",
    },
    {
      id: 3,
      rating: 5,
      text: "Encontré en este espacio la guía que necesitaba para superar momentos difíciles. El enfoque personalizado hace toda la diferencia.",
      name: "Eric Lozada Ramos",
      initials: "ELR",
      subtitle: "Paciente desde 2024",
      color: "#a8d5ba",
    },
    {
      id: 4,
      rating: 5,
      text: "Un proceso transformador que me permitió conocerme mejor y construir relaciones más saludables. Totalmente recomendado.",
      name: "Diego y Rebeca",
      initials: "DR",
      subtitle: "Paciente desde 2023",
      color: "#9b8b8b",
    },
    {
      id: 5,
      rating: 5,
      text: "La empatía y profesionalismo hacen de cada sesión un espacio de crecimiento. He logrado avances que no creía posibles.",
      name: "Valente García",
      initials: "VG",
      subtitle: "Paciente desde 2024",
      color: "#a8d5ba",
    },
    {
      id: 6,
      rating: 5,
      text: "La empatía y profesionalismo hacen de cada sesión un espacio de crecimiento. He logrado avances que no creía posibles.",
      name: "Diego E. Rodriguez",
      initials: "DR",
      subtitle: "Paciente desde 2024",
      color: "#a8d5ba",
    },
    {
      id: 7,
      rating: 5,
      text: "La empatía y profesionalismo hacen de cada sesión un espacio de crecimiento. He logrado avances que no creía posibles.",
      name: "Mariel García",
      initials: "MG",
      subtitle: "Paciente desde 2024",
      color: "#a8d5ba",
    },
    {
      id: 8,
      rating: 5,
      text: "La empatía y profesionalismo hacen de cada sesión un espacio de crecimiento. He logrado avances que no creía posibles.",
      name: "Diego Domíguez",
      initials: "DD",
      subtitle: "Paciente desde 2024",
      color: "#a8d5ba",
    },
    {
      id: 9,
      rating: 5,
      text: "La empatía y profesionalismo hacen de cada sesión un espacio de crecimiento. He logrado avances que no creía posibles.",
      name: "Fabiola Cerón Alpide",
      initials: "FCA",
      subtitle: "Paciente desde 2024",
      color: "#a8d5ba",
    },
    {
      id: 10,
      rating: 5,
      text: "La empatía y profesionalismo hacen de cada sesión un espacio de crecimiento. He logrado avances que no creía posibles.",
      name: "Hinochi Luna",
      initials: "HL",
      subtitle: "Paciente desde 2024",
      color: "#a8d5ba",
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swiped left
      nextSlide()
    }

    if (touchStart - touchEnd < -75) {
      // Swiped right
      prevSlide()
    }
  }

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center font-serif text-3xl text-[#8b7b7b]">Lo que dicen nuestros pacientes</h2>
        <p className="mb-12 text-center text-[#6b5b5b]">
          Testimonios reales de personas que han encontrado su camino hacia el bienestar
        </p>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel Wrapper */}
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
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div
                    className="mx-auto max-w-2xl rounded-lg bg-[#f5f1ed] shadow-sm"
                    style={{ borderLeft: `4px solid ${testimonial.color}` }}
                  >
                    <div className="p-8">
                      {/* Star Rating */}
                      <div className="mb-4 flex justify-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="h-5 w-5"
                            fill="#d4af37"
                            stroke="#d4af37"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="mb-6 text-center text-lg leading-relaxed text-[#6b5b5b]">{testimonial.text}</p>

                      {/* Author Info */}
                      <div className="flex items-center justify-center gap-3">
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-full text-white font-semibold"
                          style={{ backgroundColor: testimonial.color }}
                        >
                          {testimonial.initials}
                        </div>
                        <div>
                          <p className="font-semibold text-[#8b7b7b]">{testimonial.name}</p>
                          <p className="text-sm text-[#9b8b8b]">{testimonial.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg hover:bg-[#f5f1ed] transition-colors md:left-4"
            aria-label="Previous testimonial"
          >
            <svg
              className="h-6 w-6 text-[#8b7b7b]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg hover:bg-[#f5f1ed] transition-colors md:right-4"
            aria-label="Next testimonial"
          >
            <svg
              className="h-6 w-6 text-[#8b7b7b]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                index === currentIndex ? "bg-[#a8d5ba] w-8" : "bg-[#d5d5d5] hover:bg-[#b5b5b5]"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
