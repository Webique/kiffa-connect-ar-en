import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Eye } from 'lucide-react';

const Vision = () => {
  const { language, t, dir } = useLanguage();

  return (
    <section id="vision" className={`section-padding bg-gradient-navy ${dir}`}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center animate-scale-in">
                <Eye className="text-navy" size={32} />
              </div>
              <h2 className={`text-4xl font-black text-white ${
                language === 'ar' ? 'font-arabic' : 'font-inter'
              }`}>
                {t('vision_title')}
              </h2>
            </div>
            <p className={`text-lg text-white/90 leading-relaxed animate-fade-in-up ${
              language === 'ar' ? 'font-arabic' : 'font-inter'
            }`} style={{ animationDelay: '0.2s' }}>
              {t('vision_content')}
            </p>
          </div>

          {/* Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <Target className="text-navy" size={32} />
              </div>
              <h2 className={`text-4xl font-black text-white ${
                language === 'ar' ? 'font-arabic' : 'font-inter'
              }`}>
                {t('mission_title')}
              </h2>
            </div>
            <p className={`text-lg text-white/90 leading-relaxed animate-fade-in-up ${
              language === 'ar' ? 'font-arabic' : 'font-inter'
            }`} style={{ animationDelay: '0.5s' }}>
              {t('mission_content')}
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            { icon: '🏆', title: language === 'ar' ? 'الجودة' : 'Quality' },
            { icon: '🤝', title: language === 'ar' ? 'الثقة' : 'Trust' },
            { icon: '🔧', title: language === 'ar' ? 'الخبرة' : 'Expertise' },
          ].map((value, index) => (
            <div 
              key={value.title}
              className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${0.7 + index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className={`text-xl font-bold text-gold ${
                language === 'ar' ? 'font-arabic' : 'font-inter'
              }`}>
                {value.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;