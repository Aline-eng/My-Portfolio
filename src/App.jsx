import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ChevronUp } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';

import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

const PortfolioApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(totalScroll / windowHeight);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');

    emailjs.sendForm('service_zrz01ur', 'template_vdi7knx', e.target, 'dlAwOPnYR5GHUwZbT')
      .then(() => {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 3000);
      }, (error) => {
        console.log(error.text);
        setFormStatus('error');
      });
  };

  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-300 selection:bg-teal-500/30">
      <div className="fixed top-0 left-0 h-1 bg-teal-500 z-[60]" style={{ width: `${scrollProgress * 100}%` }} />

      <Navbar
        scrolled={scrolled}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact
        formData={formData}
        setFormData={setFormData}
        formStatus={formStatus}
        handleSubmit={handleSubmit}
      />
      <Footer />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 bg-teal-500 text-slate-900 p-3 rounded shadow-lg hover:-translate-y-1 transition-all duration-300 ${scrolled ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <PortfolioApp />
  </ThemeProvider>
);

export default App;
