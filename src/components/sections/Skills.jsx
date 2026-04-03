import { Code2, Terminal, Cpu, Globe, Database, Layout, Server, Smartphone } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const skillGroups = [
  {
    icon: <Code2 size={22} />,
    name: "Frontend",
    skills: [
      { name: "React", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "HTML & CSS", level: 90 },
      { name: "Tailwind CSS", level: 80 },
    ]
  },
  {
    icon: <Server size={22} />,
    name: "Backend",
    skills: [
      { name: "Node.js / Express", level: 70 },
      { name: "PHP", level: 75 },
      { name: "Python", level: 60 },
      { name: "Java", level: 72 },
    ]
  },
  {
    icon: <Database size={22} />,
    name: "Database",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 60 },
    ]
  },
  {
    icon: <Terminal size={22} />,
    name: "DevOps & Tools",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Linux / Bash", level: 65 },
      { name: "Docker (Basic)", level: 40 },
    ]
  },
  {
    icon: <Layout size={22} />,
    name: "Design",
    skills: [
      { name: "Figma", level: 65 },
      { name: "UI Layouting", level: 75 },
    ]
  },
  {
    icon: <Smartphone size={22} />,
    name: "Mobile",
    skills: [
      { name: "React Native", level: 50 },
      { name: "Flutter", level: 30 },
    ]
  },
  {
    icon: <Cpu size={22} />,
    name: "System",
    skills: [
      { name: "Linux", level: 65 },
      { name: "Bash Scripting", level: 55 },
      { name: "Virtualization", level: 50 },
    ]
  },
  {
    icon: <Globe size={22} />,
    name: "Other",
    skills: [
      { name: "Problem Solving", level: 85 },
      { name: "Agile Basics", level: 70 },
    ]
  },
];

const ProgressBar = ({ name, level }) => (
  <div className="mb-3">
    <div className="flex justify-between mb-1">
      <span className="text-sm text-slate-700 dark:text-slate-300">{name}</span>
      <span className="text-xs font-mono text-teal-600 dark:text-teal-400">{level}%</span>
    </div>
    <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-700">
      <div
        className="h-1.5 rounded-full bg-gradient-to-r from-teal-500 to-teal-400 transition-all duration-700"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const SkillCard = ({ icon, name, skills }) => (
  <div className="p-6 border rounded-lg bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-teal-500/50 transition-all shadow-sm dark:shadow-none group">
    <div className="flex items-center gap-3 mb-5">
      <div className="text-teal-500 dark:text-teal-400 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="font-bold text-slate-800 dark:text-slate-200">{name}</h3>
    </div>
    {skills.map((skill, i) => <ProgressBar key={i} {...skill} />)}
  </div>
);

const Skills = () => (
  <section id="skills" className="px-6 py-20 bg-white dark:bg-slate-950">
    <div className="max-w-6xl mx-auto">
      <SectionHeader number="02" title="Skills & Technologies" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, idx) => (
          <SkillCard key={idx} {...group} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
