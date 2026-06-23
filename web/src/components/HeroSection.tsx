import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MonitorSmartphone } from 'lucide-react';
import SurveyModal from './SurveyModal';

import keyboardImage from '../assets/hero/teclado.png';
import alanOpen from '../assets/hero/perfil-ojos-open.png';
import alanClose from '../assets/hero/perfil-ojos-close.png';
import laptopImage from '../assets/hero/laptop.png';
import tabletImage from '../assets/hero/tablet.png';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(alanOpen);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const blink = () => {
      setCurrentImage(alanClose); // cerrar ojos
      timeout = setTimeout(() => {
        setCurrentImage(alanOpen); // abrir ojos
        timeout = setTimeout(blink, 3000); // siguiente parpadeo
      }, 500); // mantener cerrados 0.5s
    };

    timeout = setTimeout(blink, 2000);

    return () => clearTimeout(timeout);
  }, []);

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

  const floatAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const floatAnimationTwo = {
    animate: {
      y: [0, 15, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative min-h-[100vh] w-full bg-black text-white flex items-center justify-center overflow-hidden border-b border-brand-dark/50">

      {/* Central Animated Image */}
      <div className="absolute z-[1] left-1/2 lg:left-[65%] -translate-x-1/2 md:top-auto bg-black rounded-[50%/45%] pointer-events-none mt-20 lg:mt-0">
        <img
          src={currentImage}
          alt="Alan avatar"
          className="w-[280px] h-[380px] md:w-[360px] md:h-[480px] object-cover rounded-[50%/45%] grayscale-[0.2] opacity-75 shadow-[0_0_150px_20px_rgba(255,255,255,0.1)] transition-all duration-200"
        />
      </div>

      {/* Floating Decorations */}
      <motion.img
        src={keyboardImage}
        alt="Teclado"
        className="absolute top-[-5%] lg:top-[-15%] right-[-10%] lg:right-[40%] w-[250px] lg:w-[400px] z-0 opacity-80 pointer-events-none"
        {...floatAnimationTwo}
      />
      <motion.img
        src={laptopImage}
        alt="Laptop"
        className="absolute bottom-[5%] lg:bottom-[10%] left-[-20%] lg:left-[-5%] w-[300px] lg:w-[450px] z-0 opacity-80 pointer-events-none -rotate-6"
        {...floatAnimation}
      />
      <motion.img
        src={tabletImage}
        alt="Tablet"
        className="absolute bottom-[40%] lg:bottom-[15%] right-[-10%] lg:right-[5%] w-[250px] lg:w-[350px] z-0 opacity-80 pointer-events-none"
        {...floatAnimation}
      />

      {/* Floating Text Overlay (Original Text, New Positioning) */}
      <div className="relative z-10 w-full h-full max-w-6xl mx-auto flex items-end lg:items-center pb-20 lg:pb-0 px-6 pt-96 lg:pt-0">
        <motion.div
          className="flex flex-col items-start gap-5 text-left max-w-2xl mt-48 md:mt-64 lg:mt-0 bg-black/60 lg:bg-transparent p-6 lg:p-0 rounded-3xl backdrop-blur-md lg:backdrop-blur-none border border-white/5 lg:border-none"
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

          <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl font-outfit font-extrabold text-white leading-tight tracking-tight [transform:perspective(300px)_translateZ(5px)] drop-shadow-2xl">
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

          <motion.p variants={itemVariants} className="text-sm md:text-lg text-neutral-300 leading-relaxed max-w-xl font-light">
            La ventaja de tener un software 100% adaptado a tu negocio es que tú dictas las reglas. Sin opciones genéricas que ralentizan a tu equipo, y con la posibilidad real de escalarlo y adaptarlo a medida que tu empresa crece.
          </motion.p>

          {/* Highlights Rápidos */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs md:text-sm text-neutral-300 pt-2 w-full">
            {[
              { text: "100% Adaptado a tus flujos diarios" },
              { text: "Evoluciona junto al crecimiento de tu empresa" },
              { text: "Control total y privacidad de tus datos" },
              { text: "Sin límites ni restricciones de terceros" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-brand-gold shrink-0" />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Botones de Acción directos */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4 w-full">
            <a 
              href="https://wa.me/5492223674061?text=Hola!%20Vengo%20de%20la%20web.%20Me%20gustaría%20consultar%20por%20un%20software%20a%20medida." 
              target="_blank" 
              rel="noreferrer" 
              className="relative overflow-hidden group/btn inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold px-6 py-4 rounded-3xl rounded-br-sm shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] w-full sm:w-auto"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              
              <img src="/whatsapp-svgrepo-com.svg" alt="WhatsApp" className="w-6 h-6 md:w-8 md:h-8 relative z-10" />
              <span className="relative z-10">Consultar ahora</span>
            </a>
            <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center justify-center gap-2 glossy-violet text-white font-semibold px-6 py-4 rounded-2xl shadow-sm transition-all hover:scale-105 w-full sm:w-auto">
              <MonitorSmartphone className="w-5 h-5" />
              Necesito mi app
            </button>
          </motion.div>
        </motion.div>
      </div>

      <SurveyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default HeroSection;
