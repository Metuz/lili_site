export default function Blog() {
  const blogs = [
    {
      title: "Managing Anxiety in Daily Life",
      excerpt: "Practical strategies to reduce anxiety and improve your quality of life.",
      color: "bg-[#95dcc6]"
    },
    {
      title: "The Power of Mindfulness",
      excerpt: "How mindfulness practices can transform your mental health.",
      color: "bg-[#80a06e]"
    },
    {
      title: "Building Resilience",
      excerpt: "Techniques to strengthen your emotional resilience during tough times.",
      color: "bg-[#b1e6b3]"
    }
  ];
  return (
    <section id="blog" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center text-[#66332f]">Nuesto Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {
            blogs.map((post, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 border border-[#95dcc6]">
                <div className={`h-3 ${post.color}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#66332f]">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a href="#" className="text-[#66332f] hover:text-[#4a2522] font-medium">Read More →</a>
                </div>
              </div>
              )
            )
          }
        </div>
      </div>
    </section>
  );
}
