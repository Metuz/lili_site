export default function Home() {
  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500 text-white text-center">
        <div>
            <h1 className="text-5xl font-bold mb-4">Proximamente!</h1>
            <p className="text-lg mb-6">Estamos trabajando duro para ofrecerte algo especial. ¡No te lo pierdas!</p>
            <div className="flex justify-center mb-6">
                <input type="email" placeholder="Ingresa tu correo" className="p-2 w-64 border-2 rounded-l-lg focus:outline-none" required />
                <button type="submit" className="bg-white text-green-600 font-semibold py-2 px-4 rounded-r-lg hover:bg-gray-100 transition duration-300">
                    Notificarme
                </button>
            </div>
            <p className="text-sm">Respetamos tu privacidad y no compartiremos tu información.</p>
        </div>
    </section>
  );
}
