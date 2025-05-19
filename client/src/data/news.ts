export interface NewsItem {
  id: string;
  image: string;
  date: string;
  category?: string;
  institute?: string;
}

export interface Event {
  id: string;
  date: string;
  category?: string;
  institute?: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 'graduation',
    image: 'photo-1523050854058-8df90110c9f1',
    date: '2023-05-25',
    category: 'academics',
    institute: 'all'
  },
  {
    id: 'research',
    image: 'photo-1560439514-4e9645039924',
    date: '2023-05-12',
    category: 'research',
    institute: 'economics'
  },
  {
    id: 'design',
    // Using Pixabay image
    image: 'photo-1581078426770-6d336e5de7bf',
    date: '2023-04-30',
    category: 'academics',
    institute: 'symbat'
  },
  {
    id: 'turkish-center',
    image: 'photo-1523580846011-d3a5bc25702b',
    date: '2023-04-15',
    category: 'international',
    institute: 'all'
  },
  {
    id: 'international-conference',
    image: 'photo-1540575467063-178a50c2df87',
    date: '2023-03-20',
    category: 'events',
    institute: 'economics'
  },
  {
    id: 'award',
    image: 'photo-1546539782-6c5d68c3d239',
    date: '2023-03-05',
    category: 'achievements',
    institute: 'pedagogy'
  }
];

export const upcomingEvents: Event[] = [
  {
    id: 'open-house',
    date: '2023-06-01',
    category: 'admissions',
    institute: 'all'
  },
  {
    id: 'orientation',
    date: '2023-06-15',
    category: 'students',
    institute: 'all'
  },
  {
    id: 'summer-school',
    date: '2023-07-05',
    category: 'academics',
    institute: 'pedagogy'
  },
  {
    id: 'webinar',
    date: '2023-07-20',
    category: 'research',
    institute: 'economics'
  },
  {
    id: 'faculty-conference',
    date: '2023-08-10',
    category: 'academics',
    institute: 'all'
  },
  {
    id: 'welcome-day',
    date: '2023-09-01',
    category: 'students',
    institute: 'all'
  }
];

// Export aliases for backward compatibility
export const news = newsItems;
export const events = upcomingEvents;
