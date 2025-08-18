import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { User, Users, FileText, Calculator, Shield, Briefcase } from 'lucide-react';

const Structure = () => {
  const { language, t, dir } = useLanguage();

  const orgChart = {
    chairman: {
      title: t('chairman'),
      icon: User,
      color: 'from-purple-600 to-purple-700',
      children: [
        {
          title: t('project_manager'),
          icon: Briefcase,
          color: 'from-blue-600 to-blue-700',
        },
        {
          title: t('admin_manager'),
          icon: Users,
          color: 'from-green-600 to-green-700',
          children: [
            { title: t('finance_dept'), icon: Calculator, color: 'from-emerald-500 to-emerald-600' },
            { title: t('hr_dept'), icon: Users, color: 'from-cyan-500 to-cyan-600' },
            { title: t('audit_dept'), icon: Shield, color: 'from-red-500 to-red-600' },
            { title: t('accounting_dept'), icon: Calculator, color: 'from-orange-500 to-orange-600' },
            { title: t('secretariat'), icon: FileText, color: 'from-pink-500 to-pink-600' },
          ]
        },
        {
          title: t('engineering_manager'),
          icon: Users,
          color: 'from-indigo-600 to-indigo-700',
          children: [
            { title: t('quality_dept'), icon: Shield, color: 'from-teal-500 to-teal-600' },
            { title: t('safety_dept'), icon: Shield, color: 'from-yellow-500 to-yellow-600' },
            { title: t('supervision_dept'), icon: Users, color: 'from-violet-500 to-violet-600' },
            { title: t('design_office'), icon: FileText, color: 'from-rose-500 to-rose-600' },
          ]
        }
      ]
    }
  };

  const renderOrgNode = (node: any, level: number = 0) => {
    const Icon = node.icon;
    const isTopLevel = level === 0;
    const isSecondLevel = level === 1;
    
    return (
      <div key={node.title} className={`text-center ${level > 0 ? 'mb-8' : 'mb-12'}`}>
        <div 
          className={`inline-block p-6 rounded-2xl shadow-medium animate-scale-in ${
            isTopLevel ? 'bg-gradient-to-br from-navy to-navy-light' :
            isSecondLevel ? 'bg-gradient-to-br from-gold to-gold-light' :
            `bg-gradient-to-br ${node.color}`
          }`}
          style={{ animationDelay: `${level * 0.2}s` }}
        >
          <Icon 
            className={`mx-auto mb-3 ${
              isTopLevel ? 'text-white' :
              isSecondLevel ? 'text-navy' :
              'text-white'
            }`} 
            size={isTopLevel ? 48 : isSecondLevel ? 40 : 32} 
          />
          <h3 className={`font-bold ${
            isTopLevel ? 'text-xl text-white' :
            isSecondLevel ? 'text-lg text-navy' :
            'text-sm text-white'
          } ${language === 'ar' ? 'font-arabic' : 'font-inter'}`}>
            {node.title}
          </h3>
        </div>
        
        {node.children && (
          <div className={`mt-8 ${
            isTopLevel ? 'grid lg:grid-cols-3 gap-8' :
            'grid md:grid-cols-2 lg:grid-cols-4 gap-4'
          }`}>
            {node.children.map((child: any) => renderOrgNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="structure" className={`section-padding bg-muted ${dir}`}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-black text-navy mb-6 animate-fade-in-up ${
            language === 'ar' ? 'font-arabic' : 'font-inter'
          }`}>
            {t('structure_title')}
          </h2>
        </div>

        {/* Organizational Chart */}
        <div className="max-w-6xl mx-auto">
          {renderOrgNode(orgChart.chairman)}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-navy px-8 py-4 rounded-2xl shadow-medium animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="text-3xl">🏢</div>
            <span className={`text-white font-semibold text-lg ${
              language === 'ar' ? 'font-arabic' : 'font-inter'
            }`}>
              {language === 'ar' ? 'هيكل تنظيمي محكم يضمن أعلى مستويات الجودة والكفاءة' : 'Structured Organization Ensuring Highest Quality and Efficiency'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Structure;