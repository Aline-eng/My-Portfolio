import { Send } from 'lucide-react';

const Contact = ({ formData, setFormData, formStatus, handleSubmit }) => (
  <section id="contact" className="relative px-6 py-24">
    <div className="max-w-2xl mx-auto text-center">
      <p className="mb-4 font-mono text-teal-400">04. What's Next?</p>
      <h2 className="mb-6 text-4xl font-bold md:text-5xl text-slate-100">Get In Touch</h2>
      <p className="mb-12 text-slate-400">
        Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>

      <form onSubmit={handleSubmit} className="p-8 text-left border rounded-lg shadow-2xl bg-slate-900 border-slate-800">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm text-slate-400">Name</label>
            <input
              required type="text" name="name"
              className="w-full p-3 transition-colors border rounded bg-slate-950 border-slate-800 text-slate-200 focus:border-teal-500 focus:outline-none"
              placeholder="Aline Nzikwinkunda"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-slate-400">Email</label>
            <input
              required type="email" name="email"
              className="w-full p-3 transition-colors border rounded bg-slate-950 border-slate-800 text-slate-200 focus:border-teal-500 focus:outline-none"
              placeholder="alinenzikwinkunda@gmail.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm text-slate-400">Message</label>
          <textarea
            required rows="4" name="message"
            className="w-full p-3 transition-colors border rounded resize-none bg-slate-950 border-slate-800 text-slate-200 focus:border-teal-500 focus:outline-none"
            placeholder="Hello, I'd like to talk about..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <input type="hidden" name="time" value={new Date().toLocaleString()} />

        <button
          disabled={formStatus === 'sending' || formStatus === 'success'}
          className="flex items-center justify-center w-full gap-2 py-4 font-bold text-teal-400 transition-all border border-teal-500 rounded bg-teal-500/10 hover:bg-teal-500 hover:text-slate-900"
        >
          {formStatus === 'idle' && <><Send size={18} /> Send Message</>}
          {formStatus === 'sending' && 'Sending...'}
          {formStatus === 'success' && 'Message Sent!'}
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
