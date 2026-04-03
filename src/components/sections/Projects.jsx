import { useState } from 'react';
import { FileText, ExternalLink, X } from 'lucide-react';
import { Github } from '../ui/Icons';
import { SectionHeader } from '../ui/SectionHeader';

const projectsData = [
  {
    image: "/ASAABE.png",
    title: "ASAABE Hotel Management System",
    description: "Full-stack hotel booking platform with user authentication, room management, real-time booking flow, and admin dashboard for payment approval and guest management.",
    fullDescription: "ASAABE is a comprehensive hotel management system built to handle the full lifecycle of hotel operations. It features a guest-facing booking interface with room browsing, availability checking, and secure payment flow. The admin dashboard allows staff to manage room inventory, approve or reject bookings, track payments, and manage guest records. Authentication is handled with JWT tokens and role-based access control separates guest and admin capabilities.",
    tech: ["Next.js", "Django REST", "PostgreSQL"],
    category: "Full-Stack",
    github: "https://github.com/Aline-eng/ASAABE_HOTEL_SYSTEM",
    live: "https://asaabe-hotel-system.vercel.app"
  },
  {
    image: "/ShopEasy.jpg",
    title: "ShopEasy E-Commerce Store",
    description: "Full-stack e-commerce platform with JWT authentication, order management, admin dashboard, and modern UI with dark mode support.",
    fullDescription: "ShopEasy is a modern e-commerce platform that supports the full shopping experience from product browsing to checkout. It includes a product catalog with search and filter, a shopping cart, order tracking, and an admin panel for managing products and orders. JWT-based authentication secures user accounts and the admin area. The UI supports both dark and light modes and is fully responsive across devices.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind"],
    category: "Full-Stack",
    github: "https://github.com/Aline-eng/E-commerce-Store",
    live: "https://e-commerce-store-rnf7.vercel.app/"
  },
  {
    image: "/U'mwizaRwanda.jpg",
    title: "U'mwiza Rwanda",
    description: "Comprehensive humanitarian management platform for NGO operations in Rwanda with role-based access control.",
    fullDescription: "U'mwiza Rwanda is a humanitarian management platform built for NGO operations. It provides separate portals for staff and admins to manage child sponsorship programs, track health records, monitor education progress, and view community analytics. The system uses role-based access control to ensure data privacy and proper authorization. Built with Next.js and TypeScript on the frontend and Node.js with Prisma ORM on the backend.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    category: "Full-Stack",
    github: "https://github.com/Aline-eng/U-mwiza-Rwanda",
    live: "https://u-mwiza-rwanda.vercel.app/"
  },
  {
    image: "/ASAABE.png",
    title: "CareerCompass",
    description: "Web platform that helps students match their skills with internship requirements and receive a compatibility percentage.",
    fullDescription: "CareerCompass is a skill-matching platform designed to bridge the gap between students and internship opportunities. Students enter their skills and the system compares them against job requirements to generate a matching percentage. The platform helps students identify skill gaps and understand what they need to improve to qualify for specific roles. Built with a clean HTML/CSS/JavaScript frontend and a PHP/MySQL backend.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    category: "Web",
    github: "https://github.com/Aline-eng/",
    live: "#"
  },
  {
    image: "/ShopEasy.jpg",
    title: "Family Records Management",
    description: "Secure web system for registering, logging in, and managing personal family records with user authentication.",
    fullDescription: "A web-based family records management system that allows users to securely register, log in, and manage their personal family data. The system features user authentication with session management, private data access per user, and a clean interface for adding and viewing family records. Built using HTML, CSS, JavaScript for the frontend and PHP with MySQL for the backend.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    category: "Web",
    github: "https://github.com/Aline-eng/",
    live: "#"
  },
  {
    image: "/ASAABE.png",
    title: "Student Registration System",
    description: "Java OOP-based student registration system with department validation, age/marks validation, and structured class design.",
    fullDescription: "A Java-based student registration system developed as an academic OOP project. The system validates student data including department selection, age requirements, and marks thresholds before registering a student. It uses object-oriented principles including classes, inheritance, and encapsulation to structure the codebase. The system runs interactively via the console and provides clear feedback for invalid inputs.",
    tech: ["Java", "OOP"],
    category: "Backend",
    github: "https://github.com/Aline-eng/",
    live: "#"
  },
];

const categories = ["All", "Full-Stack", "Web", "Backend"];

const Modal = ({ project, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
    <div
      className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative h-56 overflow-hidden rounded-t-xl bg-slate-100 dark:bg-slate-800">
        <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
        >
          <X size={18} />
        </button>
      </div>

      <div className="p-8">
        <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-slate-100">{project.title}</h3>
        <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-400">{project.fullDescription}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span key={i} className="px-3 py-1 text-xs font-mono rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-teal-500 hover:text-teal-500 dark:hover:text-teal-400 transition-colors text-sm font-medium"
          >
            <Github size={16} /> View Code
          </a>
          {project.live !== '#' && (
            <a
              href={project.live} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded bg-teal-500 text-white hover:bg-teal-400 transition-colors text-sm font-medium"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

const ProjectCard = ({ project, onClick }) => (
  <div
    className="flex flex-col overflow-hidden transition-all border rounded-lg bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-teal-500/60 group shadow-sm hover:shadow-md cursor-pointer"
    onClick={() => onClick(project)}
  >
    <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
      <div className="absolute inset-0 transition-all bg-teal-500/10 group-hover:bg-transparent"></div>
      <img src={project.image} alt={project.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
      <span className="absolute top-3 right-3 px-2 py-1 text-xs font-mono rounded bg-black/50 text-teal-400">
        {project.category}
      </span>
    </div>
    <div className="flex flex-col flex-grow p-6">
      <div className="flex items-center justify-between mb-3">
        <div className="text-teal-500 dark:text-teal-400"><FileText size={22} /></div>
        <div className="flex gap-3 text-slate-400 dark:text-slate-500">
          <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
            <Github size={18} />
          </a>
          {project.live !== '#' && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
      <h3 className="mb-2 text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
        {project.title}
      </h3>
      <p className="flex-grow mb-4 text-sm text-slate-600 dark:text-slate-400 line-clamp-3">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.slice(0, 3).map((t, i) => (
          <span key={i} className="px-2 py-1 font-mono text-xs rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
            {t}
          </span>
        ))}
        {project.tech.length > 3 && (
          <span className="px-2 py-1 font-mono text-xs rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-500">
            +{project.tech.length - 3}
          </span>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = activeFilter === "All"
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="px-6 py-20 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader number="03" title="Projects" />

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-all ${
                activeFilter === cat
                  ? 'bg-teal-500 text-white border-teal-500'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-700 hover:border-teal-500 hover:text-teal-500 dark:hover:text-teal-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, idx) => (
            <ProjectCard key={idx} project={project} onClick={setSelectedProject} />
          ))}
        </div>
      </div>

      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;
