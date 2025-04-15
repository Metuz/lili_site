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
            <p className="text-gray-600">
              Un espacio terapéutico individual donde podrás explorar tu mundo interno con libertad,
              comprender tu historia personal y trabajar en los desafíos emocionales que enfrentas.
              Cada sesión está pensada para acompañarte en tus procesos vitales, con respeto, escucha
              profunda y sin juicios. Se busca favorecer la reflexión, el autoconocimiento y la construcción
              de nuevas formas de estar contigo y con los demás.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#80a06e]">
            <div className="w-12 h-12 bg-[#80a06e] rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#66332f]">Terapia de Pereja</h3>
            <p className="text-gray-600">
              Acompañamiento profesional para parejas que desean mejorar su comunicación,
              comprender sus dinámicas relacionales y fortalecer su vínculo.
              Se trabaja en un espacio seguro donde ambos pueden expresar sus experiencias,
              emociones y necesidades, con el objetivo de construir una relación más consciente,
              equilibrada y respetuosa.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#b1e6b3]">
            <div className="w-12 h-12 bg-[#b1e6b3] rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#66332f]">Tratamineto de Ansiedad</h3>
            <p className="text-gray-600">
              Espacio terapéutico dirigido a quienes experimentan ansiedad en sus distintas formas:
              preocupaciones constantes, pensamientos intrusivos, malestar físico o emocional.
              Desde un enfoque psicoanalítico, se busca comprender las raíces emocionales de la
              ansiedad, identificar patrones inconscientes y promover una relación más tranquila y
              compasiva contigo mismo.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#66332f]">
            <div className="w-12 h-12 bg-[#66332f] rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#66332f]">Apoyo a la depresión</h3>
            <p className="text-gray-600">
              Atención terapéutica cálida y respetuosa para personas que atraviesan sentimientos de
              tristeza profunda, desánimo, vacío o desesperanza.
              A través de la escucha empática, se acompaña la experiencia subjetiva de cada persona,
              facilitando la resignificación del malestar, la elaboración de duelos o pérdidas, y el
              reencuentro con el deseo y el sentido de vida.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
