'use client';
import { motion } from 'framer-motion';
import { FaHeart, FaBrain, FaHandsHelping, FaLeaf } from 'react-icons/fa';

const therapies = [
  {
    title: "Cognitive Behavioral",
    description: "Identify and transform negative thought patterns into positive behaviors",
    icon: <FaBrain className="text-3xl" />,
    color: "#95dcc6",
    delay: 0.1
  },
  {
    title: "Mindfulness-Based",
    description: "Cultivate present-moment awareness and acceptance",
    icon: <FaLeaf className="text-3xl" />,
    color: "#80a06e",
    delay: 0.2
  },
  {
    title: "Trauma-Informed",
    description: "Sensitive approach to healing past experiences",
    icon: <FaHeart className="text-3xl" />,
    color: "#b1e6b3",
    delay: 0.3
  },
  {
    title: "Solution-Focused",
    description: "Build solutions rather than dwell on problems",
    icon: <FaHandsHelping className="text-3xl" />,
    color: "#66332f",
    delay: 0.4
  }
];

export default function Theraphy() {
  return (
    <section id="therapies" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-[#66332f]"
            whileInView={{ 
              scale: [1, 1.02, 1],
              transition: { duration: 1.5 } 
            }}
          >
            Our Therapeutic Approaches
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-[#66332f] max-w-2xl mx-auto"
          >
            Evidence-based methods tailored to your unique needs
          </motion.p>
        </motion.div>

        {/* Therapy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {therapies.map((therapy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: therapy.delay,
                type: "spring",
                damping: 10
              }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 15px 30px rgba(102, 51, 47, 0.1)"
              }}
              className="bg-white rounded-xl overflow-hidden shadow-md border-t-4"
              style={{ borderTopColor: therapy.color }}
            >
              <div className="p-6">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="w-16 h-16 mb-4 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: therapy.color }}
                >
                  {therapy.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold mb-3 text-[#66332f]">
                  {therapy.title}
                </h3>
                <p className="text-gray-600 mb-4">{therapy.description}</p>
                
                <motion.button
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[#66332f] font-medium flex items-center"
                >
                  Learn more →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated decorative element */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 h-1 bg-gradient-to-r from-[#95dcc6] via-[#80a06e] to-[#b1e6b3]"
        />
      </div>
    </section>
  );
}
