import { Mail, Globe } from 'lucide-react';
import { Github, Linkedin } from '../ui/Icons';
import { Button } from '../ui/Button';

const Hero = ({ scrollToSection }) => (
  <section id="home" className="relative flex items-center min-h-screen px-6 pt-20 overflow-hidden">
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
        
        <br /><br /><br />
        <p className="max-w-lg mb-10 text-lg leading-relaxed text-slate-400">
          I build practical and user-friendly web applications using modern tools and clean design principles. 
          I'm currently sharpening my full-stack development skills as I work on real projects.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Button onClick={() => scrollToSection('projects')}>
            Check out my work!
          </Button>
          <Button variant="secondary" href="https://github.com/Aline-eng/" className="flex items-center gap-2">
            <Github size={20} /> Github
          </Button>
        </div>

        <div className="flex items-center gap-6 mt-12 text-slate-500">
          <a href="https://www.linkedin.com/in/aline-nzikwinkunda-52aa66272/" className="transition-all hover:text-teal-400 hover:-translate-y-1"><Linkedin size={24} /></a>
          <a href="#" className="transition-all hover:text-teal-400 hover:-translate-y-1"><Globe size={24} /></a>
          <a href="mailto:alinenzikwinkunda@gmail.com" className="transition-all hover:text-teal-400 hover:-translate-y-1"><Mail size={24} /></a>
        </div>
      </div>
      
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
            <div className="pl-6">{`}`}</div>
            <div><span className="text-yellow-300">{`}`}</span>;</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
