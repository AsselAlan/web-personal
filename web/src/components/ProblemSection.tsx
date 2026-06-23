import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ShieldCheck, XCircle, CheckCircle2 } from 'lucide-react';

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section id="problema" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-violet/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10"
      >
        <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">¿Te sientes identificado?</span>
        </motion.div>

        <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-outfit font-extrabold text-white leading-tight">
          ¿Tu negocio sigue atrapado en <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">la gestión del pasado?</span>
        </motion.h2>

        <motion.p variants={itemVariants} className="text-neutral-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Sabemos lo desgastante que es llevar todo a pulmón. Despedite de los cuadernos perdidos, los Excel que se rompen y los sistemas enlatados que no se adaptan a vos.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 relative z-10"
      >
        {/* Tarjeta del Dolor */}
        <motion.div
          variants={itemVariants}
          className="group relative h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent rounded-[2rem] blur-xl transition-opacity opacity-50 group-hover:opacity-100" />
          <div className="relative h-full bg-neutral-900/60 backdrop-blur-md border border-red-900/30 rounded-[2rem] p-8 md:p-10 transition-all hover:border-red-500/40">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 shrink-0 bg-gradient-to-br from-red-900/50 to-red-950/50 rounded-2xl flex items-center justify-center text-red-400 border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.15)]">
                <AlertTriangle className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white font-outfit">Gestión Tradicional</h3>
            </div>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-red-950/50 p-1 rounded-full border border-red-900/50 shrink-0">
                  <XCircle className="w-4 h-4 text-red-400" />
                </div>
                <p className="text-neutral-400 leading-relaxed"><strong className="text-neutral-200 font-medium">Descontrol de stock:</strong> Planillas rotas y datos duplicados que hacen que el inventario nunca te cierre a fin de mes.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-red-950/50 p-1 rounded-full border border-red-900/50 shrink-0">
                  <XCircle className="w-4 h-4 text-red-400" />
                </div>
                <p className="text-neutral-400 leading-relaxed"><strong className="text-neutral-200 font-medium">Tiempo tirado a la basura:</strong> Fines de semana perdidos sacando cuentas, calculando márgenes y revisando el stock a mano.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-red-950/50 p-1 rounded-full border border-red-900/50 shrink-0">
                  <XCircle className="w-4 h-4 text-red-400" />
                </div>
                <p className="text-neutral-400 leading-relaxed"><strong className="text-neutral-200 font-medium">Sistemas ineficientes:</strong> Programas carísimos y recontra complicados que pagás todos los meses y usás a medias.</p>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Tarjeta de la Tranquilidad */}
        <motion.div
          variants={itemVariants}
          className="group relative h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-brand-violet/20 to-transparent rounded-[2rem] blur-xl transition-opacity opacity-50 group-hover:opacity-100" />
          <div className="relative h-full bg-brand-violet/5 backdrop-blur-md border border-brand-violet/30 rounded-[2rem] p-8 md:p-10 transition-all hover:border-brand-violet/50 overflow-hidden">

            {/* Glow effect inside card */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }}
              className="absolute -top-20 -right-20 w-64 h-64 bg-brand-violet rounded-full blur-[100px] pointer-events-none"
            />

            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-14 h-14 shrink-0 bg-gradient-to-br from-brand-violet to-purple-700 rounded-2xl flex items-center justify-center text-white shadow-[0_0_30px_rgba(139,92,246,0.3)] border border-white/10">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white font-outfit">Tu Negocio Digitalizado</h3>
            </div>

            <ul className="space-y-6 relative z-10">
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-brand-gold/10 p-1 rounded-full border border-brand-gold/20 shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                </div>
                <p className="text-neutral-300 leading-relaxed"><strong className="text-white font-medium">Hecho a tu medida:</strong> Un sistema diseñado específicamente para vos, para que tu equipo lo entienda de una, sin vueltas.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-brand-gold/10 p-1 rounded-full border border-brand-gold/20 shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                </div>
                <p className="text-neutral-300 leading-relaxed"><strong className="text-white font-medium">Control total estés donde estés:</strong> Toda la info de tu local 100% segura en la nube y a mano desde tu celu en tiempo real.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-brand-gold/10 p-1 rounded-full border border-brand-gold/20 shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                </div>
                <p className="text-neutral-300 leading-relaxed"><strong className="text-brand-gold font-bold">Ahorrá hasta 2 horas por día</strong> en tareas operativas y usá ese tiempo para enfocarte en vender más.</p>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProblemSection;
