export default function Footer() {
  return (
    <footer className="bg-[#80a06e] text-white py-8 px-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()}  Terapia el Fin. Todos lo derechos reservados.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="hover:text-[#95dcc6]">Politica de privacidad</a>
          <a href="#" className="hover:text-[#95dcc6]">Terminos de Servicio</a>
        </div>
      </div>
    </footer>
  );
}
