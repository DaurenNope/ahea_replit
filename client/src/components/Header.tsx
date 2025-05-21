import * as React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import MobileMenu from '@/components/MobileMenu';
import { navLinks } from '@/data/navigation';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  // Get logo based on current language with correct path
  const logoPath = i18n.language === 'ru' 
    ? "/logos/header/aheu-ru.png" 
    : i18n.language === 'kz'
      ? "/logos/header/aheu-kz.png"
      : "/logos/header/aheu-en.png";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img 
            src={logoPath}
            alt={t('common.universityName')} 
            className="h-12 w-auto"
          />
        </Link>
        
        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex items-center justify-center flex-1 mx-6">
          <div className="flex space-x-6 text-aheu-neutral-darker">
            {navLinks.map((navItem) => (
              <div key={navItem.id} className="dropdown relative group">
                {navItem.href ? (
                  <Link href={navItem.href}>
                    <button className={`py-2 flex items-center gap-1 ${
                      navItem.isSpecial 
                        ? 'font-bold text-white bg-secondary px-4 py-2 rounded-md hover:bg-primary transition-colors' 
                        : 'hover:text-secondary'
                    }`}>
                      {t(`nav.${navItem.labelKey}`)} 
                      {navItem.children && <i className="fas fa-chevron-down text-xs ml-1"></i>}
                    </button>
                  </Link>
                ) : (
                  <button className={`py-2 flex items-center gap-1 ${
                    navItem.isSpecial 
                      ? 'font-bold text-white bg-secondary px-4 py-2 rounded-md hover:bg-primary transition-colors' 
                      : 'hover:text-secondary'
                  }`}>
                    {t(`nav.${navItem.labelKey}`)} 
                    {navItem.children && <i className="fas fa-chevron-down text-xs ml-1"></i>}
                  </button>
                )}
                
                {navItem.children && (
                  <div className="dropdown-menu">
                    {navItem.children.map((childItem) => (
                      <Link 
                        key={childItem.id} 
                        href={childItem.href} 
                        className="block px-4 py-2 hover:bg-aheu-neutral-light hover:text-primary"
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
            <LanguageSwitcher />
          </div>
          
          {/* Mobile Navigation Button and Language Switcher */}
          <div className="flex items-center lg:hidden space-x-4">
            <LanguageSwitcher />
            <button 
              className="text-aheu-neutral-darker"
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
