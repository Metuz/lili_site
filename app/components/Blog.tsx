// Updated Blog Component (2-column layout)
'use client';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: "El manejo de la ansiedad",
    excerpt: "Aprende a reconocer síntomas y estrategias basadas en evidencia para el manejo de la ansiedad.",
    category: "Salud Mental",
    date: "15 Mayo 2023",
    readTime: "5 min lectura",
    image: "/images/blog-anxiety.jpg"
  },
  {
    id: 2,
    title: "Cómo mejorar la relación de pareja",
    excerpt: "Cómo la práctica diaria de mindfulness puede reconectar tu cerebro para reducir el estrés y mejorar el enfoque.",
    category: "Relaciones",
    date: "2 Junio 2023",
    readTime: "7 min lectura",
    image: "/images/blog-mindfulness.jpg"
  },
  {
    id: 3,
    title: "Consejos para trabajar la depresión",
    excerpt: "Técnicas profesionales para mejorar la comunicación y conexión emocional.",
    category: "Salud Mental",
    date: "18 Junio 2023",
    readTime: "6 min lectura",
    image: "/images/blog-relationships.jpg"
  },
  {
    id: 4,
    title: "Autocuidado emocional",
    excerpt: "Estrategias prácticas para mantener tu bienestar emocional en la vida diaria.",
    category: "Autocuidado",
    date: "25 Julio 2023",
    readTime: "8 min lectura",
    image: "/images/blog-selfcare.jpg"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-4 bg-[#F8F5F2]">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-[#8E7A73]"
            whileInView={{ 
              scale: [1, 1.02, 1],
              transition: { duration: 1.5, ease: "easeOut" } 
            }}
          >
            Nuestro Blog
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, ease: "easeOut" }}
            className="text-xl text-[#3F3F46] max-w-2xl mx-auto"
          >
            Artículos sobre salud mental y bienestar emocional
          </motion.p>
        </motion.div>

        {/* Blog Posts Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                damping: 10,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 15px 30px rgba(142, 122, 115, 0.1)"
              }}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              {/* Image with overlay */}
              <motion.div 
                className="relative h-48 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="inline-block px-3 py-1 text-sm text-white bg-[#98DDC4] rounded-full">
                    {post.category}
                  </span>
                </motion.div>
              </motion.div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-[#3F3F46]/70 mb-3">
                  <div className="flex items-center mr-4">
                    <FaCalendarAlt className="mr-1 text-[#98DDC4]" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-1 text-[#98DDC4]" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-[#8E7A73]">
                  {post.title}
                </h3>
                <p className="text-[#3F3F46] mb-4">{post.excerpt}</p>
                
                <motion.a
                  href={`/blog/${post.id}`}
                  className="text-[#8E7A73] font-medium flex items-center group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Leer artículo
                  <motion.span
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    initial={{ x: 0 }}
                  >
                    <FaArrowRight />
                  </motion.span>
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, ease: "easeOut" }}
          className="text-center mt-12"
        >
          <motion.a
            href="/blog"
            className="inline-block bg-[#8E7A73] text-white font-bold py-3 px-8 rounded-full"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#BBA8A0"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Ver Todos los Artículos
          </motion.a>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-px bg-[#8E7A73]/20 w-full"
      />
    </section>
  );
}
