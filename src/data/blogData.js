export const blogPosts = [
  {
    id: 1,
    slug: "getting-started-with-react",
    title: "Getting Started with React: What I Wish I Knew Earlier",
    excerpt: "React can feel overwhelming at first. Here's a practical breakdown of the core concepts that helped me go from confused to confident.",
    category: "Frontend",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "May 15, 2025",
    readTime: "6 min read",
    tags: ["React", "JavaScript", "Frontend"],
    content: `React is one of the most popular frontend libraries in the world, and for good reason. But when I first started learning it, I felt lost. Components, props, state, hooks — it was a lot to take in at once.

## Start With the Mental Model

The most important thing to understand about React is that **everything is a component**. Think of your UI as a tree of small, reusable building blocks. Each component manages its own data and renders its own piece of the screen.

## Props vs State

This confused me for weeks. Here's the simple version:
- **Props** are data passed into a component from its parent. They are read-only.
- **State** is data that lives inside a component and can change over time.

\`\`\`jsx
// Props example
const Greeting = ({ name }) => <h1>Hello, {name}!</h1>;

// State example
const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};
\`\`\`

## The useEffect Hook

useEffect is how you run side effects — things like fetching data, setting up subscriptions, or updating the document title.

\`\`\`jsx
useEffect(() => {
  document.title = \`You clicked \${count} times\`;
}, [count]);
\`\`\`

## My Advice

Don't try to learn everything at once. Build small projects. Break things. Fix them. That's how it clicks.`
  },
  {
    id: 2,
    slug: "fullstack-nodejs-postgresql",
    title: "Building a Full-Stack App with Node.js and PostgreSQL",
    excerpt: "A practical walkthrough of setting up a REST API with Node.js, Express, and PostgreSQL — the stack I use for most of my projects.",
    category: "Backend",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "April 28, 2025",
    readTime: "8 min read",
    tags: ["Node.js", "PostgreSQL", "Backend", "REST API"],
    content: `After building several projects with PHP and MySQL, I decided to level up and learn Node.js with PostgreSQL. Here's what I learned building my first real REST API.

## Setting Up the Project

\`\`\`bash
mkdir my-api && cd my-api
npm init -y
npm install express pg dotenv cors
\`\`\`

## Connecting to PostgreSQL

\`\`\`js
const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
module.exports = pool;
\`\`\`

## Creating a Simple Route

\`\`\`js
router.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
\`\`\`

## What I Learned

PostgreSQL is incredibly powerful. Features like JSON columns, full-text search, and transactions make it a great choice for serious applications. The key is to keep your routes clean, use async/await properly, and always handle errors.`
  },
  {
    id: 3,
    slug: "tailwind-css-tips",
    title: "10 Tailwind CSS Tips That Changed How I Build UIs",
    excerpt: "Tailwind CSS is more than just utility classes. These tips helped me write cleaner, faster, and more consistent UI code.",
    category: "Frontend",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "April 10, 2025",
    readTime: "5 min read",
    tags: ["Tailwind CSS", "CSS", "Frontend", "Design"],
    content: `I was skeptical about Tailwind CSS at first. Writing classes directly in HTML felt messy. But after using it on a few real projects, I'm completely converted.

## 1. Use the group Utility for Hover Effects

\`\`\`html
<div class="group">
  <p class="opacity-0 group-hover:opacity-100 transition-opacity">
    Appears on hover!
  </p>
</div>
\`\`\`

## 2. Clamp Text with line-clamp

\`\`\`html
<p class="line-clamp-3">This long text will be truncated after 3 lines...</p>
\`\`\`

## 3. Use dark: Variants for Theming

\`\`\`html
<div class="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
  Adapts to dark mode automatically
</div>
\`\`\`

## 4. Responsive Design is Built In

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Responsive grid
</div>
\`\`\`

## 5. Extract Components for Repeated Patterns

Instead of copying the same 10 classes everywhere, extract them into a React component. Tailwind rewards consistency. The more you use it, the faster you get.`
  },
  {
    id: 4,
    slug: "database-design-fundamentals",
    title: "Database Design Fundamentals Every Developer Should Know",
    excerpt: "Good database design is the foundation of every solid application. Here's what I learned from designing databases for real projects.",
    category: "Database",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "March 22, 2025",
    readTime: "7 min read",
    tags: ["MySQL", "PostgreSQL", "Database", "Backend"],
    content: `One of the most underrated skills in software development is database design. A poorly designed database can make your application slow, buggy, and hard to maintain.

## Normalization Matters

Normalization reduces redundancy. The three most important normal forms:
- **1NF**: Each column should contain atomic values
- **2NF**: Every non-key column should depend on the whole primary key
- **3NF**: No transitive dependencies

## Use Foreign Keys

\`\`\`sql
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  total DECIMAL(10,2),
  created_at TIMESTAMP DEFAULT NOW()
);
\`\`\`

## Index the Right Columns

Indexes speed up reads but slow down writes. Index columns you frequently search or join on.

\`\`\`sql
CREATE INDEX idx_orders_user_id ON orders(user_id);
\`\`\`

## Think About Relationships First

Before writing a single line of SQL, draw your entity-relationship diagram. Understand what relates to what. This saves hours of refactoring later.`
  },
  {
    id: 5,
    slug: "git-workflow-for-students",
    title: "A Git Workflow That Actually Makes Sense for Student Developers",
    excerpt: "Git confused me for a long time. Here's the simple workflow I use on every project that keeps my code organized and my history clean.",
    category: "DevOps",
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "March 5, 2025",
    readTime: "4 min read",
    tags: ["Git", "GitHub", "DevOps", "Workflow"],
    content: `Git is one of those tools that seems complicated until it suddenly clicks. Here's the workflow I use on every project.

## The Basic Flow

\`\`\`bash
git checkout -b feature/user-authentication
git add .
git commit -m "feat: add JWT authentication middleware"
git push origin feature/user-authentication
\`\`\`

## Write Good Commit Messages

I follow the Conventional Commits format:
- feat: a new feature
- fix: a bug fix
- docs: documentation changes
- refactor: code restructure

## Never Commit Directly to Main

Always work on a branch. This keeps your main branch clean and makes it easy to revert if something breaks.

## Use .gitignore

\`\`\`
node_modules/
.env
dist/
\`\`\`

Git is a superpower once you understand it. Start simple, be consistent with your commits, and you'll thank yourself later.`
  },
  {
    id: 6,
    slug: "lessons-from-hotel-system",
    title: "What I Learned Building a Full Hotel Management System",
    excerpt: "Building ASAABE Hotel System was my most complex project yet. Here are the real lessons from designing, building, and deploying it.",
    category: "Projects",
    image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "February 18, 2025",
    readTime: "9 min read",
    tags: ["Next.js", "Django", "PostgreSQL", "Full-Stack"],
    content: `The ASAABE Hotel Management System was the most ambitious project I had tackled. It had user authentication, room management, booking flows, payment approval, and an admin dashboard.

## Plan Before You Code

I spent two full days designing the database schema and drawing wireframes before writing a single line of code. This saved me from major refactors later.

## Separate Concerns Clearly

I used Next.js for the frontend and Django REST Framework for the backend. This separation made it easy to work on each independently and test them in isolation.

## Authentication is Harder Than You Think

Implementing JWT authentication with refresh tokens and role-based access control took longer than expected. But getting it right was worth it.

\`\`\`python
class IsAdminUser(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.role == 'admin'
\`\`\`

## The Biggest Lesson

Build for the user, not for yourself. Every feature decision should answer: does this make the user's experience better? If not, cut it.`
  },
];

export const categories = ["All", "Frontend", "Backend", "Database", "DevOps", "Projects"];
