export const Button = ({ children, variant = 'primary', onClick, href, className = '', ...props }) => {
  const baseStyles = 'px-8 py-4 font-bold rounded transition-all';
  
  const variants = {
    primary: 'bg-teal-500 text-slate-900 hover:bg-teal-400 shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)]',
    secondary: 'bg-slate-800 text-slate-100 hover:bg-slate-700',
    outline: 'border border-teal-500 text-teal-400 hover:bg-teal-500/10'
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return <a href={href} className={classes} {...props}>{children}</a>;
  }

  return <button onClick={onClick} className={classes} {...props}>{children}</button>;
};
