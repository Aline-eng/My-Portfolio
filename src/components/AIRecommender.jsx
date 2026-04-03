import { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles } from 'lucide-react';

const PROFILE_IMG = '/profile.jpg';

const systemContext = `
You are an AI assistant embedded in Aline Nzikwinkunda's portfolio website.
Aline is a Software Engineering student at Adventist University of Central Africa (AUCA), Rwanda.

Her skills: React, Next.js, Node.js, Express, PHP, Java, Python, JavaScript, HTML, CSS, Tailwind CSS, MySQL, PostgreSQL, MongoDB, Git, GitHub, Figma, Docker (basic), Linux, Bash.

Her projects:
- ASAABE Hotel Management System (Next.js, Django REST, PostgreSQL)
- ShopEasy E-Commerce Store (React, TypeScript, Node.js, MongoDB)
- U'mwiza Rwanda NGO Platform (Next.js, TypeScript, Node.js, PostgreSQL, Prisma)
- CareerCompass skill-matching platform (HTML, CSS, JS, PHP, MySQL)
- Family Records Management Website (HTML, CSS, JS, PHP, MySQL)
- Student Registration System (Java OOP)

Her experience: Full-stack web development, backend development, Java OOP projects, database design.
Her goal: Internship at a top tech company in Rwanda.

Your role: Help visitors understand Aline's skills, recommend which of her projects fit their needs, suggest what she could help them build, and answer questions about her background. Be friendly, concise, and professional. Keep responses under 120 words.
`;

const suggestions = [
  "What can Aline build for me?",
  "Which project fits my startup?",
  "What are her strongest skills?",
  "Is she available for internship?",
];

const getAIResponse = async (messages) => {
  // Using a free public AI API (OpenAI-compatible via Pollinations)
  try {
    const res = await fetch('https://text.pollinations.ai/openai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'openai',
        messages: [
          { role: 'system', content: systemContext },
          ...messages
        ],
        max_tokens: 150,
      }),
    });
    const data = await res.json();
    return data.choices?.[0]?.message?.content || fallbackResponse(messages[messages.length - 1].content);
  } catch {
    return fallbackResponse(messages[messages.length - 1].content);
  }
};

const fallbackResponse = (question) => {
  const q = question.toLowerCase();
  if (q.includes('skill') || q.includes('know') || q.includes('tech'))
    return "Aline is skilled in React, Node.js, PHP, Java, and databases like PostgreSQL and MySQL. She's strong in both frontend and backend development, with hands-on project experience.";
  if (q.includes('project') || q.includes('build') || q.includes('work'))
    return "Aline has built a hotel management system, an e-commerce platform, and an NGO management platform. She can help with full-stack web apps, REST APIs, and database-driven systems.";
  if (q.includes('intern') || q.includes('hire') || q.includes('available'))
    return "Aline is actively seeking internship opportunities at tech companies in Rwanda. She's passionate, hardworking, and ready to contribute to real-world projects.";
  if (q.includes('contact') || q.includes('reach') || q.includes('email'))
    return "You can reach Aline via the Contact section on this portfolio, or email her at alinenzikwinkunda@gmail.com. She's always open to new opportunities!";
  return "Aline is a full-stack developer with experience in React, Node.js, PHP, and Java. She's built real-world projects and is looking for internship opportunities. What would you like to know more about?";
};

const AIRecommender = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! 👋 I'm Aline's AI assistant. Ask me about her skills, projects, or how she can help you build something amazing!",
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if (!userText) return;

    setInput('');
    setShowSuggestions(false);
    const newMessages = [...messages, { role: 'user', content: userText }];
    setMessages(newMessages);
    setIsLoading(true);

    const reply = await getAIResponse(newMessages.filter(m => m.role !== 'assistant' || newMessages.indexOf(m) > 0));
    setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="fixed bottom-24 right-8 z-50 group flex items-center gap-2 shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="Open AI Assistant"
      >
        <span className={`text-xs font-medium px-3 py-1.5 rounded-full bg-teal-500 text-white shadow-lg transition-all duration-300 ${isOpen ? 'opacity-0 scale-90' : 'opacity-100 scale-100'} hidden sm:block`}>
          Ask AI
        </span>
        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-teal-500 shadow-lg shadow-teal-500/30">
          <img src={PROFILE_IMG} alt="Aline AI" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-teal-500/0 group-hover:bg-teal-500/10 transition-colors" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-teal-500 rounded-full flex items-center justify-center">
            <Sparkles size={9} className="text-white" />
          </div>
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-44 right-8 z-50 w-80 sm:w-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col bg-white dark:bg-slate-900 transition-all duration-300"
          style={{ maxHeight: '480px' }}
        >
          {/* Chat Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-teal-500 to-teal-600">
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white/50 shrink-0">
              <img src={PROFILE_IMG} alt="Aline" className="object-cover w-full h-full" />
            </div>
            <div className="flex-grow">
              <p className="text-sm font-bold text-white">Aline's AI Assistant</p>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                <p className="text-xs text-teal-100">Online · Powered by AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4" style={{ maxHeight: '300px' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 mt-1">
                    <img src={PROFILE_IMG} alt="AI" className="object-cover w-full h-full" />
                  </div>
                )}
                <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-teal-500 text-white rounded-tr-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-tl-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2">
                <div className="w-7 h-7 rounded-full overflow-hidden shrink-0">
                  <img src={PROFILE_IMG} alt="AI" className="object-cover w-full h-full" />
                </div>
                <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-slate-100 dark:bg-slate-800">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          {showSuggestions && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(s)}
                  className="text-xs px-3 py-1.5 rounded-full border border-teal-500/40 text-teal-600 dark:text-teal-400 hover:bg-teal-500/10 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="flex items-center gap-2 px-4 py-3 border-t border-slate-200 dark:border-slate-800">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Ask about Aline..."
              className="flex-grow text-sm px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
            />
            <button
              onClick={() => sendMessage()}
              disabled={!input.trim() || isLoading}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-teal-500 text-white hover:bg-teal-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIRecommender;
