import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ScanLine, PieChart } from 'lucide-react';

const CaseStudySection = () => {
  const [stock, setStock] = useState({
    harina: 45,
    manteca: 12,
    facturas: 120
  });
  const [consoleOutput, setConsoleOutput] = useState('Haz clic en uno de los botones para iniciar un análisis de Inteligencia Artificial en vivo...');

  const changeStock = (item: keyof typeof stock, amount: number) => {
    setStock(prev => ({
      ...prev,
      [item]: Math.max(0, prev[item] + amount)
    }));
  };

  const runReceiptScanner = () => {
    setConsoleOutput('Iniciando cámara... Escaneando ticket "Proveedor X".');
    setTimeout(() => {
      setConsoleOutput('Lectura IA: 5 Sacos de Harina detectados. Actualizando base de datos...');
      setTimeout(() => {
        setStock(prev => ({ ...prev, harina: prev.harina + 5 }));
        setConsoleOutput('Stock actualizado automáticamente con éxito.');
      }, 1000);
    }, 1500);
  };

  const runAIAudit = () => {
    setConsoleOutput('Recolectando transacciones del día... Ejecutando modelo predictivo...');
    setTimeout(() => {
      setConsoleOutput(`Reporte IA: Tienes ${stock.harina} sacos de harina. Sugerencia: Compra más manteca, el stock es bajo (${stock.manteca} cajas).`);
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section id="caso" className="py-20 bg-brand-dark overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          
          {/* Detalles del Caso de Éxito */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-gold">Mira mi trabajo en acción</span>
            <h2 className="text-2xl md:text-4xl font-outfit font-extrabold text-white leading-tight">
              Caso de Éxito: Gestión Inteligente de Panificadora
            </h2>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              Transformé un comercio de panadería familiar que controlaba sus lotes de harina y ventas en libretas manuscritas, en una plataforma centralizada en la nube con lectura de facturas integrada.
            </p>

            {/* Métricas del Caso */}
            <div className="p-6 bg-brand-darker rounded-2xl border border-brand-violet/20 space-y-4 shadow-lg hover:border-brand-violet/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="text-3xl font-extrabold font-outfit text-brand-gold shrink-0">
                  Reducción del 40%
                </div>
                <div className="text-xs text-neutral-400 font-medium leading-snug">
                  de tiempo en inventarios
                </div>
              </div>
              <div className="h-px bg-neutral-800"></div>
              <div className="text-xs text-neutral-400 flex items-center gap-1.5">
                <span className="inline-block w-2.5 h-2.5 bg-brand-violet_glossy rounded-full animate-pulse"></span>
                <span>Sistema actualizable en tiempo real desde celular o laptop.</span>
              </div>
            </div>
          </motion.div>

          {/* INTERACTIVO: SIMULADOR DE APLICACIÓN (MOCKUP INTERACTIVO) */}
          <motion.div variants={rightItemVariants} className="lg:col-span-7 bg-brand-darker rounded-3xl p-1 shadow-2xl overflow-hidden border border-brand-violet/30 relative hover:shadow-brand-violet/10 transition-shadow">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/10 to-transparent pointer-events-none"></div>
            
            {/* Barra Superior del Sistema Panadería */}
            <div className="bg-neutral-950 px-4 py-3 border-b border-neutral-800 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                <span className="text-[10px] text-neutral-400 font-mono ml-2">AppPanaderia v2.1 // Panel Directo</span>
              </div>
              <span className="text-[10px] bg-brand-violet/20 text-brand-violet_glossy border border-brand-violet/30 px-2 py-0.5 rounded font-mono">Simulador Online</span>
            </div>

            {/* Dashboard de la Demo */}
            <div className="p-6 space-y-6 text-neutral-300 relative z-10">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Control de Inventario y Ventas</h4>
                  <p className="text-[11px] text-neutral-500">Prueba interactuando con los botones de abajo:</p>
                </div>
                <span className="text-xs font-semibold bg-brand-gold/10 text-brand-gold border border-brand-gold/20 px-2.5 py-1 rounded-full">Panificadora "El Sol"</span>
              </div>

              {/* Grid de Stock de Productos */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <motion.div whileHover={{ scale: 1.02 }} className="bg-neutral-900/80 p-4 rounded-xl border border-neutral-800">
                  <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider block mb-1">Sacos de Harina</span>
                  <div className="flex items-center justify-between mt-1">
                    <motion.span key={stock.harina} initial={{ scale: 1.5, color: '#fcd34d' }} animate={{ scale: 1, color: '#ffffff' }} className="text-2xl font-bold font-outfit">{stock.harina}</motion.span>
                    <div className="flex gap-1">
                      <button onClick={() => changeStock('harina', -1)} className="w-6 h-6 bg-neutral-800 hover:bg-neutral-700 text-white rounded flex items-center justify-center font-bold text-xs transition">-</button>
                      <button onClick={() => changeStock('harina', 1)} className="w-6 h-6 bg-brand-gold hover:bg-brand-gold_glow text-brand-darker rounded flex items-center justify-center font-bold text-xs transition">+</button>
                    </div>
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="bg-neutral-900/80 p-4 rounded-xl border border-neutral-800">
                  <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider block mb-1">Cajas de Manteca</span>
                  <div className="flex items-center justify-between mt-1">
                    <motion.span key={stock.manteca} initial={{ scale: 1.5, color: '#fcd34d' }} animate={{ scale: 1, color: '#ffffff' }} className="text-2xl font-bold font-outfit">{stock.manteca}</motion.span>
                    <div className="flex gap-1">
                      <button onClick={() => changeStock('manteca', -1)} className="w-6 h-6 bg-neutral-800 hover:bg-neutral-700 text-white rounded flex items-center justify-center font-bold text-xs transition">-</button>
                      <button onClick={() => changeStock('manteca', 1)} className="w-6 h-6 bg-brand-gold hover:bg-brand-gold_glow text-brand-darker rounded flex items-center justify-center font-bold text-xs transition">+</button>
                    </div>
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="bg-neutral-900/80 p-4 rounded-xl border border-neutral-800">
                  <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider block mb-1">Docenas Facturas</span>
                  <div className="flex items-center justify-between mt-1">
                    <motion.span key={stock.facturas} initial={{ scale: 1.5, color: '#fcd34d' }} animate={{ scale: 1, color: '#ffffff' }} className="text-2xl font-bold font-outfit">{stock.facturas}</motion.span>
                    <div className="flex gap-1">
                      <button onClick={() => changeStock('facturas', -1)} className="w-6 h-6 bg-neutral-800 hover:bg-neutral-700 text-white rounded flex items-center justify-center font-bold text-xs transition">-</button>
                      <button onClick={() => changeStock('facturas', 1)} className="w-6 h-6 bg-brand-gold hover:bg-brand-gold_glow text-brand-darker rounded flex items-center justify-center font-bold text-xs transition">+</button>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Acciones Especiales de Inteligencia Artificial (IA) */}
              <div className="bg-neutral-950 p-4 rounded-2xl border border-brand-violet/30 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-violet_glossy animate-pulse"></div>
                    <span className="text-xs font-bold font-outfit text-brand-violet_glossy tracking-wider uppercase">Módulos Inteligentes de IA</span>
                  </div>
                  <span className="text-[10px] text-neutral-500">Impulsado por Gemini</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Botón Lector IA */}
                  <motion.button whileTap={{ scale: 0.95 }} onClick={runReceiptScanner} className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 p-3 rounded-xl text-left transition flex items-center gap-3 group">
                    <div className="w-8 h-8 bg-brand-violet/20 text-brand-violet_glossy rounded-lg flex items-center justify-center shrink-0">
                      <ScanLine className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">Escanear Ticket Proveedor</span>
                      <span className="text-[9px] text-neutral-400 block">IA lee el recibo y carga el stock</span>
                    </div>
                  </motion.button>

                  {/* Botón Analista Financiero */}
                  <motion.button whileTap={{ scale: 0.95 }} onClick={runAIAudit} className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 p-3 rounded-xl text-left transition flex items-center gap-3 group">
                    <div className="w-8 h-8 bg-brand-gold/10 text-brand-gold rounded-lg flex items-center justify-center shrink-0">
                      <PieChart className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">Generar Reporte del Día</span>
                      <span className="text-[9px] text-neutral-400 block">IA resume las finanzas al instante</span>
                    </div>
                  </motion.button>
                </div>

                {/* Consola de Salida del Simulador IA */}
                <div className="bg-neutral-950 rounded-xl p-3 border border-neutral-800 font-mono text-[10px] space-y-1.5 min-h-[70px]">
                  <span className="text-neutral-500">// Consola de salida de Inteligencia Artificial:</span>
                  <motion.div 
                    key={consoleOutput}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-brand-violet_glossy leading-relaxed"
                  >
                    {consoleOutput}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudySection;
