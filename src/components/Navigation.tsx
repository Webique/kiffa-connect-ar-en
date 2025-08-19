import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const { language, setLanguage, t, dir } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', href: '#hero' },
    { key: 'about', href: '#about' },
    { key: 'vision', href: '#vision' },
    { key: 'services', href: '#services' },
    { key: 'projects', href: '#projects' },
    { key: 'clients', href: '#clients' },
    { key: 'team', href: '#team' },
    { key: 'structure', href: '#structure' },
    { key: 'contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md shadow-medium ${dir}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className={`flex items-center ${dir === 'rtl' ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
            <img 
              src="/favicon.png" 
              alt="Kiffa Logo" 
              className="h-12 w-auto animate-glow"
            />
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center ${dir === 'rtl' ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className={`text-white hover:text-gold transition-colors duration-300 font-medium ${
                  language === 'ar' ? 'font-arabic' : 'font-inter'
                }`}
              >
                {t(item.key)}
              </button>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className={`flex items-center ${dir === 'rtl' ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            <div className="flex bg-white/10 rounded-lg p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 ${
                  language === 'en' 
                    ? 'bg-gold text-navy' 
                    : 'text-white hover:text-gold'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 ${
                  language === 'ar' 
                    ? 'bg-gold text-navy' 
                    : 'text-white hover:text-gold'
                }`}
              >
                AR
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white hover:text-gold transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-navy-dark rounded-lg mt-2 p-4 animate-fade-in-up">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left py-3 text-white hover:text-gold transition-colors duration-300 font-medium border-b border-white/10 last:border-b-0 ${
                  language === 'ar' ? 'font-arabic text-right' : 'font-inter'
                }`}
              >
                {t(item.key)}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;