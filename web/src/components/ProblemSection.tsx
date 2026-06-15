import React from 'react';
import { motion } from 'framer-motion';

const ProblemSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="problema" className="py-20 bg-brand-dark relative overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-4xl mx-auto px-6 text-center space-y-4"
      >
        <motion.span variants={itemVariants} className="text-xs font-extrabold uppercase tracking-widest text-brand-gold">¿Te sientes identificado?</motion.span>
        <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl font-outfit font-extrabold text-white">¿Tu negocio sigue atrapado en la gestión del pasado?</motion.h2>
        <motion.p variants={itemVariants} className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
          Sé lo frustrante que es administrar un comercio utilizando cuadernos que se pierden, hojas de cálculo de Excel infinitas que fallan al primer descuido, o intentando adaptarte a sistemas genéricos que resultan caros e incomprensibles.
        </motion.p>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
      >
        {/* Tarjeta del Dolor */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="bg-neutral-900/50 border border-red-900/50 rounded-3xl p-8 space-y-4 shadow-xl transition-colors hover:border-red-500/50"
        >
          <div className="w-12 h-12 bg-red-950/50 rounded-2xl flex items-center justify-center text-red-500 border border-red-900/30">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
          </div>
          <h3 className="text-xl font-bold text-red-400 font-outfit">La Gestión Tradicional</h3>
          <ul className="space-y-3 text-neutral-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✕</span>
              <span>Exceles rotos y registros duplicados que desajustan el stock real.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✕</span>
              <span>Horas perdidas cada fin de semana calculando márgenes e inventario a mano.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✕</span>
              <span>Plataformas complicadas con cobros mensuales recurrentes que nunca amortizas.</span>
            </li>
          </ul>
        </motion.div>

        {/* Tarjeta de la Tranquilidad */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="bg-brand-violet/10 border border-brand-violet/30 rounded-3xl p-8 space-y-4 shadow-xl relative overflow-hidden transition-colors hover:border-brand-violet/60"
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-32 h-32 bg-brand-violet rounded-full blur-[80px]"
          />
          <div className="w-12 h-12 glossy-violet rounded-2xl flex items-center justify-center text-white relative z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <h3 className="text-xl font-bold text-brand-violet_glossy font-outfit relative z-10">La Solución Integrada</h3>
          <ul className="space-y-3 text-neutral-300 text-sm relative z-10">
            <li className="flex items-start gap-2">
              <span className="text-brand-gold font-bold">✓</span>
              <span>Una aplicación hecha 100% a medida, pensada para que cualquiera la entienda.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-gold font-bold">✓</span>
              <span>Toda la información del negocio segura en la nube y accesible desde tu celular.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-gold font-bold">✓</span>
              <span><strong className="text-white">Ahorro garantizado de hasta 2 horas diarias</strong> en tareas administrativas.</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProblemSection;
