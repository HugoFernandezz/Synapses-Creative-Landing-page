import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-indigo-600 flex items-center justify-center text-white">
              <Zap size={20} fill="currentColor" />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">Synapses</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#proceso" className="text-gray-600 hover:text-indigo-600 transition-colors">Cómo Funciona</a>
            <a href="#galeria" className="text-gray-600 hover:text-indigo-600 transition-colors">Galería</a>
            <a href="#precios" className="text-gray-600 hover:text-indigo-600 transition-colors">Precios</a>
            <a href="#contacto" className="px-5 py-2.5 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all hover:shadow-lg transform hover:-translate-y-0.5">
              Empezar Ahora
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
            <a href="#proceso" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Cómo Funciona</a>
            <a href="#galeria" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Galería</a>
            <a href="#precios" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Precios</a>
            <a href="#contacto" onClick={() => setIsOpen(false)} className="block w-full text-center mt-4 px-5 py-3 rounded-md bg-indigo-600 text-white font-bold">Empezar Ahora</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;