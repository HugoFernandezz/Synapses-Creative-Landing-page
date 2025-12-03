import React, { useState } from 'react';
import { ArrowRight, Check, X as XIcon, Upload, Wand2, Download, Mail, Send, ChevronDown } from 'lucide-react';
import Navbar, { SynapsesLogo } from './components/Navbar';
import { HERO_COPY, COMPARISON_COPY, SHOWCASE_ITEMS, PROCESS_STEPS, FAQ_ITEMS, CONTACT_EMAIL } from './constants';

const Hero = () => (
  <header id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    <div className="absolute inset-0 z-0">
       {/* Abstract Background */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-50 to-transparent opacity-60"></div>
       <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-50 rounded-full filter blur-3xl opacity-50"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-semibold text-xs tracking-wide uppercase mb-6 animate-fade-in-up">
        Inteligencia Artificial Generativa para E-commerce
      </div>
      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
        {HERO_COPY.h1.split('.')[0]}.<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-400">
          {HERO_COPY.h1.split('.')[1]}
        </span>
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 mb-10 leading-relaxed">
        {HERO_COPY.h2}
      </p>
      
      {/* Scroll Indicator (Replaces Buttons) */}
      <div className="flex flex-col items-center justify-center gap-3 mt-8">
        <span className="text-sm font-medium text-gray-400 tracking-widest uppercase animate-pulse">Descubre más</span>
        <a 
          href="#comparacion" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('comparacion')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="p-4 bg-white rounded-full shadow-lg border border-indigo-50 text-indigo-600 hover:text-indigo-800 hover:shadow-xl transition-all animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </a>
      </div>
      
      {/* Visual implication of split screen */}
      <div className="mt-16 relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
         <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all z-10 pointer-events-none"></div>
         <div className="grid grid-cols-2">
            <div className="h-64 md:h-96 bg-gray-100 flex items-center justify-center relative">
               <span className="absolute top-4 left-4 bg-gray-900/50 text-white text-xs px-2 py-1 rounded backdrop-blur">Antes (Tu Foto)</span>
               <img src="https://picsum.photos/id/1/800/800" alt="Raw product" className="object-cover w-full h-full grayscale opacity-80" />
            </div>
            <div className="h-64 md:h-96 bg-indigo-100 flex items-center justify-center relative">
                <span className="absolute top-4 right-4 bg-teal-500 text-white text-xs px-2 py-1 rounded shadow">Después (Synapses AI)</span>
                <img src="https://picsum.photos/id/6/800/800" alt="AI Generated Lifestyle" className="object-cover w-full h-full" />
            </div>
         </div>
      </div>
    </div>
  </header>
);

const Comparison = () => (
  <section id="comparacion" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900">{COMPARISON_COPY.title}</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Old Way */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 opacity-70 hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-100 rounded-lg text-red-600"><XIcon size={24} /></div>
            <h3 className="text-xl font-bold text-gray-800">{COMPARISON_COPY.oldWay.title}</h3>
          </div>
          <ul className="space-y-4">
            {COMPARISON_COPY.oldWay.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* New Way */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-indigo-100 relative overflow-hidden transform md:-translate-y-4">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-indigo-600"></div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-teal-100 rounded-lg text-teal-600"><Check size={24} /></div>
            <h3 className="text-xl font-bold text-gray-900">{COMPARISON_COPY.newWay.title}</h3>
          </div>
          <ul className="space-y-4">
            {COMPARISON_COPY.newWay.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 font-medium">
                <Check size={16} className="mt-1 text-teal-500 flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Showcase = () => (
  <section id="galeria" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Galería de Transformaciones</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Desliza para ver la magia. Imágenes generadas 100% con nuestros modelos de IA entrenados.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {SHOWCASE_ITEMS.map((item) => (
          <div key={item.id} className="group relative rounded-2xl overflow-hidden shadow-lg h-[400px]">
            {/* The Image Stack */}
            <div className="absolute inset-0">
               {/* After Image (Top layer, reveals on hover) */}
               <img 
                 src={item.afterUrl} 
                 alt={item.title} 
                 className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100" 
               />
               {/* Before Image (Bottom layer) */}
               <img 
                 src={item.beforeUrl} 
                 alt="Original" 
                 className="absolute inset-0 w-full h-full object-cover grayscale transition-opacity duration-700 group-hover:opacity-0" 
               />
            </div>
            
            {/* Overlay Text */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
               <span className="text-xs font-bold uppercase tracking-wider text-teal-300 mb-1 block">
                  <span className="group-hover:hidden">Original</span>
                  <span className="hidden group-hover:inline">Resultado Synapses</span>
               </span>
               <h3 className="text-xl font-bold mb-1">{item.title}</h3>
               <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Process = () => (
  <section id="proceso" className="py-24 bg-gray-900 text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Cómo Funciona</h2>
        <p className="text-gray-400">Tu nueva campaña visual en 3 pasos simples.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 relative">
        {/* Connector Line */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-700 z-0 transform -translate-y-1/2"></div>

        {PROCESS_STEPS.map((step) => (
          <div key={step.id} className="relative z-10 text-center">
            <div className="w-24 h-24 mx-auto bg-gray-800 rounded-2xl border border-gray-700 flex items-center justify-center mb-6 shadow-xl relative overflow-hidden group hover:border-indigo-500 transition-colors">
               <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-all"></div>
               {step.iconName === 'Upload' && <Upload size={40} className="text-indigo-400 group-hover:scale-110 transition-transform" />}
               {step.iconName === 'Wand2' && <Wand2 size={40} className="text-indigo-400 group-hover:scale-110 transition-transform" />}
               {step.iconName === 'Download' && <Download size={40} className="text-indigo-400 group-hover:scale-110 transition-transform" />}
            </div>
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-gray-400 leading-relaxed px-4">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Consulta web de ${formData.name}`;
    const body = `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contacto" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          <div className="bg-indigo-600 p-12 md:w-2/5 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-6">Contactar</h3>
              <p className="text-indigo-100 mb-8 leading-relaxed">
                ¿Listo para transformar la imagen de tu marca? Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-indigo-100">
                <Mail size={20} />
                <span className="text-sm font-medium">{CONTACT_EMAIL}</span>
              </div>
            </div>
          </div>
          
          <div className="p-12 md:w-3/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Cuéntanos tu idea</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                  placeholder="Necesito fotos para mi nueva colección de..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all flex items-center justify-center gap-2 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Enviar Solicitud <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 text-left focus:outline-none"
              >
                <span className="font-semibold text-gray-900">{item.question}</span>
                <span className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                   <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 bg-white leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-10 h-10 flex items-center justify-center text-white bg-gray-800 rounded-lg">
           <SynapsesLogo className="w-8 h-8" />
        </div>
        <span className="font-bold text-3xl tracking-tight">Synapses</span>
      </div>
      <p className="text-gray-400 max-w-md mb-8">
        Revolucionando la fotografía de producto para marcas modernas. 
        Sin logística, sin esperas, solo resultados visuales de alto impacto.
      </p>
      <div className="flex gap-6 mb-12">
        <a href={`mailto:${CONTACT_EMAIL}`} className="p-3 bg-gray-800 rounded-full hover:bg-indigo-600 transition-colors" aria-label="Email"><Mail size={24} /></a>
      </div>
      
      <div className="w-full border-t border-gray-800 pt-8 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Synapses Creative. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Comparison />
        <Showcase />
        <Process />
        <div className="bg-indigo-600 py-16 px-4">
           <div className="max-w-4xl mx-auto text-center text-white">
             <h3 className="text-3xl font-bold mb-6">Beneficios Clave</h3>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div><p className="text-4xl font-bold mb-2">10x</p><p className="opacity-80">Más Rápido</p></div>
                <div><p className="text-4xl font-bold mb-2">-80%</p><p className="opacity-80">Costos</p></div>
                <div><p className="text-4xl font-bold mb-2">∞ </p><p className="opacity-80">Posibilidades</p></div>
                <div><p className="text-4xl font-bold mb-2">24h</p><p className="opacity-80">Entrega</p></div>
             </div>
           </div>
        </div>
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;