import React, { useState } from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { navLinks } from '@/data/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
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
    <div className="fixed top-[60px] left-0 right-0 bottom-0 z-40 lg:hidden bg-gradient-to-b from-black/80 to-black/95 backdrop-blur-md overflow-y-auto max-h-[calc(100vh-60px)]">
      <div className="container mx-auto px-4 py-5">
        {/* Special College button at the top */}
        <div className="mb-4 pb-3 border-b border-white/10">
          <Link 
            href="/college" 
            onClick={onClose}
            className="flex justify-center w-full bg-green-600 text-white font-bold px-4 py-3 rounded-md"
          >
            Колледж АГЭУ
          </Link>
        </div>
        
        <nav className="flex flex-col space-y-3">
          {navLinks.map((navItem) => (
            <div 
              key={navItem.id} 
              className={`py-2 ${!navItem.isSpecial ? 'border-b border-white/10' : 'mb-2'} ${navItem.isSpecial ? 'bg-green-600 rounded-md' : ''}`}
            >
              {navItem.children ? (
                <>
                  <button 
                    className={`flex justify-between items-center w-full text-left ${navItem.isSpecial ? 'text-white font-bold px-3' : 'text-white/90'}`} 
                    onClick={() => toggleSubmenu(navItem.id)}
                    aria-expanded={openSubmenus[navItem.id]}
                  >
                    {t(`nav.${navItem.labelKey}`)} 
                    <i className={`fas fa-chevron-${openSubmenus[navItem.id] ? 'up' : 'down'} text-xs transition-transform`}></i>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openSubmenus[navItem.id] 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-4 mt-3 space-y-3">
                      {navItem.children.map((childItem) => (
                        <Link 
                          key={childItem.id} 
                          href={childItem.href}
                          onClick={onClose}
                          className="block py-1 text-white/80 hover:text-white transition-colors"
                        >
                          {t(`nav.${childItem.labelKey}`)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link 
                  href={navItem.href || '#'} 
                  onClick={onClose}
                  className={`block ${navItem.isSpecial ? 'text-white font-bold px-3' : 'text-white/90 hover:text-white transition-colors'}`}
                >
                  {t(`nav.${navItem.labelKey}`)}
                </Link>
              )}
            </div>
          ))}
        </nav>
        
        {/* Quick contact */}
        <div className="mt-8 pt-4 border-t border-white/10">
          <h3 className="text-white/90 font-medium mb-3 text-sm uppercase tracking-wider">
            {t('common.contactUs')}
          </h3>
          <div className="space-y-3">
            <a href="tel:+77777777777" className="flex items-center gap-3 text-white/80 hover:text-white">
              <i className="fas fa-phone text-sm"></i>
              <span>+7 (777) 777-7777</span>
            </a>
            <a href="mailto:info@aheu.edu.kz" className="flex items-center gap-3 text-white/80 hover:text-white">
              <i className="fas fa-envelope text-sm"></i>
              <span>info@aheu.edu.kz</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
