import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Custom S Logo Component
export const SynapsesLogo = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <path 
      d="M25 35C25 24 34 15 45 15H70C81 15 90 24 90 35C90 46 81 55 70 55H35C24 55 15 64 15 75C15 86 24 95 35 95H60" 
      stroke="currentColor" 
      strokeWidth="12" 
      strokeLinecap="round" 
    />
    <defs>
      <linearGradient id="logo-gradient" x1="15" y1="95" x2="90" y2="15" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2dd4bf" />
        <stop offset="1" stopColor="#6366f1" />
      </linearGradient>
    </defs>
  </svg>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={scrollToTop}>
            <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-indigo-600">
              <SynapsesLogo className="w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">Synapses</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#comparacion" onClick={(e) => scrollToSection(e, 'comparacion')} className="text-gray-600 hover:text-indigo-600 transition-colors">Problema vs Solución</a>
            <a href="#galeria" onClick={(e) => scrollToSection(e, 'galeria')} className="text-gray-600 hover:text-indigo-600 transition-colors">Galería</a>
            <a href="#proceso" onClick={(e) => scrollToSection(e, 'proceso')} className="text-gray-600 hover:text-indigo-600 transition-colors">Cómo Funciona</a>
            <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="text-gray-600 hover:text-indigo-600 transition-colors">Preguntas</a>
            <a href="#contacto" onClick={(e) => scrollToSection(e, 'contacto')} className="px-5 py-2.5 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all hover:shadow-lg transform hover:-translate-y-0.5">
              Contactar
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <a href="#comparacion" onClick={(e) => scrollToSection(e, 'comparacion')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Problema vs Solución</a>
            <a href="#galeria" onClick={(e) => scrollToSection(e, 'galeria')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Galería</a>
            <a href="#proceso" onClick={(e) => scrollToSection(e, 'proceso')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Cómo Funciona</a>
            <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Preguntas</a>
            <a href="#contacto" onClick={(e) => scrollToSection(e, 'contacto')} className="block w-full text-center mt-4 px-5 py-3 rounded-md bg-indigo-600 text-white font-bold">Contactar</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;