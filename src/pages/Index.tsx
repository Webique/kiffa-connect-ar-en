import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Vision from '@/components/Vision';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Clients from '@/components/Clients';
import Team from '@/components/Team';
import Structure from '@/components/Structure';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Vision />
      <Services />
      <Projects />
      <Clients />
      <Team />
      <Structure />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
