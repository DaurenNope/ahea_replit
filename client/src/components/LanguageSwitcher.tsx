import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language || 'en';
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  
  return (
    <div className="flex items-center space-x-2 ml-4">
      <button 
        onClick={() => changeLanguage('ru')}
        className={`${currentLanguage === 'ru' ? 'font-medium' : 'opacity-70 hover:opacity-100'}`}
        aria-label="Switch to Russian language"
      >
        RU
      </button>
      <span>|</span>
      <button 
        onClick={() => changeLanguage('kz')}
        className={`${currentLanguage === 'kz' ? 'font-medium' : 'opacity-70 hover:opacity-100'}`}
        aria-label="Switch to Kazakh language"
      >
        KZ
      </button>
      <span>|</span>
      <button 
        onClick={() => changeLanguage('en')}
        className={`${currentLanguage === 'en' ? 'font-medium' : 'opacity-70 hover:opacity-100'}`}
        aria-label="Switch to English language"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
