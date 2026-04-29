import React, { useState } from 'react';
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
  isBefore,
  startOfToday,
  parseISO
} from 'date-fns';
import { ChevronLeft, ChevronRight, Clock, User, MessageSquare, Send, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { EVENTS } from '../constants';

interface TimeSlot {
  time: string;
  available: boolean;
}

const timeSlots: TimeSlot[] = [
  { time: '09:00 AM', available: true },
  { time: '10:30 AM', available: true },
  { time: '01:00 PM', available: false },
  { time: '02:30 PM', available: true },
  { time: '04:00 PM', available: true },
  { time: '05:30 PM', available: true },
];

export default function BookingCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingStep, setBookingStep] = useState<'calendar' | 'details' | 'success'>('calendar');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Private session',
    message: ''
  });

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

  const handleDateSelect = (day: Date) => {
    if (isBefore(day, startOfToday())) return;
    setSelectedDate(day);
    setSelectedTime(null);
  };

  const getEventsForDay = (day: Date) => {
    return EVENTS.filter(event => isSameDay(parseISO(event.date), day));
  };

  const handleProceed = () => {
    if (selectedDate && selectedTime) {
      setBookingStep('details');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking submission
    setBookingStep('success');
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl shadow-wine/5 overflow-hidden border border-blush/10">
      <div className="grid md:grid-cols-2">
        {/* Left Side: Calendar */}
        <div className="p-8 border-r border-blush/10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif italic text-2xl text-wine">
              {format(currentDate, 'MMMM yyyy')}
            </h3>
            <div className="flex gap-2">
              <button 
                onClick={prevMonth}
                className="p-2 hover:bg-sage/10 rounded-full transition-colors text-sage"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextMonth}
                className="p-2 hover:bg-sage/10 rounded-full transition-colors text-sage"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 mb-4">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
              <div key={day} className="text-center text-[0.6rem] uppercase tracking-widest font-bold text-slate/40 py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((day) => {
              const isSelected = selectedDate && isSameDay(day, selectedDate);
              const isCurrentMonth = isSameMonth(day, monthStart);
              const isPast = isBefore(day, startOfToday());
              const dayEvents = getEventsForDay(day);
              const hasEvents = dayEvents.length > 0;

              return (
                <button
                  key={day.toString()}
                  onClick={() => handleDateSelect(day)}
                  disabled={isPast}
                  className={`
                    flex flex-col items-center justify-center rounded-xl text-sm transition-all h-12 w-full
                    ${!isCurrentMonth ? 'text-slate/20' : 'text-ink'}
                    ${isPast ? 'opacity-20 cursor-not-allowed' : 'hover:bg-sage/10'}
                    ${isSelected ? 'bg-wine text-white! font-bold shadow-lg shadow-wine/20' : ''}
                    relative
                  `}
                >
                  {format(day, 'd')}
                  {hasEvents && !isSelected && (
                    <div className="absolute bottom-1.5 w-1 h-1 bg-sage rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
          
          <div className="mt-8 pt-8 border-t border-blush/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-sage rounded-full" />
                <span className="text-[0.55rem] uppercase tracking-widest font-bold text-slate/60">Public Events</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-wine rounded-full" />
                <span className="text-[0.55rem] uppercase tracking-widest font-bold text-slate/60">Selected</span>
              </div>
            </div>
            <p className="text-xs text-slate/80 leading-relaxed italic">
              Booking requests are subject to confirmation. Juls will contact you within 24 hours to finalize details.
            </p>
          </div>
        </div>

        {/* Right Side: Slots or Details */}
        <div className="bg-sage/5 p-8 flex flex-col">
          <AnimatePresence mode="wait">
            {bookingStep === 'calendar' && (
              <motion.div
                key="slots"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1 flex flex-col"
              >
                <div className="mb-8">
                  <h4 className="font-serif italic text-2xl text-wine mb-2">Select Time</h4>
                  <p className="text-slate text-sm">
                    {selectedDate ? format(selectedDate, 'EEEE, MMMM do') : 'Please select a date first'}
                  </p>
                </div>

                {selectedDate ? (
                  <div className="space-y-3 flex-1 overflow-y-auto pr-1">
                    {getEventsForDay(selectedDate).length > 0 && (
                      <div className="p-4 bg-sage/10 border border-sage/20 rounded-2xl flex gap-3 mb-4">
                        <AlertCircle className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-sage uppercase tracking-wider mb-1">Notice</p>
                          <p className="text-xs text-slate/80 leading-relaxed">
                            There is a scheduled public event on this day: <strong>{getEventsForDay(selectedDate)[0].title}</strong>. Private bookings may have limited availability.
                          </p>
                        </div>
                      </div>
                    )}

                    {timeSlots.map((slot) => (
                      <button
                        key={slot.time}
                        disabled={!slot.available}
                        onClick={() => setSelectedTime(slot.time)}
                        className={`
                          w-full p-4 rounded-2xl border text-sm font-medium transition-all flex items-center justify-between
                          ${!slot.available 
                            ? 'bg-slate/5 border-slate/10 text-slate/40 cursor-not-allowed' 
                            : selectedTime === slot.time
                              ? 'bg-wine text-white border-wine shadow-md shadow-wine/10'
                              : 'bg-white border-blush/20 text-ink hover:border-wine/30 group'
                          }
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <Clock className={`w-4 h-4 ${selectedTime === slot.time ? 'text-white' : 'text-sage group-hover:text-wine'}`} />
                          {slot.time}
                        </div>
                        {slot.available ? (
                          <span className={`text-[0.6rem] uppercase tracking-widest ${selectedTime === slot.time ? 'text-white/80' : 'text-sage'}`}>Available</span>
                        ) : (
                          <span className="text-[0.6rem] uppercase tracking-widest">Booked</span>
                        )}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                    <div className="w-16 h-16 bg-wine/5 rounded-full flex items-center justify-center mb-4">
                      <ChevronLeft className="w-6 h-6 text-wine animate-pulse" />
                    </div>
                    <p className="text-slate text-sm italic">Choose a date on the calendar to see available slots for your gathering.</p>
                  </div>
                )}

                <button
                  onClick={handleProceed}
                  disabled={!selectedDate || !selectedTime}
                  className="mt-8 w-full py-4 bg-wine text-white rounded-full font-bold text-[0.7rem] uppercase tracking-widest shadow-xl shadow-wine/20 transition-all hover:translate-y-[-2px] disabled:opacity-50 disabled:translate-y-0"
                >
                  Continue to Details
                </button>
              </motion.div>
            )}

            {bookingStep === 'details' && (
              <motion.div
                key="details"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1"
              >
                <div className="mb-8">
                  <button 
                    onClick={() => setBookingStep('calendar')}
                    className="text-sage text-xs font-bold uppercase tracking-widest mb-4 hover:text-wine transition-colors"
                  >
                    ← Back to Calendar
                  </button>
                  <h4 className="font-serif italic text-2xl text-wine mb-2">Booking Info</h4>
                  <p className="text-slate text-sm">
                    {format(selectedDate!, 'MMM do')} at {selectedTime}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[0.6rem] uppercase tracking-widest font-bold text-slate/60 px-1">Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-sage" />
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white border border-blush/20 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-wine/20 focus:border-wine"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[0.6rem] uppercase tracking-widest font-bold text-slate/60 px-1">Type of Gathering</label>
                    <select 
                      value={formData.type}
                      onChange={e => setFormData({...formData, type: e.target.value})}
                      className="w-full bg-white border border-blush/20 rounded-2xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-wine/20 focus:border-wine appearance-none"
                    >
                      <option>Private Session</option>
                      <option>Bachelor / Bachelorette</option>
                      <option>Corporate Wellness</option>
                      <option>Custom Retreat</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[0.6rem] uppercase tracking-widest font-bold text-slate/60 px-1">Message (Optional)</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-sage" />
                      <textarea 
                        value={formData.message}
                        onChange={e => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-white border border-blush/20 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-wine/20 focus:border-wine h-32 resize-none"
                        placeholder="Tell us about your event..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-wine text-white rounded-full font-bold text-[0.7rem] uppercase tracking-widest shadow-xl shadow-wine/20 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2"
                  >
                    Send Booking Request <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </motion.div>
            )}

            {bookingStep === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex-1 flex flex-col items-center justify-center text-center p-8"
              >
                <div className="w-24 h-24 bg-sage/20 rounded-full flex items-center justify-center mb-8">
                  <Send className="w-10 h-10 text-sage" />
                </div>
                <h4 className="font-serif italic text-3xl text-wine mb-4">Request Sent</h4>
                <p className="text-slate text-sm leading-relaxed mb-8">
                  Thank you, {formData.name}. Your booking request for a {formData.type} on {format(selectedDate!, 'MMMM do')} has been received. Juls will be in touch shortly to confirm.
                </p>
                <button
                  onClick={() => {
                    setBookingStep('calendar');
                    setSelectedDate(null);
                    setSelectedTime(null);
                  }}
                  className="text-wine text-[0.7rem] uppercase tracking-[0.2em] font-bold hover:opacity-70 transition-opacity"
                >
                  Book another session
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
