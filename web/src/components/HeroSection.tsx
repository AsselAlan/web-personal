import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SurveyModal from './SurveyModal';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative pt-12 pb-20 md:py-24 overflow-hidden border-b border-brand-dark/50 bg-brand-darker">
      {/* Fondo animado dinámico */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 40, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 right-0 w-[500px] h-[500px] bg-brand-violet rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.08, 0.15, 0.08],
            x: [0, -50, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 -left-20 w-[600px] h-[600px] bg-brand-gold rounded-full blur-[150px]" 
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Copywriter e Intro de Valor */}
        <motion.div 
          className="lg:col-span-7 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-brand-violet/20 border border-brand-violet/30 text-brand-violet_glossy text-xs font-bold px-3.5 py-1.5 rounded-full backdrop-blur-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-violet opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-violet"></span>
            </span>
            Propuesta de valor para Pymes y Comercios
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-outfit font-extrabold text-white leading-tight tracking-tight">
            Transfiere cualquier flujo de tu empresa a un software propio con <span className="text-brand-gold relative inline-block">
              control total.
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
                className="absolute bottom-1 left-0 h-1 bg-brand-gold/60 -z-10"
              />
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-2xl">
            La ventaja de tener un software 100% adaptado a tu negocio es que tú dictas las reglas. Sin opciones genéricas que ralentizan a tu equipo, y con la posibilidad real de escalarlo y adaptarlo a medida que tu empresa crece.
          </motion.p>

          {/* Highlights Rápidos */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-sm text-neutral-300 pt-2">
            {[
              { text: "100% Adaptado a tus flujos diarios" },
              { text: "Evoluciona junto al crecimiento de tu empresa" },
              { text: "Control total y privacidad de tus datos" },
              { text: "Sin límites ni restricciones de sistemas de terceros" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-brand-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Botones de Acción directos */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="https://wa.me/5491123456789" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold px-6 py-4 rounded-3xl rounded-br-sm shadow-xl shadow-[#25D366]/20 transition-all hover:-translate-y-1">
              <img src="/whatsapp-svgrepo-com.svg" alt="WhatsApp" className="w-8 h-8" />
              Consultar ahora
            </a>
            <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center justify-center gap-2 glossy-violet text-white font-semibold px-6 py-4 rounded-2xl shadow-sm transition-all hover:-translate-y-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
              Necesito mi app
            </button>
          </motion.div>
        </motion.div>

        {/* Rostro y Credibilidad */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col items-center relative"
        >
          {/* Círculo decorativo rotativo detrás */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-brand-violet/30 border-dashed z-0 hidden md:block"
          />
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative w-64 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden bg-brand-dark shadow-2xl shadow-brand-gold/20 border-2 border-brand-gold/50 z-10"
          >
            <img src="/perfil.jpg" alt="Alan Assel" className="w-full h-full object-cover scale-110 object-medium" />
          </motion.div>
          <div className="mt-6 text-center z-10">
            <span className="font-outfit font-bold text-white text-xl block tracking-wide">Alan Assel</span>
            <span className="text-sm font-semibold text-brand-gold tracking-widest uppercase">Especialista en Automatización</span>
          </div>
        </motion.div>
      </div>

      <SurveyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default HeroSection;
