import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-darker py-8 border-t border-brand-dark/50">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-2">
        <p className="text-neutral-500 text-xs font-semibold">
          © {new Date().getFullYear()} Alan. Todos los derechos reservados.
        </p>
        <p className="text-neutral-600 text-[10px]">
          Desarrollo de Software B2B & Automatización para Pymes
        </p>
      </div>
    </footer>
  );
};

export default Footer;
