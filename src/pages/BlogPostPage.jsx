import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Tag, Calendar, ChevronRight } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, FileText } from 'lucide-react';

const categoryColors = {
  Frontend: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  Backend: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20',
  Database: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
  DevOps: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
  Projects: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20',
};

// Minimal markdown-like renderer for headings, code blocks, bold, lists
const renderContent = (content) => {
  const lines = content.trim().split('\n');
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code block
    if (line.startsWith('```')) {
      const lang = line.slice(3).trim();
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <div key={i} className="my-6 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
          {lang && (
            <div className="px-4 py-2 text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
              {lang}
            </div>
          )}
          <pre className="p-5 overflow-x-auto bg-slate-950 dark:bg-slate-900 text-slate-300 text-sm font-mono leading-relaxed">
            <code>{codeLines.join('\n')}</code>
          </pre>
        </div>
      );
      i++;
      continue;
    }

    // H2
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="mt-10 mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-2">
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }

    // H3
    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="mt-8 mb-3 text-xl font-bold text-slate-800 dark:text-slate-200">
          {line.slice(4)}
        </h3>
      );
      i++;
      continue;
    }

    // List item
    if (line.startsWith('- ')) {
      const listItems = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={i} className="my-4 space-y-2 pl-5">
          {listItems.map((item, idx) => (
            <li key={idx} className="text-slate-600 dark:text-slate-400 leading-relaxed list-disc"
              dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-800 dark:text-slate-200 font-semibold">$1</strong>') }}
            />
          ))}
        </ul>
      );
      continue;
    }

    // Empty line
    if (line.trim() === '') {
      i++;
      continue;
    }

    // Paragraph
    elements.push(
      <p key={i} className="my-4 text-slate-600 dark:text-slate-400 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-800 dark:text-slate-200 font-semibold">$1</strong>') }}
      />
    );
    i++;
  }

  return elements;
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const { isDark, toggleTheme } = useTheme();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) return <Navigate to="/blog" />;

  const related = blogPosts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 2);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-300 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-4xl">
          <Link to="/blog" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors font-medium text-sm">
            <ArrowLeft size={18} /> All Posts
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

      <main className="px-6 py-16 mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-sm text-slate-500 dark:text-slate-500">
          <Link to="/" className="hover:text-teal-500 transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/blog" className="hover:text-teal-500 transition-colors">Blog</Link>
          <ChevronRight size={14} />
          <span className="text-slate-700 dark:text-slate-300 truncate max-w-xs">{post.title}</span>
        </div>

        {/* Post Header */}
        <div className="mb-10">
          <span className={`inline-block mb-4 px-3 py-1 text-xs font-semibold rounded-full border ${categoryColors[post.category] || categoryColors.Projects}`}>
            {post.category}
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-slate-900 dark:text-slate-100 md:text-5xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-sm text-slate-500 dark:text-slate-500 pb-8 border-b border-slate-200 dark:border-slate-800">
            <span className="flex items-center gap-2"><Calendar size={15} />{post.date}</span>
            <span className="flex items-center gap-2"><Clock size={15} />{post.readTime}</span>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, i) => (
                <span key={i} className="flex items-center gap-1 px-2 py-0.5 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                  <Tag size={10} />{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="mb-10 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 h-72">
          <img src={post.image} alt={post.title} className="object-cover w-full h-full" />
        </div>

        {/* Content */}
        <article className="prose-custom max-w-none">
          {renderContent(post.content)}
        </article>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          {post.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1.5 text-sm font-mono rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
              #{tag}
            </span>
          ))}
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="mt-16">
            <h3 className="mb-6 text-xl font-bold text-slate-900 dark:text-slate-100">Related Posts</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {related.map(p => (
                <Link key={p.id} to={`/blog/${p.slug}`} className="group flex gap-4 p-4 rounded-xl border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-teal-500/50 transition-all">
                  <img src={p.image} alt={p.title} className="w-20 h-20 object-cover rounded-lg shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 mb-1">{p.date}</p>
                    <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors line-clamp-2">
                      {p.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link to="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-teal-500 text-teal-600 dark:text-teal-400 hover:bg-teal-500 hover:text-white transition-all font-medium">
            <ArrowLeft size={16} /> Back to all posts
          </Link>
        </div>
      </main>
    </div>
  );
};

export default BlogPostPage;
