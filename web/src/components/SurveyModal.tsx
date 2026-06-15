import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

interface SurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SurveyModal: React.FC<SurveyModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    resumen_empresa: '',
    software_ideal: '',
    contacto: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('respuestas_encuesta')
        .insert([formData]);

      if (error) {
        throw error;
      }
      
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setFormData({ nombre: '', resumen_empresa: '', software_ideal: '', contacto: '' });
      }, 3000);
      
    } catch (error) {
      console.error('Error enviando la encuesta:', error);
      alert('Hubo un error al enviar la encuesta. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-brand-dark border border-brand-violet/30 w-full max-w-lg rounded-3xl p-6 md:p-8 shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {isSuccess ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
            </div>
            <h3 className="text-2xl font-bold font-outfit text-white">¡Recibido!</h3>
            <p className="text-neutral-400">Gracias por compartir la información de tu negocio. Me pondré en contacto contigo muy pronto para agendar nuestra llamada.</p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold font-outfit text-white mb-2">Cuéntame sobre tu negocio</h3>
            <p className="text-sm text-neutral-400 mb-6">Completa este breve formulario y prepararé una propuesta a medida para ti.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-300">Tu nombre completo</label>
                <input 
                  type="text" 
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full bg-brand-darker border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-violet transition"
                  placeholder="Ej. Juan Pérez"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-300">Datos de contacto</label>
                <input 
                  type="text" 
                  name="contacto"
                  required
                  value={formData.contacto}
                  onChange={handleChange}
                  className="w-full bg-brand-darker border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-violet transition"
                  placeholder="LinkedIn, Teléfono o Email"
                />
              </div>
              
              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-300">¿De qué trata tu empresa/negocio?</label>
                <textarea 
                  name="resumen_empresa"
                  required
                  rows={3}
                  value={formData.resumen_empresa}
                  onChange={handleChange}
                  className="w-full bg-brand-darker border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-violet transition resize-none custom-scrollbar"
                  placeholder="Vendemos repuestos para maquinaria pesada y tenemos 3 sucursales..."
                ></textarea>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-300">¿Cómo imaginas tu software ideal?</label>
                <textarea 
                  name="software_ideal"
                  required
                  rows={3}
                  value={formData.software_ideal}
                  onChange={handleChange}
                  className="w-full bg-brand-darker border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-violet transition resize-none custom-scrollbar"
                  placeholder="Necesito centralizar el inventario y saber exactamente cuánto gano por producto..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full glossy-violet text-white font-bold py-3.5 rounded-xl shadow-lg transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : 'Enviar mi perfil'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default SurveyModal;
