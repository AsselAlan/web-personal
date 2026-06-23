import React from 'react';
import { motion } from 'framer-motion';
import { Database, Network, PackageSearch, Users, LineChart, Cpu } from 'lucide-react';

const AppTypesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const appTypes = [
    {
      icon: <PackageSearch className="w-6 h-6" />,
      title: "Control de Inventario y Stock",
      description: "Sistemas para llevar el registro exacto de tu mercadería, alertas de stock mínimo y control de proveedores, todo sincronizado al instante."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Gestión de Clientes y Turnos",
      description: "CRMs personalizados para hacer seguimiento a tus ventas, organizar agendas y mantener un historial detallado de cada cliente."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Bases de Datos Seguras",
      description: "Arquitecturas robustas (SQL/NoSQL) alojadas en la nube para que tu información comercial esté siempre protegida y accesible desde cualquier lugar."
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Integración con APIs Externas",
      description: "Conectamos tu software con pasarelas de pago (MercadoPago, Stripe), servicios de facturación electrónica (AFIP) o sistemas de logística."
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Dashboards y Estadísticas",
      description: "Paneles de control visuales y en tiempo real para tomar decisiones inteligentes basadas en métricas clave y reportes automatizados."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Automatización de Tareas",
      description: "Eliminá el trabajo manual. Programamos robots lógicos para que envíen emails, actualicen planillas o generen alertas sin intervención humana."
    }
  ];

  return (
    <section id="tipos-apps" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-violet/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span variants={itemVariants} className="text-xs font-extrabold uppercase tracking-widest text-brand-gold">Posibilidades Infinitas</motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-outfit font-extrabold text-white">¿Qué tipo de software podemos crear?</motion.h2>
          <motion.p variants={itemVariants} className="text-neutral-400 text-lg">
            Si se puede imaginar, se puede programar. Construimos herramientas digitales que resuelven los problemas reales y específicos de tu negocio.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appTypes.map((type, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-neutral-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:border-brand-violet/30 transition-all group shadow-xl"
            >
              <div className="w-14 h-14 bg-brand-dark border border-white/10 rounded-2xl flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 group-hover:text-brand-violet_glossy transition-all duration-300 shadow-lg">
                {type.icon}
              </div>
              <h3 className="text-xl font-bold font-outfit text-white mb-3">{type.title}</h3>
              <p className="text-neutral-400 leading-relaxed text-sm">
                {type.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AppTypesSection;
