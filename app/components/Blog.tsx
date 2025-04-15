'use client';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: "Understanding Anxiety Disorders",
    excerpt: "Learn to recognize symptoms and evidence-based coping strategies for anxiety management.",
    category: "Mental Health",
    date: "May 15, 2023",
    readTime: "5 min read",
    image: "/images/blog-anxiety.jpg"
  },
  {
    id: 2,
    title: "The Power of Mindfulness Meditation",
    excerpt: "How daily mindfulness practice can rewire your brain for reduced stress and improved focus.",
    category: "Mindfulness",
    date: "June 2, 2023",
    readTime: "7 min read",
    image: "/images/blog-mindfulness.jpg"
  },
  {
    id: 3,
    title: "Building Healthier Relationships",
    excerpt: "Professional techniques for improving communication and emotional connection.",
    category: "Relationships",
    date: "June 18, 2023",
    readTime: "6 min read",
    image: "/images/blog-relationships.jpg"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-4 bg-[#f0f7f5]">
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
            Latest Articles
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-[#66332f] max-w-2xl mx-auto"
          >
            Evidence-based insights for mental wellness
          </motion.p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                damping: 10
              }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 15px 30px rgba(102, 51, 47, 0.1)"
              }}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              {/* Image with overlay */}
              <motion.div 
                className="relative h-48 overflow-hidden"
                whileHover={{ scale: 1.05 }}
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
                >
                  <span className="inline-block px-3 py-1 text-sm text-white bg-[#95dcc6] rounded-full">
                    {post.category}
                  </span>
                </motion.div>
              </motion.div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center mr-4">
                    <FaCalendarAlt className="mr-1 text-[#80a06e]" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-1 text-[#80a06e]" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-[#66332f]">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                <motion.a
                  href={`/blog/${post.id}`}
                  className="text-[#66332f] font-medium flex items-center group"
                  whileHover={{ x: 5 }}
                >
                  Read article
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
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/blog"
            className="inline-block bg-[#66332f] text-white font-bold py-3 px-8 rounded-full"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#4a2522"
            }}
            whileTap={{ scale: 0.95 }}
          >
            View All Articles
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
