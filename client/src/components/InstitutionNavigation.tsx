import React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';

interface NavItem {
  title: string;
  path: string;
  children?: NavItem[];
}

interface InstitutionNavigationProps {
  institutionId: string;
}

const InstitutionNavigation: React.FC<InstitutionNavigationProps> = ({ institutionId }) => {
  const { t } = useTranslation();
  
  // Navigation structure based on the spreadsheet
  // This will be replaced with a proper API call or data file in the future
  const pedagogyNavigation: NavItem[] = [
    {
      title: 'Об Институте',
      path: `/institutions/${institutionId}/about`,
      children: [
        { title: 'История Института', path: `/institutions/${institutionId}/about/history` },
        { title: 'Лицензии и аккредитации', path: `/institutions/${institutionId}/about/licenses` },
        { title: 'Коллегиальное управление', path: `/institutions/${institutionId}/about/governance` },
        { title: 'Структура Института', path: `/institutions/${institutionId}/about/structure` },
        { title: 'Внутренние нормативные документы', path: `/institutions/${institutionId}/about/documents` },
        { title: '3-D тур', path: `/institutions/${institutionId}/about/tour` },
        { title: 'Вакансии', path: `/institutions/${institutionId}/about/vacancies` },
        { title: 'Материалы конференций', path: `/institutions/${institutionId}/about/conferences` },
        { title: 'Научный журнал «Вестник»', path: `/institutions/${institutionId}/about/journal` }
      ]
    },
    {
      title: 'Образование',
      path: `/institutions/${institutionId}/education`,
      children: [
        { title: 'Кафедры', path: `/institutions/${institutionId}/education/departments` },
        { title: 'Учебный процесс', path: `/institutions/${institutionId}/education/process` },
        { title: 'Дополнительные образовательные программы (Minor)', path: `/institutions/${institutionId}/education/minors` },
        { title: 'Библиотека', path: `/institutions/${institutionId}/education/library` },
        { title: 'Гид студента', path: `/institutions/${institutionId}/education/student-guide` },
        { title: 'Контакты приемной комисии', path: `/institutions/${institutionId}/education/admission-contacts` },
        { title: 'Поддержка научной деятельности преподавателей', path: `/institutions/${institutionId}/education/faculty-research-support` }
      ]
    },
    {
      title: 'Поступающим',
      path: `/institutions/${institutionId}/admissions`,
      children: [
        { title: 'Правила приема', path: `/institutions/${institutionId}/admissions/rules` },
        { title: 'Бакалавриат', path: `/institutions/${institutionId}/admissions/bachelor` },
        { title: 'Магистратура', path: `/institutions/${institutionId}/admissions/master` },
        { title: 'Иностранным абитуриентам', path: `/institutions/${institutionId}/admissions/international` },
        { title: 'Гранты и скидки', path: `/institutions/${institutionId}/admissions/scholarships` },
        { title: 'Антиплагиат', path: `/institutions/${institutionId}/admissions/anti-plagiarism` },
        { title: 'Контакты международного департамента', path: `/institutions/${institutionId}/admissions/international-contacts` }
      ]
    },
    {
      title: 'Студенческая жизнь',
      path: `/institutions/${institutionId}/campus`,
      children: [
        { title: 'Студенческое самоуправление', path: `/institutions/${institutionId}/campus/student-government` },
        { title: 'Клубы и кружки', path: `/institutions/${institutionId}/campus/clubs` },
        { title: 'Общежитие', path: `/institutions/${institutionId}/campus/dormitory` },
        { title: 'Клуб ЮНЕСКО', path: `/institutions/${institutionId}/campus/unesco` },
        { title: 'Тематика дипломных и магистерских диссертаций', path: `/institutions/${institutionId}/campus/thesis-topics` },
        { title: 'Иностранным студентам', path: `/institutions/${institutionId}/campus/international-students` },
        { title: 'Иностранным профессорам', path: `/institutions/${institutionId}/campus/international-faculty` }
      ]
    },
    {
      title: 'Выпускникам',
      path: `/institutions/${institutionId}/alumni`,
      children: [
        { title: 'Ассоциация выпускников', path: `/institutions/${institutionId}/alumni/association` },
        { title: 'Центр трудоустройства и карьеры «Мансап»', path: `/institutions/${institutionId}/alumni/career-center` },
        { title: 'Наши выпускники', path: `/institutions/${institutionId}/alumni/notable` }
      ]
    },
    {
      title: 'Наука и инновации',
      path: `/institutions/${institutionId}/science`,
      children: [
        { title: 'Научные советы', path: `/institutions/${institutionId}/science/councils` },
        { title: 'Научно-исследовательская работа ППС', path: `/institutions/${institutionId}/science/faculty-research` },
        { title: 'Научно-исследовательская работа магистрантов (НИРМ)', path: `/institutions/${institutionId}/science/masters-research` },
        { title: 'Научно-исследовательская работа студентов (НИРС)', path: `/institutions/${institutionId}/science/student-research` }
      ]
    },
    {
      title: 'Международное сотрудничество',
      path: `/institutions/${institutionId}/international`,
      children: [
        { title: 'Университеты-партнеры', path: `/institutions/${institutionId}/international/partners` },
        { title: 'Турецкий центр образования, науки и культуры', path: `/institutions/${institutionId}/international/turkish-center` },
        { title: 'Академическая мобильность', path: `/institutions/${institutionId}/international/mobility` },
        { title: 'Языковые курсы', path: `/institutions/${institutionId}/international/language-courses` }
      ]
    },
    {
      title: 'Новости',
      path: `/institutions/${institutionId}/news`,
    },
    {
      title: 'Контакты',
      path: `/institutions/${institutionId}/contacts`,
    },
  ];

  const economicsNavigation: NavItem[] = [
    // Similar structure would be defined for economics institute
    {
      title: 'Об Институте',
      path: `/institutions/${institutionId}/about`,
      children: [
        { title: 'История Института', path: `/institutions/${institutionId}/about/history` },
        { title: 'Руководство', path: `/institutions/${institutionId}/about/leadership` },
        { title: 'Структура', path: `/institutions/${institutionId}/about/structure` }
      ]
    },
    // Other main menu items would follow...
  ];

  const symbatNavigation: NavItem[] = [
    // Similar structure would be defined for Symbat institute
    {
      title: 'Об Институте',
      path: `/institutions/${institutionId}/about`,
      children: [
        { title: 'История Института', path: `/institutions/${institutionId}/about/history` },
        { title: 'Миссия и цели', path: `/institutions/${institutionId}/about/mission` },
        { title: 'Руководство', path: `/institutions/${institutionId}/about/leadership` }
      ]
    },
    // Other main menu items would follow...
  ];

  // Select the appropriate navigation structure based on institutionId
  let navigationMenu: NavItem[] = [];
  
  switch(institutionId) {
    case 'pedagogy':
      navigationMenu = pedagogyNavigation;
      break;
    case 'economics':
      navigationMenu = economicsNavigation;
      break;
    case 'symbat':
      navigationMenu = symbatNavigation;
      break;
    default:
      navigationMenu = pedagogyNavigation; // Default to pedagogy for safety
  }
  
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Mobile menu button would go here */}
          
          {/* Desktop menu */}
          <div className="hidden md:flex w-full">
            <ul className="flex w-full justify-between">
              {navigationMenu.map((item, index) => (
                <li key={index} className="group relative">
                  {/* Main menu item */}
                  <Link href={item.path}>
                    <a className="block py-4 px-4 hover:text-institution-primary transition-colors">
                      {t(`institutions.${institutionId}.navigation.${item.title}`, item.title)}
                    </a>
                  </Link>
                  
                  {/* Dropdown for items with children */}
                  {item.children && item.children.length > 0 && (
                    <div className="dropdown-menu">
                      <div className="bg-white rounded-md shadow-lg py-2">
                        {item.children.map((child, childIndex) => (
                          <Link key={childIndex} href={child.path}>
                            <a className="block px-4 py-2 text-sm hover:bg-aheu-neutral-light">
                              {t(`institutions.${institutionId}.navigation.${child.title}`, child.title)}
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Mobile menu dropdown would go here */}
        </div>
      </div>
    </nav>
  );
};

export default InstitutionNavigation; 