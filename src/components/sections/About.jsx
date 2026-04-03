import { SectionHeader } from '../ui/SectionHeader';

const About = () => (
  <section id="about" className="px-6 py-20 bg-slate-50 dark:bg-slate-900/50">
    <div className="max-w-4xl mx-auto">
      <SectionHeader number="01" title="About Me" />

      <div className="grid gap-12 md:grid-cols-3">
        <div className="space-y-4 leading-relaxed md:col-span-2 text-slate-600 dark:text-slate-400">
          <p>
            Hello! My name is Aline, and I'm a Software Engineering student who enjoys building clean, functional and user-friendly web applications. My interest in development started when I began exploring how real systems work behind the scenes, especially in areas like authentication, data handling and interactive user interfaces.
          </p>
          <p>
            Over time I've worked on academic and personal projects that helped me grow as a developer, including building full web systems using HTML, CSS, JavaScript, PHP and MySQL. I'm currently focused on strengthening my frontend and backend skills as I prepare for internships in Rwanda's top tech companies.
          </p>
          <p>
            When I'm not coding, I'm learning new technologies, improving my design skills, or exploring ideas for real-world software solutions I want to build in the future.
          </p>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 transition-all duration-300 translate-x-3 translate-y-3 bg-teal-500 rounded group-hover:translate-x-1 group-hover:translate-y-1"></div>
          <div className="relative overflow-hidden transition-colors border-2 rounded bg-slate-200 dark:bg-slate-800 aspect-square border-slate-300 dark:border-slate-700 group-hover:border-teal-400">
            <img src="/profile.jpg" alt="Aline Nzikwinkunda" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
