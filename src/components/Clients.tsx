import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Clients = () => {
  const { language, t, dir } = useLanguage();

  const clients = [
    {
      name: language === 'ar' ? 'الشركة السعودية للكهرباء' : 'Saudi Electricity Company',
      logo: '⚡',
      sector: language === 'ar' ? 'طاقة' : 'Energy'
    },
    {
      name: language === 'ar' ? 'شركة الاتصالات السعودية' : 'STC',
      logo: '📱',
      sector: language === 'ar' ? 'اتصالات' : 'Telecom'
    },
    {
      name: language === 'ar' ? 'الهيئة الملكية لمحافظة العلا' : 'Royal Commission for AlUla',
      logo: '🏛️',
      sector: language === 'ar' ? 'سياحة' : 'Tourism'
    },
    {
      name: language === 'ar' ? 'شركة إسناد المدن' : 'Esnad Al-Mudun',
      logo: '🏗️',
      sector: language === 'ar' ? 'إنشاءات' : 'Construction'
    },
    {
      name: language === 'ar' ? 'البنك العربي' : 'Arab Bank',
      logo: '🏦',
      sector: language === 'ar' ? 'مصرفي' : 'Banking'
    },
  ];

  return (
    <section id="clients" className={`section-padding bg-gradient-navy ${dir}`}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-black text-white mb-6 animate-fade-in-up ${
            language === 'ar' ? 'font-arabic' : 'font-inter'
          }`}>
            {t('clients_title')}
          </h2>
          <p className={`text-xl text-gold max-w-2xl mx-auto animate-fade-in-up ${
            language === 'ar' ? 'font-arabic' : 'font-inter'
          }`} style={{ animationDelay: '0.2s' }}>
            {t('clients_subtitle')}
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {client.logo}
                </div>
                <h3 className={`text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300 ${
                  language === 'ar' ? 'font-arabic' : 'font-inter'
                }`}>
                  {client.name}
                </h3>
                <span className={`text-gold/80 text-sm ${
                  language === 'ar' ? 'font-arabic' : 'font-inter'
                }`}>
                  {client.sector}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gold/20 backdrop-blur-sm px-8 py-4 rounded-2xl animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="text-3xl">🤝</div>
            <span className={`text-white font-semibold text-lg ${
              language === 'ar' ? 'font-arabic' : 'font-inter'
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