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

export const institutes: Institute[] = [
  {
    id: 'pedagogy',
    image: 'photo-1524178232363-1fb2b075b655',
    programCount: 14,
    studentCount: 1200,
    facultyCount: 110,
    established: 1997,
    primaryColor: '#3b82f6', // Blue
    secondaryColor: '#1e40af',
    logoImage: '/logos/pedagogy-logo.png'
  },
  {
    id: 'economics',
    image: 'photo-1516321497487-e288fb19713f',
    programCount: 13,
    studentCount: 950,
    facultyCount: 95,
    established: 1998,
    primaryColor: '#10b981', // Green
    secondaryColor: '#065f46',
    logoImage: '/logos/economics-logo.png'
  },
  {
    id: 'symbat',
    image: 'photo-1581078426770-6d336e5de7bf',
    programCount: 12,
    studentCount: 850,
    facultyCount: 80,
    established: 2003,
    primaryColor: '#ec4899', // Pink
    secondaryColor: '#be185d',
    logoImage: '/logos/symbat-logo.png'
  }
];
