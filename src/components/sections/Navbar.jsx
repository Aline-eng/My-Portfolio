import { FileText, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = ({ scrolled, activeSection, isMenuOpen, setIsMenuOpen, scrollToSection }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="flex items-center justify-between px-6 mx-auto max-w-7xl">
        <a href="#" className="font-mono text-2xl font-bold tracking-tighter transition-colors text-slate-900 dark:text-slate-100 hover:text-teal-500 dark:hover:text-teal-400">
          AN<span className="text-teal-500 dark:text-teal-400">.</span>DEV
        </a>

        <div className="items-center hidden gap-8 md:flex">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-colors hover:text-teal-500 dark:hover:text-teal-400 ${activeSection === link.id ? 'text-teal-500 dark:text-teal-400' : 'text-slate-600 dark:text-slate-400'}`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
          <a
            href="/Resume_Aline_NZIKWINKUNDA.pdf"
            target="_blank"
            className="flex items-center gap-2 px-5 py-2 font-mono text-sm text-teal-600 dark:text-teal-400 transition-all border border-teal-500 rounded hover:bg-teal-500/10"
          >
            <FileText size={16} /> Resume
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 transition-colors rounded text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 transition-colors rounded text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="text-slate-700 dark:text-slate-100 hover:text-teal-500 dark:hover:text-teal-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col gap-4 p-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-lg font-medium text-left text-slate-700 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400"
            >
              {link.name}
            </button>
          ))}
          <a
            href="/Resume_Aline_NZIKWINKUNDA.pdf"
            target="_blank"
            className="px-5 py-3 mt-4 text-center text-teal-600 dark:text-teal-400 border border-teal-500 rounded bg-teal-500/10"
          >
            View Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
