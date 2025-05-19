import React, { useState } from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { navLinks } from '@/data/navigation';
import { institutes } from '@/data/institutes';

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
    <div className="lg:hidden bg-white shadow-inner">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex flex-col space-y-3">
          {/* Institutions Menu */}
          <div className="py-2 border-b border-aheu-neutral-medium">
            <button 
              className="flex justify-between items-center w-full text-left" 
              onClick={() => toggleSubmenu('institutions')}
              aria-expanded={openSubmenus['institutions']}
            >
              {t('nav.institutes')} 
              <i className={`fas fa-chevron-${openSubmenus['institutions'] ? 'up' : 'down'} text-xs`}></i>
            </button>
            <div className={`${openSubmenus['institutions'] ? 'block' : 'hidden'} pl-4 mt-2 space-y-2`}>
              <Link 
                href="/"
                onClick={onClose}
                className="block py-1"
              >
                {t('nav.landingPage', 'Landing Page')}
              </Link>
              {institutes.map((institute) => (
                <Link 
                  key={institute.id} 
                  href={`/institutions/${institute.id}`}
                  onClick={onClose}
                  className="block py-1"
                >
                  {t(`institutes.${institute.id}.shortName`)}
                </Link>
              ))}
            </div>
          </div>

          {/* Regular Navigation Links */}
          {navLinks.map((navItem) => (
            <div key={navItem.id} className="py-2 border-b border-aheu-neutral-medium">
              {navItem.children ? (
                <>
                  <button 
                    className="flex justify-between items-center w-full text-left" 
                    onClick={() => toggleSubmenu(navItem.id)}
                    aria-expanded={openSubmenus[navItem.id]}
                  >
                    {t(`nav.${navItem.labelKey}`)} 
                    <i className={`fas fa-chevron-${openSubmenus[navItem.id] ? 'up' : 'down'} text-xs`}></i>
                  </button>
                  <div className={`${openSubmenus[navItem.id] ? 'block' : 'hidden'} pl-4 mt-2 space-y-2`}>
                    {navItem.children.map((childItem) => (
                      <Link 
                        key={childItem.id} 
                        href={childItem.href}
                        onClick={onClose}
                        className="block py-1"
                      >
                        {t(`nav.${childItem.labelKey}`)}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link 
                  href={navItem.href || '#'} 
                  onClick={onClose}
                  className="block"
                >
                  {t(`nav.${navItem.labelKey}`)}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
