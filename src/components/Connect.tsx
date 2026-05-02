import React from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram } from 'lucide-react';

export default function Connect() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    console.log("Form submitted");
  };

  return (
    <section id="connect" className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[0.62rem] tracking-[0.22em] uppercase font-semibold text-sage mb-3"
        >
          Connect
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif italic text-4xl md:text-5xl text-wine leading-tight mb-16"
        >
          let's begin.
        </motion.h2>

        <div className="grid md:grid-cols-[1.1fr_1fr] gap-20 items-start">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <label className="text-[0.62rem] tracking-[0.14em] uppercase font-medium text-slate" htmlFor="name">Name</label>
              <input
                id="name"
                required
                className="bg-white/50 border border-blush/30 rounded-xl px-5 py-4 outline-none focus:border-wine/50 transition-colors placeholder:text-slate/40 text-sm font-sans"
                placeholder="your full name"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[0.62rem] tracking-[0.14em] uppercase font-medium text-slate" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                className="bg-white/50 border border-blush/30 rounded-xl px-5 py-4 outline-none focus:border-wine/50 transition-colors placeholder:text-slate/40 text-sm font-sans"
                placeholder="hello@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[0.62rem] tracking-[0.14em] uppercase font-medium text-slate" htmlFor="message">How can I support you?</label>
              <textarea
                id="message"
                className="bg-white/50 border border-blush/30 rounded-xl px-5 py-4 outline-none focus:border-wine/50 transition-colors placeholder:text-slate/40 text-sm font-sans min-h-[150px] resize-none"
                placeholder="Tell me about your journey..."
              />
            </div>

            <button type="submit" className="bg-wine text-white px-9 py-4 rounded-full text-[0.7rem] uppercase tracking-[0.15em] font-semibold hover:bg-wine/90 transition-all shadow-md self-start">
              Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 bg-[#d4e5cc] rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <h4 className="text-[0.65rem] uppercase tracking-[0.15em] font-semibold text-ink mb-1">Email</h4>
                  <p className="text-slate text-sm">hello@julesinbloom.com</p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 bg-[#d4e5cc] rounded-full flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <h4 className="text-[0.65rem] uppercase tracking-[0.15em] font-semibold text-ink mb-1">Instagram</h4>
                  <p className="text-slate text-sm">@julesinbloom</p>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-blush/20">
              <p className="text-slate text-xs italic">
                serving the greater atlanta area and online community.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
