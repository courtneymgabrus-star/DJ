import { motion } from 'motion/react';
import { Users, Sparkles, Heart, Music, Utensils, Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Events from '../components/Events';
import BookingCalendar from '../components/BookingCalendar';
import BotanicalDivider from '../components/BotanicalDivider';

const groupOfferings = [
  {
    title: "Private Sessions",
    description: "One-on-one or small group sessions tailored to your specific needs. Perfect for deepening your practice or focused healing work.",
    icon: Users,
    tag: "Personalized"
  },
  {
    title: "Bachelor & Bachelorette",
    description: "Mindful celebrations to honor transitions. We create bespoke sound baths and gentle movement experiences for your bridal or groom party.",
    icon: Sparkles,
    tag: "Celebration"
  },
  {
    title: "Corporate Wellness",
    description: "Nervous system regulation for teams. Workshops designed to reduce burnout and increase collective harmony in the workplace.",
    icon: Heart,
    tag: "Professional"
  }
];

export default function Gatherings() {
  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <section className="px-6 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[0.7rem] uppercase tracking-[0.2em] font-bold text-sage mb-4 block"
            >
              Community & Connection
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif italic text-4xl md:text-6xl text-wine mb-6"
            >
              Gatherings
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Whether joining a public ceremony or booking a private experience, our gatherings are curated to foster deep presence and genuine connection.
            </motion.p>
          </div>
        </section>

        <BotanicalDivider />

        {/* Private & Group Experiences */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif italic text-3xl text-wine">Private & Group Experiences</h2>
              <p className="text-slate mt-4">Curated moments for your inner circle.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {groupOfferings.map((offering, index) => (
                <motion.div
                  key={offering.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-blush/10 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-sage/10 rounded-2xl flex items-center justify-center text-sage mb-6">
                    <offering.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[0.6rem] uppercase tracking-widest font-bold text-sage mb-2 block">{offering.tag}</span>
                  <h3 className="font-serif italic text-2xl text-wine mb-4">{offering.title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{offering.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Calendar Section */}
        <section id="book-private" className="py-20 px-6 bg-sage/5">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center mb-16 px-4">
              <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center text-wine mb-6">
                <Calendar className="w-6 h-6" />
              </div>
              <h2 className="font-serif italic text-3xl md:text-5xl text-wine mb-6">Reserve Your Space</h2>
              <p className="text-slate max-w-xl leading-relaxed">
                Choose a preferred date and time for your private event. Our team will review your request and get back to you with a custom quote and session plan.
              </p>
            </div>

            <BookingCalendar />
          </div>
        </section>

        <BotanicalDivider />

        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="font-serif italic text-3xl text-wine">Upcoming Public Events</h2>
            <p className="text-slate mt-4">Join our community in practice.</p>
          </div>
          <Events />
        </div>
      </main>

      <Footer />
    </div>
  );
}
