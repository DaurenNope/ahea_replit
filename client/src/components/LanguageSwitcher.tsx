import * as React from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
  darkMode?: boolean;
  compact?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ darkMode = false, compact = false }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language || 'en';
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };
  
  // Handle clicks outside the dropdown
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const languages = [
    { code: 'ru', label: 'RU' },
    { code: 'kz', label: 'KZ' },
    { code: 'en', label: 'EN' }
  ];
  
  const currentLangObj = languages.find(lang => lang.code === currentLanguage) || languages[2]; // Default to EN
  
  if (compact) {
    return (
      <div className="relative" ref={dropdownRef}>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center space-x-2 px-3 py-1.5 rounded-md transition-colors ${
            darkMode 
              ? 'bg-white/20 text-white hover:bg-white/30' 
              : 'bg-green-100 text-green-800 hover:bg-green-200'
          }`}
          aria-expanded={isOpen}
        >
          <svg 
            className="w-4 h-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
            />
          </svg>
          <span className="font-medium">{currentLangObj.label}</span>
          <svg 
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isOpen && (
          <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md py-1 z-50 min-w-[90px] border border-gray-100">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full flex items-center px-3 py-2 text-sm ${
                  currentLanguage === lang.code 
                    ? 'bg-green-100 text-green-800 font-medium' 
                    : 'hover:bg-gray-100 text-aheu-neutral-darker'
                }`}
              >
                <span className="mr-2">{getLanguageFlag(lang.code)}</span>
                {lang.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
  
  // Original non-compact version
  return (
    <div className="flex items-center space-x-2">
      {languages.map(lang => (
      <button 
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
        className={`text-sm px-1.5 py-0.5 rounded-md transition-colors ${
            currentLanguage === lang.code 
            ? 'bg-primary/10 text-primary font-medium' 
            : darkMode 
              ? 'text-white hover:bg-white/20' 
              : 'hover:bg-gray-100'
        }`}
          aria-label={`Switch to ${lang.label} language`}
      >
          {lang.label}
      </button>
      ))}
    </div>
  );
};

function getLanguageFlag(code: string): React.ReactNode {
  switch (code) {
    case 'ru':
      return '🇷🇺';
    case 'kz':
      return '🇰🇿';
    case 'en':
      return '🇬🇧';
    default:
      return '';
  }
}

export default LanguageSwitcher;
