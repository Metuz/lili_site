// Updated Therapy Component with Divider
'use client';
import { motion } from 'framer-motion';
import { FaUser, FaUsers, FaBrain, FaHeart } from 'react-icons/fa';

export default function Therapy() {
  const therapies = [
    {
      title: "Terapia individual",
      description: `Un espacio terapéutico individual donde podrás explorar tu mundo interno con libertad,
      comprender tu historia personal y trabajar en los desafíos emocionales que enfrentas.
      Cada sesión está pensada para acompañarte en tus procesos vitales, con respeto, escucha
      profunda y sin juicios. Se busca favorecer la reflexión, el autoconocimiento y la construcción
      de nuevas formas de estar contigo y con los demás.`,
      icon: <FaUser className="text-xl" />,
      color: "#98DDC4",
      border: "border-[#98DDC4]"
    },
    {
      title: "Terapia de pareja",
      description: `Acompañamiento profesional para parejas que desean mejorar su comunicación,
      comprender sus dinámicas relacionales y fortalecer su vínculo.
      Se trabaja en un espacio seguro donde ambos pueden expresar sus experiencias,
      emociones y necesidades, con el objetivo de construir una relación más consciente,
      equilibrada y respetuosa.`,
      icon: <FaUsers className="text-xl" />,
      color: "#80a06e",
      border: "border-[#80a06e]"
    },
    {
      title: "Tratamiento para la ansiedad",
      description: `Espacio terapéutico dirigido a quienes experimentan ansiedad en sus distintas formas:
      preocupaciones constantes, pensamientos intrusivos, malestar físico o emocional.
      Desde un enfoque psicoanalítico, se busca comprender las raíces emocionales de la
      ansiedad, identificar patrones inconscientes y promover una relación más tranquila y
      compasiva contigo mismo.`,
      icon: <FaBrain className="text-xl" />,
      color: "#B1E6B3",
      border: "border-[#B1E6B3]"
    },
    {
      title: "Apoyo para la depresión",
      description: `Atención terapéutica cálida y respetuosa para personas que atraviesan sentimientos de
      tristeza profunda, desánimo, vacío o desesperanza.
      A través de la escucha empática, se acompaña la experiencia subjetiva de cada persona,
      facilitando la resignificación del malestar, la elaboración de duelos o pérdidas, y el
      reencuentro con el deseo y el sentido de vida.`,
      icon: <FaHeart className="text-xl" />,
      color: "#8E7A73",
      border: "border-[#8E7A73]"
    }
  ];

  return (
    <section id="therapy" className="py-16 px-4 bg-[#F8F5F2]">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-bold mb-12 text-center text-[#8E7A73]"
        >
          Nuestros servicios de terapia
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {therapies.map((therapy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 10,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px rgba(142, 122, 115, 0.1)"
              }}
              className={`bg-white p-6 rounded-lg shadow-md border-t-4 ${therapy.border}`}
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-12 h-12 mb-4 rounded-full flex items-center justify-center text-white"
                style={{ backgroundColor: therapy.color }}
              >
                {therapy.icon}
              </motion.div>
              
              <h3 className="text-xl font-semibold mb-3 text-[#8E7A73]">
                {therapy.title}
              </h3>
              
              <motion.p 
                className="text-[#3F3F46]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, ease: "easeOut" }}
              >
                {therapy.description}
              </motion.p>
            </motion.div>
          ))}
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
    </section>
  );
}
