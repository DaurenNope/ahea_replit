import React from 'react';
import { useTranslation } from 'react-i18next';
import { features } from '@/data/features';

const FeaturesSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-aheu-neutral-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('features.sectionTitle')}</h2>
          <p className="section-subtitle">{t('features.sectionSubtitle')}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-4 mx-auto">
                <i className={`${feature.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">{t(`features.${feature.id}.title`)}</h3>
              <p className="text-aheu-neutral-dark text-center">{t(`features.${feature.id}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
