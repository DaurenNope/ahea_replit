import React, { useState } from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { navLinks } from '@/data/navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  showLanguageSwitcher?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isOpen, 
  onClose,
  showLanguageSwitcher = false
}) => {
  const { t } = useTranslation();
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});
  
  const toggleSubmenu = (id: string) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 lg:hidden bg-white overflow-y-auto flex flex-col">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -z-10 opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full -z-10 opacity-70"></div>
      
      {/* Header with close button */}
      <div className="py-4 px-5 flex justify-between items-center border-b border-gray-200">
        <Link href="/" onClick={onClose}>
          <img 
            src="/logos/header/aheu-ru.png" 
            alt="AHEU Logo" 
            className="h-10 w-auto"
          />
        </Link>
        <button 
          onClick={onClose}
          className="text-gray-800 hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      {/* Language Switcher if enabled */}
      {showLanguageSwitcher && (
        <div className="py-4 px-5 border-b border-gray-100 bg-gray-50">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">{t('common.selectLanguage', 'Select Language')}</span>
            <LanguageSwitcher darkMode={false} />
          </div>
        </div>
      )}
      
      {/* Menu content */}
      <div className="flex-1 overflow-y-auto pb-6">
        <nav className="divide-y divide-gray-100">
          {navLinks.map((navItem) => (
            <div 
              key={navItem.id} 
              className={`${navItem.isSpecial ? 'bg-green-50' : ''}`}
            >
              {navItem.children ? (
                <div>
                  <button 
                    className="flex justify-between items-center w-full text-left py-4 px-5 text-gray-800 font-medium" 
                    onClick={() => toggleSubmenu(navItem.id)}
                    aria-expanded={openSubmenus[navItem.id]}
                  >
                    <div className="flex items-center">
                      {/* Category icon */}
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                        {navItem.id === 'about' && (
                          <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        {navItem.id === 'admissions' && (
                          <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        )}
                        {navItem.id === 'institutes' && (
                          <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        )}
                        {navItem.id === 'international' && (
                          <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                      </span>
                      <span className="text-lg">{t(`nav.${navItem.labelKey}`)}</span>
                    </div>
                    <svg 
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${openSubmenus[navItem.id] ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 ${
                      openSubmenus[navItem.id] 
                        ? 'max-h-[800px] opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="py-2 px-5 space-y-1">
                      {/* Section description */}
                      <p className="text-sm text-gray-600 mb-3 pb-3 border-b border-gray-200">
                        {navItem.id === 'about' && t('nav.about.description', 'Learn more about our university, its history, mission, and leadership.')}
                        {navItem.id === 'admissions' && t('nav.admissions.description', 'Discover how to apply, admission requirements, and financial aid opportunities.')}
                        {navItem.id === 'institutes' && t('nav.institutes.description', 'Explore our academic institutes offering diverse programs across disciplines.')}
                        {navItem.id === 'international' && t('nav.international.description', 'Learn about our global partnerships and international opportunities.')}
                      </p>
                      
                      {/* Links */}
                      <div className="space-y-2">
                        {navItem.children.map((childItem) => (
                          <Link 
                            key={childItem.id} 
                            href={childItem.href}
                            onClick={onClose}
                            className="flex items-center py-3 px-4 border-l-2 border-gray-200 hover:border-primary text-gray-700 hover:text-primary transition-colors hover:bg-white rounded-r"
                          >
                            <span className="flex items-center justify-center w-7 h-7 rounded bg-primary/10 text-primary mr-3">
                              {/* Improved icons based on item type */}
                              {childItem.id === 'mission' && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                              )}
                              {childItem.id === 'history' && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              )}
                              {childItem.id === 'leadership' && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                              )}
                              {childItem.id === 'campus' && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                              )}
                              {childItem.id === 'student-life' && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              )}
                              {childItem.id.includes('apply') && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                              )}
                              {!['mission', 'history', 'leadership', 'campus', 'student-life'].includes(childItem.id) && !childItem.id.includes('apply') && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              )}
                            </span>
                            <div>
                              <span className="text-base font-medium">{t(`nav.${childItem.labelKey}`)}</span>
                              <p className="text-xs text-gray-500 mt-0.5">
                                {/* Short descriptions for each link */}
                                {childItem.id === 'history' && t('nav.historyHeritage.description', 'The rich history and heritage of our university.')}
                                {childItem.id === 'mission' && t('nav.missionVision.description', 'Our mission, vision, and values.')}
                                {childItem.id === 'leadership' && t('nav.leadership.description', 'Meet our university leadership team.')}
                                {childItem.id === 'campus' && 'Explore our beautiful campus facilities and resources.'}
                                {childItem.id === 'student-life' && 'Discover student activities, clubs, and campus living.'}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      {/* Call to action button for certain sections */}
                      {(navItem.id === 'admissions' || navItem.id === 'institutes') && (
                        <div className="mt-4 pt-3 border-t border-gray-200">
                          <Link 
                            href={navItem.id === 'admissions' ? '/apply' : '/programs'}
                            onClick={onClose}
                            className="flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-md hover:shadow-md transition-all"
                          >
                            {navItem.id === 'admissions' ? t('common.apply') : t('common.explorePrograms', 'Explore Programs')}
                            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <Link 
                  href={navItem.href || '#'} 
                  onClick={onClose}
                  className={`flex items-center py-4 px-5 text-lg ${
                    navItem.isSpecial 
                      ? 'text-green-700 font-medium' 
                      : 'text-gray-800 hover:text-primary'
                  } transition-colors`}
                >
                  {/* Icon for direct links */}
                  {!navItem.isSpecial && (
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  )}
                  
                  {/* Special styling for Call to Action buttons */}
                  {navItem.isSpecial ? (
                    <div className="flex items-center justify-center w-full py-2.5 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-md hover:shadow-md transition-all">
                      <span>{t(`nav.${navItem.labelKey}`)}</span>
                      <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  ) : (
                    <>
                      <span>{t(`nav.${navItem.labelKey}`)}</span>
                      {navItem.href && (
                        <svg className="ml-auto w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </>
                  )}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
      
      {/* Footer with quick contact */}
      <div className="px-5 py-5 bg-gray-50 border-t border-gray-200">
        <h3 className="text-gray-800 font-medium mb-4 text-lg flex items-center">
          <svg className="w-5 h-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {t('common.contactUs', 'Contact Us')}
        </h3>
        <div className="space-y-3">
          <a href="tel:+77777777777" className="flex items-center gap-3 text-gray-600 hover:text-primary bg-white p-3 rounded-lg border border-gray-100 hover:shadow-sm transition-all">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary flex-shrink-0">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <span>+7 (777) 777-7777</span>
          </a>
          <a href="mailto:info@aheu.edu.kz" className="flex items-center gap-3 text-gray-600 hover:text-primary bg-white p-3 rounded-lg border border-gray-100 hover:shadow-sm transition-all">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary flex-shrink-0">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <span>info@aheu.edu.kz</span>
          </a>
        </div>
        
        {/* Social media icons */}
        <div className="mt-5 flex justify-center space-x-5">
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
