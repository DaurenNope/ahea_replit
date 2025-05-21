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
    <div className="lg:hidden bg-white shadow-inner">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex flex-col space-y-3">
          {navLinks.map((navItem) => (
            <div key={navItem.id} className={`py-2 border-b border-aheu-neutral-medium ${navItem.isSpecial ? 'bg-secondary rounded-md mb-2' : ''}`}>
              {navItem.children ? (
                <>
                  <button 
                    className={`flex justify-between items-center w-full text-left ${navItem.isSpecial ? 'text-white font-bold px-3' : ''}`} 
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
                  className={`block ${navItem.isSpecial ? 'text-white font-bold px-3' : ''}`}
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
