import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

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
        className="max-w-6xl mx-auto px-6"
      >
        <div className="bg-brand-darker rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden border border-brand-violet/20">
          
          {/* Fondo decorativo del contenedor */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-32 -right-32 w-96 h-96 bg-brand-violet_glossy rounded-full blur-[130px] pointer-events-none"
          />

          <div className="relative z-10 flex flex-col space-y-8 md:space-y-10">
            
            {/* Encabezado a lo largo */}
            <div className="text-center md:text-left space-y-4">
              <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">Hagamos que suceda</span>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-outfit font-extrabold text-white leading-tight">
                ¿Charlamos 15 minutos sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">tu negocio?</span>
              </motion.h2>
            </div>

            {/* Párrafo y Botón a la par */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-2">
              <motion.p variants={itemVariants} className="text-neutral-300 max-w-2xl text-base md:text-lg leading-relaxed text-center md:text-left">
                Nada de venderte humo ni software enlatado que no vas a usar. Escribime, contame cómo trabajás hoy, y veamos juntos cómo la tecnología puede automatizar tus tareas y aumentar tu rentabilidad.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="shrink-0 w-full md:w-auto flex justify-center md:justify-end"
              >
                <motion.a 
                  href="https://wa.me/5492223674061?text=Hola!%20Vengo%20de%20la%20web.%20Quiero%20agendar%20una%20charla%20de%2015%20minutos%20sobre%20mi%20negocio." 
                  target="_blank" 
                  rel="noreferrer" 
                  className="relative inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold text-xl px-10 py-5 md:py-6 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.3)] transition-all hover:shadow-[0_0_40px_rgba(37,211,102,0.5)] overflow-hidden group/btn w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Shine effect on button hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                  
                  <div className="absolute inset-0 border-2 border-white/20 rounded-full group-hover/btn:border-white/40 transition-colors pointer-events-none"></div>

                  <img src="/whatsapp-svgrepo-com.svg" alt="WhatsApp" className="w-8 h-8 relative z-10" />
                  <span className="relative z-10">Escribinos Ahora</span>
                </motion.a>
              </motion.div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
