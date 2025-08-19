import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Building2, 
  MapPin, 
  Zap, 
  Wrench, 
  Hammer, 
  PaintBucket,
  Shield,
  Truck,
  Construction,
  Building,
  Waves,
  Plane
} from 'lucide-react';

const Services = () => {
  const { language, t, dir } = useLanguage();

  const services = [
    { icon: Building2, title: language === 'ar' ? 'الإنشاءات السكنية' : 'Residential Construction', color: 'from-blue-500 to-blue-600' },
    { icon: Building, title: language === 'ar' ? 'المباني الحكومية' : 'Government Buildings', color: 'from-green-500 to-green-600' },
    { icon: MapPin, title: language === 'ar' ? 'الطرق والأرصفة' : 'Roads & Sidewalks', color: 'from-gray-500 to-gray-600' },
    { icon: Construction, title: language === 'ar' ? 'الجسور والأنفاق' : 'Bridges & Tunnels', color: 'from-orange-500 to-orange-600' },
    { icon: Waves, title: language === 'ar' ? 'محطات المياه' : 'Water Stations', color: 'from-cyan-500 to-cyan-600' },
    { icon: Zap, title: language === 'ar' ? 'الأعمال الكهربائية' : 'Electrical Works', color: 'from-yellow-500 to-yellow-600' },
    { icon: Wrench, title: language === 'ar' ? 'الصيانة العامة' : 'General Maintenance', color: 'from-red-500 to-red-600' },
    { icon: Hammer, title: language === 'ar' ? 'التشطيبات' : 'Finishing Works', color: 'from-purple-500 to-purple-600' },
    { icon: PaintBucket, title: language === 'ar' ? 'الدهانات' : 'Painting', color: 'from-pink-500 to-pink-600' },
    { icon: Shield, title: language === 'ar' ? 'العزل' : 'Insulation', color: 'from-indigo-500 to-indigo-600' },
    { icon: Truck, title: language === 'ar' ? 'النقل والمعدات' : 'Transport & Equipment', color: 'from-teal-500 to-teal-600' },
    { icon: Plane, title: language === 'ar' ? 'مشاريع المطارات' : 'Airport Projects', color: 'from-emerald-500 to-emerald-600' },
  ];

  return (
    <section id="services" className={`section-padding bg-muted ${dir}`}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-black text-navy mb-6 animate-fade-in-up ${
            language === 'ar' ? 'font-cairo font-black' : 'font-inter'
          }`}>
            {t('services_title')}
          </h2>
          <p className={`text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fade-in-up ${
            language === 'ar' ? 'font-cairo font-medium' : 'font-inter'
          }`} style={{ animationDelay: '0.2s' }}>
            {t('services_content')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group p-6 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-scale-in h-48 flex flex-col items-center justify-center text-center"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className={`text-lg font-bold text-navy group-hover:text-gold transition-colors duration-300 ${
                  language === 'ar' ? 'font-cairo font-bold' : 'font-inter'
                }`}>
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gradient-navy px-8 py-4 rounded-2xl shadow-medium animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <span className={`text-white font-semibold text-lg ${
              language === 'ar' ? 'font-cairo font-semibold' : 'font-inter'
            }`}>
              {language === 'ar' ? 'جودة عالية • مواعيد محددة • أسعار تنافسية' : 'High Quality • On Time • Competitive Prices'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;