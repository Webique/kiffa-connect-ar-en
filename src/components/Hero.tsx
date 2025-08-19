import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-construction.jpg';

const Hero = () => {
  const { language, t, dir } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={`relative min-h-screen flex items-center justify-center overflow-hidden ${dir}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/70 to-navy-light/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in-up">
            <img 
              src="/favicon.png" 
              alt="Kiffa Logo" 
              className="h-20 w-auto animate-glow mb-8 mx-auto"
            />
          </div>

          {/* Company Name */}
          <h1 className={`text-4xl md:text-6xl lg:text-8xl font-black mb-6 animate-fade-in-up ${
            language === 'ar' ? 'font-arabic' : 'font-inter'
          }`} style={{ animationDelay: '0.2s' }}>
            <span className="text-white">
              {t('company_name')}
            </span>
          </h1>

          {/* Tagline */}
          <p className={`text-2xl lg:text-3xl text-gold font-semibold mb-12 animate-fade-in-up ${
            language === 'ar' ? 'font-arabic' : 'font-inter'
          }`} style={{ animationDelay: '0.4s' }}>
            {t('tagline')}
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up ${
            dir === 'rtl' ? 'sm:flex-row-reverse' : ''
          }`} style={{ animationDelay: '0.6s' }}>
            <Button
              onClick={() => scrollToSection('#services')}
              className="btn-gold text-lg px-8 py-4 min-w-[200px]"
            >
              {t('view_services')}
            </Button>
            <Button
              onClick={() => scrollToSection('#contact')}
              className="btn-outline text-lg px-8 py-4 min-w-[200px]"
            >
              {t('contact_us')}
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-1 h-16 bg-gradient-to-b from-gold to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;