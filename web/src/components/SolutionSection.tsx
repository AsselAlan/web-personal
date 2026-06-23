import React from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Rocket, Zap } from 'lucide-react';

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
      {/* Banner Destacado de IA */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-5xl mx-auto px-6 mb-24"
      >
        <motion.div 
          variants={itemVariants}
          className="relative group rounded-[2rem] p-[2px] overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.15)]"
        >
          {/* Animated gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-violet via-purple-400 to-brand-gold opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative bg-neutral-900/90 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 border border-white/5">
            {/* AI Icon */}
            <div className="shrink-0 relative group-hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-brand-violet/50 blur-[40px] rounded-full" />
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-brand-violet to-purple-800 rounded-3xl flex items-center justify-center border border-white/20 shadow-inner relative z-10">
                <Bot className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                El Futuro de tu Negocio
              </div>
              <h3 className="text-3xl md:text-4xl font-outfit font-extrabold text-white leading-tight">
                Potenciá tu web con <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-brand-gold">Inteligencia Artificial</span>
              </h3>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                Automatizá cualquier tarea tediosa. Integramos motores de IA directamente en tu software a medida para procesar <strong>cálculos pesados, generar estadísticas en tiempo real y armar tus resúmenes mensuales</strong> al instante. Una herramienta que literalmente piensa por vos.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-4xl mx-auto px-6 text-center space-y-4 mb-16"
      >
        <motion.span variants={itemVariants} className="text-xs font-extrabold uppercase tracking-widest text-brand-gold">Nuestra Metodología</motion.span>
        <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl font-outfit font-extrabold text-white">Del Problema a la Solución en Tiempo Récord</motion.h2>
        <motion.p variants={itemVariants} className="text-neutral-400 max-w-xl mx-auto">Sabemos que el tiempo es dinero. Por eso, diseñamos un flujo de trabajo ágil y transparente para transformar tus operaciones en un sistema automatizado de alto rendimiento.</motion.p>
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
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-brand-darker text-brand-gold border border-brand-gold/30 rounded-2xl flex items-center justify-center font-bold text-xl font-outfit">1</div>
            <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
              <MessageSquare className="w-5 h-5" />
            </div>
          </div>
          <h3 className="text-lg font-bold font-outfit text-white">Consultoría Estratégica</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Nos metemos de lleno en tu operativa. Analizamos los cuellos de botella de tu negocio y diseñamos una arquitectura de software a medida. El sistema se adapta a vos, no al revés.
          </p>
        </motion.div>

        {/* Pilar 2 */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -10 }}
          className="bg-brand-dark p-8 rounded-3xl shadow-xl border border-brand-violet/20 space-y-4 relative overflow-hidden group transition-colors hover:border-brand-gold/50"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-brand-darker text-brand-gold border border-brand-gold/30 rounded-2xl flex items-center justify-center font-bold text-xl font-outfit">2</div>
            <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
              <Rocket className="w-5 h-5" />
            </div>
          </div>
          <h3 className="text-lg font-bold font-outfit text-white">Desarrollo Ágil y Despliegue</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Ejecutamos con precisión. Construimos tu plataforma con tecnología de punta para garantizar rendimiento impecable. Nos encargamos del 100% de la configuración e infraestructura.
          </p>
        </motion.div>

        {/* Pilar 3 */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -10 }}
          className="bg-brand-dark p-8 rounded-3xl shadow-xl border border-brand-violet/20 space-y-4 relative overflow-hidden group transition-colors hover:border-brand-gold/50"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-brand-darker text-brand-gold border border-brand-gold/30 rounded-2xl flex items-center justify-center font-bold text-xl font-outfit">3</div>
            <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
              <Zap className="w-5 h-5" />
            </div>
          </div>
          <h3 className="text-lg font-bold font-outfit text-white">Implementación Sin Fricción</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Cero curvas de aprendizaje interminables. Entregamos interfaces tan limpias e intuitivas que tu equipo las dominará el primer día, garantizando un retorno de inversión inmediato.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SolutionSection;
