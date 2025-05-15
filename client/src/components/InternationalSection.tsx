import React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';

const InternationalSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section 
      className="py-16 bg-cover bg-center" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 56, 38, 0.85), rgba(0, 56, 38, 0.85)), url('https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')` 
      }}
    >
      <div className="container mx-auto px-4 md:px-6 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{t('international.sectionTitle')}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">{t('international.turkishCenter.title')}</h3>
              <p className="mb-4">{t('international.turkishCenter.subtitle')}</p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>{t('international.turkishCenter.features.language')}</li>
                <li>{t('international.turkishCenter.features.minor')}</li>
                <li>{t('international.turkishCenter.features.mobility')}</li>
                <li>{t('international.turkishCenter.features.diploma')}</li>
              </ul>
              <Link href="/international/turkish-center">
                <a className="btn-outline">{t('common.learnMore')}</a>
              </Link>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">{t('international.partnerships.title')}</h3>
              <p className="mb-4">{t('international.partnerships.subtitle')}</p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>{t('international.partnerships.features.exchange')}</li>
                <li>{t('international.partnerships.features.semester')}</li>
                <li>{t('international.partnerships.features.degree')}</li>
                <li>{t('international.partnerships.features.research')}</li>
              </ul>
              <Link href="/international/partnerships">
                <a className="btn-outline">{t('international.partnerships.cta')}</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalSection;
