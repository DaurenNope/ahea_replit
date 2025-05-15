import React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { institutes } from '@/data/institutes';

const InstituteSection: React.FC = () => {
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
            <div key={institute.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-aheu-neutral-medium hover:shadow-xl transition">
              <img 
                className="h-52 w-full object-cover" 
                src={`https://images.unsplash.com/${institute.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400`} 
                alt={t(`institutes.${institute.id}.imageAlt`)} 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">{t(`institutes.${institute.id}.name`)}</h3>
                <p className="text-aheu-neutral-dark mb-4">{t(`institutes.${institute.id}.shortDescription`)}</p>
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
};

export default InstituteSection;
