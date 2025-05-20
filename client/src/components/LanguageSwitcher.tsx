import * as React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language || 'en';
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  
  return (
    <div className="flex items-center space-x-2">
      <button 
        onClick={() => changeLanguage('ru')}
        className={`text-sm px-1.5 py-0.5 rounded-md transition-colors ${
          currentLanguage === 'ru' 
            ? 'bg-primary/10 text-primary font-medium' 
            : 'hover:bg-gray-100'
        }`}
        aria-label="Switch to Russian language"
      >
        RU
      </button>
      <button 
        onClick={() => changeLanguage('kz')}
        className={`text-sm px-1.5 py-0.5 rounded-md transition-colors ${
          currentLanguage === 'kz' 
            ? 'bg-primary/10 text-primary font-medium' 
            : 'hover:bg-gray-100'
        }`}
        aria-label="Switch to Kazakh language"
      >
        KZ
      </button>
      <button 
        onClick={() => changeLanguage('en')}
        className={`text-sm px-1.5 py-0.5 rounded-md transition-colors ${
          currentLanguage === 'en' 
            ? 'bg-primary/10 text-primary font-medium' 
            : 'hover:bg-gray-100'
        }`}
        aria-label="Switch to English language"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
