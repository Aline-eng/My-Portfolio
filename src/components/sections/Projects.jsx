import { FileText, ExternalLink } from 'lucide-react';
import { Github } from '../ui/Icons';
import { SectionHeader } from '../ui/SectionHeader';

const projectsData = [
  {
    image: "/ASAABE.png",
    title: "ASAABE Hotel Management System",
    description: "Full-stack hotel booking platform with user authentication, room management, real-time booking flow, and admin dashboard for payment approval and guest management.",
    tech: ["Next.js", "Django REST", "PostgreSQL"],
    github: "https://github.com/Aline-eng/ASAABE_HOTEL_SYSTEM",
    live: "https://asaabe-hotel-system.vercel.app"
  },
  {
    image: "/ShopEasy.jpg",
    title: "ShopEasy E-Commerce Store",
    description: "Full-stack e-commerce platform with JWT authentication, order management, admin dashboard, and modern UI with dark mode support.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind"],
    github: "https://github.com/Aline-eng/E-commerce-Store",
    live: "https://e-commerce-store-rnf7.vercel.app/"
  },
  {
    image: "/U'mwizaRwanda.jpg",
    title: "U'mwiza Rwanda",
    description: "Comprehensive humanitarian management platform for NGO operations in Rwanda. Features staff and admin portals for child sponsorship management, health records tracking, education monitoring, and community analytics with role-based access control.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    github: "https://github.com/Aline-eng/U-mwiza-Rwanda",
    live: "https://u-mwiza-rwanda.vercel.app/"
  }
];

const ProjectCard = ({ image, title, description, tech, github, live }) => (
  <div className="flex flex-col overflow-hidden transition-all border rounded bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-teal-500/60 group shadow-sm dark:shadow-none hover:shadow-md">
    <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
      <div className="absolute inset-0 transition-all bg-teal-500/10 group-hover:bg-transparent"></div>
      <img src={image} alt={title} className="object-cover w-full h-full" />
    </div>
    <div className="flex flex-col flex-grow p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-teal-500 dark:text-teal-400"><FileText size={24} /></div>
        <div className="flex gap-4 text-slate-400 dark:text-slate-500">
          <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
            <Github size={20} />
          </a>
          <a href={live} target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
      <h3 className="mb-2 text-xl font-bold transition-colors text-slate-800 dark:text-slate-200 group-hover:text-teal-500 dark:group-hover:text-teal-400">
        {title}
      </h3>
      <p className="flex-grow mb-4 text-sm text-slate-600 dark:text-slate-400">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <span key={i} className="px-2 py-1 font-mono text-xs rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => (
  <section id="projects" className="px-6 py-20 bg-slate-50 dark:bg-slate-900/30">
    <div className="max-w-6xl mx-auto">
      <SectionHeader number="03" title="Projects" />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
