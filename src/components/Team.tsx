import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Users, HardHat, Wrench, Zap } from 'lucide-react';

const Team = () => {
  const { language, t, dir } = useLanguage();

  const teamCategories = [
    {
      icon: HardHat,
      title: language === 'ar' ? 'المهندسون' : 'Engineers',
      count: '5',
      description: language === 'ar' ? 'مهندسون مدنيون وكهربائيون' : 'Civil & Electrical Engineers',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: language === 'ar' ? 'المراقبون والإداريون' : 'Supervisors & Admin',
      count: '6',
      description: language === 'ar' ? 'مراقبون ومحاسبون وإداريون' : 'Supervisors, Accountants & Admin',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Wrench,
      title: language === 'ar' ? 'الحرفيون والفنيون' : 'Craftsmen & Technicians',
      count: '25',
      description: language === 'ar' ? 'فنيون وحرفيون مهرة' : 'Skilled Technicians & Craftsmen',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Zap,
      title: language === 'ar' ? 'العمال المهرة' : 'Skilled Workers',
      count: '15',
      description: language === 'ar' ? 'عمال مدربون ومهرة' : 'Trained & Skilled Workers',
      color: 'from-purple-500 to-purple-600'
    },
  ];

  const skills = [
    { name: language === 'ar' ? 'السلامة المهنية' : 'Occupational Safety', percentage: 98 },
    { name: language === 'ar' ? 'الجودة والدقة' : 'Quality & Precision', percentage: 96 },
    { name: language === 'ar' ? 'الالتزام بالمواعيد' : 'Time Management', percentage: 95 },
    { name: language === 'ar' ? 'التطوير المستمر' : 'Continuous Development', percentage: 94 },
  ];

  return (
    <section id="team" className={`section-padding bg-background ${dir}`}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-black text-navy mb-6 animate-fade-in-up ${
            language === 'ar' ? 'font-arabic' : 'font-inter'
          }`}>
            {t('team_title')}
          </h2>
          <p className={`text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in-up ${
            language === 'ar' ? 'font-arabic' : 'font-inter'
          }`} style={{ animationDelay: '0.2s' }}>
            {t('team_stats')}
          </p>
        </div>

        {/* Team Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="text-center p-8 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="text-white" size={40} />
                </div>
                <div className="text-3xl font-black text-navy mb-2">{category.count}</div>
                <h3 className={`text-lg font-bold text-navy mb-2 ${
                  language === 'ar' ? 'font-arabic' : 'font-inter'
                }`}>
                  {category.title}
                </h3>
                <p className={`text-sm text-gray-600 ${
                  language === 'ar' ? 'font-arabic' : 'font-inter'
                }`}>
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Skills & Performance */}
        <div className="bg-gradient-navy rounded-3xl p-12">
          <h3 className={`text-3xl font-bold text-white text-center mb-12 ${
            language === 'ar' ? 'font-arabic' : 'font-inter'
          }`}>
            {language === 'ar' ? 'مؤشرات الأداء' : 'Performance Metrics'}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className={`flex justify-between items-center mb-2 ${
                  dir === 'rtl' ? 'flex-row-reverse' : ''
                }`}>
                  <span className={`text-white font-medium ${
                    language === 'ar' ? 'font-arabic' : 'font-inter'
                  }`}>
                    {skill.name}
                  </span>
                  <span className="text-gold font-bold">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-gold to-gold-light h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.percentage}%`,
                      animationDelay: `${1 + index * 0.2}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;