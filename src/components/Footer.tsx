import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { language, t, dir } = useLanguage();

  return (
    <footer className={`bg-gradient-navy py-12 ${dir}`}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and Company */}
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/b5262de7-af56-427e-a8e2-545fcff46225.png" 
              alt="Kiffa Logo" 
              className="h-12 w-auto animate-glow"
            />
            <div className={`${language === 'ar' ? 'font-arabic' : 'font-inter'}`}>
              <div className="text-white font-bold text-lg">
                {t('company_name')}
              </div>
              <div className="text-gold text-sm">
                {t('tagline')}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className={`text-white/80 text-center ${
            language === 'ar' ? 'font-arabic' : 'font-inter'
          }`}>
            {t('footer_text')}
          </div>

          {/* Language Switcher */}
          <div className="flex bg-white/10 rounded-lg p-1">
            <button
              onClick={() => {}}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                language === 'en' 
                  ? 'bg-gold text-navy' 
                  : 'text-white hover:text-gold'
              }`}
            >
              EN
            </button>
            <span className="text-white/40 self-center">|</span>
            <button
              onClick={() => {}}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                language === 'ar' 
                  ? 'bg-gold text-navy' 
                  : 'text-white hover:text-gold'
              }`}
            >
              AR
            </button>
          </div>
        </div>
        
        {/* Bottom Border */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <div className={`text-white/60 text-sm ${
            language === 'ar' ? 'font-arabic' : 'font-inter'
          }`}>
            {language === 'ar' ? 'تم التطوير بأحدث التقنيات' : 'Built with Latest Technologies'} 
            <span className="text-gold mx-2">•</span>
            {language === 'ar' ? 'جودة عالمية' : 'International Quality'}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;