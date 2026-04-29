export interface Event {
  id: string;
  date: string; // ISO string 
  title: string;
  location: string;
  type: string;
  link: string;
  description?: string;
  month?: string;
  day?: string;
}

export const EVENTS: Event[] = [
  {
    id: 'new-moon-sound-bath',
    date: '2026-05-15T19:00:00',
    month: 'May',
    day: '15',
    title: 'New Moon Sound Bath',
    location: 'Candler Park, Atlanta',
    type: 'In-person',
    link: '#register',
    description: 'A deep restorative journey with crystal singing bowls under the new moon.'
  },
  {
    id: 'yoga-nervous-system',
    date: '2026-05-22T10:00:00',
    month: 'May',
    day: '22',
    title: 'Yoga for the Nervous System',
    location: 'Virtual Workshop',
    type: 'Online',
    link: '#register',
    description: 'Somatic tools and gentle vinyasa to recalibrate your stress response.'
  },
  {
    id: 'solstice-somatic-retreat',
    date: '2026-06-05T16:00:00',
    month: 'Jun',
    day: '05',
    title: 'Solstice Somatic Retreat',
    location: 'Blue Ridge Mountains',
    type: 'Retreat',
    link: '#register',
    description: 'A weekend of immersion into nature, movement, and silence.'
  }
];
