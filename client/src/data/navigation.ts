export interface NavChild {
  id: string;
  labelKey: string;
  href: string;
}

export interface NavItem {
  id: string;
  labelKey: string;
  href?: string;
  children?: NavChild[];
}

export const navLinks: NavItem[] = [
  {
    id: 'about',
    labelKey: 'about',
    children: [
      {
        id: 'mission',
        labelKey: 'missionVision',
        href: '/about'
      },
      {
        id: 'history',
        labelKey: 'historyHeritage',
        href: '/about?tab=history'
      },
      {
        id: 'leadership',
        labelKey: 'leadership',
        href: '/about?tab=leadership'
      },
      {
        id: 'accreditation',
        labelKey: 'accreditation',
        href: '/about?tab=accreditation'
      },
      {
        id: 'rankings',
        labelKey: 'rankings',
        href: '/about?tab=rankings'
      },
      {
        id: 'contact',
        labelKey: 'contactUs',
        href: '/contact'
      }
    ]
  },
  {
    id: 'admissions',
    labelKey: 'admissions',
    children: [
      {
        id: 'howToApply',
        labelKey: 'howToApply',
        href: '/admissions'
      },
      {
        id: 'undergraduate',
        labelKey: 'undergraduate',
        href: '/admissions?tab=undergraduate'
      },
      {
        id: 'graduate',
        labelKey: 'graduate',
        href: '/admissions?tab=graduate'
      },
      {
        id: 'international',
        labelKey: 'international',
        href: '/admissions?tab=international'
      },
      {
        id: 'tuition',
        labelKey: 'tuitionScholarships',
        href: '/admissions/tuition'
      },
      {
        id: 'faq',
        labelKey: 'faq',
        href: '/admissions#faq'
      }
    ]
  },
  {
    id: 'institutes',
    labelKey: 'institutes',
    children: [
      {
        id: 'pedagogy',
        labelKey: 'pedagogyInstitute',
        href: '/institutes?tab=pedagogy'
      },
      {
        id: 'economics',
        labelKey: 'economicsInstitute',
        href: '/institutes?tab=economics'
      },
      {
        id: 'symbat',
        labelKey: 'symbatInstitute',
        href: '/institutes?tab=symbat'
      },
      {
        id: 'allPrograms',
        labelKey: 'allPrograms',
        href: '/programs'
      }
    ]
  },
  {
    id: 'studentLife',
    labelKey: 'studentLife',
    children: [
      {
        id: 'campusLife',
        labelKey: 'campusLife',
        href: '/student-life'
      },
      {
        id: 'accommodation',
        labelKey: 'accommodation',
        href: '/student-life/accommodation'
      },
      {
        id: 'sports',
        labelKey: 'sportsRecreation',
        href: '/student-life/sports'
      },
      {
        id: 'clubs',
        labelKey: 'clubsSocieties',
        href: '/student-life/clubs'
      }
    ]
  },
  {
    id: 'international',
    labelKey: 'international',
    children: [
      {
        id: 'internationalStudents',
        labelKey: 'internationalStudents',
        href: '/international'
      },
      {
        id: 'partners',
        labelKey: 'globalPartners',
        href: '/international/partners'
      },
      {
        id: 'exchange',
        labelKey: 'exchangePrograms',
        href: '/international/exchange'
      },
      {
        id: 'turkish',
        labelKey: 'turkishCenter',
        href: '/international/turkish-center'
      }
    ]
  },
  {
    id: 'news',
    labelKey: 'newsEvents',
    href: '/news'
  }
];
