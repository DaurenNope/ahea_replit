import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '@/components/ui/section-title';

const CampusLifeSection: React.FC = () => {
  const { t } = useTranslation();
  
  const campusFeatures = [
    {
      id: 'facilities',
      icon: 'fas fa-building',
      title: 'campusLife.facilities.title',
      description: 'campusLife.facilities.description'
    },
    {
      id: 'accommodation',
      icon: 'fas fa-home',
      title: 'campusLife.accommodation.title',
      description: 'campusLife.accommodation.description'
    },
    {
      id: 'sports',
      icon: 'fas fa-basketball-ball',
      title: 'campusLife.sports.title',
      description: 'campusLife.sports.description'
    },
    {
      id: 'clubs',
      icon: 'fas fa-users',
      title: 'campusLife.clubs.title',
      description: 'campusLife.clubs.description'
    }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title={t('campusLife.sectionTitle')} 
          subtitle={t('campusLife.sectionSubtitle')}
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {campusFeatures.map((feature) => (
            <div key={feature.id} className="bg-aheu-neutral-light p-6 rounded-lg">
              <div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center mb-4">
                <i className={`${feature.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-2">{t(feature.title)}</h3>
              <p className="text-aheu-neutral-dark">{t(feature.description)}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="btn-primary">{t('campusLife.exploreMore')}</button>
        </div>
      </div>
    </section>
  );
};

export default CampusLifeSection;
