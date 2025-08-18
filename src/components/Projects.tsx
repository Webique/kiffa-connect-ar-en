import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle } from 'lucide-react';

const Projects = () => {
  const { language, t, dir } = useLanguage();

  const projects = [
    {
      title: t('project_1'),
      category: language === 'ar' ? 'كهرباء' : 'Electrical',
      status: language === 'ar' ? 'مكتمل' : 'Completed'
    },
    {
      title: t('project_2'),
      category: language === 'ar' ? 'اتصالات' : 'Telecommunications',
      status: language === 'ar' ? 'مكتمل' : 'Completed'
    },
    {
      title: t('project_3'),
      category: language === 'ar' ? 'بنية تحتية' : 'Infrastructure',
      status: language === 'ar' ? 'جاري' : 'Ongoing'
    },
    {
      title: t('project_4'),
      category: language === 'ar' ? 'طرق' : 'Roads',
      status: language === 'ar' ? 'مكتمل' : 'Completed'
    },
    {
      title: t('project_5'),
      category: language === 'ar' ? 'مباني تجارية' : 'Commercial',
      status: language === 'ar' ? 'مكتمل' : 'Completed'
    },
  ];

  return (
    <section id="projects" className={`section-padding bg-background ${dir}`}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-black text-navy mb-6 animate-fade-in-up ${
            language === 'ar' ? 'font-arabic' : 'font-inter'
          }`}>
            {t('projects_title')}
          </h2>
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 border-l-4 border-gold animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                dir === 'rtl' ? 'md:flex-row-reverse' : ''
              }`}>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold text-navy mb-2 ${
                    language === 'ar' ? 'font-arabic' : 'font-inter'
                  }`}>
                    {project.title}
                  </h3>
                  <span className={`inline-block bg-gold/20 text-gold px-3 py-1 rounded-lg text-sm font-medium ${
                    language === 'ar' ? 'font-arabic' : 'font-inter'
                  }`}>
                    {project.category}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className={`text-green-600 font-medium ${
                    language === 'ar' ? 'font-arabic' : 'font-inter'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          {[
            { number: '50+', label: language === 'ar' ? 'مشروع مكتمل' : 'Projects Completed' },
            { number: '98%', label: language === 'ar' ? 'رضا العملاء' : 'Client Satisfaction' },
            { number: '15+', label: language === 'ar' ? 'سنة خبرة' : 'Years Experience' },
            { number: '24/7', label: language === 'ar' ? 'دعم متواصل' : 'Support Available' },
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-6 bg-gradient-navy rounded-2xl shadow-medium animate-scale-in"
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              <div className="text-4xl font-black text-gold mb-2">{stat.number}</div>
              <div className={`text-white font-medium ${
                language === 'ar' ? 'font-arabic' : 'font-inter'
              }`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;