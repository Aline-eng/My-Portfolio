import { Code2, Terminal, Cpu, Globe, Database, Layout, Server, Smartphone } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const skillsData = [
  { icon: <Code2 size={24} />, name: "Frontend", skills: "React, Tailwind, HTML, CSS, JavaScript" },
  { icon: <Server size={24} />, name: "Backend", skills: "Node.js, Express, Python, PHP" },
  { icon: <Database size={24} />, name: "Database", skills: "PostgreSQL, MongoDB, MySQL" },
  { icon: <Smartphone size={24} />, name: "Mobile", skills: "React Native, Flutter (beginner)" },
  { icon: <Terminal size={24} />, name: "DevOps", skills: "Git, GitHub, Basic Docker" },
  { icon: <Layout size={24} />, name: "Design", skills: "Figma, UI Layouting" },
  { icon: <Cpu size={24} />, name: "System", skills: "Linux, Bash Scripting, Virtualization" },
  { icon: <Globe size={24} />, name: "Other", skills: "Problem Solving, Agile Basics" },
];

const SkillCard = ({ icon, name, skills }) => (
  <div className="p-6 transition-transform duration-300 border rounded bg-slate-900 hover:-translate-y-2 border-slate-800 hover:border-teal-500/50 group">
    <div className="mb-4 text-teal-400 transition-transform group-hover:scale-110">{icon}</div>
    <h3 className="mb-2 font-bold text-slate-200">{name}</h3>
    <p className="text-sm text-slate-500">{skills}</p>
  </div>
);

const Skills = () => (
  <section id="skills" className="px-6 py-20">
    <div className="max-w-6xl mx-auto">
      <SectionHeader number="02" title="Skills & Technologies" />
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {skillsData.map((skill, idx) => (
          <SkillCard key={idx} {...skill} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
