import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, Globe, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  const { language, t, dir } = useLanguage();

  const contactInfo = [
    {
      icon: Globe,
      label: t('website'),
      value: 'www.kiffa.com.sa',
      href: 'https://www.kiffa.com.sa'
    },
    {
      icon: Mail,
      label: t('email'),
      value: 'info@kiffa.com.sa',
      href: 'mailto:info@kiffa.com.sa'
    },
    {
      icon: Phone,
      label: t('phone'),
      value: '058 292 9579 / 050 804 3440',
      href: 'tel:+966582929579'
    },
    {
      icon: MapPin,
      label: language === 'ar' ? 'المملكة العربية السعودية' : 'Saudi Arabia',
      value: language === 'ar' ? 'تبوك، المملكة العربية السعودية' : 'Tabuk, Saudi Arabia',
      href: '#'
    }
  ];

  return (
    <section id="contact" className={`section-padding bg-background ${dir}`}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-black text-navy mb-6 animate-fade-in-up ${
            language === 'ar' ? 'font-cairo font-black' : 'font-inter'
          }`}>
            {t('contact_title')}
          </h2>
        </div>

        <div className={`grid lg:grid-cols-1 gap-16 ${
          dir === 'rtl' ? 'lg:grid-cols-1' : ''
        }`}>
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fade-in-left">
              <h3 className={`text-3xl font-bold text-navy mb-8 ${
                language === 'ar' ? 'font-cairo font-bold' : 'font-inter'
              }`}>
                {language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={info.label}
                      className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in-up"
                      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                    >
                      <div className="w-12 h-12 bg-gradient-navy rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="text-gold" size={24} />
                      </div>
                      <div>
                        <div className={`text-sm text-gray-500 font-medium ${
                          language === 'ar' ? 'font-cairo font-medium' : 'font-inter'
                        }`}>
                          {info.label}
                        </div>
                        <div className={`text-navy font-semibold ${
                          language === 'ar' ? 'font-cairo font-semibold' : 'font-inter'
                        }`}>
                          {info.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="animate-fade-in-left" style={{ animationDelay: '0.6s' }}>
              <h4 className={`text-xl font-bold text-navy mb-4 ${
                language === 'ar' ? 'font-cairo font-bold' : 'font-inter'
              }`}>
                {language === 'ar' ? 'تابعنا على' : 'Follow Us'}
              </h4>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center hover:bg-green-600 transition-colors duration-300 cursor-pointer">
                  <MessageSquare className="text-white" size={24} />
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                  <span className="text-white font-bold text-sm">in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;