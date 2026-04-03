export const SectionHeader = ({ number, title }) => (
  <div className="flex items-center gap-4 mb-12">
    <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
      <span className="mr-2 font-mono text-xl text-teal-500 dark:text-teal-400">{number}.</span>{title}
    </h2>
    <div className="flex-grow h-px max-w-xs bg-slate-300 dark:bg-slate-700"></div>
  </div>
);
