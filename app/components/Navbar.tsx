'use client';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#95dcc6] text-[#66332f] p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Terapia El Fin</h1>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Menu - Always visible on md+ screens */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <a href="#home" className="hover:text-[#66332f] font-medium">Home</a>
          <a href="#therapy" className="hover:text-[#66332f] font-medium">Terapias</a>
          <a href="#blog" className="hover:text-[#66332f] font-medium">Blog</a>
          <a href="#contact" className="hover:text-[#66332f] font-medium">Contacto</a>
        </div>
      </div>

      {/* Mobile Menu - Only shows when menuOpen is true */}
      <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden bg-[#95dcc6] w-full mt-4 pb-4`}>
        <div className="container mx-auto flex flex-col space-y-3">
          <a 
            href="#home" 
            className="py-2 hover:text-[#66332f] font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#therapy" 
            className="py-2 hover:text-[#66332f] font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Terapias
          </a>
          <a 
            href="#blog" 
            className="py-2 hover:text-[#66332f] font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </a>
          <a 
            href="#contact" 
            className="py-2 hover:text-[#66332f] font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}
