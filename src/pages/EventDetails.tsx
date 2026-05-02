import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ArrowLeft, Share2, CalendarPlus } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const allEvents = [
  {
    id: 'new-moon-sound-bath',
    date: '2026-05-15T19:00:00',
    title: 'New Moon Sound Bath',
    location: 'Candler Park, Atlanta',
    type: 'In-person',
    link: 'https://example.com/register-1',
    description: `A deep restorative journey with crystal singing bowls under the new moon. As the lunar cycle resets, we invite you to do the same. This 90-minute session uses Frosted Alchemy Crystal bowls to guide you into a state of deep Theta brainwaves—a space of profound restorative rest where the mind grows quiet and the body can begin its innate healing process.

    What to bring:
    - Yoga mat or comfortable cushion
    - Blanket and eye mask
    - Water bottle
    - An open heart`,
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'yoga-nervous-system',
    date: '2026-05-22T10:00:00',
    title: 'Yoga for the Nervous System',
    location: 'Virtual Workshop',
    type: 'Online',
    link: 'https://example.com/register-2',
    description: `Somatic tools and gentle vinyasa to recalibrate your stress response. In this interactive virtual workshop, Jules will lead you through a series of trauma-informed movements designed to engage the vagus nerve and promote a sense of safety and grounding. 
    
    Perfect for anyone dealing with burnout, chronic stress, or looking to deepen their mind-body connection from the comfort of their home.`,
    image: 'https://i.postimg.cc/zfThWc88/IMG-4031.jpg'
  },
  {
    id: 'solstice-somatic-retreat',
    date: '2026-06-05T16:00:00',
    title: 'Solstice Somatic Retreat',
    location: 'Blue Ridge Mountains',
    type: 'Retreat',
    link: 'https://example.com/register-3',
    description: `A weekend of immersion into nature, movement, and silence. As we approach the longest day of the year, we gather in the heart of the Blue Ridge Mountains to celebrate the light within and around us. 
    
    This retreat includes daily yoga, sound ceremonies, forest bathing, and research-led workshops on embodied wellness. All meals are provided and are locally sourced and nourishing.`,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200'
  }
];

export default function EventDetails() {
  const { eventId } = useParams();
  const event = allEvents.find(e => e.id === eventId);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-cream gap-4">
        <h1 className="font-serif italic text-3xl text-wine">Event not found</h1>
        <Link to="/" className="text-sage font-medium hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  const eventDate = parseISO(event.date);

  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/30" />
          <div className="absolute inset-x-0 bottom-0 p-8 md:p-20 bg-gradient-to-t from-cream via-cream/80 to-transparent">
             <div className="max-w-6xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-widest font-bold text-wine mb-6 hover:translate-x-[-4px] transition-transform">
                  <ArrowLeft className="w-4 h-4" /> Back to Gatherings
                </Link>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div>
                    <span className="inline-block text-[0.6rem] tracking-widest uppercase font-bold px-3 py-1 bg-sage/10 text-sage rounded-full mb-4">
                      {event.type}
                    </span>
                    <h1 className="font-serif italic text-4xl md:text-6xl text-wine leading-tight">
                      {event.title}
                    </h1>
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_350px] gap-16 items-start">
            <div className="space-y-8">
              <div className="flex flex-wrap gap-8 py-8 border-y border-blush/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#d4e5cc] rounded-full flex items-center justify-center text-sage">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[0.6rem] uppercase tracking-widest font-bold text-slate">Date</p>
                    <p className="text-ink font-medium text-sm">{format(eventDate, 'MMMM d, yyyy')}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#d4e5cc] rounded-full flex items-center justify-center text-sage">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[0.6rem] uppercase tracking-widest font-bold text-slate">Time</p>
                    <p className="text-ink font-medium text-sm">{format(eventDate, 'p')}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#d4e5cc] rounded-full flex items-center justify-center text-sage">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[0.6rem] uppercase tracking-widest font-bold text-slate">Location</p>
                    <p className="text-ink font-medium text-sm">{event.location}</p>
                  </div>
                </div>
              </div>

              <div className="prose prose-stone max-w-none">
                 <p className="text-slate text-[0.95rem] leading-[1.85] whitespace-pre-line">
                   {event.description}
                 </p>
              </div>

              <div className="flex gap-4 pt-8">
                <button className="flex items-center gap-2 text-[0.65rem] uppercase tracking-widest font-bold text-slate hover:text-wine transition-colors">
                  <Share2 className="w-4 h-4" /> Share Event
                </button>
                <a 
                  href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&location=${encodeURIComponent(event.location)}&dates=${format(eventDate, "yyyyMMdd'T'HHmmss'Z'")}/${format(new Date(eventDate.getTime() + 3600000), "yyyyMMdd'T'HHmmss'Z'")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[0.65rem] uppercase tracking-widest font-bold text-slate hover:text-wine transition-colors"
                >
                  <CalendarPlus className="w-4 h-4" /> Add to Calendar
                </a>
              </div>
            </div>

            {/* Sidebar / CTA */}
            <aside className="bg-white/50 border border-blush/20 rounded-3xl p-8 md:sticky md:top-28">
              <h3 className="font-serif italic text-2xl text-wine mb-4">Registration</h3>
              <p className="text-slate text-sm mb-8 leading-relaxed">
                Spaces are limited for this intimate gathering. Secure your spot today to join us in community.
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate uppercase tracking-widest text-[0.65rem] font-bold">Price</span>
                  <span className="text-ink font-serif italic text-lg">$35.00</span>
                </div>
                <div className="flex justify-between items-center text-sm pb-4 border-b border-blush/10">
                  <span className="text-slate uppercase tracking-widest text-[0.65rem] font-bold">Availability</span>
                  <span className="text-sage font-medium">Limited Spots</span>
                </div>
              </div>

              <a 
                href={event.link}
                className="mt-8 block w-full text-center bg-wine text-white px-8 py-4 rounded-full text-[0.7rem] uppercase tracking-[0.15em] font-bold hover:bg-wine/90 transition-all shadow-md"
              >
                Register Now
              </a>

              <p className="mt-4 text-center text-[0.6rem] text-slate/60">
                Trauma-informed & Queer-affirming space.
              </p>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
