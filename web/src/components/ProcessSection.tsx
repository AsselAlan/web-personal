import React from 'react';
import { motion } from 'framer-motion';

const ProcessSection = () => {
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
    <section id="proceso" className="py-20 bg-brand-darker relative overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-4xl mx-auto px-6 text-center space-y-4 mb-16"
      >
        <motion.span variants={itemVariants} className="text-xs font-extrabold uppercase tracking-widest text-brand-gold">Paso a paso</motion.span>
        <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl font-outfit font-extrabold text-white">¿Cómo creamos tu aplicación ideal?</motion.h2>
        <motion.p variants={itemVariants} className="text-neutral-400 max-w-xl mx-auto">No necesitas saber de informática. He simplificado todo el trayecto en tres etapas claras libres de estrés.</motion.p>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative"
      >
        {/* Conexión visual decorativa entre pasos (Solo pantallas grandes) */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          className="hidden md:block absolute top-16 left-1/4 right-1/4 h-[1px] bg-neutral-800 z-0 origin-left"
        />

        {/* Paso 1 */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -10 }}
          className="bg-brand-dark p-8 rounded-3xl border border-brand-violet/20 space-y-4 relative z-10 transition-colors hover:border-brand-violet_glossy hover:shadow-[0_0_30px_rgba(110,86,207,0.15)]"
        >
          <div className="w-12 h-12 glossy-violet text-white font-extrabold text-lg rounded-2xl flex items-center justify-center font-outfit">
            01
          </div>
          <h3 className="text-lg font-bold font-outfit text-white">1. Diagnóstico de 15 min</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Agendamos una breve videollamada para estudiar cómo opera tu negocio y detectar en qué tareas diarias estás perdiendo tiempo o rentabilidad.
          </p>
          <span className="inline-block text-[11px] font-bold text-brand-darker bg-brand-gold px-2.5 py-1 rounded-lg uppercase tracking-wider font-sans">100% Gratis y sin compromiso</span>
        </motion.div>

        {/* Paso 2 */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -10 }}
          className="bg-brand-dark p-8 rounded-3xl border border-brand-violet/20 space-y-4 relative z-10 transition-colors hover:border-brand-violet_glossy hover:shadow-[0_0_30px_rgba(110,86,207,0.15)]"
        >
          <div className="w-12 h-12 bg-neutral-900 border border-neutral-700 text-white font-extrabold text-lg rounded-2xl flex items-center justify-center font-outfit">
            02
          </div>
          <h3 className="text-lg font-bold font-outfit text-white">2. Desarrollo Directo</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Construyo tu plataforma ajustada al 100% a tus lógicas comerciales reales. Sin opciones extrañas y lista para consultarla desde cualquier celular o notebook.
          </p>
        </motion.div>

        {/* Paso 3 */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -10 }}
          className="bg-brand-dark p-8 rounded-3xl border border-brand-violet/20 space-y-4 relative z-10 transition-colors hover:border-brand-violet_glossy hover:shadow-[0_0_30px_rgba(110,86,207,0.15)]"
        >
          <div className="w-12 h-12 bg-neutral-900 border border-neutral-700 text-white font-extrabold text-lg rounded-2xl flex items-center justify-center font-outfit">
            03
          </div>
          <h3 className="text-lg font-bold font-outfit text-white">3. Lanzamiento y Entrega</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Habilitamos el software en la nube bajo tu dominio propio. Recibes el producto final bajo un esquema de pago único, sin preocuparte por costos de licencias mensuales.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProcessSection;
