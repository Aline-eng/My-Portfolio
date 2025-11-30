import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  FileText, 
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  Menu, 
  X, 
  ChevronUp,
  ExternalLink,
  Send,
  Database,
  Layout,
  Server,
  Smartphone
} from 'lucide-react';


const Github = ({ size = 24, className, ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24, className, ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle');

  // --- 1. Handle Scroll Effects ---
  useEffect(() => {
    const handleScroll = () => {
      // Navbar background transparency toggle
      setScrolled(window.scrollY > 50);

      // Scroll Progress Bar
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));

      // Active Section Detection
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- 2. Navigation Helper ---
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // --- 3. Form Handling ---
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate email sending
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-teal-500/30">
      
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-teal-500 z-[60]" 
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Navigation Bar */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tighter text-slate-100 hover:text-teal-400 transition-colors">
            AN<span className="text-teal-400">.</span>DEV
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`text-sm font-medium transition-colors hover:text-teal-400 ${
                      activeSection === link.id ? 'text-teal-400' : 'text-slate-400'
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
            {/* Resume Button - Desktop */}
            <a 
              href="/myresume.pdf" 
              target="_blank"
              className="px-5 py-2 border border-teal-500 text-teal-400 rounded hover:bg-teal-500/10 transition-all text-sm font-mono flex items-center gap-2"
            >
              <FileText size={16} /> Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-100 hover:text-teal-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-lg font-medium text-slate-300 hover:text-teal-400"
              >
                {link.name}
              </button>
            ))}
            <a 
              href="/myresume.pdf" 
              className="mt-4 px-5 py-3 bg-teal-500/10 text-teal-400 text-center rounded border border-teal-500/50"
            >
              View Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 px-6 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-teal-400 font-mono mb-4 ml-1">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 tracking-tight">
              Aline Nzikwinkunda Developer.
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-6 tracking-tight">
              I am a passionate developer.
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
              I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-teal-500 text-slate-900 font-bold rounded hover:bg-teal-400 transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)]"
              >
                Check out my work!
              </button>
              <a 
                href="https://github.com/Aline-eng/" target="_blank" rel="noreferrer"
                className="px-8 py-4 bg-slate-800 text-slate-100 font-medium rounded hover:bg-slate-700 transition-all flex items-center gap-2"
              >
                <Github size={20} /> Github
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6 text-slate-500">
              <a href="#" className="hover:text-teal-400 hover:-translate-y-1 transition-all"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-teal-400 hover:-translate-y-1 transition-all"><Globe size={24} /></a>
              <a href="#" className="hover:text-teal-400 hover:-translate-y-1 transition-all"><Mail size={24} /></a>
            </div>
          </div>
          
          {/* Hero Visual (Abstract Code Representation) */}
          <div className="hidden md:block relative">
            <div className="w-full h-96 bg-slate-900/50 rounded-lg border border-slate-800 p-6 backdrop-blur-sm relative overflow-hidden group">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-3 font-mono text-sm text-slate-400">
                <div className="flex gap-2">
                  <span className="text-purple-400">const</span>
                  <span className="text-blue-400">developer</span>
                  <span className="text-slate-300">=</span>
                  <span className="text-yellow-300">{`{`}</span>
                </div>
                <div className="pl-6">
                  <span className="text-slate-300">name:</span> <span className="text-green-400">'Aline'</span>,
                </div>
                <div className="pl-6">
                  <span className="text-slate-300">skills:</span> <span className="text-yellow-300">['React', 'Node', 'JavaScript']</span>,
                </div>
                <div className="pl-6">
                  <span className="text-slate-300">hardWorker:</span> <span className="text-orange-400">true</span>,
                </div>
                <div className="pl-6">
                  <span className="text-slate-300">problemSolver:</span> <span className="text-orange-400">true</span>,
                </div>
                <div className="pl-6">
                  <span className="text-purple-400">hireable:</span> <span className="text-purple-400">function</span>() {`{`}
                </div>
                <div className="pl-12">
                  <span className="text-purple-400">return</span> <span className="text-orange-400">true</span>;
                </div>
                <div className="pl-6">
                  {`}`}
                </div>
                <div><span className="text-yellow-300">{`}`}</span>;</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-slate-100"><span className="text-teal-400 font-mono text-xl mr-2">01.</span>About Me</h2>
            <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 text-slate-400 leading-relaxed space-y-4">
              <p>
                Hello! My name is Alex and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS was pretty fun!
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio.
              </p>
              <p>
                When I'm not coding, I'm usually hanging out with my cat, reading a sci-fi novel, or playing video games.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-teal-500 rounded translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300"></div>
              <div className="relative bg-slate-800 rounded overflow-hidden aspect-square border-2 border-slate-700 group-hover:border-teal-400 transition-colors">
                 {/* Replace with your image */}
                 <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-600">
                    <span className="font-mono">User Image</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-slate-100"><span className="text-teal-400 font-mono text-xl mr-2">02.</span>Skills & Technologies</h2>
            <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Code2 size={24} />, name: "Frontend", skills: "React, Vue, Tailwind" },
              { icon: <Server size={24} />, name: "Backend", skills: "Node.js, Express, Python" },
              { icon: <Database size={24} />, name: "Database", skills: "PostgreSQL, MongoDB" },
              { icon: <Smartphone size={24} />, name: "Mobile", skills: "React Native, Flutter" },
              { icon: <Terminal size={24} />, name: "DevOps", skills: "Docker, AWS, Git" },
              { icon: <Layout size={24} />, name: "Design", skills: "Figma, Adobe XD" },
              { icon: <Cpu size={24} />, name: "System", skills: "Linux, Bash Scripting" },
              { icon: <Globe size={24} />, name: "Other", skills: "SEO, Analytics, Agile" },
            ].map((skill, idx) => (
              <div key={idx} className="bg-slate-900 p-6 rounded hover:-translate-y-2 transition-transform duration-300 border border-slate-800 hover:border-teal-500/50 group">
                <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform">{skill.icon}</div>
                <h3 className="text-slate-200 font-bold mb-2">{skill.name}</h3>
                <p className="text-slate-500 text-sm">{skill.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-slate-100"><span className="text-teal-400 font-mono text-xl mr-2">03.</span>Some Things I've Built</h2>
            <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-slate-900 rounded overflow-hidden border border-slate-800 hover:border-teal-500/50 transition-all group flex flex-col">
                <div className="h-48 bg-slate-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-teal-500/20 group-hover:bg-transparent transition-all"></div>
                  {/* Image Placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-slate-700 font-mono">Project Preview {item}</div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-teal-400"><FileText size={24} /></div>
                    <div className="flex gap-4 text-slate-400">
                      <Github size={20} className="hover:text-teal-400 cursor-pointer" />
                      <ExternalLink size={20} className="hover:text-teal-400 cursor-pointer" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-teal-400 transition-colors">Project Name {item}</h3>
                  <p className="text-slate-400 text-sm mb-4 flex-grow">
                    A concise description of the project goes here. Explain what it does and the problem it solves.
                  </p>
                  <div className="flex gap-3 text-xs font-mono text-slate-500">
                    <span>React</span>
                    <span>Node</span>
                    <span>Tailwind</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-teal-400 font-mono mb-4">04. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Get In Touch</h2>
          <p className="text-slate-400 mb-12">
            Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <form onSubmit={handleSubmit} className="text-left bg-slate-900 p-8 rounded-lg border border-slate-800 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-slate-400 text-sm mb-2">Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-slate-200 focus:border-teal-500 focus:outline-none transition-colors"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-2">Email</label>
                <input 
                  required
                  type="email" 
                  className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-slate-200 focus:border-teal-500 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-slate-400 text-sm mb-2">Message</label>
              <textarea 
                required
                rows="4"
                className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-slate-200 focus:border-teal-500 focus:outline-none transition-colors resize-none"
                placeholder="Hello, I'd like to talk about..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button 
              disabled={formStatus === 'sending' || formStatus === 'success'}
              className="w-full py-4 bg-teal-500/10 border border-teal-500 text-teal-400 font-bold rounded hover:bg-teal-500 hover:text-slate-900 transition-all flex items-center justify-center gap-2"
            >
              {formStatus === 'idle' && <>Send Message <Send size={18} /></>}
              {formStatus === 'sending' && 'Sending...'}
              {formStatus === 'success' && 'Message Sent!'}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm bg-slate-950">
        <div className="flex justify-center gap-6 mb-4">
          <Github size={20} />
          <Linkedin size={20} />
          <Mail size={20} />
        </div>
        <p className="hover:text-teal-400 transition-colors cursor-pointer">
          Designed & Built by Aline Developer
        </p>
      </footer>

      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 bg-teal-500 text-slate-900 p-3 rounded shadow-lg hover:-translate-y-1 transition-all duration-300 ${scrolled ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <ChevronUp size={24} />
      </button>

    </div>
  );
};

export default App;