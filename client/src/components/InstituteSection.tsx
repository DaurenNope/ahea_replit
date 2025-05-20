import React, { useMemo } from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { institutes } from '@/data/institutes';

// Memoized institute card component for better performance
const InstituteCard = React.memo(({ institute, t }: { institute: any, t: any }) => {
  // Optimize image URL - only calculate once per institute
  const imageUrl = useMemo(() => 
    `https://images.unsplash.com/${institute.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=75`,
    [institute.image]
  );

  return (
    <div 
      key={institute.id} 
      className="bg-white rounded-lg shadow-lg overflow-hidden border border-aheu-neutral-medium transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div 
        className="h-52 w-full bg-cover bg-center" 
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          backgroundColor: '#f3f4f6' // Fallback color while loading
        }} 
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-primary">{t(`institutes.${institute.id}.name`)}</h3>
        <p className="text-aheu-neutral-dark mb-4 line-clamp-3">{t(`institutes.${institute.id}.shortDescription`)}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-aheu-neutral-dark">{institute.programCount} {t('institutes.programs')}</span>
          <Link href={`/institutes/${institute.id}`}>
            <a className="text-primary hover:text-secondary font-medium flex items-center">
              {t('common.learnMore')} <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
});

// Memoize the entire InstituteSection component to prevent unnecessary re-renders
const InstituteSection: React.FC = React.memo(() => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('institutes.sectionTitle')}</h2>
          <p className="section-subtitle">{t('institutes.sectionSubtitle')}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {institutes.map((institute) => (
            <InstituteCard
              key={institute.id}
              institute={institute}
              t={t}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/programs">
            <a className="btn-primary">{t('institutes.viewAllPrograms')}</a>
          </Link>
        </div>
      </div>
    </section>
  );
});

export default InstituteSection;
