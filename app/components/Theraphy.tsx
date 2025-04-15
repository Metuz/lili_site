export default function Theraphy() {
  return (
    <section id="therapy" className="py-16 px-4 bg-[#f0f7f5]">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center text-[#66332f]">Nuestros servicios de Terapia</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#95dcc6]">
            <div className="w-12 h-12 bg-[#95dcc6] rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#66332f]">Terapia Individual</h3>
            <p className="text-gray-600">One-on-one sessions tailored to your personal challenges and goals.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#80a06e]">
            <div className="w-12 h-12 bg-[#80a06e] rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#66332f]">Terapia de Pereja</h3>
            <p className="text-gray-600">Improve communication and strengthen your relationship.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#b1e6b3]">
            <div className="w-12 h-12 bg-[#b1e6b3] rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#66332f]">Tratamineto de Ansiedad</h3>
            <p className="text-gray-600">Evidence-based approaches to manage and reduce anxiety.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#66332f]">
            <div className="w-12 h-12 bg-[#66332f] rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#66332f]">Apoyo a la depresión</h3>
            <p className="text-gray-600">Compassionate care to help you overcome depression.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
