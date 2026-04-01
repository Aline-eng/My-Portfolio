import { Mail } from 'lucide-react';
import { Github, Linkedin } from '../ui/Icons';

const Footer = () => (
  <footer className="py-8 text-sm text-center text-slate-500 bg-slate-950">
    <div className="flex justify-center gap-6 mb-4">
      <Github size={20} />
      <Linkedin size={20} />
      <Mail size={20} />
    </div>
    <p className="transition-colors cursor-pointer hover:text-teal-400">
      Designed & Built by Aline Developer
    </p>
  </footer>
);

export default Footer;
