import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
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

    emailjs.sendForm(
      'service_zrz01ur',
      'template_vdi7knx',
      e.target,
      'dlAwOPnYR5GHUwZbT'
    )
    .then((result) => {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 3000);
    }, (error) => {
        console.log(error.text);
        setFormStatus('error');
    });
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen font-sans bg-slate-950 text-slate-300 selection:bg-teal-500/30">
      
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
        <div className="flex items-center justify-between px-6 mx-auto max-w-7xl">
          <a href="#" className="font-mono text-2xl font-bold tracking-tighter transition-colors text-slate-100 hover:text-teal-400">
            AN<span className="text-teal-400">.</span>DEV
          </a>

          {/* Desktop Navigation */}
          <div className="items-center hidden gap-8 md:flex">
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
              className="flex items-center gap-2 px-5 py-2 font-mono text-sm text-teal-400 transition-all border border-teal-500 rounded hover:bg-teal-500/10"
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
          <div className="flex flex-col gap-4 p-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-lg font-medium text-left text-slate-300 hover:text-teal-400"
              >
                {link.name}
              </button>
            ))}
            <a 
              href="/myresume.pdf" 
              className="px-5 py-3 mt-4 text-center text-teal-400 border rounded bg-teal-500/10 border-teal-500/50"
            >
              View Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative flex items-center min-h-screen px-6 pt-20 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute right-0 rounded-full top-20 w-96 h-96 bg-teal-500/10 blur-3xl -z-10 animate-pulse"></div>
        
        <div className="grid items-center w-full gap-12 mx-auto max-w-7xl md:grid-cols-2">
          <div>
            <p className="mb-4 ml-1 font-mono text-teal-400">Hi, my name is</p>
            <h5 className="mb-4 font-semibold tracking-tight text-1xl md:text-5xl text-slate-100">
              Aline Nzikwinkunda Software Engineering Student
            </h5>
            <h7 className="mb-6 text-2xl font-bold tracking-tight md:text-4xl text-slate-400">
              Focused on Web Development & Real-World Projects
            </h7>
            
            <br />  <br /> <br />
            <p className="max-w-lg mb-10 text-lg leading-relaxed text-slate-400">
              I build practical and user-friendly web applications using modern tools and clean design principles. 
                I’m currently sharpening my full-stack development skills as I work on real projects.
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
                className="flex items-center gap-2 px-8 py-4 font-medium transition-all rounded bg-slate-800 text-slate-100 hover:bg-slate-700"
              >
                <Github size={20} /> Github
              </a>
            </div>

            <div className="flex items-center gap-6 mt-12 text-slate-500">
              <a href="#" className="transition-all hover:text-teal-400 hover:-translate-y-1"><Linkedin size={24} /></a>
              <a href="#" className="transition-all hover:text-teal-400 hover:-translate-y-1"><Globe size={24} /></a>
              <a href="#" className="transition-all hover:text-teal-400 hover:-translate-y-1"><Mail size={24} /></a>
            </div>
          </div>
          
          {/* Hero Visual (Abstract Code Representation) */}
          <div className="relative hidden md:block">
            <div className="relative w-full p-6 overflow-hidden border rounded-lg h-96 bg-slate-900/50 border-slate-800 backdrop-blur-sm group">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-3 font-mono text-sm text-slate-400">
                <div className="flex gap-2">
                  <span className="text-purple-400">const</span>
                  <span className="text-blue-400">developer</span>
                  <span className="text-slate-300">=</span>
                  <span className="text-yellow-300">{`{`}</span>
                </div>
                <div className="pl-6">
                  <span className="text-slate-300">name:</span> <span className="text-green-400">'Aline Nzikwinkunda'</span>,
                </div>
                <div className="pl-6">
                  <span className="text-slate-300">skills:</span> <span className="text-yellow-300">['React', 'Node', 'JavaScript', 'PHP']</span>,
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
      <section id="about" className="px-6 py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-slate-100"><span className="mr-2 font-mono text-xl text-teal-400">01.</span>About Me</h2>
            <div className="flex-grow h-px max-w-xs bg-slate-700"></div>
          </div>
          
          <div className="grid gap-12 md:grid-cols-3">
            <div className="space-y-4 leading-relaxed md:col-span-2 text-slate-400">
              <p>
                Hello! My name is Aline, and I’m a Software Engineering student who enjoys building clean, functional and user-friendly web applications. My interest in development started when I began exploring how real systems work behind the scenes, especially in areas like authentication, data handling and interactive user interfaces.
              </p>
              <p>
                Over time I’ve worked on academic and personal projects that helped me grow as a developer, including building full web systems using HTML, CSS, JavaScript, PHP and MySQL. I’m currently focused on strengthening my frontend and backend skills as I prepare for internships in Rwanda’s top tech companies.
              </p>
              <p>
                When I’m not coding, I’m learning new technologies, improving my design skills, or exploring ideas for real-world software solutions I want to build in the future.
              </p>

            </div>
            <div className="relative group">
              <div className="absolute inset-0 transition-all duration-300 translate-x-3 translate-y-3 bg-teal-500 rounded group-hover:translate-x-1 group-hover:translate-y-1"></div>
              <div className="relative overflow-hidden transition-colors border-2 rounded bg-slate-800 aspect-square border-slate-700 group-hover:border-teal-400">
                 <div className="flex items-center justify-center w-full h-full bg-slate-800 text-slate-600">
                    <img src="/profile.jpg" alt="Aline Nzikwinkunda" className="font-mono" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-slate-100"><span className="mr-2 font-mono text-xl text-teal-400">02.</span>Skills & Technologies</h2>
            <div className="flex-grow h-px max-w-xs bg-slate-700"></div>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { icon: <Code2 size={24} />, name: "Frontend", skills: "React, Tailwind, HTML, CSS, JavaScript" },
              { icon: <Server size={24} />, name: "Backend", skills: "Node.js, Express, Python, Node.js, Express, PHP" },
              { icon: <Database size={24} />, name: "Database", skills: "PostgreSQL, MongoDB, MySQL" },
              { icon: <Smartphone size={24} />, name: "Mobile", skills: "React Native, Flutter (beginner)" },
              { icon: <Terminal size={24} />, name: "DevOps", skills: "Git, GitHub, Basic Docker" },
              { icon: <Layout size={24} />, name: "Design", skills: "Figma, UI Layouting" },
              { icon: <Cpu size={24} />, name: "System", skills: "Linux, Bash Scripting, Virtualization" },
              { icon: <Globe size={24} />, name: "Other", skills: "Problem Solving, Agile Basics" },
            ].map((skill, idx) => (
              <div key={idx} className="p-6 transition-transform duration-300 border rounded bg-slate-900 hover:-translate-y-2 border-slate-800 hover:border-teal-500/50 group">
                <div className="mb-4 text-teal-400 transition-transform group-hover:scale-110">{skill.icon}</div>
                <h3 className="mb-2 font-bold text-slate-200">{skill.name}</h3>
                <p className="text-sm text-slate-500">{skill.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-20 bg-slate-900/30">
  <div className="max-w-6xl mx-auto">
    <div className="flex items-center gap-4 mb-12">
      <h2 className="text-3xl font-bold text-slate-100">
        <span className="mr-2 font-mono text-xl text-teal-400">03.</span>Projects
      </h2>
      <div className="flex-grow h-px max-w-xs bg-slate-700"></div>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* ASAABE Hotel System */}
      <div className="flex flex-col overflow-hidden transition-all border rounded bg-slate-900 border-slate-800 hover:border-teal-500/50 group">
        <div className="relative h-48 overflow-hidden bg-slate-800">
          <div className="absolute inset-0 transition-all bg-teal-500/20 group-hover:bg-transparent"></div>
          <img 
            src="/ASAABE.png" 
            alt="ASAABE Hotel System" 
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col flex-grow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-teal-400"><FileText size={24} /></div>
            <div className="flex gap-4 text-slate-400">
              <a href="https://github.com/Aline-eng/ASAABE_HOTEL_SYSTEM" target="_blank" rel="noopener noreferrer">
                <Github size={20} className="cursor-pointer hover:text-teal-400" />
              </a>
              <a href="https://asaabe-hotel-system.vercel.app" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={20} className="cursor-pointer hover:text-teal-400" />
              </a>
            </div>
          </div>
          <h3 className="mb-2 text-xl font-bold transition-colors text-slate-200 group-hover:text-teal-400">
            ASAABE Hotel Management System
          </h3>
          <p className="flex-grow mb-4 text-sm text-slate-400">
            Full-stack hotel booking platform with user authentication, room management, real-time booking flow, and admin dashboard for payment approval and guest management.
          </p>
          <div className="flex flex-wrap gap-3 font-mono text-xs text-slate-500">
            <span>Next.js</span>
            <span>Django REST</span>
            <span>PostgreSQL</span>
            <span>Material-UI</span>
            <span>JWT Auth</span>
          </div>
        </div>
      </div>

      {/* Placeholder Project 2 */}
      <div className="flex flex-col overflow-hidden transition-all border rounded bg-slate-900 border-slate-800 hover:border-teal-500/50 group">
        <div className="relative h-48 overflow-hidden bg-slate-800">
          <div className="absolute inset-0 transition-all bg-teal-500/20 group-hover:bg-transparent"></div>
          <div className="flex items-center justify-center w-full h-full font-mono text-slate-700">Project Preview 2</div>
        </div>
        <div className="flex flex-col flex-grow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-teal-400"><FileText size={24} /></div>
            <div className="flex gap-4 text-slate-400">
              <Github size={20} className="cursor-pointer hover:text-teal-400" />
              <ExternalLink size={20} className="cursor-pointer hover:text-teal-400" />
            </div>
          </div>
          <h3 className="mb-2 text-xl font-bold transition-colors text-slate-200 group-hover:text-teal-400">Project Name 2</h3>
          <p className="flex-grow mb-4 text-sm text-slate-400">
            A concise description of the project goes here. Explain what it does and the problem it solves.
          </p>
          <div className="flex gap-3 font-mono text-xs text-slate-500">
            <span>React</span>
            <span>Node</span>
            <span>Tailwind</span>
          </div>
        </div>
      </div>

      {/* Placeholder Project 3 */}
      <div className="flex flex-col overflow-hidden transition-all border rounded bg-slate-900 border-slate-800 hover:border-teal-500/50 group">
        <div className="relative h-48 overflow-hidden bg-slate-800">
          <div className="absolute inset-0 transition-all bg-teal-500/20 group-hover:bg-transparent"></div>
          <div className="flex items-center justify-center w-full h-full font-mono text-slate-700">Project Preview 3</div>
        </div>
        <div className="flex flex-col flex-grow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-teal-400"><FileText size={24} /></div>
            <div className="flex gap-4 text-slate-400">
              <Github size={20} className="cursor-pointer hover:text-teal-400" />
              <ExternalLink size={20} className="cursor-pointer hover:text-teal-400" />
            </div>
          </div>
          <h3 className="mb-2 text-xl font-bold transition-colors text-slate-200 group-hover:text-teal-400">Project Name 3</h3>
          <p className="flex-grow mb-4 text-sm text-slate-400">
            A concise description of the project goes here. Explain what it does and the problem it solves.
          </p>
          <div className="flex gap-3 font-mono text-xs text-slate-500">
            <span>React</span>
            <span>Node</span>
            <span>Tailwind</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="relative px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="mb-4 font-mono text-teal-400">04. What's Next?</p>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl text-slate-100">Get In Touch</h2>
          <p className="mb-12 text-slate-400">
            Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <form onSubmit={handleSubmit} className="p-8 text-left border rounded-lg shadow-2xl bg-slate-900 border-slate-800">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm text-slate-400">Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full p-3 transition-colors border rounded bg-slate-950 border-slate-800 text-slate-200 focus:border-teal-500 focus:outline-none"
                  placeholder="Aline Nzikwinkunda"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-slate-400">Email</label>
                <input 
                  required
                  type="email" 
                  className="w-full p-3 transition-colors border rounded bg-slate-950 border-slate-800 text-slate-200 focus:border-teal-500 focus:outline-none"
                  placeholder="alinenzikwinkunda@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm text-slate-400">Message</label>
              <textarea 
                required
                rows="4"
                className="w-full p-3 transition-colors border rounded resize-none bg-slate-950 border-slate-800 text-slate-200 focus:border-teal-500 focus:outline-none"
                placeholder="Hello, I'd like to talk about..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button 
              disabled={formStatus === 'sending' || formStatus === 'success'}
              className="flex items-center justify-center w-full gap-2 py-4 font-bold text-teal-400 transition-all border border-teal-500 rounded bg-teal-500/10 hover:bg-teal-500 hover:text-slate-900"
            >
              {formStatus === 'idle' && <>Send Message <Send size={18} /></>}
              {formStatus === 'sending' && 'Sending...'}
              {formStatus === 'success' && 'Message Sent!'}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
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