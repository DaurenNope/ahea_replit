import * as React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import MobileMenu from '@/components/MobileMenu';
import { navLinks } from '@/data/navigation';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  
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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
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
          <div className="flex space-x-4 md:space-x-6 text-aheu-neutral-darker">
            {navLinks.map((navItem) => (
              <div key={navItem.id} className="dropdown relative group">
                {navItem.href ? (
                  <Link href={navItem.href}>
                    <button className={`py-2 flex items-center gap-1 ${
                      navItem.isSpecial 
                        ? 'font-bold text-white bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 transition-colors' 
                        : `${scrolled ? 'text-aheu-neutral-darker' : 'text-white'} hover:text-secondary`
                    }`}>
                      {t(`nav.${navItem.labelKey}`)} 
                      {navItem.children && <i className="fas fa-chevron-down text-xs ml-1"></i>}
                    </button>
                  </Link>
                ) : (
                  <button className={`py-2 flex items-center gap-1 ${
                    navItem.isSpecial 
                      ? 'font-bold text-white bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 transition-colors' 
                      : `${scrolled ? 'text-aheu-neutral-darker' : 'text-white'} hover:text-secondary`
                  }`}>
                    {t(`nav.${navItem.labelKey}`)} 
                    {navItem.children && <i className="fas fa-chevron-down text-xs ml-1"></i>}
                  </button>
                )}
                
                {navItem.children && (
                  <div className="dropdown-menu invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300">
                    {navItem.children.map((childItem) => (
                      <Link 
                        key={childItem.id} 
                        href={childItem.href} 
                        className="block px-4 py-2 hover:bg-aheu-neutral-light hover:text-primary text-aheu-neutral-darker"
                      >
                        {t(`nav.${childItem.labelKey}`)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
        
        {/* Language Switcher & Mobile Menu Button */}
        <div className="flex items-center">
          {/* Language Switcher - Desktop */}
          <div className="hidden lg:block">
            <LanguageSwitcher darkMode={!scrolled} />
          </div>
          
          {/* Mobile Navigation Button and Language Switcher */}
          <div className="flex items-center lg:hidden space-x-4">
            <LanguageSwitcher darkMode={!scrolled} />
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
      
      {/* Mobile Navigation Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};

export default Header;
