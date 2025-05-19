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

export interface NavItem {
  title: string;
  path: string;
  children?: NavItem[];
}

// Navigation structure based on the spreadsheet for Pedagogy Institute
export const pedagogyNavigation: NavItem[] = [
  {
    title: 'Об Институте',
    path: '/institutions/pedagogy/about',
    children: [
      { title: 'История Института', path: '/institutions/pedagogy/about/history' },
      { title: 'Лицензии и аккредитации', path: '/institutions/pedagogy/about/licenses' },
      { title: 'Коллегиальное управление', path: '/institutions/pedagogy/about/governance' },
      { title: 'Структура Института', path: '/institutions/pedagogy/about/structure' },
      { title: 'Внутренние нормативные документы', path: '/institutions/pedagogy/about/documents' },
      { title: '3-D тур', path: '/institutions/pedagogy/about/tour' },
      { title: 'Вакансии', path: '/institutions/pedagogy/about/vacancies' },
      { title: 'Материалы конференций', path: '/institutions/pedagogy/about/conferences' },
      { title: 'Научный журнал «Вестник»', path: '/institutions/pedagogy/about/journal' }
    ]
  },
  {
    title: 'Образование',
    path: '/institutions/pedagogy/education',
    children: [
      { title: 'Кафедры', path: '/institutions/pedagogy/education/departments' },
      { title: 'Учебный процесс', path: '/institutions/pedagogy/education/process' },
      { title: 'Дополнительные образовательные программы (Minor)', path: '/institutions/pedagogy/education/minors' },
      { title: 'Библиотека', path: '/institutions/pedagogy/education/library' },
      { title: 'Гид студента', path: '/institutions/pedagogy/education/student-guide' },
      { title: 'Контакты приемной комисии', path: '/institutions/pedagogy/education/admission-contacts' },
      { title: 'Поддержка научной деятельности преподавателей', path: '/institutions/pedagogy/education/faculty-research-support' }
    ]
  },
  {
    title: 'Поступающим',
    path: '/institutions/pedagogy/admissions',
    children: [
      { title: 'Правила приема', path: '/institutions/pedagogy/admissions/rules' },
      { title: 'Бакалавриат', path: '/institutions/pedagogy/admissions/bachelor' },
      { title: 'Магистратура', path: '/institutions/pedagogy/admissions/master' },
      { title: 'Иностранным абитуриентам', path: '/institutions/pedagogy/admissions/international' },
      { title: 'Гранты и скидки', path: '/institutions/pedagogy/admissions/scholarships' },
      { title: 'Антиплагиат', path: '/institutions/pedagogy/admissions/anti-plagiarism' },
      { title: 'Контакты международного департамента', path: '/institutions/pedagogy/admissions/international-contacts' }
    ]
  },
  {
    title: 'Студенческая жизнь',
    path: '/institutions/pedagogy/campus',
    children: [
      { title: 'Студенческое самоуправление', path: '/institutions/pedagogy/campus/student-government' },
      { title: 'Клубы и кружки', path: '/institutions/pedagogy/campus/clubs' },
      { title: 'Общежитие', path: '/institutions/pedagogy/campus/dormitory' },
      { title: 'Клуб ЮНЕСКО', path: '/institutions/pedagogy/campus/unesco' },
      { title: 'Тематика дипломных и магистерских диссертаций', path: '/institutions/pedagogy/campus/thesis-topics' },
      { title: 'Иностранным студентам', path: '/institutions/pedagogy/campus/international-students' },
      { title: 'Иностранным профессорам', path: '/institutions/pedagogy/campus/international-faculty' }
    ]
  },
  {
    title: 'Выпускникам',
    path: '/institutions/pedagogy/alumni',
    children: [
      { title: 'Ассоциация выпускников', path: '/institutions/pedagogy/alumni/association' },
      { title: 'Центр трудоустройства и карьеры «Мансап»', path: '/institutions/pedagogy/alumni/career-center' },
      { title: 'Наши выпускники', path: '/institutions/pedagogy/alumni/notable' }
    ]
  },
  {
    title: 'Наука и инновации',
    path: '/institutions/pedagogy/science',
    children: [
      { title: 'Научные советы', path: '/institutions/pedagogy/science/councils' },
      { title: 'Научно-исследовательская работа ППС', path: '/institutions/pedagogy/science/faculty-research' },
      { title: 'Научно-исследовательская работа магистрантов (НИРМ)', path: '/institutions/pedagogy/science/masters-research' },
      { title: 'Научно-исследовательская работа студентов (НИРС)', path: '/institutions/pedagogy/science/student-research' }
    ]
  },
  {
    title: 'Международное сотрудничество',
    path: '/institutions/pedagogy/international',
    children: [
      { title: 'Университеты-партнеры', path: '/institutions/pedagogy/international/partners' },
      { title: 'Турецкий центр образования, науки и культуры', path: '/institutions/pedagogy/international/turkish-center' },
      { title: 'Академическая мобильность', path: '/institutions/pedagogy/international/mobility' },
      { title: 'Языковые курсы', path: '/institutions/pedagogy/international/language-courses' }
    ]
  },
  {
    title: 'Новости',
    path: '/institutions/pedagogy/news',
  },
  {
    title: 'Контакты',
    path: '/institutions/pedagogy/contacts',
  },
];

// Navigation structure for Economics Institute
// This is a placeholder - will need to be filled with actual structure
export const economicsNavigation: NavItem[] = [
  {
    title: 'Об Институте',
    path: '/institutions/economics/about',
    children: [
      { title: 'История Института', path: '/institutions/economics/about/history' },
      { title: 'Руководство', path: '/institutions/economics/about/leadership' },
      { title: 'Структура', path: '/institutions/economics/about/structure' }
    ]
  },
  // Other categories would be added here with similar structure
];

// Navigation structure for Symbat Institute
// This is a placeholder - will need to be filled with actual structure
export const symbatNavigation: NavItem[] = [
  {
    title: 'Об Институте',
    path: '/institutions/symbat/about',
    children: [
      { title: 'История Института', path: '/institutions/symbat/about/history' },
      { title: 'Миссия и цели', path: '/institutions/symbat/about/mission' },
      { title: 'Руководство', path: '/institutions/symbat/about/leadership' }
    ]
  },
  // Other categories would be added here with similar structure
];

// Function to get navigation structure by institution ID
export const getInstitutionNavigation = (institutionId: string): NavItem[] => {
  switch(institutionId) {
    case 'pedagogy':
      return pedagogyNavigation;
    case 'economics':
      return economicsNavigation;
    case 'symbat':
      return symbatNavigation;
    default:
      return pedagogyNavigation;
  }
};
