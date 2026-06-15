import React from 'react';
import { motion } from 'framer-motion';

const SolutionSection = () => {
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
    <section id="solucion" className="py-20 bg-brand-darker relative">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-4xl mx-auto px-6 text-center space-y-4 mb-16"
      >
        <motion.span variants={itemVariants} className="text-xs font-extrabold uppercase tracking-widest text-brand-gold">Cómo trabajamos</motion.span>
        <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl font-outfit font-extrabold text-white">Mi Compromiso contigo: Transparencia Absoluta</motion.h2>
        <motion.p variants={itemVariants} className="text-neutral-400 max-w-xl mx-auto">No vendo promesas vacías. Creo herramientas sencillas construidas bajo tres principios inquebrantables.</motion.p>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {/* Pilar 1 */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -10 }}
          className="bg-brand-dark p-8 rounded-3xl shadow-xl border border-brand-violet/20 space-y-4 relative overflow-hidden group transition-colors hover:border-brand-gold/50"
        >
          <div className="w-12 h-12 bg-brand-darker text-brand-gold border border-brand-gold/30 rounded-2xl flex items-center justify-center font-bold text-xl font-outfit">1</div>
          <h3 className="text-lg font-bold font-outfit text-white">Aplicaciones Sencillas</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Diseños claros y fluidos para que tú y tu equipo trabajen rápido, sin funciones inservibles ni opciones confusas que solo ralentizan el flujo laboral diario.
          </p>
        </motion.div>

        {/* Pilar 2 */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -10 }}
          className="bg-brand-dark p-8 rounded-3xl shadow-xl border border-brand-violet/20 space-y-4 relative overflow-hidden group transition-colors hover:border-brand-gold/50"
        >
          <div className="w-12 h-12 bg-brand-darker text-brand-gold border border-brand-gold/30 rounded-2xl flex items-center justify-center font-bold text-xl font-outfit">2</div>
          <h3 className="text-lg font-bold font-outfit text-white">Cero Mensualidades Fijas</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Utilizo infraestructura en la nube optimizada. Configuro tu base de datos y alojamiento sin que tengas que abonar suscripciones recurrentes de mantenimiento básico.
          </p>
        </motion.div>

        {/* Pilar 3 */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -10 }}
          className="bg-brand-dark p-8 rounded-3xl shadow-xl border border-brand-violet/20 space-y-4 relative overflow-hidden group transition-colors hover:border-brand-gold/50"
        >
          <div className="w-12 h-12 bg-brand-darker text-brand-gold border border-brand-gold/30 rounded-2xl flex items-center justify-center font-bold text-xl font-outfit">3</div>
          <h3 className="text-lg font-bold font-outfit text-white">IA Práctica y Accesible</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">
            No es ciencia ficción: integramos procesos de IA útiles. Lectura automatizada de comprobantes de compras, pronóstico de ventas y reportes escritos al instante.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SolutionSection;
