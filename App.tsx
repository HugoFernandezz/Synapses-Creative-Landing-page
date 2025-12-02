import React, { useState } from 'react';
import { ArrowRight, Check, X as XIcon, Camera, Upload, Wand2, Download, Instagram, Mail, Globe } from 'lucide-react';
import Navbar from './components/Navbar';
import ChatWidget from './components/ChatWidget';
import { HERO_COPY, COMPARISON_COPY, SHOWCASE_ITEMS, PROCESS_STEPS, PRICING_TIERS, FAQ_ITEMS } from './constants';

// --- Sub-components defined here for simplicity of the single-file requirement structure where possible, 
// though Navbar and ChatWidget are complex enough to be separate. 

const Hero = () => (
  <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
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
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="#contacto" className="px-8 py-4 rounded-full bg-gray-900 text-white font-bold text-lg hover:bg-gray-800 transition-all hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
          {HERO_COPY.cta} <ArrowRight size={20} />
        </a>
        <a href="#galeria" className="px-8 py-4 rounded-full bg-white text-gray-700 border border-gray-200 font-semibold text-lg hover:bg-gray-50 transition-all flex items-center justify-center">
          Ver Ejemplos
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
  <section className="py-20 bg-gray-50">
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

const Pricing = () => (
  <section id="precios" className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">Planes Simples</h2>
        <p className="text-gray-600 mt-4">Escala tus visuales a medida que escala tu marca.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {PRICING_TIERS.map((tier, idx) => (
          <div key={idx} className={`relative bg-white rounded-2xl p-8 border ${tier.recommended ? 'border-indigo-500 shadow-2xl scale-105 z-10' : 'border-gray-200 shadow-sm'} flex flex-col`}>
            {tier.recommended && (
              <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                Más Popular
              </span>
            )}
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
              {tier.price !== 'Consultar' && <span className="text-gray-500">/mes</span>}
            </div>
            <p className="text-gray-500 text-sm mb-8">{tier.description}</p>
            
            <ul className="space-y-4 mb-8 flex-1">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={16} className="text-teal-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className={`w-full py-3 rounded-xl font-bold transition-all ${
              tier.recommended 
                ? 'bg-gradient-to-r from-indigo-600 to-teal-500 text-white hover:shadow-lg hover:opacity-90' 
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            }`}>
              Elegir {tier.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
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
                <div className="p-6 pt-0 text-gray-600 bg-gray-50 border-t border-gray-100">
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
  <footer id="contacto" className="bg-gray-900 text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-gray-900">
               <Camera size={20} />
            </div>
            <span className="font-bold text-2xl tracking-tight">Synapses</span>
          </div>
          <p className="text-gray-400 max-w-sm mb-8">
            Revolucionando la fotografía de producto para marcas modernas. 
            Sin logística, sin esperas, solo resultados visuales de alto impacto.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition-colors"><Mail size={20} /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition-colors"><Globe size={20} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6 text-indigo-400">Servicio</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Generación de Imagen</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Modelos Virtuales</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Retoque AI</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Precios</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-indigo-400">Legal</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Términos de Servicio</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Licencias Comerciales</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
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
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;