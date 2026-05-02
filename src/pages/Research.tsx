import { motion } from 'motion/react';
import { BookOpen, Award, FileText, ExternalLink, Brain, Sparkles, Wind } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BotanicalDivider from '../components/BotanicalDivider';

const researchTopics = [
  {
    title: "Somatic Experiencing & Sound",
    description: "Exploring how specific frequencies in crystal singing bowls interact with the vagus nerve to promote trauma release.",
    icon: Wind,
    detail: "Our research focuses on the physiological shifts in heart rate variability (HRV) during 90-minute sound immersions."
  },
  {
    title: "Eco-Somatics in Wellness",
    description: "The impact of nature-based movement on chronic stress markers in high-performance professionals.",
    icon: Brain,
    detail: "Studying the synergistic effect of forest bathing combined with restorative yoga practices."
  },
  {
    title: "Polyvagal Theory in Practice",
    description: "Integrating modern neuroscience into traditional yoga frameworks for enhanced nervous system regulation.",
    icon: Sparkles,
    detail: "Developing clinical protocols for using pranayama to shift from sympathetic to parasympathetic states."
  }
];

export default function Research() {
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
              Evidence-Based Wellness
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif italic text-4xl md:text-6xl text-wine mb-6"
            >
              Research & Insights
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Jules' work bridges traditional healing arts with contemporary clinical research, focusing on somatic regulation and neurological wellbeing.
            </motion.p>
          </div>
        </section>

        <BotanicalDivider />

        {/* Research Core */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {researchTopics.map((topic, index) => (
                <motion.div
                  key={topic.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/40 border border-blush/20 p-8 rounded-3xl"
                >
                  <div className="w-12 h-12 bg-[#d4e5cc] rounded-2xl flex items-center justify-center text-sage mb-6">
                    <topic.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif italic text-2xl text-wine mb-4">{topic.title}</h3>
                  <p className="text-slate text-sm leading-relaxed mb-6">{topic.description}</p>
                  <p className="text-wine font-medium text-xs italic opacity-80">{topic.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="py-20 bg-wine/5 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <BookOpen className="text-wine w-6 h-6" />
              <h2 className="font-serif italic text-3xl text-wine">Papers & Publications</h2>
            </div>
            
            <div className="space-y-6">
              {[
                { title: "Vibrational Medicine: A Neuro-Somatic Approach", year: "2025", journal: "Journal of Embodied Research" },
                { title: "Restorative Rest: The Quiet Healing of Theta States", year: "2024", journal: "Modern Wellness Quarterly" },
                { title: "The Somatic Bridge: Linking Breath to Brain", year: "2023", journal: "Clinical Yoga Studies" }
              ].map((paper) => (
                <div key={paper.title} className="group flex items-center justify-between p-6 bg-white border border-blush/10 rounded-2xl hover:border-wine/20 transition-all cursor-pointer shadow-sm">
                  <div>
                    <h4 className="font-medium text-ink group-hover:text-wine transition-colors">{paper.title}</h4>
                    <p className="text-slate text-xs mt-1">{paper.journal} • {paper.year}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate group-hover:text-wine transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accreditation */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center bg-sage/5 border border-sage/10 rounded-[3rem] p-12 md:p-20">
             <div className="flex justify-center mb-8">
               <Award className="w-12 h-12 text-sage opacity-50" />
             </div>
             <h2 className="font-serif italic text-3xl text-wine mb-6">Clinical Integrity</h2>
             <p className="text-slate leading-relaxed mb-10">
               Every offering at Jules in Bloom is rooted in continuous clinical study and ethical practice. We believe that true wellness requires both heart and evidence.
             </p>
             <div className="flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-2 text-[0.65rem] font-bold text-sage uppercase tracking-widest">
                  <FileText className="w-4 h-4" /> Ethics Framework
                </div>
                <div className="flex items-center gap-2 text-[0.65rem] font-bold text-sage uppercase tracking-widest">
                  <FileText className="w-4 h-4" /> Peer Review Process
                </div>
             </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
