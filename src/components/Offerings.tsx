import { motion } from 'motion/react';
import { Sun, Waves, Flower2, Microscope } from 'lucide-react';

const OfferingsList = [
  {
    title: 'Yoga',
    label: 'Practice',
    description: 'Grounding flows and intentional movement for all bodies - trauma-informed, queer-affirming, and accessible.',
    icon: <Sun className="w-5 h-5 text-wine" />,
    href: '#yoga',
  },
  {
    title: 'Sound Healing',
    label: 'Healing',
    description: 'Crystal singing bowls and vibrational medicine to quiet the nervous system and open the heart.',
    icon: <Waves className="w-5 h-5 text-wine" />,
    href: '#sound',
  },
  {
    title: 'Intentional Events',
    label: 'Gathering',
    description: 'Retreats, ceremonies, workshops, and sacred gatherings designed to nourish community and connection.',
    icon: <Flower2 className="w-5 h-5 text-wine" />,
    href: '#events',
  },
  {
    title: 'Public Health & Consulting',
    label: 'Research',
    description: 'Speaking engagements, partnerships, and community health research with equity at the center.',
    icon: <Microscope className="w-5 h-5 text-wine" />,
    href: '#consult',
  },
];

export default function Offerings() {
  return (
    <section id="offerings" className="py-24 px-6 bg-[#ebf0e5]">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[0.62rem] tracking-[0.22em] uppercase font-semibold text-sage mb-3"
        >
          What I Offer
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif italic text-4xl md:text-5xl text-wine leading-tight mb-12"
        >
          practices for the<br />whole person.
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {OfferingsList.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-cream rounded-2xl p-10 flex flex-col gap-4 group hover:-translate-y-1 hover:shadow-xl hover:shadow-wine/5 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#d4e5cc] rounded-full flex items-center justify-center mb-2">
                {item.icon}
              </div>
              <span className="text-[0.62rem] tracking-[0.18em] uppercase font-medium text-sage">{item.label}</span>
              <h3 className="font-serif italic text-2xl text-wine">{item.title}</h3>
              <p className="text-slate text-[0.85rem] leading-7">{item.description}</p>
              <div className="mt-auto pt-4 flex items-center gap-2 text-[0.68rem] uppercase tracking-widest font-medium text-wine transition-colors">
                Learn more <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
