import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Tag, Search } from 'lucide-react';
import { blogPosts, categories } from '../data/blogData';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, FileText } from 'lucide-react';

const categoryColors = {
  Frontend: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  Backend: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20',
  Database: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
  DevOps: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
  Projects: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20',
};

const BlogCard = ({ post }) => (
  <Link to={`/blog/${post.slug}`} className="group flex flex-col overflow-hidden rounded-xl border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-teal-500/50 shadow-sm hover:shadow-lg transition-all duration-300">
    <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-800">
      <img src={post.image} alt={post.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full border ${categoryColors[post.category] || categoryColors.Projects}`}>
        {post.category}
      </span>
    </div>
    <div className="flex flex-col flex-grow p-6">
      <div className="flex items-center gap-4 mb-3 text-xs text-slate-500 dark:text-slate-500">
        <span>{post.date}</span>
        <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
      </div>
      <h2 className="mb-3 text-lg font-bold leading-snug text-slate-900 dark:text-slate-100 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
        {post.title}
      </h2>
      <p className="flex-grow mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-3">
        {post.excerpt}
      </p>
      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
        {post.tags.slice(0, 3).map((tag, i) => (
          <span key={i} className="flex items-center gap-1 px-2 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
            <Tag size={10} />{tag}
          </span>
        ))}
      </div>
    </div>
  </Link>
);

const FeaturedCard = ({ post }) => (
  <Link to={`/blog/${post.slug}`} className="group relative flex flex-col md:flex-row overflow-hidden rounded-xl border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-teal-500/50 shadow-sm hover:shadow-xl transition-all duration-300 mb-12">
    <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden bg-slate-100 dark:bg-slate-800">
      <img src={post.image} alt={post.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
      <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full bg-teal-500 text-white">
        Featured
      </span>
    </div>
    <div className="flex flex-col justify-center p-8 md:w-1/2">
      <span className={`inline-block mb-3 px-3 py-1 text-xs font-semibold rounded-full border w-fit ${categoryColors[post.category] || categoryColors.Projects}`}>
        {post.category}
      </span>
      <h2 className="mb-4 text-2xl font-bold leading-snug text-slate-900 dark:text-slate-100 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
        {post.title}
      </h2>
      <p className="mb-6 text-slate-600 dark:text-slate-400 leading-relaxed">{post.excerpt}</p>
      <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
        <span>{post.date}</span>
        <span className="flex items-center gap-1"><Clock size={14} />{post.readTime}</span>
      </div>
    </div>
  </Link>
);

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const { isDark, toggleTheme } = useTheme();

  const filtered = blogPosts.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = blogPosts[0];
  const rest = filtered.filter(p => p.id !== featured.id || activeCategory !== 'All' || search !== '');

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-300 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-6xl">
          <Link to="/" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors font-medium text-sm">
            <ArrowLeft size={18} /> Back to Portfolio
          </Link>
          <div className="flex items-center gap-2 font-mono font-bold text-slate-900 dark:text-slate-100">
            <FileText size={20} className="text-teal-500 dark:text-teal-400" />
            AN.BLOG
          </div>
          <button onClick={toggleTheme} className="p-2 rounded text-slate-500 hover:text-teal-500 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      <main className="px-6 py-16 mx-auto max-w-6xl">
        {/* Hero */}
        <div className="mb-14 text-center">
          <p className="mb-3 font-mono text-teal-500 dark:text-teal-400 text-sm">// thoughts & learnings</p>
          <h1 className="mb-4 text-5xl font-bold text-slate-900 dark:text-slate-100">The Dev Blog</h1>
          <p className="max-w-xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            I write about things I learn while building projects — frontend, backend, databases, and everything in between.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-10">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search posts..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-teal-500 transition-colors"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-sm font-medium rounded-full border transition-all ${
                activeCategory === cat
                  ? 'bg-teal-500 text-white border-teal-500 shadow-md shadow-teal-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-teal-500 hover:text-teal-500 dark:hover:text-teal-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {activeCategory === 'All' && search === '' && <FeaturedCard post={featured} />}

        {/* Posts Grid */}
        {filtered.length === 0 ? (
          <div className="py-20 text-center text-slate-500 dark:text-slate-500">
            <p className="text-lg">No posts found for "{search}"</p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {(activeCategory === 'All' && search === '' ? rest : filtered).map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </main>

      <footer className="py-8 mt-16 text-sm text-center border-t border-slate-200 dark:border-slate-800 text-slate-500">
        <p>© 2025 Aline Nzikwinkunda · <Link to="/" className="hover:text-teal-500 transition-colors">Back to Portfolio</Link></p>
      </footer>
    </div>
  );
};

export default BlogPage;
