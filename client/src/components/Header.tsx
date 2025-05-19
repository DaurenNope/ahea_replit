import React, { useState } from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import MobileMenu from '@/components/MobileMenu';
import { navLinks } from '@/data/navigation';
import { institutes } from '@/data/institutes';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 py-1 flex justify-end items-center">
          <div className="flex items-center space-x-4 text-sm">
            <a href="tel:+77273033273" className="hover:underline flex items-center">
              <i className="fas fa-phone-alt mr-2"></i> +7 (727) 303-32-73
            </a>
            <a href="mailto:priem.ageu@mail.ru" className="hover:underline flex items-center">
              <i className="fas fa-envelope mr-2"></i> priem.ageu@mail.ru
            </a>
            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="container mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="bg-primary text-white font-bold text-2xl px-3 py-1">AHEU</div>
          <span className="ml-2 font-semibold text-lg text-aheu-neutral-darker hidden md:inline-block">
            {t('common.universityName')}
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 text-aheu-neutral-darker">
          {/* New "Institutions" dropdown */}
          <div className="dropdown relative group">
            <button className="py-2 hover:text-secondary flex items-center gap-1">
              {t('nav.institutes')} 
              <i className="fas fa-chevron-down text-xs ml-1"></i>
            </button>
            
            <div className="dropdown-menu">
              <Link href="/" className="block px-4 py-2 hover:bg-aheu-neutral-light hover:text-primary">
                {t('nav.landingPage', 'Landing Page')}
              </Link>
              {institutes.map((institute) => (
                <Link 
                  key={institute.id} 
                  href={`/institutions/${institute.id}`} 
                  className="block px-4 py-2 hover:bg-aheu-neutral-light hover:text-primary"
                >
                  {t(`institutes.${institute.id}.shortName`)}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Regular Navigation Links */}
          {navLinks.map((navItem) => (
            <div key={navItem.id} className="dropdown relative group">
              <button className="py-2 hover:text-secondary flex items-center gap-1">
                {t(`nav.${navItem.labelKey}`)} 
                {navItem.children && <i className="fas fa-chevron-down text-xs ml-1"></i>}
              </button>
              
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
        </nav>
        
        {/* Mobile Navigation Button */}
        <button 
          className="lg:hidden text-aheu-neutral-darker"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};

export default Header;
