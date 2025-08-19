import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { User, Users, FileText, Calculator, Shield, Briefcase, Building2 } from 'lucide-react';

const Structure = () => {
  const { language, t, dir } = useLanguage();

  const orgStructure = [
    {
      level: 1,
      title: t('chairman'),
      icon: User,
      bgColor: 'bg-gradient-to-br from-navy to-navy-dark',
      textColor: 'text-white',
      iconColor: 'text-gold',
      size: 'w-48 h-48'
    },
    {
      level: 2,
      items: [
        {
          title: t('project_manager'),
          icon: Briefcase,
          bgColor: 'bg-gradient-to-br from-blue-600 to-blue-700',
          textColor: 'text-white',
          iconColor: 'text-white',
          size: 'w-40 h-40'
        },
        {
          title: t('admin_manager'),
          icon: Users,
          bgColor: 'bg-gradient-to-br from-green-600 to-green-700',
          textColor: 'text-white',
          iconColor: 'text-white',
          size: 'w-40 h-40'
        },
        {
          title: t('engineering_manager'),
          icon: Building2,
          bgColor: 'bg-gradient-to-br from-purple-600 to-purple-700',
          textColor: 'text-white',
          iconColor: 'text-white',
          size: 'w-40 h-40'
        }
      ]
    },
    {
      level: 3,
      items: [
        // Project Manager Departments
        {
          title: t('project_planning'),
          icon: FileText,
          bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600',
          textColor: 'text-white',
          iconColor: 'text-white',
          size: 'w-32 h-32'
        },
        // Admin Manager Departments
        {
          title: t('finance_dept'),
          icon: Calculator,
          bgColor: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
          textColor: 'text-white',
          iconColor: 'text-white',
          size: 'w-32 h-32'
        },
        {
          title: t('hr_dept'),
          icon: Users,
          bgColor: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
          textColor: 'text-white',
          iconColor: 'text-white',
          size: 'w-32 h-32'
        },
        {
          title: t('audit_dept'),
          icon: Shield,
          bgColor: 'bg-gradient-to-br from-red-500 to-red-600',
          textColor: 'text-white',
          iconColor: 'text-white',
          size: 'w-32 h-32'
        },
        {
          title: t('accounting_dept'),
          icon: Calculator,
          bgColor: 'bg-gradient-to-br from-orange-500 to-orange-600',
          textColor: 'text-white',
          iconColor: 'text-white',
          size: 'w-32 h-32'
        },
        {
          title: t('secretariat'),
          icon: FileText,
          bgColor: 'bg-gradient-to-br from-pink-500 to-pink-600',
          textColor: 'text-white',
          iconColor: 'text-white',
          size: 'w-32 h-32'
        },
        // Engineering Manager Departments
        {
          title: t('quality_dept'),
          icon: Shield,
          bgColor: 'bg-gradient-to-br from-teal-500 to-teal-600',
          textColor: 'text-white',
          iconColor: 'text-white',
          size: 'w-32 h-32'
        },
        {
          title: t('safety_dept'),
          icon: Shield,
          bgColor: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
          textColor: 'text-navy',
          iconColor: 'text-navy',
          size: 'w-32 h-32'
        },
        {
          title: t('supervision_dept'),
          icon: Users,
          bgColor: 'bg-gradient-to-br from-violet-500 to-violet-600',
          textColor: 'text-white',
          iconColor: 'text-white',
          size: 'w-32 h-32'
        },
        {
          title: t('design_office'),
          icon: FileText,
          bgColor: 'bg-gradient-to-br from-rose-500 to-rose-600',
          textColor: 'text-white',
          iconColor: 'text-white',
          size: 'w-32 h-32'
        }
      ]
    }
  ];

  const renderLevel = (level: any, index: number) => {
    if (level.level === 1) {
      // Chairman Level
      const item = level;
      const Icon = item.icon;
      return (
        <div key={index} className="flex justify-center mb-16">
          <div className={`${item.size} ${item.bgColor} rounded-3xl shadow-2xl flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 animate-fade-in-up`}>
            <Icon className={`${item.iconColor} mb-4`} size={48} />
            <h3 className={`${item.textColor} font-bold text-xl text-center px-4 ${language === 'ar' ? 'font-cairo font-bold' : 'font-inter'}`}>
              {item.title}
            </h3>
          </div>
        </div>
      );
    } else if (level.level === 2) {
      // Managers Level
      return (
        <div key={index} className="mb-16">
          {/* Connecting Line */}
          <div className="flex justify-center mb-8">
            <div className="w-1 h-16 bg-gradient-to-b from-gray-300 to-transparent"></div>
          </div>
          
          {/* Managers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
            {level.items.map((item: any, itemIndex: number) => {
              const Icon = item.icon;
              return (
                <div key={itemIndex} className="flex justify-center">
                  <div className={`${item.size} ${item.bgColor} rounded-3xl shadow-xl flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 animate-fade-in-up`} style={{ animationDelay: `${itemIndex * 0.2}s` }}>
                    <Icon className={`${item.iconColor} mb-3`} size={40} />
                    <h3 className={`${item.textColor} font-bold text-lg text-center px-3 ${language === 'ar' ? 'font-cairo font-bold' : 'font-inter'}`}>
                      {item.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else if (level.level === 3) {
      // Departments Level
      return (
        <div key={index}>
          {/* Connecting Lines */}
          <div className="flex justify-center mb-8">
            <div className="w-1 h-16 bg-gradient-to-b from-gray-300 to-transparent"></div>
          </div>
          
          {/* Departments Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {level.items.map((item: any, itemIndex: number) => {
              const Icon = item.icon;
              return (
                <div key={itemIndex} className="flex justify-center">
                  <div className={`${item.size} ${item.bgColor} rounded-2xl shadow-lg flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 animate-fade-in-up`} style={{ animationDelay: `${itemIndex * 0.1}s` }}>
                    <Icon className={`${item.iconColor} mb-2`} size={32} />
                    <h4 className={`${item.textColor} font-semibold text-sm text-center px-2 ${language === 'ar' ? 'font-cairo font-semibold' : 'font-inter'}`}>
                      {item.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  };

  return (
    <section id="structure" className={`section-padding bg-gradient-to-br from-gray-50 to-white ${dir}`}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className={`text-5xl font-black text-navy mb-6 animate-fade-in-up ${
            language === 'ar' ? 'font-cairo font-black' : 'font-inter'
          }`}>
            {t('structure_title')}
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'ar' ? 'font-cairo font-medium' : 'font-inter'}`}>
            {language === 'ar' ? 'هيكل تنظيمي محكم يضمن أعلى مستويات الجودة والكفاءة' : 'Structured Organization Ensuring Highest Quality and Efficiency'}
          </p>
        </div>

        {/* Organizational Chart */}
        <div className="max-w-7xl mx-auto">
          {orgStructure.map((level, index) => renderLevel(level, index))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-6 bg-gradient-to-r from-navy to-navy-dark px-10 py-6 rounded-3xl shadow-2xl animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <Building2 className="text-white text-4xl" size={48} />
            <div className="text-left">
              <h3 className={`text-white font-bold text-xl mb-2 ${language === 'ar' ? 'font-cairo font-bold' : 'font-inter'}`}>
                {language === 'ar' ? 'رؤيتنا التنظيمية' : 'Our Organizational Vision'}
              </h3>
              <p className={`text-white/90 text-lg ${language === 'ar' ? 'font-cairo font-medium' : 'font-inter'}`}>
                {language === 'ar' ? 'بناء مستقبل مستدام من خلال الهيكل التنظيمي المتطور' : 'Building a Sustainable Future Through Advanced Organizational Structure'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Structure;