import { motion } from 'motion/react';

export default function Newsletter() {
  return (
    <section id="newsletter" className="py-24 px-6 bg-wine relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blush rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[0.62rem] tracking-[0.22em] uppercase font-semibold text-blush mb-3"
        >
          Keep in touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif italic text-4xl text-white leading-tight mb-8"
        >
          the newsletter of<br />embodied wisdom.
        </motion.h2>
        
        <form className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 bg-white/10 border border-white/20 rounded-full px-8 py-4 text-white placeholder:text-white/40 text-sm outline-none focus:bg-white/15 transition-all"
          />
          <button className="bg-white text-wine px-10 py-4 rounded-full text-[0.7rem] uppercase tracking-[0.15em] font-bold hover:bg-cream transition-all">
            Join Us
          </button>
        </form>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-white/40 text-[0.65rem] mt-6 tracking-wide"
        >
          receive ritual prompts, somatic tools, and community updates.
        </motion.p>
      </div>
    </section>
  );
}
