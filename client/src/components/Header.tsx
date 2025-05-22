import * as React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import MobileMenu from '@/components/MobileMenu';
import { navLinks } from '@/data/navigation';

// Helper component for the About menu links
interface AboutMenuLinkProps {
  navItem: any;
  childItem: any;
  t: any;
  onClick: () => void;
}

const AboutMenuLink: React.FC<AboutMenuLinkProps> = ({ navItem, childItem, t, onClick }) => {
  return (
    <Link 
      href={childItem.href}
      className="flex items-start p-2 rounded-md hover:bg-gray-50 transition-colors group"
      onClick={onClick}
    >
      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors mr-2 mt-0.5 flex-shrink-0">
        {childItem.id === 'mission' && (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )}
        {childItem.id === 'history' && (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
        {childItem.id === 'leadership' && (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        )}
        {childItem.id === 'campus' && (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        )}
        {childItem.id === 'student-life' && (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
        {!['mission', 'history', 'leadership', 'campus', 'student-life'].includes(childItem.id) && (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </span>
      <div>
        <h5 className="text-sm font-medium text-gray-800 group-hover:text-primary transition-colors">
          {t(`nav.${childItem.labelKey}`)}
        </h5>
        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed line-clamp-2">
          {childItem.id === 'history' && t('nav.historyHeritage.description', 'The rich history and heritage of our university.')}
          {childItem.id === 'mission' && t('nav.missionVision.description', 'Our mission, vision, and values.')}
          {childItem.id === 'leadership' && t('nav.leadership.description', 'Meet our university leadership team.')}
          {childItem.id === 'campus' && 'Explore our beautiful campus facilities and resources.'}
          {childItem.id === 'student-life' && 'Discover student activities, clubs, and campus living.'}
        </p>
      </div>
    </Link>
  );
};

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [hoveredDropdown, setHoveredDropdown] = React.useState<string | null>(null);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const isHoveringRef = React.useRef(false);
  
  // Add scroll event listener
  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
  // Get logo based on current language with correct path
  const logoPath = i18n.language === 'ru' 
    ? "/logos/header/aheu-ru.png" 
    : i18n.language === 'kz'
      ? "/logos/header/aheu-kz.png"
      : "/logos/header/aheu-en.png";

  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    isHoveringRef.current = true;
    setHoveredDropdown(id);
  };

  const handleMouseLeave = () => {
    isHoveringRef.current = false;
    timeoutRef.current = setTimeout(() => {
      if (!isHoveringRef.current && !activeDropdown) {
        setHoveredDropdown(null);
      }
    }, 300); // Small delay to make the transition smoother
  };

  const handleToggleDropdown = (id: string) => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };

  // Handle clicks outside to close dropdown
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if ((activeDropdown || hoveredDropdown) && 
          !(event.target as Element).closest('.nav-item') && 
          !(event.target as Element).closest('.mega-dropdown')) {
        setActiveDropdown(null);
        setHoveredDropdown(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown, hoveredDropdown]);

  // Prevent scrolling when dropdown is open
  React.useEffect(() => {
    if (activeDropdown || hoveredDropdown) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeDropdown, hoveredDropdown]);

  // Clean up timeout on unmount
  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Determine if dropdown is visible (either clicked or hovered)
  const isDropdownVisible = (id: string) => {
    return activeDropdown === id || hoveredDropdown === id;
  };

  return (
    <>
      {/* Background overlay when dropdown is open */}
      {(activeDropdown || hoveredDropdown) && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => {
            setActiveDropdown(null);
            setHoveredDropdown(null);
          }}
        ></div>
      )}
    
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 md:px-6 py-3 flex justify-between items-center relative">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src={logoPath}
              alt={t('common.universityName')} 
              className="h-12 xs:h-14 sm:h-16 md:h-16 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-6">
            <div className="flex space-x-8 text-aheu-neutral-darker">
              {navLinks.map((navItem) => (
                <div 
                  key={navItem.id} 
                  className={`nav-item relative ${isDropdownVisible(navItem.id) ? 'active' : ''}`}
                  onMouseEnter={() => navItem.children && handleMouseEnter(navItem.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  {navItem.href ? (
                    <Link href={navItem.href}>
                      <button className={`py-2 flex items-center gap-1 text-lg font-medium ${
                        navItem.isSpecial 
                          ? 'font-bold text-white bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 transition-colors' 
                          : `${scrolled ? 'text-aheu-neutral-darker' : 'text-white'} hover:text-secondary`
                      }`}>
                        {t(`nav.${navItem.labelKey}`)}
                      </button>
                    </Link>
                  ) : (
                    <button 
                      className={`py-2 flex items-center gap-1 text-lg font-medium ${
                        navItem.isSpecial 
                          ? 'font-bold text-white bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 transition-colors' 
                          : `${scrolled ? 'text-aheu-neutral-darker' : 'text-white'} hover:text-secondary`
                      }`}
                      onClick={() => handleToggleDropdown(navItem.id)}
                      aria-expanded={isDropdownVisible(navItem.id)}
                    >
                      {t(`nav.${navItem.labelKey}`)} 
                      {navItem.children && (
                        <svg 
                          className={`w-4 h-4 ml-1 transition-transform ${isDropdownVisible(navItem.id) ? 'rotate-180' : ''}`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </nav>
          
          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center">
            {/* Language Switcher - Desktop Only */}
            <div className="hidden lg:block">
              <LanguageSwitcher darkMode={!scrolled} />
            </div>
            
            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button 
                className={`${scrolled ? 'text-aheu-neutral-darker' : 'text-white'}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>
          </div>
        </div>
        
        {/* Full-width mega dropdown menus */}
        {navLinks.map((navItem) => 
          navItem.children && (
            <div 
              key={`dropdown-${navItem.id}`}
              className={`mega-dropdown absolute left-0 right-0 border-t border-green-800 bg-green-800 shadow-xl z-50 transition-all duration-300 ${
                isDropdownVisible(navItem.id)
                  ? 'opacity-100 visible translate-y-0' 
                  : 'opacity-0 invisible -translate-y-4 pointer-events-none'
              }`}
              style={{ top: scrolled ? '70px' : '76px' }}
              onMouseEnter={() => handleMouseEnter(navItem.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="container mx-auto px-4 md:px-6 py-8 text-white">
                {/* Menu Content */}
                {navItem.id === 'about' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-lg font-bold mb-6 uppercase">О Университете</h3>
                      <div className="space-y-4">
                        <Link 
                          href="/about"
                          className="flex items-center group hover:text-green-200 transition-colors"
                          onClick={() => {
                            setActiveDropdown(null);
                            setHoveredDropdown(null);
                          }}
                        >
                          <span className="inline-flex items-center justify-center w-7 h-7 mr-3 bg-green-700 rounded-md group-hover:bg-green-600">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </span>
                          <span>{t(`nav.missionVision`)}</span>
                        </Link>
                        <Link 
                          href="/about?tab=history"
                          className="flex items-center group hover:text-green-200 transition-colors"
                          onClick={() => {
                            setActiveDropdown(null);
                            setHoveredDropdown(null);
                          }}
                        >
                          <span className="inline-flex items-center justify-center w-7 h-7 mr-3 bg-green-700 rounded-md group-hover:bg-green-600">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </span>
                          <span>{t(`nav.historyHeritage`)}</span>
                        </Link>
                        <Link 
                          href="/about?tab=leadership"
                          className="flex items-center group hover:text-green-200 transition-colors"
                          onClick={() => {
                            setActiveDropdown(null);
                            setHoveredDropdown(null);
                          }}
                        >
                          <span className="inline-flex items-center justify-center w-7 h-7 mr-3 bg-green-700 rounded-md group-hover:bg-green-600">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </span>
                          <span>{t(`nav.leadership`)}</span>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-6 uppercase">Образовательные программы</h3>
                      <div className="space-y-4">
                        <Link 
                          href="/about?tab=rankings"
                          className="flex items-center group hover:text-green-200 transition-colors"
                          onClick={() => {
                            setActiveDropdown(null);
                            setHoveredDropdown(null);
                          }}
                        >
                          <span className="inline-flex items-center justify-center w-7 h-7 mr-3 bg-green-700 rounded-md group-hover:bg-green-600">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                            </svg>
                          </span>
                          <span>{t(`nav.rankings`)}</span>
                        </Link>
                        <Link 
                          href="/about?tab=infrastructure"
                          className="flex items-center group hover:text-green-200 transition-colors"
                          onClick={() => {
                            setActiveDropdown(null);
                            setHoveredDropdown(null);
                          }}
                        >
                          <span className="inline-flex items-center justify-center w-7 h-7 mr-3 bg-green-700 rounded-md group-hover:bg-green-600">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </span>
                          <span>{t(`nav.infrastructure`)}</span>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-6 uppercase">Академические ресурсы</h3>
                      <div className="space-y-4">
                        <Link 
                          href="/about/virtual-tour"
                          className="flex items-center group hover:text-green-200 transition-colors"
                          onClick={() => {
                            setActiveDropdown(null);
                            setHoveredDropdown(null);
                          }}
                        >
                          <span className="inline-flex items-center justify-center w-7 h-7 mr-3 bg-green-700 rounded-md group-hover:bg-green-600">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          </span>
                          <span>{t(`nav.3dTour`)}</span>
                        </Link>
                        <Link 
                          href="/contact"
                          className="flex items-center group hover:text-green-200 transition-colors"
                          onClick={() => {
                            setActiveDropdown(null);
                            setHoveredDropdown(null);
                          }}
                        >
                          <span className="inline-flex items-center justify-center w-7 h-7 mr-3 bg-green-700 rounded-md group-hover:bg-green-600">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </span>
                          <span>{t(`nav.contactUs`)}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
                
                {navItem.id === 'institutes' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-lg font-bold mb-6 uppercase">Институты и школы</h3>
                      <div className="space-y-4">
                        {navItem.children.slice(0, 2).map((childItem) => (
                          <Link 
                            key={childItem.id} 
                            href={childItem.href}
                            className="flex items-center group hover:text-green-200 transition-colors"
                            onClick={() => {
                              setActiveDropdown(null);
                              setHoveredDropdown(null);
                            }}
                          >
                            <span className="inline-flex items-center justify-center w-7 h-7 mr-3 bg-green-700 rounded-md group-hover:bg-green-600">
                              {childItem.id.includes('pedagogy') && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                              )}
                              {childItem.id.includes('economics') && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              )}
                            </span>
                            <span>{t(`nav.${childItem.labelKey}`)}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-6 uppercase">Программы обучения</h3>
                      <div className="space-y-4">
                        {navItem.children.slice(2, 3).map((childItem) => (
                          <Link 
                            key={childItem.id} 
                            href={childItem.href}
                            className="flex items-center group hover:text-green-200 transition-colors"
                            onClick={() => {
                              setActiveDropdown(null);
                              setHoveredDropdown(null);
                            }}
                          >
                            <span className="inline-flex items-center justify-center w-7 h-7 mr-3 bg-green-700 rounded-md group-hover:bg-green-600">
                              {childItem.id.includes('symbat') && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                              )}
                            </span>
                            <span>{t(`nav.${childItem.labelKey}`)}</span>
                          </Link>
                        ))}
                        <Link 
                          href="/programs"
                          className="flex items-center group hover:text-green-200 transition-colors"
                          onClick={() => {
                            setActiveDropdown(null);
                            setHoveredDropdown(null);
                          }}
                        >
                          <span className="inline-flex items-center justify-center w-7 h-7 mr-3 bg-green-700 rounded-md group-hover:bg-green-600">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                            </svg>
                          </span>
                          <span>{t('common.explorePrograms', 'Explore Programs')}</span>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-6 uppercase">Исследования и проекты</h3>
                      <div className="space-y-4">
                        {navItem.children.slice(3).map((childItem) => (
                          <Link 
                            key={childItem.id} 
                            href={childItem.href}
                            className="flex items-center group hover:text-green-200 transition-colors"
                            onClick={() => {
                              setActiveDropdown(null);
                              setHoveredDropdown(null);
                            }}
                          >
                            <span className="inline-flex items-center justify-center w-7 h-7 mr-3 bg-green-700 rounded-md group-hover:bg-green-600">
                              {childItem.id.includes('faq') && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              )}
                              {childItem.id.includes('contact') && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                              )}
                            </span>
                            <span>{t(`nav.${childItem.labelKey}`)}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {navItem.id === 'admissions' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-lg font-bold mb-6 uppercase">Поступающим</h3>
                      <div className="space-y-4">
                        {navItem.children.slice(0, 3).map((childItem) => (
                          <Link 
                            key={childItem.id} 
                            href={childItem.href}
                            className="flex items-center group hover:text-green-200 transition-colors"
                            onClick={() => {
                              setActiveDropdown(null);
                              setHoveredDropdown(null);
                            }}
                          >
                            <span className="inline-flex items-center justify-center w-7 h-7 mr-3 bg-green-700 rounded-md group-hover:bg-green-600">
                              {childItem.id.includes('commission') && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                              )}
                              {childItem.id.includes('undergraduate') && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                              )}
                              {childItem.id.includes('graduate') && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                              )}
                            </span>
                            <span>{t(`nav.${childItem.labelKey}`)}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-6 uppercase">Стипендии и финансы</h3>
                      <div className="space-y-4">
                        {navItem.children.slice(3, 5).map((childItem) => (
                          <Link 
                            key={childItem.id} 
                            href={childItem.href}
                            className="flex items-center group hover:text-green-200 transition-colors"
                            onClick={() => {
                              setActiveDropdown(null);
                              setHoveredDropdown(null);
                            }}
                          >
                            <span className="inline-flex items-center justify-center w-7 h-7 mr-3 bg-green-700 rounded-md group-hover:bg-green-600">
                              {childItem.id.includes('international') && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              )}
                              {childItem.id.includes('tuition') && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              )}
                            </span>
                            <span>{t(`nav.${childItem.labelKey}`)}</span>
                          </Link>
                        ))}
                        <Link 
                          href="/apply"
                          className="flex items-center group hover:text-green-200 transition-colors"
                          onClick={() => {
                            setActiveDropdown(null);
                            setHoveredDropdown(null);
                          }}
                        >
                          <span className="inline-flex items-center justify-center w-7 h-7 mr-3 bg-green-700 rounded-md group-hover:bg-green-600">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </span>
                          <span>{t('common.apply', 'Apply Now')}</span>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-6 uppercase">Информация и ресурсы</h3>
                      <div className="space-y-4">
                        {navItem.children.slice(5).map((childItem) => (
                          <Link 
                            key={childItem.id} 
                            href={childItem.href}
                            className="flex items-center group hover:text-green-200 transition-colors"
                            onClick={() => {
                              setActiveDropdown(null);
                              setHoveredDropdown(null);
                            }}
                          >
                            <span className="inline-flex items-center justify-center w-7 h-7 mr-3 bg-green-700 rounded-md group-hover:bg-green-600">
                              {childItem.id.includes('faq') && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              )}
                              {childItem.id.includes('contact') && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                              )}
                            </span>
                            <span>{t(`nav.${childItem.labelKey}`)}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {navItem.id === 'international' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-lg font-bold mb-6 uppercase">Глобальное партнерство</h3>
                      <div className="space-y-4">
                        {navItem.children.slice(0, 2).map((childItem) => (
                          <Link 
                            key={childItem.id} 
                            href={childItem.href}
                            className="flex items-center group hover:text-green-200 transition-colors"
                            onClick={() => {
                              setActiveDropdown(null);
                              setHoveredDropdown(null);
                            }}
                          >
                            <span className="inline-flex items-center justify-center w-7 h-7 mr-3 bg-green-700 rounded-md group-hover:bg-green-600">
                              {childItem.id.includes('partner') && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                              )}
                              {childItem.id.includes('student') && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                              )}
                            </span>
                            <span>{t(`nav.${childItem.labelKey}`)}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-6 uppercase">Международные программы</h3>
                      <div className="space-y-4">
                        {navItem.children.slice(2, 3).map((childItem) => (
                          <Link 
                            key={childItem.id} 
                            href={childItem.href}
                            className="flex items-center group hover:text-green-200 transition-colors"
                            onClick={() => {
                              setActiveDropdown(null);
                              setHoveredDropdown(null);
                            }}
                          >
                            <span className="inline-flex items-center justify-center w-7 h-7 mr-3 bg-green-700 rounded-md group-hover:bg-green-600">
                              {childItem.id.includes('faculty') && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                              )}
                            </span>
                            <span>{t(`nav.${childItem.labelKey}`)}</span>
                          </Link>
                        ))}
                        <Link 
                          href="/international"
                          className="flex items-center group hover:text-green-200 transition-colors"
                          onClick={() => {
                            setActiveDropdown(null);
                            setHoveredDropdown(null);
                          }}
                        >
                          <span className="inline-flex items-center justify-center w-7 h-7 mr-3 bg-green-700 rounded-md group-hover:bg-green-600">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </span>
                          <span>{t('nav.international')}</span>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-6 uppercase">Для иностранных студентов</h3>
                      <div className="space-y-4">
                        {navItem.children.slice(3).map((childItem) => (
                          <Link 
                            key={childItem.id} 
                            href={childItem.href}
                            className="flex items-center group hover:text-green-200 transition-colors"
                            onClick={() => {
                              setActiveDropdown(null);
                              setHoveredDropdown(null);
                            }}
                          >
                            <span className="inline-flex items-center justify-center w-7 h-7 mr-3 bg-green-700 rounded-md group-hover:bg-green-600">
                              {childItem.id.includes('faq') && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              )}
                              {childItem.id.includes('contact') && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                              )}
                            </span>
                            <span>{t(`nav.${childItem.labelKey}`)}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        )}
        
        {/* Mobile Navigation Menu */}
        <MobileMenu 
          isOpen={mobileMenuOpen} 
          onClose={() => setMobileMenuOpen(false)} 
          showLanguageSwitcher={true}
        />
      </header>
    </>
  );
};

export default Header;
