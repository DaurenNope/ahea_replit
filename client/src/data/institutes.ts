export interface Institute {
  id: string;
  image: string;
  programCount: number;
  studentCount: number;
  facultyCount: number;
  established: number;
  primaryColor?: string; // Institution-specific primary color
  secondaryColor?: string; // Institution-specific secondary color
  logoImage?: string; // Institution-specific logo
}

// Get the current hostname and port
const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  return 'http://localhost:5000';
};

export const institutes: Institute[] = [
  {
    id: 'pedagogy',
    image: 'photo-1524178232363-1fb2b075b655',
    programCount: 14,
    studentCount: 1200,
    facultyCount: 110,
    established: 1997,
    primaryColor: '#2e7d32', // Green to match the logo
    secondaryColor: '#1b5e20',
    logoImage: `${getBaseUrl()}/pedagogy.png`
  },
  {
    id: 'economics',
    image: 'photo-1516321497487-e288fb19713f',
    programCount: 13,
    studentCount: 950,
    facultyCount: 95,
    established: 1998,
    primaryColor: '#1565c0', // Blue to match the logo
    secondaryColor: '#0d47a1',
    logoImage: `${getBaseUrl()}/economy.png`
  },
  {
    id: 'symbat',
    image: 'photo-1581078426770-6d336e5de7bf',
    programCount: 12,
    studentCount: 850,
    facultyCount: 80,
    established: 2003,
    primaryColor: '#f0a500', // Gold/amber to match the logo
    secondaryColor: '#e09600',
    logoImage: `${getBaseUrl()}/designandtech.png`
  }
];
