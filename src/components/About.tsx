import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import bridgeImage from '@/assets/bridge-construction.jpg';

const About = () => {
  const { language, t, dir } = useLanguage();

  return (
    <section id="about" className={`section-padding bg-background ${dir}`}>
      <div className="container-custom">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${
          dir === 'rtl' ? 'lg:grid-cols-2' : ''
        }`}>
          {/* Text Content */}
          <div className={`space-y-6 ${dir === 'rtl' ? 'lg:order-2' : ''}`}>
            <h2 className={`text-5xl font-black text-navy mb-8 animate-fade-in-up text-center ${
              language === 'ar' ? 'font-cairo font-black' : 'font-inter'
            }`}>
              {t('about_title')}
            </h2>
            <p className={`text-lg text-gray-700 leading-relaxed animate-fade-in-up ${
              language === 'ar' ? 'font-cairo font-medium' : 'font-inter'
            }`} style={{ animationDelay: '0.2s' }}>
              {t('about_content')}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-gradient-navy rounded-2xl shadow-medium animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl font-black text-gold mb-2">15+</div>
                <div className={`text-white font-medium ${language === 'ar' ? 'font-cairo font-medium' : 'font-inter'}`}>
                  {language === 'ar' ? 'سنة خبرة' : 'Years Experience'}
                </div>
              </div>
              <div className="text-center p-6 bg-gradient-gold rounded-2xl shadow-gold animate-scale-in" style={{ animationDelay: '0.6s' }}>
                <div className="text-3xl font-black text-navy mb-2">100+</div>
                <div className={`text-navy font-medium ${language === 'ar' ? 'font-cairo font-medium' : 'font-inter'}`}>
                  {language === 'ar' ? 'مشروع منجز' : 'Projects Completed'}
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`relative ${dir === 'rtl' ? 'lg:order-1' : ''}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-strong animate-fade-in-right">
              <img 
                src={bridgeImage} 
                alt="Bridge Construction" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/30 to-transparent"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-gold rounded-full opacity-20 animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;