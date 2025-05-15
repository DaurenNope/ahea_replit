export type ProgramLevel = 'bachelor' | 'master' | 'phd';

export interface Program {
  id: string;
  level: ProgramLevel;
  institute: string;
  duration: number;
  studyForm: 'full-time' | 'part-time' | 'distance' | 'hybrid';
  credits: number;
}

export const programs: Program[] = [
  // Pedagogy Institute Programs
  {
    id: 'business-administration',
    level: 'bachelor',
    institute: 'pedagogy',
    duration: 4,
    studyForm: 'full-time',
    credits: 240
  },
  {
    id: 'law',
    level: 'bachelor',
    institute: 'pedagogy',
    duration: 4,
    studyForm: 'full-time',
    credits: 240
  },
  {
    id: 'education',
    level: 'bachelor',
    institute: 'pedagogy',
    duration: 4,
    studyForm: 'full-time',
    credits: 240
  },
  {
    id: 'psychology',
    level: 'bachelor',
    institute: 'pedagogy',
    duration: 4,
    studyForm: 'full-time',
    credits: 240
  },
  {
    id: 'education-leadership',
    level: 'master',
    institute: 'pedagogy',
    duration: 2,
    studyForm: 'full-time',
    credits: 120
  },
  {
    id: 'business-management',
    level: 'master',
    institute: 'pedagogy',
    duration: 2,
    studyForm: 'full-time',
    credits: 120
  },
  {
    id: 'legal-studies',
    level: 'master',
    institute: 'pedagogy',
    duration: 2,
    studyForm: 'full-time',
    credits: 120
  },
  {
    id: 'educational-psychology',
    level: 'phd',
    institute: 'pedagogy',
    duration: 3,
    studyForm: 'full-time',
    credits: 180
  },

  // Economics Institute Programs
  {
    id: 'computer-science',
    level: 'bachelor',
    institute: 'economics',
    duration: 4,
    studyForm: 'full-time',
    credits: 240
  },
  {
    id: 'economics',
    level: 'bachelor',
    institute: 'economics',
    duration: 4,
    studyForm: 'full-time',
    credits: 240
  },
  {
    id: 'finance',
    level: 'bachelor',
    institute: 'economics',
    duration: 4,
    studyForm: 'full-time',
    credits: 240
  },
  {
    id: 'statistics',
    level: 'bachelor',
    institute: 'economics',
    duration: 4,
    studyForm: 'full-time',
    credits: 240
  },
  {
    id: 'economics-advanced',
    level: 'master',
    institute: 'economics',
    duration: 2,
    studyForm: 'full-time',
    credits: 120
  },
  {
    id: 'data-science',
    level: 'master',
    institute: 'economics',
    duration: 2,
    studyForm: 'full-time',
    credits: 120
  },
  {
    id: 'information-systems',
    level: 'master',
    institute: 'economics',
    duration: 2,
    studyForm: 'full-time',
    credits: 120
  },
  {
    id: 'economics-doctorate',
    level: 'phd',
    institute: 'economics',
    duration: 3,
    studyForm: 'full-time',
    credits: 180
  },

  // Symbat Institute Programs
  {
    id: 'fashion-design',
    level: 'bachelor',
    institute: 'symbat',
    duration: 4,
    studyForm: 'full-time',
    credits: 240
  },
  {
    id: 'interior-design',
    level: 'bachelor',
    institute: 'symbat',
    duration: 4,
    studyForm: 'full-time',
    credits: 240
  },
  {
    id: 'graphic-design',
    level: 'bachelor',
    institute: 'symbat',
    duration: 4,
    studyForm: 'full-time',
    credits: 240
  },
  {
    id: 'textile-technology',
    level: 'bachelor',
    institute: 'symbat',
    duration: 4,
    studyForm: 'full-time',
    credits: 240
  },
  {
    id: 'fashion-design-advanced',
    level: 'master',
    institute: 'symbat',
    duration: 2,
    studyForm: 'full-time',
    credits: 120
  },
  {
    id: 'interior-design-advanced',
    level: 'master',
    institute: 'symbat',
    duration: 2,
    studyForm: 'full-time',
    credits: 120
  },
  {
    id: 'design-studies',
    level: 'phd',
    institute: 'symbat',
    duration: 3,
    studyForm: 'full-time',
    credits: 180
  }
];
