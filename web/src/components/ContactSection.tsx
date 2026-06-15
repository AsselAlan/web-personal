import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
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
    <section id="contacto" className="py-20 bg-brand-dark relative overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-4xl mx-auto px-6 text-center space-y-4 mb-12"
      >
        <motion.span variants={itemVariants} className="text-xs font-extrabold uppercase tracking-widest text-brand-gold">Digitaliza tu negocio</motion.span>
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-outfit font-extrabold text-white">¿Charlamos 15 minutos para analizar tu negocio?</motion.h2>
        <motion.p variants={itemVariants} className="text-neutral-400 max-w-xl mx-auto">No te venderé ningún software genérico que no te sirva. Conversemos, estudiemos tus procesos y te daré un plan práctico para automatizarlos.</motion.p>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-3xl mx-auto px-6 bg-brand-darker rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden border border-brand-violet/20 hover:border-brand-violet/40 transition-colors"
      >
        
        {/* Fondo decorativo del contenedor */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-violet_glossy rounded-full blur-[90px]"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold font-outfit text-brand-violet_glossy">¿Qué analizaremos en la llamada?</h3>
            <ul className="space-y-3 text-xs text-neutral-300">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                Dónde estás perdiendo dinero por procesos lentos.
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                Cómo un software a medida reemplazaría tus planillas actuales.
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                Presupuesto cerrado de pago único si decides avanzar.
              </li>
            </ul>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-brand-dark p-6 rounded-2xl border border-neutral-800 space-y-4 text-center shadow-xl relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#25D366]/5 to-transparent pointer-events-none rounded-2xl"></div>
            <div className="w-16 h-16 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mx-auto mb-2">
              <img src="/whatsapp-svgrepo-com.svg" alt="WhatsApp" className="w-10 h-10" />
            </div>
            <h4 className="text-sm font-bold text-white mb-2">WhatsApp Directo</h4>
            <p className="text-[10px] text-neutral-400 mb-4">Escríbeme y coordinamos en el día.</p>
            <a href="https://wa.me/5491123456789" target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold px-4 py-3 rounded-2xl rounded-br-sm shadow-lg transition hover:scale-105">
              <img src="/whatsapp-svgrepo-com.svg" alt="WhatsApp" className="w-6 h-6" />
              Enviar Mensaje
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
