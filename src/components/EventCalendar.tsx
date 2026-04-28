import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  format, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  eachDayOfInterval, 
  isSameMonth, 
  isSameDay, 
  addMonths, 
  subMonths,
  parseISO
} from 'date-fns';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Event {
  id: string;
  date: string; // ISO string 
  title: string;
  location: string;
  type: string;
  link: string;
  description?: string;
}

const events: Event[] = [
  {
    id: 'new-moon-sound-bath',
    date: '2026-05-15T19:00:00',
    title: 'New Moon Sound Bath',
    location: 'Candler Park, Atlanta',
    type: 'In-person',
    link: '#register',
    description: 'A deep restorative journey with crystal singing bowls under the new moon.'
  },
  {
    id: 'yoga-nervous-system',
    date: '2026-05-22T10:00:00',
    title: 'Yoga for the Nervous System',
    location: 'Virtual Workshop',
    type: 'Online',
    link: '#register',
    description: 'Somatic tools and gentle vinyasa to recalibrate your stress response.'
  },
  {
    id: 'solstice-somatic-retreat',
    date: '2026-06-05T16:00:00',
    title: 'Solstice Somatic Retreat',
    location: 'Blue Ridge Mountains',
    type: 'Retreat',
    link: '#register',
    description: 'A weekend of immersion into nature, movement, and silence.'
  }
];

export default function EventCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 4, 1)); // Start at May 2026
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const calendarDays = eachDayOfInterval({
    start: startDate,
    end: endDate,
  });

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  const getEventsForDay = (day: Date) => {
    return events.filter(event => isSameDay(parseISO(event.date), day));
  };

  const generateGoogleCalendarLink = (event: Event) => {
    const startDate = parseISO(event.date);
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // 1 hour duration
    const formatStr = "yyyyMMdd'T'HHmmss'Z'";
    const startStr = format(startDate, formatStr);
    const endStr = format(endDate, formatStr);
    
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: event.title,
      details: event.description || '',
      location: event.location,
      dates: `${startStr}/${endStr}`
    });
    
    return `https://www.google.com/calendar/render?${params.toString()}`;
  };

  return (
    <div className="bg-cream rounded-[2rem] border border-blush/20 overflow-hidden shadow-xl shadow-wine/5">
      {/* Calendar Header */}
      <div className="flex items-center justify-between p-8 border-b border-blush/10">
        <h3 className="font-serif italic text-2xl text-wine">
          {format(currentDate, 'MMMM yyyy')}
        </h3>
        <div className="flex gap-2">
          <button 
            onClick={prevMonth}
            className="p-2 hover:bg-[#d4e5cc] rounded-full transition-colors text-sage"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextMonth}
            className="p-2 hover:bg-[#d4e5cc] rounded-full transition-colors text-sage"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 border-b border-blush/10">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="py-4 text-center text-[0.6rem] uppercase tracking-widest font-bold text-slate/60">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7">
        {calendarDays.map((day, i) => {
          const dayEvents = getEventsForDay(day);
          const isSelected = selectedDate && isSameDay(day, selectedDate);
          const isCurrentMonth = isSameMonth(day, monthStart);

          return (
            <div 
              key={day.toString()}
              onClick={() => setSelectedDate(day)}
              className={`min-h-[100px] p-2 border-r border-b border-blush/5 relative cursor-pointer group transition-colors ${
                !isCurrentMonth ? 'bg-ink/[0.02]' : 'hover:bg-[#d4e5cc]/30'
              } ${isSelected ? 'bg-[#d4e5cc]/50' : ''}`}
            >
              <span className={`text-xs font-medium ${isCurrentMonth ? 'text-ink' : 'text-slate/30'}`}>
                {format(day, 'd')}
              </span>

              <div className="mt-2 space-y-1">
                {dayEvents.map(event => (
                  <div 
                    key={event.title}
                    className="text-[0.6rem] leading-tight p-1.5 rounded bg-wine/10 text-wine border border-wine/5 truncate font-medium"
                    title={event.title}
                  >
                    {event.title}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Day Events Detail */}
      <AnimatePresence mode="wait">
        {selectedDate && getEventsForDay(selectedDate).length > 0 && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-wine/5 p-8 border-t border-wine/10"
          >
            <div className="flex items-center gap-2 mb-4 text-wine font-medium text-sm">
              <CalendarIcon className="w-4 h-4" />
              Events for {format(selectedDate, 'MMMM d, yyyy')}
            </div>
            
            <div className="space-y-6">
              {getEventsForDay(selectedDate).map(event => (
                <div key={event.title} className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h4 className="font-serif italic text-xl text-wine mb-1">{event.title}</h4>
                    <p className="text-slate text-sm mb-2">{event.location} • {format(parseISO(event.date), 'p')}</p>
                    <p className="text-slate/80 text-xs max-w-lg leading-relaxed">{event.description}</p>
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={generateGoogleCalendarLink(event)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[0.65rem] uppercase tracking-widest font-bold text-sage-600 bg-sage/10 hover:bg-sage/20 px-4 py-2.5 rounded-full transition-colors"
                    >
                      Add to Calendar <ExternalLink className="w-3 h-3" />
                    </a>
                    <Link 
                      to={`/events/${event.id}`}
                      className="text-[0.65rem] uppercase tracking-widest font-bold text-white bg-wine hover:bg-wine/90 px-6 py-2.5 rounded-full transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
