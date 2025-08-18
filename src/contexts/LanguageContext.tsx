import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About Us",
    vision: "Vision & Mission",
    services: "Services", 
    projects: "Projects",
    clients: "Clients",
    team: "Team",
    structure: "Structure",
    contact: "Contact",
    
    // Company
    company_name: "KIFFA CONTRACTING EST.",
    tagline: "Together To Achieve Success",
    
    // Hero
    view_services: "View Services",
    contact_us: "Contact Us",
    
    // About
    about_title: "About Us",
    about_content: "Kiffa Contracting Est. is one of the companies operating in the contracting and trade sector with wide experience in electrical, mechanical, electronics, sanitary, and road works. Our expertise also includes general maintenance, renovation, rehabilitation, sidewalks, and general cleaning. We employ qualified and trained manpower to execute diverse projects.",
    
    // Vision
    vision_title: "Our Vision",
    vision_content: "We aspire to become the leading contracting establishment in Saudi Arabia, pioneering in construction development with the highest quality. Our goal is to grow into a global company, giving top priority to human resources, health, and safety, and to lead in managing and executing both private and public sector projects. We employ modern construction technologies, advanced project management software, and rely on our engineers who are the foundation of our success. We continuously qualify, encourage, and develop our staff to achieve quality, precision, and full adherence to safety standards.",
    
    // Mission
    mission_title: "Our Mission",
    mission_content: "Our mission is: continuous development and initiative; transparency and clarity; adherence to international standards; teamwork; maintaining our leadership among contracting companies; optimal use of resources and IT; adoption of modern technologies in construction; and commitment to innovation and continuous development.",
    
    // Services
    services_title: "Our Services",
    services_content: "Residential, government, and non-residential construction; prefabricated buildings; renovations; roads, streets, sidewalks; bridges & tunnels; water stations & sewage networks; demolition; site leveling; electrical & communication wiring; lighting systems; sanitary fixtures; HVAC installation & maintenance; finishing works; shades & canopies; government building cleaning; maintenance; insulation; painting; concrete; airports; dams; ports; railways; stormwater drainage.",
    
    // Projects
    projects_title: "Our Projects",
    project_1: "Saudi Electricity Company",
    project_2: "STC (Saudi Telecom Company)",
    project_3: "Ashar Resort (Royal Commission for AlUla) subcontract (construction & infrastructure works)",
    project_4: "Esnad Al-Mudun Company: Asphalt supply to King Abdulaziz Military City, Tabuk",
    project_5: "Arab Bank, Tabuk",
    
    // Clients
    clients_title: "Our Clients",
    clients_subtitle: "Trusted by leading organizations across Saudi Arabia.",
    
    // Team
    team_title: "Our Team",
    team_stats: "2 Civil Engineers, 2 Supervisors, 7 Plumbers, 8 Workers, 2 Steel Fixers, 1 Electrical Engineer, 2 Accountants, 2 AC Technicians, 4 Carpenters, 2 Masons, 2 Plasterers, 2 Painters, 1 Surveyor, 6 Electricians, 4 Equipment Operators, 2 Tilers",
    
    // Structure
    structure_title: "Organizational Structure",
    chairman: "Chairman of the Board",
    project_manager: "Project Manager",
    admin_manager: "Admin & Finance Manager",
    finance_dept: "Finance Dept",
    hr_dept: "HR Dept",
    audit_dept: "Internal Audit Dept",
    accounting_dept: "Accounting Dept",
    secretariat: "Secretariat",
    engineering_manager: "Engineering Manager",
    quality_dept: "Quality Dept",
    safety_dept: "Health & Safety Dept",
    supervision_dept: "Engineering Supervision Dept",
    design_office: "Design Office",
    
    // Contact
    contact_title: "Contact Us",
    website: "Website",
    email: "Email",
    phone: "Phone",
    name: "Name",
    phone_field: "Phone",
    message: "Message",
    send_message: "Send Message",
    
    // Footer
    footer_text: "© 2025 KIFFA CONTRACTING EST. All rights reserved.",
  },
  ar: {
    // Navigation
    home: "الصفحة الرئيسية",
    about: "من نحن",
    vision: "الرؤية والرسالة",
    services: "خدماتنا",
    projects: "أعمالنا",
    clients: "عملاؤنا",
    team: "الطاقم",
    structure: "الهيكل الإداري",
    contact: "تواصل معنا",
    
    // Company
    company_name: "مؤسسة كفة للمقاولات العامة",
    tagline: "معًا لتحقيق النجاح",
    
    // Hero
    view_services: "خدماتنا",
    contact_us: "تواصل معنا",
    
    // About
    about_title: "من نحن",
    about_content: "تعتبر مؤسسة كفة للمقاولات إحدى الشركات العاملة في قطاع المقاولات والتجارة بخبرة واسعة في الأعمال الكهربائية والميكانيكية والإلكترونية والصحية وأعمال الطرق والصيانة العامة والترميم والأرصفة والنظافة، وتمتلك كوادر مؤهلة ومدربة لتنفيذ المشاريع المختلفة.",
    
    // Vision
    vision_title: "رؤيتنا",
    vision_content: "نطمح أن نصبح المؤسسة الرائدة على مستوى قطاع المقاولات في المملكة العربية السعودية بشكل عام. والتي تقوم على تطوير قطاع الإنشاءات بأعلى جودة ممكنة. كما تسعى المؤسسة في أن تصبح شركة عالمية ورائدة تولي أكبر قدر من الاهتمام بالموارد البشرية والصحة والسلامة وتكون لها الريادة في إدارة وتنفيذ المشاريع سواء على مستوى القطاع الخاص أو العام باستخدام أحدث المعدات الإنشائية والتكنولوجيا الحديثة في التنفيذ وكذلك البرامج المتخصصة في إدارة المشاريع بإدارة وتنفيذ مهندسينا الذين يمثلون القاعدة الرئيسية لنجاحنا والتي تسعى دائما لتأهيلهم وتشجيعهم وتطوير أدائهم وخبراتهم ليتمكنوا من تحقيق أهداف المؤسسة والوصول إلى أعلى مستويات الجودة والدقة متوخين أعلى درجات الحرص في تطبيق منظومة الأمن والسلامة في التنفيذ.",
    
    // Mission
    mission_title: "رسالتنا",
    mission_content: "سعى المؤسسة أن تكون رسالتها هي: التطوير المستمر والتحلي بروح المبادرة؛ الالتزام بالشفافية والوضوح؛ العمل وفق المواصفات العالمية؛ العمل بروح الفريق الواحد؛ الحفاظ على مركزنا الريادي بين شركات المقاولات؛ الاستخدام الأمثل والفعال للموارد البشرية والمالية وتكنولوجيا المعلومات؛ الحرص على استخدام التكنولوجيا الحديثة في مجال الإنشاءات؛ والحرص على الابتكار والتطوير المستمر في قطاع المقاولات.",
    
    // Services
    services_title: "خدماتنا",
    services_content: "الإنشاءات السكنية والحكومية وغير السكنية؛ المباني الجاهزة؛ الترميمات؛ الطرق والشوارع والأرصفة؛ الجسور والأنفاق؛ محطات المياه وشبكات الصرف الصحي؛ الهدم؛ تسوية المواقع؛ تمديد الأسلاك الكهربائية والاتصالات؛ أنظمة الإضاءة؛ الأدوات الصحية؛ التكييف والتبريد؛ التشطيبات؛ المظلات؛ تنظيف المباني الحكومية؛ الصيانة؛ العزل؛ الدهانات؛ الخرسانة؛ المطارات؛ السدود؛ الموانئ؛ السكك الحديدية؛ تصريف السيول.",
    
    // Projects
    projects_title: "أعمالنا",
    project_1: "الشركة السعودية للكهرباء",
    project_2: "شركة الاتصالات السعودية (STC)",
    project_3: "منتجع عشار (الهيئة الملكية لمحافظة العلا) – أعمال إنشائية وبنية تحتية",
    project_4: "شركة إسناد المدن – توريد أسفلت لمدينة الملك عبدالعزيز العسكرية بتبوك",
    project_5: "البنك العربي – تبوك",
    
    // Clients
    clients_title: "عملاؤنا",
    clients_subtitle: "موضع ثقة أكبر الجهات في المملكة العربية السعودية.",
    
    // Team
    team_title: "فريق العمل",
    team_stats: "2 مهندسين مدنيين، 2 مراقبين، 7 سباكين، 8 عمال، 2 حدادين، 1 مهندس كهرباء، 2 محاسبين، 2 فنيي تكييف، 4 نجارين، 2 بنائين، 2 مليسين، 2 دهانين، 1 مساح، 6 فنيين كهرباء، 4 سائقي معدات، 2 مبلطين",
    
    // Structure
    structure_title: "الهيكل التنظيمي",
    chairman: "رئيس مجلس الإدارة",
    project_manager: "مدير المشاريع",
    admin_manager: "المدير الإداري والمالي",
    finance_dept: "الإدارة المالية",
    hr_dept: "إدارة الموارد البشرية",
    audit_dept: "قسم التدقيق الداخلي",
    accounting_dept: "قسم المحاسبة",
    secretariat: "السكرتارية",
    engineering_manager: "مدير الإدارة الهندسية",
    quality_dept: "قسم الجودة",
    safety_dept: "قسم الأمن والسلامة",
    supervision_dept: "قسم الإشراف الهندسي",
    design_office: "مكتب التصاميم",
    
    // Contact
    contact_title: "تواصل معنا",
    website: "الموقع",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    name: "الاسم",
    phone_field: "الهاتف",
    message: "الرسالة",
    send_message: "إرسال الرسالة",
    
    // Footer
    footer_text: "© 2025 مؤسسة كفة للمقاولات. جميع الحقوق محفوظة.",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Apply RTL/LTR to document
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  const value = {
    language,
    setLanguage,
    t,
    dir: language === 'ar' ? 'rtl' as const : 'ltr' as const,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};