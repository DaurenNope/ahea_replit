import React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';

const campusLifeItems = [
  {
    id: 'clubs',
    image: 'photo-1544531585-9847b68c8c86',
    titleKey: 'campusLife.items.clubs.title',
    descriptionKey: 'campusLife.items.clubs.description',
    link: '/student-life/clubs'
  },
  {
    id: 'sports',
    image: 'photo-1547447134-cd3f5c716030',
    titleKey: 'campusLife.items.sports.title',
    descriptionKey: 'campusLife.items.sports.description',
    link: '/student-life/sports'
  },
  {
    id: 'accommodation',
    image: 'photo-1611892440504-42a792e24d32',
    titleKey: 'campusLife.items.accommodation.title',
    descriptionKey: 'campusLife.items.accommodation.description',
    link: '/student-life/accommodation'
  }
];

const CampusLifeSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('campusLife.sectionTitle')}</h2>
          <p className="section-subtitle">{t('campusLife.sectionSubtitle')}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {campusLifeItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg">
              <img 
                src={`https://images.unsplash.com/${item.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400`} 
                alt={t(`campusLife.items.${item.id}.imageAlt`)} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{t(item.titleKey)}</h3>
                <p className="text-white text-sm mb-4">{t(item.descriptionKey)}</p>
                <Link href={item.link}>
                  <a className="text-white hover:text-aheu-neutral-light inline-flex items-center font-medium">
                    {t('common.learnMore')} <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusLifeSection;
