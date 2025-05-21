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
  isSpecial?: boolean;
}

export const navLinks: NavItem[] = [
  {
    id: 'about',
    labelKey: 'about',
    children: [
      {
        id: 'history',
        labelKey: 'historyHeritage',
        href: '/about?tab=history'
      },
      {
        id: 'mission',
        labelKey: 'missionVision',
        href: '/about'
      },
      {
        id: 'leadership',
        labelKey: 'leadership',
        href: '/about?tab=leadership'
      },
      {
        id: 'rankings',
        labelKey: 'rankings',
        href: '/about?tab=rankings'
      },
      {
        id: 'infrastructure',
        labelKey: 'infrastructure',
        href: '/about?tab=infrastructure'
      },
      {
        id: 'tour',
        labelKey: '3dTour',
        href: '/about/virtual-tour'
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
        id: 'commission',
        labelKey: 'admissionsCommittee',
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
        labelKey: 'internationalApplicants',
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
      },
      {
        id: 'admissions-contact',
        labelKey: 'admissionsContact',
        href: '/admissions#contact'
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
        href: '/institutes/pedagogy'
      },
      {
        id: 'economics',
        labelKey: 'economicsInstitute',
        href: '/institutes/economics'
      },
      {
        id: 'symbat',
        labelKey: 'symbatInstitute',
        href: '/institutes/symbat'
      },
      {
        id: 'international-dept',
        labelKey: 'internationalDepartment',
        href: '/international/contact'
      }
    ]
  },
  {
    id: 'international',
    labelKey: 'international',
    children: [
      {
        id: 'partners',
        labelKey: 'partnerUniversities',
        href: '/international/partners'
      },
      {
        id: 'international-students',
        labelKey: 'internationalStudents',
        href: '/international/students'
      },
      {
        id: 'international-faculty',
        labelKey: 'internationalFaculty',
        href: '/international/faculty'
      },
      {
        id: 'international-contacts',
        labelKey: 'internationalContacts',
        href: '/international/contact'
      }
    ]
  },
  {
    id: 'contact',
    labelKey: 'contacts',
    href: '/contact'
  },
  {
    id: 'college',
    labelKey: 'college',
    href: '/college',
    isSpecial: true
  }
];
