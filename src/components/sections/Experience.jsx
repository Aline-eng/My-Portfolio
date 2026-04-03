import { SectionHeader } from '../ui/SectionHeader';
import { Briefcase, GraduationCap, Code2 } from 'lucide-react';

const experiences = [
  {
    icon: <GraduationCap size={20} />,
    role: "Software Engineering Student",
    company: "Adventist University of Central Africa",
    period: "June 2023 – Present",
    description: "Studying Software Engineering with a strong focus on backend development and full-stack web development. Worked on multiple academic and real-world style projects using Java, JavaScript, MySQL, and web technologies. Main goal is to build practical systems that solve real problems and prepare for a professional software development career.",
    tags: ["Java", "JavaScript", "MySQL", "Web Dev"]
  },
  {
    icon: <Briefcase size={20} />,
    role: "Full-Stack Web Developer – Student Project",
    company: "CareerCompass: Connecting Student Potential with Opportunity",
    period: "March 2026 – Present",
    description: "Designed and developed a web-based platform that helps students understand how well their skills match internship requirements. The system allows users to enter their skills, compare them with job requirements, and receive a matching percentage. Developed the frontend using HTML, CSS, and JavaScript and designed the backend structure and database logic for the matching system.",
    tags: ["HTML", "CSS", "JavaScript", "MySQL"]
  },
  {
    icon: <Code2 size={20} />,
    role: "Backend Developer – Student Project",
    company: "AI Mental Health Companion (SafeMind)",
    period: "February 2026 – March 2026",
    description: "Worked on the backend logic and system structure of an AI-based mental health application designed to support students. Contributed to the database design, mood tracking system, and user interaction logic. Also participated in designing the system architecture, use-case diagrams, and core backend features.",
    tags: ["Backend", "Database Design", "System Architecture"]
  },
  {
    icon: <Code2 size={20} />,
    role: "Java Developer – Academic Project",
    company: "Student Registration System (Java OOP Project)",
    period: "January 2026 – February 2026",
    description: "Developed a Java-based student registration system with full validation rules and interactive user input. The system included department-based validation, age and marks validation, and a structured object-oriented design using classes, inheritance, and encapsulation.",
    tags: ["Java", "OOP", "Validation"]
  },
  {
    icon: <Briefcase size={20} />,
    role: "Full-Stack Web Development – Student Project",
    company: "Family Records Management Website",
    period: "December 2025 – January 2026",
    description: "Developed a web-based system where users can register, log in, and manage personal family records securely. The project included frontend design using HTML, CSS, and JavaScript and backend development using PHP and MySQL. The system was designed with user authentication and private data access.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
  },
  {
    icon: <GraduationCap size={20} />,
    role: "Academic Projects in Programming and Databases",
    company: "Adventist University of Central Africa",
    period: "2024 – 2025",
    description: "Completed multiple practical programming and database projects as part of software engineering studies. These projects included Java OOP systems, database design using MySQL, web forms, and problem-solving programs in C and Java. Strengthened skills in programming logic, debugging, and system design.",
    tags: ["Java", "C", "MySQL", "OOP"]
  },
];

const TimelineItem = ({ icon, role, company, period, description, tags, isLast }) => (
  <div className="relative flex gap-6">
    {/* Line */}
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-500/10 dark:bg-teal-500/20 text-teal-500 dark:text-teal-400 border-2 border-teal-500/40 dark:border-teal-500/30 shrink-0 z-10">
        {icon}
      </div>
      {!isLast && <div className="w-px flex-grow bg-slate-200 dark:bg-slate-800 mt-2"></div>}
    </div>

    {/* Content */}
    <div className={`pb-10 ${isLast ? '' : ''}`}>
      <span className="inline-block mb-2 px-3 py-1 text-xs font-mono rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
        {period}
      </span>
      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{role}</h3>
      <p className="mb-3 text-sm font-medium text-teal-600 dark:text-teal-500">{company}</p>
      <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span key={i} className="px-2 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Experience = () => (
  <section id="experience" className="px-6 py-20 bg-slate-50 dark:bg-slate-900/50">
    <div className="max-w-3xl mx-auto">
      <SectionHeader number="04" title="Experience & Education" />
      <div>
        {experiences.map((exp, idx) => (
          <TimelineItem key={idx} {...exp} isLast={idx === experiences.length - 1} />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
