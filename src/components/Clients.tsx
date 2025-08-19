import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import clientsImage from '@/assets/clients.png';

const Clients = () => {
  const { language, t, dir } = useLanguage();

  return (
    <section id="clients" className={`section-padding bg-gradient-navy ${dir}`}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-black text-white mb-6 animate-fade-in-up ${
            language === 'ar' ? 'font-cairo font-black' : 'font-inter'
          }`}>
            {t('clients_title')}
          </h2>
          <p className={`text-xl text-gold max-w-2xl mx-auto animate-fade-in-up ${
            language === 'ar' ? 'font-cairo font-medium' : 'font-inter'
          }`} style={{ animationDelay: '0.2s' }}>
            {t('clients_subtitle')}
          </p>
        </div>

        {/* Clients Image */}
        <div className="flex justify-center mb-16">
          <div className="max-w-6xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <img 
              src={clientsImage}
              alt={language === 'ar' ? 'عملاؤنا وشركاؤنا' : 'Our Clients and Partners'}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gold/20 backdrop-blur-sm px-8 py-4 rounded-2xl animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="text-3xl">🤝</div>
            <span className={`text-white font-semibold text-lg ${
              language === 'ar' ? 'font-cairo font-semibold' : 'font-inter'
            }`}>
              {language === 'ar' ? 'شركاء نجاح موثوقون منذ أكثر من 15 عاماً' : 'Trusted Success Partners for Over 15 Years'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;