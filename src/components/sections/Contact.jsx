import { Send } from 'lucide-react';

const inputClass = "w-full p-3 transition-colors border rounded bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:border-teal-500 focus:outline-none";

const Contact = ({ formData, setFormData, formStatus, handleSubmit }) => (
  <section id="contact" className="relative px-6 py-24 bg-white dark:bg-slate-950">
    <div className="max-w-2xl mx-auto text-center">
      <p className="mb-4 font-mono text-teal-500 dark:text-teal-400">05. What's Next?</p>
      <h2 className="mb-6 text-4xl font-bold md:text-5xl text-slate-900 dark:text-slate-100">Get In Touch</h2>
      <p className="mb-12 text-slate-600 dark:text-slate-400">
        Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>

      <form onSubmit={handleSubmit} className="p-8 text-left border rounded-lg shadow-sm dark:shadow-2xl bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-400">Name</label>
            <input
              required type="text" name="name"
              className={inputClass}
              placeholder="Aline Nzikwinkunda"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-400">Email</label>
            <input
              required type="email" name="email"
              className={inputClass}
              placeholder="alinenzikwinkunda@gmail.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-400">Message</label>
          <textarea
            required rows="4" name="message"
            className={`${inputClass} resize-none`}
            placeholder="Hello, I'd like to talk about..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <input type="hidden" name="time" value={new Date().toLocaleString()} />

        <button
          disabled={formStatus === 'sending' || formStatus === 'success'}
          className="flex items-center justify-center w-full gap-2 py-4 font-bold text-teal-600 dark:text-teal-400 transition-all border border-teal-500 rounded bg-teal-500/10 hover:bg-teal-500 hover:text-white disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {formStatus === 'idle' && <><Send size={18} /> Send Message</>}
          {formStatus === 'sending' && 'Sending...'}
          {formStatus === 'success' && 'Message Sent! ✓'}
          {formStatus === 'error' && 'Failed. Try again.'}
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
