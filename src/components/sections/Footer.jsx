import { Mail } from 'lucide-react';
import { Github, Linkedin } from '../ui/Icons';

const Footer = () => (
  <footer className="py-8 text-sm text-center bg-slate-100 dark:bg-slate-950 text-slate-500 dark:text-slate-500 border-t border-slate-200 dark:border-slate-800">
    <div className="flex justify-center gap-6 mb-4">
      <a href="https://github.com/Aline-eng/" target="_blank" rel="noreferrer" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors"><Github size={20} /></a>
      <a href="https://www.linkedin.com/in/aline-nzikwinkunda-52aa66272/" target="_blank" rel="noreferrer" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors"><Linkedin size={20} /></a>
      <a href="mailto:alinenzikwinkunda@gmail.com" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors"><Mail size={20} /></a>
    </div>
    <p>Designed & Built by Aline Nzikwinkunda</p>
  </footer>
);

export default Footer;
