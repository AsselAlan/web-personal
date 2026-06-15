import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-brand-darker/85 backdrop-blur-md border-b border-brand-dark/50 z-40 transition-all">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Identidad */}
        <a href="#" className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-12 w-auto" />
        </a>

        {/* Enlaces rápidos */}
        <nav className="hidden md:flex items-center gap-6 text-base font-semibold text-neutral-400">
          <a href="#problema" className="hover:text-brand-gold transition-colors">La Problemática</a>
          <a href="#solucion" className="hover:text-brand-gold transition-colors">Nuestra Solución</a>
          <a href="#caso" className="hover:text-brand-gold transition-colors">Casos de Éxito</a>
          <a href="#proceso" className="hover:text-brand-gold transition-colors">Metodología</a>
        </nav>

        {/* CTA Principal */}
        <div>
          <a 
            href="#contacto" 
            className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold_glow text-brand-darker font-extrabold text-sm md:text-base px-5 py-3 rounded-xl shadow-lg shadow-brand-gold/20 transition-all hover:scale-105"
          >
            ¡Quiero mi software!
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
